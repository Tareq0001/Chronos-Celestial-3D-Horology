import './styles/main.css';
import { WatchEngine } from './scene/WatchEngine';
import { HorologyAudioEngine } from './audio/HorologyAudioEngine';
import { COSCChronometerSimulator } from './cosc/COSCChronometerSimulator';
import { translations, TranslationSchema } from './i18n/translations';

class ChronosApp {
  private watchEngine: WatchEngine;
  private audioEngine: HorologyAudioEngine;
  private coscSim: COSCChronometerSimulator;
  private currentLang: 'ar' | 'en' = 'ar';
  private currentTheme: 'dark' | 'light' = 'dark';
  private chronoTimerId: number | null = null;

  constructor() {
    const container = document.getElementById('webgl-container');
    if (!container) throw new Error('WebGL container not found');

    this.watchEngine = new WatchEngine(container);
    this.audioEngine = new HorologyAudioEngine();
    this.coscSim = new COSCChronometerSimulator();

    this.initEventListeners();
    this.applyTranslations();
    this.renderLayerInspector();
    this.renderTechnicalSpecs();
    this.updateCOSCLiveRate();

    // Start escapement audio after first user gesture
    const startAudioOnGesture = () => {
      this.audioEngine.startEscapementAudio();
      window.removeEventListener('pointerdown', startAudioOnGesture);
      window.removeEventListener('keydown', startAudioOnGesture);
    };
    window.addEventListener('pointerdown', startAudioOnGesture);
    window.addEventListener('keydown', startAudioOnGesture);
  }

  private t(): TranslationSchema {
    return translations[this.currentLang];
  }

