/**
 * HorologyAudioEngine
 * Real-time synthesized mechanical watch escapement audio using Web Audio API.
 * Accurately synthesizes 4Hz (28,800 vph = 8 impulses/sec) mechanical lever escapement
 * with pallet jewel impact, impulse pin drop, and acoustic metal casing resonance.
 */

export class HorologyAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;
  private tickIntervalId: number | null = null;
  private tickStep: number = 0;
  private materialTimbre: 'platinum' | 'rosegold' | 'titanium' | 'carbon' = 'platinum';

  constructor() {
    // AudioContext will be initialized on first user interaction to comply with autoplay policy
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  public getVolume(): number {
    return this.volume;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.tickIntervalId !== null) {
      window.clearInterval(this.tickIntervalId);
      this.tickIntervalId = null;
    } else if (!muted && this.tickIntervalId === null) {
      this.startEscapementAudio();
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setMaterialTimbre(mat: 'platinum' | 'rosegold' | 'titanium' | 'carbon') {
    this.materialTimbre = mat;
  }

  /**
   * Starts continuous 28,800 vph (4Hz = 8 ticks/second -> 125ms) escapement ticks
   */
  public startEscapementAudio() {
    if (this.tickIntervalId !== null) return;
    this.initContext();

    // 125 ms = 1000 / 8 ticks per second
    this.tickIntervalId = window.setInterval(() => {
      if (!this.isMuted) {
        this.playEscapementImpulse();
      }
    }, 125);
  }

  public stopEscapementAudio() {
    if (this.tickIntervalId !== null) {
      window.clearInterval(this.tickIntervalId);
      this.tickIntervalId = null;
    }
  }

  /**
   * Synthesize a single mechanical escapement tick
   * A mechanical escapement impulse consists of 3 micro-sounds:
   * 1. Pallet stone strikes escape wheel tooth (~0.003s sharp transient)
   * 2. Impulse pin contacts pallet fork slot (~0.012s metallic ringing body)
   * 3. Tooth drops onto locking face with damping (~0.025s case resonance)
   */
  private playEscapementImpulse() {
    if (!this.ctx || this.isMuted || this.volume <= 0.001) return;
    const now = this.ctx.currentTime;
    this.tickStep = (this.tickStep + 1) % 2; // Tick vs Tack nuance

    const isTick = this.tickStep === 0;

    // Timbre base frequency shifts based on watch alloy
    let baseFreq = 2600;
    let decayRate = 0.035;
    let resonanceQ = 14;

    switch (this.materialTimbre) {
      case 'platinum': // Dense, damp, subtle deep chime
        baseFreq = isTick ? 2400 : 2250;
        decayRate = 0.03;
        resonanceQ = 12;
        break;
      case 'rosegold': // Warm, ringing, rich overtone
        baseFreq = isTick ? 2800 : 2650;
        decayRate = 0.045;
        resonanceQ = 18;
        break;
      case 'titanium': // High-velocity sound, crisp, sharp chime
        baseFreq = isTick ? 3400 : 3150;
        decayRate = 0.025;
        resonanceQ = 22;
        break;
      case 'carbon': // Absorptive, dry, high-tech click
        baseFreq = isTick ? 1900 : 1800;
        decayRate = 0.018;
        resonanceQ = 8;
        break;
    }

    // 1. Synthetic Pallet Impact (Filtered White Noise Burst)
    const bufferSize = this.ctx.sampleRate * 0.015;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(baseFreq * 1.5, now);
    noiseFilter.Q.setValueAtTime(resonanceQ, now);

    const noiseGain = this.ctx.createGain();
    const peakVolume = this.volume * 0.45;
    noiseGain.gain.setValueAtTime(peakVolume, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noiseSource.start(now);
    noiseSource.stop(now + 0.015);

    // 2. Escape Wheel Tooth Metallic Ringing Body (Oscillator with rapid pitch decay)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.65, now + decayRate);

    const oscVol = this.volume * 0.28;
    oscGain.gain.setValueAtTime(oscVol, now);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + decayRate);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + decayRate);

    // 3. Hairspring Subtle Micro-Resonance (Harmonic overtone)
    const harmonic = this.ctx.createOscillator();
    const harmonicGain = this.ctx.createGain();

    harmonic.type = 'sine';
    harmonic.frequency.setValueAtTime(baseFreq * 2.3, now);
    harmonic.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, now + decayRate * 0.6);

    harmonicGain.gain.setValueAtTime(this.volume * 0.08, now);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, now + decayRate * 0.6);

    harmonic.connect(harmonicGain);
    harmonicGain.connect(this.ctx.destination);

    harmonic.start(now);
    harmonic.stop(now + decayRate * 0.6);
  }

  /**
   * Sound effect for Chronograph Pushers (Tactile mechanical steel click)
   */
  public playChronoClick(isStartStop: boolean = true) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = isStartStop ? 'sawtooth' : 'square';
    const clickFreq = isStartStop ? 1450 : 920;
    osc.frequency.setValueAtTime(clickFreq, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);

    gain.gain.setValueAtTime(this.volume * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  /**
   * Sound effect for Flyback Reset (Pusher tension release and cam hammer impact)
   */
  public playFlybackHammer() {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;

    // Dual hammer strike
    for (let i = 0; i < 2; i++) {
      const strikeTime = now + i * 0.025;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(850 - i * 150, strikeTime);
      osc.frequency.exponentialRampToValueAtTime(120, strikeTime + 0.05);

      gain.gain.setValueAtTime(this.volume * 0.65, strikeTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, strikeTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(strikeTime);
      osc.stop(strikeTime + 0.05);
    }
  }
}