  private initEventListeners() {
    // 1. Language Toggle
    const btnToggleLang = document.getElementById('btn-toggle-lang');
    btnToggleLang?.addEventListener('click', () => {
      this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = this.currentLang;
      document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      const label = document.getElementById('label-lang');
      if (label) label.textContent = this.currentLang === 'ar' ? 'EN' : 'عربي';
      this.applyTranslations();
      this.renderLayerInspector();
      this.renderTechnicalSpecs();
    });

    // 2. Theme Toggle
    const btnToggleTheme = document.getElementById('btn-toggle-theme');
    btnToggleTheme?.addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    });

    // 3. Audio Toggle & Volume
    const btnToggleSound = document.getElementById('btn-toggle-sound');
    const iconSoundOn = document.getElementById('icon-sound-on');
    const iconSoundOff = document.getElementById('icon-sound-off');
    btnToggleSound?.addEventListener('click', () => {
      const isMuted = this.audioEngine.toggleMute();
      if (iconSoundOn && iconSoundOff) {
        iconSoundOn.style.display = isMuted ? 'none' : 'block';
        iconSoundOff.style.display = isMuted ? 'block' : 'none';
      }
    });

    const inputSoundVol = document.getElementById('input-sound-volume') as HTMLInputElement | null;
    inputSoundVol?.addEventListener('input', (e) => {
      const val = parseFloat((e.target as HTMLInputElement).value);
      this.audioEngine.setVolume(val);
    });

    // 4. Customizer: Case Material
    document.querySelectorAll('[data-case]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-case]').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        const mat = target.getAttribute('data-case') as 'platinum' | 'rosegold' | 'titanium' | 'carbon';
        this.watchEngine.updateCaseMaterial(mat);
        this.audioEngine.setMaterialTimbre(mat);
      });
    });

    // 5. Customizer: Dial Pattern
    document.querySelectorAll('[data-dial]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-dial]').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        const pattern = target.getAttribute('data-dial') as 'clous_de_paris' | 'sunburst' | 'skeleton' | 'navy_guilloche';
        this.watchEngine.updateDialPattern(pattern);
      });
    });

    // 6. Customizer: Screw Finish
    document.querySelectorAll('[data-screw]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-screw]').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        const finish = target.getAttribute('data-screw') as 'blued' | 'polished' | 'gold';
        this.watchEngine.updateScrewFinish(finish);
      });
    });

    // 7. Exploded View Controls
    const explodeRange = document.getElementById('input-explode-range') as HTMLInputElement | null;
    const explodePct = document.getElementById('explode-pct-display');

    explodeRange?.addEventListener('input', (e) => {
      const val = parseFloat((e.target as HTMLInputElement).value);
      this.watchEngine.setExplodedRatio(val, false);
      if (explodePct) explodePct.textContent = `${Math.round(val * 100)}%`;
    });

    document.getElementById('btn-explode-all')?.addEventListener('click', () => {
      this.watchEngine.setExplodedRatio(1.0, true);
      if (explodeRange) explodeRange.value = '1.0';
      if (explodePct) explodePct.textContent = '100%';
    });

    document.getElementById('btn-assemble-all')?.addEventListener('click', () => {
      this.watchEngine.setExplodedRatio(0.0, true);
      if (explodeRange) explodeRange.value = '0';
      if (explodePct) explodePct.textContent = '0%';
    });

    document.getElementById('btn-reset-camera')?.addEventListener('click', () => {
      this.watchEngine.resetCamera();
    });

    document.getElementById('btn-toggle-wireframe')?.addEventListener('click', (e) => {
      const isWire = this.watchEngine.toggleWireframe();
      (e.currentTarget as HTMLElement).classList.toggle('active', isWire);
    });

    document.getElementById('btn-toggle-rotate')?.addEventListener('click', (e) => {
      const isRotating = this.watchEngine.toggleAutoRotate();
      (e.currentTarget as HTMLElement).classList.toggle('active', isRotating);
    });

    // 8. Chronograph Controls
    const btnChronoToggle = document.getElementById('btn-chrono-toggle');
    const btnChronoFlyback = document.getElementById('btn-chrono-flyback');
    const textChronoStatus = document.getElementById('text-chrono-status');

    btnChronoToggle?.addEventListener('click', () => {
      this.audioEngine.playChronoClick(true);
      if (!this.watchEngine.chronoRunning) {
        this.watchEngine.startChronograph();
        btnChronoToggle.textContent = this.t().chronoStop;
        btnChronoToggle.classList.replace('btn-chrono-start', 'btn-chrono-stop');
        if (textChronoStatus) textChronoStatus.textContent = this.t().chronoRunning;
        this.startChronoDisplayLoop();
      } else {
        this.watchEngine.stopChronograph();
        btnChronoToggle.textContent = this.t().chronoStart;
        btnChronoToggle.classList.replace('btn-chrono-stop', 'btn-chrono-start');
        if (textChronoStatus) textChronoStatus.textContent = this.t().chronoStopped;
        if (this.chronoTimerId !== null) cancelAnimationFrame(this.chronoTimerId);
      }
    });

    btnChronoFlyback?.addEventListener('click', () => {
      this.audioEngine.playFlybackHammer();
      this.watchEngine.flybackChronograph();
      if (!this.watchEngine.chronoRunning) {
        btnChronoToggle!.textContent = this.t().chronoStop;
        btnChronoToggle!.classList.replace('btn-chrono-start', 'btn-chrono-stop');
        if (textChronoStatus) textChronoStatus.textContent = this.t().chronoRunning;
        this.startChronoDisplayLoop();
      }
    });

    // 9. COSC Testing Lab Modal
    const modalCosc = document.getElementById('modal-cosc');
    document.getElementById('btn-open-cosc')?.addEventListener('click', () => {
      modalCosc?.classList.add('active');
      this.updateCOSCLiveRate();
    });

    document.getElementById('btn-close-cosc')?.addEventListener('click', () => {
      modalCosc?.classList.remove('active');
    });

    // COSC position & temperature selector
    const selectPos = document.getElementById('select-cosc-pos') as HTMLSelectElement | null;
    const selectTemp = document.getElementById('select-cosc-temp') as HTMLSelectElement | null;

    selectPos?.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value as 'CH' | 'FH' | '12H' | '6H' | '9H';
      this.coscSim.setPosition(val);
      this.updateCOSCLiveRate();
    });

    selectTemp?.addEventListener('change', (e) => {
      const val = parseInt((e.target as HTMLSelectElement).value) as 8 | 23 | 38;
      this.coscSim.setTemperature(val);
      this.updateCOSCLiveRate();
    });

    // Run 15-day test
    const btnRun15 = document.getElementById('btn-run-15day');
    btnRun15?.addEventListener('click', async () => {
      btnRun15.setAttribute('disabled', 'true');
      btnRun15.innerHTML = `<span>⏳</span><span>${this.t().coscTestingInProgress}</span>`;

      const metrics = await this.coscSim.runFull15DayTest((day, record) => {
        const liveDisplay = document.getElementById('cosc-live-rate-display');
        if (liveDisplay) {
          liveDisplay.textContent = `${record.dailyRate > 0 ? '+' : ''}${record.dailyRate} s/d (Day ${day} - ${record.position})`;
        }
      });

      this.updateCOSCMetricsUI();
      btnRun15.removeAttribute('disabled');
      btnRun15.innerHTML = `<span>⚡</span><span>${this.t().coscRun15DayTest}</span>`;
    });

    // Print certificate
    document.getElementById('btn-print-certificate')?.addEventListener('click', () => {
      window.print();
    });

    // 10. Technical Specs Modal
    const modalSpecs = document.getElementById('modal-specs');
    document.getElementById('btn-open-specs')?.addEventListener('click', () => {
      modalSpecs?.classList.add('active');
    });
    document.getElementById('btn-close-specs')?.addEventListener('click', () => {
      modalSpecs?.classList.remove('active');
    });

    // 11. Nav Observatory button (resets camera)
    document.getElementById('btn-nav-observatory')?.addEventListener('click', () => {
      this.watchEngine.resetCamera();
    });
  }

  private startChronoDisplayLoop() {
    const update = () => {
      if (this.watchEngine.chronoRunning) {
        const totalSec = this.watchEngine.chronoElapsed;
        const mins = Math.floor(totalSec / 60);
        const secs = Math.floor(totalSec % 60);
        const hundredths = Math.floor((totalSec * 100) % 100);

        const mStr = String(mins).padStart(2, '0');
        const sStr = String(secs).padStart(2, '0');
        const hStr = String(hundredths).padStart(2, '0');

        const display = document.getElementById('chrono-time-display');
        if (display) display.textContent = `${mStr}:${sStr}.${hStr}`;
        this.chronoTimerId = requestAnimationFrame(update);
      }
    };
    this.chronoTimerId = requestAnimationFrame(update);
  }

  private updateCOSCLiveRate() {
    const rate = this.coscSim.calculateCurrentRate();
    const liveDisplay = document.getElementById('cosc-live-rate-display');
    const statusDisplay = document.getElementById('cosc-compliance-status');

    if (liveDisplay) {
      liveDisplay.textContent = `${rate > 0 ? '+' : ''}${rate} s/d`;
    }

    if (statusDisplay) {
      if (rate >= -4 && rate <= 6) {
        statusDisplay.textContent = `✓ ${this.t().coscPass}`;
        statusDisplay.style.color = '#34d399';
      } else {
        statusDisplay.textContent = `✕ ${this.t().coscFail}`;
        statusDisplay.style.color = '#f87171';
      }
    }
  }

  private updateCOSCMetricsUI() {
    const metrics = this.coscSim.getMetrics();
    const statM = document.getElementById('stat-m-rate');
    const statV = document.getElementById('stat-v-rate');
    const statVmax = document.getElementById('stat-vmax-rate');
    const statC = document.getElementById('stat-c-rate');
    const serialDisplay = document.getElementById('cert-serial-no');

    if (statM) statM.textContent = `${metrics.meanDailyRate > 0 ? '+' : ''}${metrics.meanDailyRate}`;
    if (statV) statV.textContent = `${metrics.meanVariation}`;
    if (statVmax) statVmax.textContent = `${metrics.maxVariation}`;
    if (statC) statC.textContent = `${metrics.thermalCoeff}`;
    if (serialDisplay) serialDisplay.textContent = this.coscSim.getSerialNumber();
  }

  private applyTranslations() {
    const t = this.t();
    const setElem = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setElem('text-brand-title', t.brandTitle);
    setElem('text-brand-subtitle', t.brandSubtitle);
    setElem('text-architect-tag', t.architectName);

    setElem('text-nav-observatory', t.navObservatory);
    setElem('text-nav-cosc', t.navCosc);
    setElem('text-nav-specs', t.navSpecifications);

    setElem('text-customizer-title', t.customizerTitle);
    setElem('text-case-material', t.caseMaterial);
    setElem('btn-mat-plat', t.matPlatinum);
    setElem('btn-mat-rose', t.matRoseGold);
    setElem('btn-mat-ti', t.matTitanium);
    setElem('btn-mat-carb', t.matCarbon);

    setElem('text-dial-pattern', t.dialPattern);
    setElem('btn-dial-clous', t.patternClousDeParis);
    setElem('btn-dial-sun', t.patternSunburst);
    setElem('btn-dial-navy', t.patternNavyGuilloche);
    setElem('btn-dial-skel', t.patternSkeleton);

    setElem('text-screws-color', t.screwsColor);
    setElem('btn-screw-blue', t.screwBlued);
    setElem('btn-screw-pol', t.screwPolished);
    setElem('btn-screw-gold', t.screwGold);

    setElem('text-sound-volume', t.soundVolume);

    setElem('text-chrono-title', t.chronoTitle);
    setElem('btn-chrono-flyback', t.chronoFlyback);

    setElem('text-layer-inspector-title', t.layerInspectorTitle);

    setElem('text-explode-label', t.explodeSliderLabel);
    setElem('text-btn-explode', t.explodeBtn);
    setElem('text-btn-assemble', t.assembleBtn);
    setElem('text-btn-reset-cam', t.resetCameraBtn);
    setElem('text-btn-wireframe', t.toggleWireframe);
    setElem('text-btn-rotate', t.autoRotate);

    setElem('text-cosc-title', t.coscTitle);
    setElem('text-cosc-subtitle', t.coscSubtitle);
    setElem('text-cosc-current-rate', t.coscCurrentRate);
    setElem('text-run-15day', t.coscRun15DayTest);
    setElem('text-print-cert', t.coscPrintCert);
    setElem('cert-title', t.coscCertificateTitle);
    setElem('text-close-cosc', t.coscCloseModal);
    setElem('text-specs-title', t.specsTitle);

    // Update labels in metrics
    setElem('label-m-rate', t.coscCertMeanRate);
    setElem('label-v-rate', t.coscCertMeanVariation);
    setElem('label-vmax-rate', t.coscCertMaxVariation);
    setElem('label-c-rate', t.coscCertThermalCoefficient);
  }

  private renderLayerInspector() {
    const t = this.t();
    const container = document.getElementById('layers-list-container');
    if (!container) return;

    const layers = [
      { name: t.layerCrystal, desc: t.layerCrystalDesc, ratio: 0.9 },
      { name: t.layerHands, desc: t.layerHandsDesc, ratio: 0.65 },
      { name: t.layerDial, desc: t.layerDialDesc, ratio: 0.45 },
      { name: t.layerMoonPhase, desc: t.layerMoonPhaseDesc, ratio: 0.35 },
      { name: t.layerTourbillon, desc: t.layerTourbillonDesc, ratio: 0.2 },
      { name: t.layerBridges, desc: t.layerBridgesDesc, ratio: 0.5 },
      { name: t.layerGears, desc: t.layerGearsDesc, ratio: 0.7 },
      { name: t.layerMainplate, desc: t.layerMainplateDesc, ratio: 0.8 },
      { name: t.layerCaseback, desc: t.layerCasebackDesc, ratio: 1.0 },
    ];

    container.innerHTML = layers.map((l) => `
      <div class="layer-item-card" data-layer-ratio="${l.ratio}">
        <div class="layer-item-header">
          <span>${l.name}</span>
          <span style="color: var(--gold-primary); font-size: 0.75rem;">Explore</span>
        </div>
        <p class="layer-item-desc">${l.desc}</p>
      </div>
    `).join('');

    container.querySelectorAll('.layer-item-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const ratio = parseFloat((e.currentTarget as HTMLElement).getAttribute('data-layer-ratio') || '0.5');
        this.watchEngine.setExplodedRatio(ratio, true);
        const range = document.getElementById('input-explode-range') as HTMLInputElement | null;
        if (range) range.value = String(ratio);
        const pct = document.getElementById('explode-pct-display');
        if (pct) pct.textContent = `${Math.round(ratio * 100)}%`;
      });
    });
  }

  private renderTechnicalSpecs() {
    const t = this.t();
    const container = document.getElementById('specs-list-container');
    if (!container) return;

    const specs = [
      { icon: '📐', title: t.specDiameter },
      { icon: '💎', title: t.specThickness },
      { icon: '⚡', title: t.specFrequency },
      { icon: '⚖️', title: t.specBalance },
      { icon: '🌀', title: t.specHairspring },
      { icon: '🪐', title: t.specTourbillon },
      { icon: '🧩', title: t.specComponents },
      { icon: '🔴', title: t.specJewels },
      { icon: '🌊', title: t.specWaterResistance },
      { icon: '✨', title: `${t.specFinishing} ${t.specFinishingDesc}` },
    ];

    container.innerHTML = specs.map(s => `
      <div class="glass-panel" style="padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.75rem; background: rgba(15, 23, 42, 0.45);">
        <span style="font-size: 1.25rem;">${s.icon}</span>
        <span style="font-size: 0.85rem; color: var(--text-main);">${s.title}</span>
      </div>
    `).join('');
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new ChronosApp();
});
