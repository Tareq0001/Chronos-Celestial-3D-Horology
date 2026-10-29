import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ProceduralTextures } from './ProceduralTextures';

export interface WatchMaterialsConfig {
  caseMaterial: 'platinum' | 'rosegold' | 'titanium' | 'carbon';
  dialPattern: 'clous_de_paris' | 'sunburst' | 'skeleton' | 'navy_guilloche';
  screwFinish: 'blued' | 'polished' | 'gold';
}

export class WatchEngine {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private animFrameId: number | null = null;
  private clock: THREE.Clock;

  // Kinetic assemblies
  private explodedGroup: THREE.Group;
  private layerCrystal: THREE.Group;
  private layerBezel: THREE.Group;
  private layerHands: THREE.Group;
  private layerDial: THREE.Group;
  private layerMoonPhase: THREE.Group;
  private layerTourbillon: THREE.Group;
  private layerBridges: THREE.Group;
  private layerGearTrain: THREE.Group;
  private layerMainplate: THREE.Group;
  private layerCaseback: THREE.Group;

  // Moving elements
  private tourbillonOuterCage!: THREE.Group;
  private tourbillonInnerCage!: THREE.Group;
  private balanceWheel!: THREE.Group;
  private hairspringMesh!: THREE.Mesh;
  private palletFork!: THREE.Group;
  private escapeWheel!: THREE.Group;
  private fourthWheel!: THREE.Group;
  private thirdWheel!: THREE.Group;
  private centerWheel!: THREE.Group;
  private barrelMesh!: THREE.Group;
  private moonSphere!: THREE.Mesh;
  private hourHand!: THREE.Group;
  private minuteHand!: THREE.Group;
  private chronoSecondHand!: THREE.Group;
  private chronoMinuteHand!: THREE.Group;

  // Materials caches
  private caseMeshes: THREE.Mesh[] = [];
  private screwMeshes: THREE.Mesh[] = [];
  private dialMesh!: THREE.Mesh;
  private dialMaterial!: THREE.MeshStandardMaterial;

  // State
  private explodeRatio: number = 0; // 0 = assembled, 1 = fully exploded
  private isAutoRotating: boolean = false;
  private isWireframe: boolean = false;
  private currentConfig: WatchMaterialsConfig = {
    caseMaterial: 'platinum',
    dialPattern: 'clous_de_paris',
    screwFinish: 'blued'
  };

  // Chronograph state
  public chronoRunning: boolean = false;
  public chronoStartTime: number = 0;
  public chronoElapsed: number = 0;

  constructor(container: HTMLElement) {
    this.container = container;
    this.clock = new THREE.Clock();

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null; // transparent to show deep glassmorphism body

    // Camera
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 4.5, 9.5);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 2.5;
    this.controls.maxDistance = 24.0;
    this.controls.target.set(0, 0, 0);

    // Lighting
    this.setupLighting();

    // Movement hierarchy
    this.explodedGroup = new THREE.Group();
    this.scene.add(this.explodedGroup);

    // Create mechanical sub-assemblies
    this.layerCrystal = new THREE.Group();
    this.layerBezel = new THREE.Group();
    this.layerHands = new THREE.Group();
    this.layerDial = new THREE.Group();
    this.layerMoonPhase = new THREE.Group();
    this.layerTourbillon = new THREE.Group();
    this.layerBridges = new THREE.Group();
    this.layerGearTrain = new THREE.Group();
    this.layerMainplate = new THREE.Group();
    this.layerCaseback = new THREE.Group();

    this.explodedGroup.add(
      this.layerCaseback,
      this.layerMainplate,
      this.layerGearTrain,
      this.layerBridges,
      this.layerTourbillon,
      this.layerMoonPhase,
      this.layerDial,
      this.layerHands,
      this.layerBezel,
      this.layerCrystal
    );

    // Build the 3D movement
    this.buildCaseAndBezel();
    this.buildMainplateAndBridges();
    this.buildPrecisionGearTrain();
    this.buildTriAxialTourbillon();
    this.buildAstronomicalMoonPhase();
    this.buildGuillocheDial();
    this.buildBreguetHands();
    this.buildSapphireCrystals();

    // Event listeners
    window.addEventListener('resize', this.onResize);

    // Animation Loop
    this.animate = this.animate.bind(this);
    this.animate();
  }

  private setupLighting() {
    // Ambient Light
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);

    // Key Light (Warm luxury studio glow)
    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    keyLight.position.set(6, 12, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    this.scene.add(keyLight);

    // Rim / Fill Light (Ice blue contrast)
    const rimLight = new THREE.DirectionalLight(0x93c5fd, 2.0);
    rimLight.position.set(-8, -4, -6);
    this.scene.add(rimLight);

    // Grazing Light to highlight Côtes de Genève & Guilloché reflections
    const grazingLight = new THREE.PointLight(0xfef08a, 1.8, 20);
    grazingLight.position.set(0, -6, 5);
    this.scene.add(grazingLight);

    // Top Overhead Specular Light
    const topLight = new THREE.PointLight(0xffffff, 1.2, 15);
    topLight.position.set(0, 0, 7);
    this.scene.add(topLight);
  }

  /**
   * Helper: Create high-precision tooth gear geometry
   */
  private createGearGeometry(radius: number, teeth: number, thickness: number, holeRadius: number = 0.15): THREE.BufferGeometry {
    const shape = new THREE.Shape();
    const toothDepth = radius * 0.12;
    const totalPoints = teeth * 2;

    for (let i = 0; i <= totalPoints; i++) {
      const angle = (i / totalPoints) * Math.PI * 2;
      const isTip = i % 2 === 1;
      const r = isTip ? radius + toothDepth : radius;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;

      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }

    // Center Arbor Hole
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    // Extrude
    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: thickness,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }

  /**
   * Helper: Create Flame-Blued Screw or Gold/Platinum Screw
   */
  private createScrew(x: number, y: number, z: number, scale: number = 0.1): THREE.Mesh {
    const screwGroup = new THREE.Group();
    const headGeo = new THREE.CylinderGeometry(0.8, 0.7, 0.4, 24);
    const slotGeo = new THREE.BoxGeometry(1.4, 0.3, 0.25);

    let screwColor = 0x1d4ed8; // Heat-blued steel
    let metalness = 0.95;
    let roughness = 0.18;

    if (this.currentConfig.screwFinish === 'gold') {
      screwColor = 0xeab308;
    } else if (this.currentConfig.screwFinish === 'polished') {
      screwColor = 0xf1f5f9;
    }

    const screwMat = new THREE.MeshStandardMaterial({
      color: screwColor,
      metalness: metalness,
      roughness: roughness,
      wireframe: this.isWireframe
    });

    const headMesh = new THREE.Mesh(headGeo, screwMat);
    headMesh.rotation.x = Math.PI / 2;
    headMesh.position.set(x, y, z);
    headMesh.scale.set(scale, scale, scale);

    this.screwMeshes.push(headMesh);
    return headMesh;
  }

  /**
   * Helper: Synthetic Ruby Jewel Bearing (Corundum)
   */
  private createJewelBearing(x: number, y: number, z: number, outerR: number = 0.22, innerR: number = 0.07): THREE.Group {
    const jewelGroup = new THREE.Group();

    // Chaton (Gold ring holder)
    const chatonGeo = new THREE.TorusGeometry(outerR * 0.95, 0.04, 16, 32);
    const chatonMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: this.isWireframe
    });
    const chatonMesh = new THREE.Mesh(chatonGeo, chatonMat);
    jewelGroup.add(chatonMesh);

    // Ruby (Translucent deep carmine red)
    const rubyGeo = new THREE.CylinderGeometry(outerR * 0.85, outerR * 0.85, 0.08, 24);
    const rubyMat = new THREE.MeshPhysicalMaterial({
      color: 0xd90429,
      transmission: 0.7,
      opacity: 0.9,
      transparent: true,
      roughness: 0.08,
      ior: 1.76, // Real corundum refractive index
      metalness: 0.1,
      wireframe: this.isWireframe
    });
    const rubyMesh = new THREE.Mesh(rubyGeo, rubyMat);
    rubyMesh.rotation.x = Math.PI / 2;
    jewelGroup.add(rubyMesh);

    jewelGroup.position.set(x, y, z);
    return jewelGroup;
  }

  /**
   * 1. Case & Bezel Assembly
   */
  private buildCaseAndBezel() {
    // Case alloy material
    const caseColor = this.getCaseColorHex();
    const caseMat = new THREE.MeshStandardMaterial({
      color: caseColor,
      metalness: this.currentConfig.caseMaterial === 'carbon' ? 0.2 : 0.94,
      roughness: this.currentConfig.caseMaterial === 'carbon' ? 0.45 : 0.2,
      wireframe: this.isWireframe
    });

    if (this.currentConfig.caseMaterial === 'carbon') {
      caseMat.map = ProceduralTextures.createCarbonTexture();
    }

    // Outer Bezel Ring (Stepped luxury profile)
    const bezelGeo = new THREE.TorusGeometry(3.6, 0.38, 24, 64);
    const bezelMesh = new THREE.Mesh(bezelGeo, caseMat);
    this.caseMeshes.push(bezelMesh);
    this.layerBezel.add(bezelMesh);

    // Rehaut / Flange Ring (with 60-minute engraved markers)
    const rehautGeo = new THREE.CylinderGeometry(3.52, 3.42, 0.4, 64, 1, true);
    const rehautMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.25,
      side: THREE.BackSide,
      wireframe: this.isWireframe
    });
    const rehautMesh = new THREE.Mesh(rehautGeo, rehautMat);
    rehautMesh.rotation.x = Math.PI / 2;
    rehautMesh.position.z = -0.15;
    this.layerBezel.add(rehautMesh);

    // Watch lugs (4 sculpted ergonomic lugs)
    const lugPositions = [
      { x: -2.3, y: 3.2, rot: -0.3 },
      { x: 2.3, y: 3.2, rot: 0.3 },
      { x: -2.3, y: -3.2, rot: 0.3 },
      { x: 2.3, y: -3.2, rot: -0.3 }
    ];

    lugPositions.forEach(pos => {
      const lugGeo = new THREE.BoxGeometry(0.45, 1.4, 0.7);
      const lugMesh = new THREE.Mesh(lugGeo, caseMat);
      lugMesh.position.set(pos.x, pos.y, -0.2);
      lugMesh.rotation.z = pos.rot;
      this.caseMeshes.push(lugMesh);
      this.layerBezel.add(lugMesh);
    });

    // Crown & Chronograph Pushers at 2H, 3H, 4H
    const crownGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.6, 32);
    const crownMesh = new THREE.Mesh(crownGeo, caseMat);
    crownMesh.rotation.z = Math.PI / 2;
    crownMesh.position.set(3.9, 0, -0.2);
    this.caseMeshes.push(crownMesh);
    this.layerBezel.add(crownMesh);

    // Top Pusher (Start / Stop) at 2H
    const pusher1Geo = new THREE.CylinderGeometry(0.24, 0.24, 0.5, 24);
    const pusher1 = new THREE.Mesh(pusher1Geo, caseMat);
    pusher1.rotation.z = Math.PI / 2.8;
    pusher1.position.set(3.6, 1.6, -0.2);
    this.caseMeshes.push(pusher1);
    this.layerBezel.add(pusher1);

    // Bottom Pusher (Flyback Reset) at 4H
    const pusher2 = new THREE.Mesh(pusher1Geo, caseMat);
    pusher2.rotation.z = Math.PI / 1.5;
    pusher2.position.set(3.6, -1.6, -0.2);
    this.caseMeshes.push(pusher2);
    this.layerBezel.add(pusher2);

    // Caseback ring with precision horological hallmarks
    const casebackRingGeo = new THREE.TorusGeometry(3.55, 0.32, 20, 64);
    const casebackRing = new THREE.Mesh(casebackRingGeo, caseMat);
    this.caseMeshes.push(casebackRing);
    this.layerCaseback.add(casebackRing);

    // Caseback engraving plate
    const casebackPlateGeo = new THREE.RingGeometry(2.3, 3.4, 48);
    const casebackPlateMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.28,
      side: THREE.DoubleSide
    });
    const casebackPlate = new THREE.Mesh(casebackPlateGeo, casebackPlateMat);
    this.layerCaseback.add(casebackPlate);
  }

  /**
   * 2. Mainplate & Hand-Finished Bridges
   */
  private buildMainplateAndBridges() {
    // Perlage Mainplate (Solid base of calibre)
    const perlageTex = ProceduralTextures.createPerlage(1024);
    const plateGeo = new THREE.CylinderGeometry(3.38, 3.38, 0.28, 64);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      map: perlageTex,
      metalness: 0.92,
      roughness: 0.22,
      wireframe: this.isWireframe
    });
    const mainplateMesh = new THREE.Mesh(plateGeo, plateMat);
    mainplateMesh.rotation.x = Math.PI / 2;
    this.layerMainplate.add(mainplateMesh);

    // Côtes de Genève Decorated Bridges (Custom sculpted shapes)
    const cotesTex = ProceduralTextures.createCotesDeGeneve(1024);
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      map: cotesTex,
      metalness: 0.94,
      roughness: 0.18,
      wireframe: this.isWireframe
    });

    // Top Barrel Bridge (Curved architecture)
    const barrelBridgeShape = new THREE.Shape();
    barrelBridgeShape.moveTo(-2.2, 0.4);
    barrelBridgeShape.lineTo(0.2, 0.4);
    barrelBridgeShape.quadraticCurveTo(1.6, 1.8, 0.4, 2.6);
    barrelBridgeShape.lineTo(-1.8, 2.4);
    barrelBridgeShape.quadraticCurveTo(-2.6, 1.4, -2.2, 0.4);

    const barrelBridgeGeo = new THREE.ExtrudeGeometry(barrelBridgeShape, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    });
    const barrelBridge = new THREE.Mesh(barrelBridgeGeo, bridgeMat);
    barrelBridge.position.z = -0.1;
    this.layerBridges.add(barrelBridge);

    // Center Train Bridge
    const trainBridgeShape = new THREE.Shape();
    trainBridgeShape.moveTo(0.1, -0.6);
    trainBridgeShape.lineTo(2.4, -0.4);
    trainBridgeShape.quadraticCurveTo(2.7, 1.2, 1.2, 1.9);
    trainBridgeShape.lineTo(0.2, 0.8);

    const trainBridgeGeo = new THREE.ExtrudeGeometry(trainBridgeShape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    });
    const trainBridge = new THREE.Mesh(trainBridgeGeo, bridgeMat);
    trainBridge.position.z = -0.08;
    this.layerBridges.add(trainBridge);

    // Tourbillon Bridge at 6H (Slender curved bridge framing the tourbillon)
    const tourbillonBridgeShape = new THREE.Shape();
    tourbillonBridgeShape.moveTo(-1.6, -1.8);
    tourbillonBridgeShape.quadraticCurveTo(0, -1.1, 1.6, -1.8);
    tourbillonBridgeShape.lineTo(1.4, -2.1);
    tourbillonBridgeShape.quadraticCurveTo(0, -1.4, -1.4, -2.1);
    tourbillonBridgeShape.closePath();

    const tourbBridgeGeo = new THREE.ExtrudeGeometry(tourbillonBridgeShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02
    });
    const tourbBridge = new THREE.Mesh(tourbBridgeGeo, bridgeMat);
    tourbBridge.position.z = 0.12;
    this.layerBridges.add(tourbBridge);

    // Add Jewels & Screws onto Bridges
    this.layerBridges.add(this.createJewelBearing(-0.8, 1.5, 0.15));
    this.layerBridges.add(this.createJewelBearing(1.4, 0.6, 0.14));
    this.layerBridges.add(this.createJewelBearing(0.8, -0.1, 0.14));
    this.layerBridges.add(this.createJewelBearing(0, -1.6, 0.22));

    this.layerBridges.add(this.createScrew(-1.9, 2.2, 0.14));
    this.layerBridges.add(this.createScrew(0.2, 2.4, 0.14));
    this.layerBridges.add(this.createScrew(2.2, 0.8, 0.14));
    this.layerBridges.add(this.createScrew(-1.4, -1.95, 0.22));
    this.layerBridges.add(this.createScrew(1.4, -1.95, 0.22));
  }

  /**
   * 3. Precision Gear Train (Mathematically calculated ratios)
   */
  private buildPrecisionGearTrain() {
    const goldGearMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.2,
      wireframe: this.isWireframe
    });

    const steelGearMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.96,
      roughness: 0.16,
      wireframe: this.isWireframe
    });

    // Mainspring Barrel (Left, ~10 o'clock)
    this.barrelMesh = new THREE.Group();
    const barrelBody = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 0.22, 48),
      new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.25 })
    );
    barrelBody.rotation.x = Math.PI / 2;
    this.barrelMesh.add(barrelBody);

    // Barrel teeth ring
    const barrelTeeth = new THREE.Mesh(this.createGearGeometry(1.2, 48, 0.08, 0.4), goldGearMat);
    this.barrelMesh.add(barrelTeeth);
    this.barrelMesh.position.set(-1.1, 1.2, -0.15);
    this.layerGearTrain.add(this.barrelMesh);

    // Center Wheel (Center arbor)
    this.centerWheel = new THREE.Group();
    const centerGear = new THREE.Mesh(this.createGearGeometry(0.85, 36, 0.06, 0.2), goldGearMat);
    this.centerWheel.add(centerGear);
    this.centerWheel.position.set(0, 0, -0.12);
    this.layerGearTrain.add(this.centerWheel);

    // Third Wheel
    this.thirdWheel = new THREE.Group();
    const thirdGear = new THREE.Mesh(this.createGearGeometry(0.68, 30, 0.05, 0.15), goldGearMat);
    this.thirdWheel.add(thirdGear);
    this.thirdWheel.position.set(0.95, -0.65, -0.1);
    this.layerGearTrain.add(this.thirdWheel);

    // Fourth Wheel (Drives tourbillon carriage and 60-second rotation)
    this.fourthWheel = new THREE.Group();
    const fourthGear = new THREE.Mesh(this.createGearGeometry(0.55, 24, 0.05, 0.12), goldGearMat);
    this.fourthWheel.add(fourthGear);
    this.fourthWheel.position.set(0.4, -1.25, -0.08);
    this.layerGearTrain.add(this.fourthWheel);

    // Escape Wheel (with 15 club teeth)
    this.escapeWheel = new THREE.Group();
    const escapeGear = new THREE.Mesh(this.createGearGeometry(0.42, 15, 0.04, 0.08), steelGearMat);
    this.escapeWheel.add(escapeGear);
    this.escapeWheel.position.set(-0.35, -1.4, -0.05);
    this.layerGearTrain.add(this.escapeWheel);

    // Pallet Fork & Lever
    this.palletFork = new THREE.Group();
    const forkBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.06, 0.04),
      steelGearMat
    );
    this.palletFork.add(forkBody);
    // Pallet jewels (Entry and exit stones)
    const palletStoneMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.1 });
    const stone1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.04), palletStoneMat);
    stone1.position.set(-0.16, 0.04, 0);
    const stone2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.04), palletStoneMat);
    stone2.position.set(0.16, 0.04, 0);
    this.palletFork.add(stone1, stone2);
    this.palletFork.position.set(-0.1, -1.75, 0);
    this.layerGearTrain.add(this.palletFork);
  }

  /**
   * 4. Multi-Axis Flying Tourbillon (Positioned at 6 o'clock)
   */
  private buildTriAxialTourbillon() {
    const tourbillonBase = new THREE.Group();
    tourbillonBase.position.set(0, -1.65, 0.15);
    this.layerTourbillon.add(tourbillonBase);

    // Outer Cage (1 RPM rotation around Z)
    this.tourbillonOuterCage = new THREE.Group();
    tourbillonBase.add(this.tourbillonOuterCage);

    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8, // Anodized titanium electric blue
      metalness: 0.9,
      roughness: 0.2,
      wireframe: this.isWireframe
    });

    // Outer Cage Ring
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.04, 16, 48), cageMat);
    this.tourbillonOuterCage.add(outerRing);

    // 3 Curved Pillars connecting outer cage
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 12), cageMat);
      pillar.position.set(Math.cos(angle) * 0.92, Math.sin(angle) * 0.92, 0.2);
      pillar.rotation.x = Math.PI / 2;
      this.tourbillonOuterCage.add(pillar);
    }

    // Inner Cage (Rotates on inclined axis)
    this.tourbillonInnerCage = new THREE.Group();
    this.tourbillonOuterCage.add(this.tourbillonInnerCage);

    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xe0a96d, // 5N Rose Gold cage ring
      metalness: 0.95,
      roughness: 0.15,
      wireframe: this.isWireframe
    });
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.035, 16, 36), innerRingMat);
    this.tourbillonInnerCage.add(innerRing);

    // Balance Wheel (Glucydur 4Hz oscillator)
    this.balanceWheel = new THREE.Group();
    this.tourbillonInnerCage.add(this.balanceWheel);

    const balanceRimMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Gold rim
      metalness: 0.96,
      roughness: 0.15,
      wireframe: this.isWireframe
    });
    const balanceRim = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.03, 16, 48), balanceRimMat);
    this.balanceWheel.add(balanceRim);

    // 2 Balance Cross-Arms
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.04, 0.02), balanceRimMat);
    this.balanceWheel.add(arm1);

    // 4 Variable-Inertia Gold Poising Screws around rim
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.06, 12), balanceRimMat);
      screw.position.set(Math.cos(angle) * 0.62, Math.sin(angle) * 0.62, 0);
      screw.rotation.z = angle;
      this.balanceWheel.add(screw);
    }

    // Dynamic Archimedean Spiral Hairspring
    const hairspringCurve = new THREE.CurvePath<THREE.Vector3>();
    const spiralPoints: THREE.Vector3[] = [];
    const coils = 5.5;
    const totalSamples = 160;

    for (let i = 0; i <= totalSamples; i++) {
      const t = i / totalSamples;
      const angle = t * coils * Math.PI * 2;
      const radius = 0.08 + t * 0.42;
      spiralPoints.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0.04));
    }

    const hairspringGeo = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(spiralPoints),
      90,
      0.012,
      8,
      false
    );
    const hairspringMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8, // Silicon blue anti-magnetic hairspring
      metalness: 0.8,
      roughness: 0.25,
      wireframe: this.isWireframe
    });
    this.hairspringMesh = new THREE.Mesh(hairspringGeo, hairspringMat);
    this.balanceWheel.add(this.hairspringMesh);
  }

  /**
   * 5. 3D Astronomical Moon Phase (Positioned at 12 o'clock)
   */
  private buildAstronomicalMoonPhase() {
    const moonGroup = new THREE.Group();
    moonGroup.position.set(0, 1.45, 0.18);
    this.layerMoonPhase.add(moonGroup);

    // Celestial Starlight Disc Frame (Deep space navy with gold stars)
    const discGeo = new THREE.RingGeometry(0.55, 1.15, 48);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      metalness: 0.5,
      roughness: 0.4,
      side: THREE.DoubleSide
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    moonGroup.add(discMesh);

    // 3D Realistic Lunar Sphere with crater texture
    const moonGeo = new THREE.SphereGeometry(0.48, 32, 32);
    const moonTex = ProceduralTextures.createMoonTexture(1024);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTex,
      roughness: 0.75,
      metalness: 0.05,
      wireframe: this.isWireframe
    });
    this.moonSphere = new THREE.Mesh(moonGeo, moonMat);
    moonGroup.add(this.moonSphere);

    // Decorative Gold Rim framing Moon Phase aperture
    const moonBezel = new THREE.Mesh(
      new THREE.TorusGeometry(0.62, 0.03, 16, 48),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.95, roughness: 0.15 })
    );
    moonGroup.add(moonBezel);
  }

  /**
   * 6. Guilloché Dial with Openworked Apertures
   */
  private buildGuillocheDial() {
    // Dial Shape with 2 circular apertures: Moon Phase (12H) and Tourbillon (6H)
    const dialShape = new THREE.Shape();
    dialShape.absarc(0, 0, 3.35, 0, Math.PI * 2, false);

    // Aperture 1: Moon Phase at (0, 1.45), radius 0.65
    const moonHole = new THREE.Path();
    moonHole.absarc(0, 1.45, 0.65, 0, Math.PI * 2, true);
    dialShape.holes.push(moonHole);

    // Aperture 2: Tourbillon at (0, -1.65), radius 1.1
    const tourbHole = new THREE.Path();
    tourbHole.absarc(0, -1.65, 1.1, 0, Math.PI * 2, true);
    dialShape.holes.push(tourbHole);

    const dialGeo = new THREE.ExtrudeGeometry(dialShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.015,
      bevelThickness: 0.015
    });

    const dialTexture = ProceduralTextures.createClousDeParis(1024, '#0f172a');
    this.dialMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      map: dialTexture,
      metalness: 0.85,
      roughness: 0.32,
      wireframe: this.isWireframe
    });

    this.dialMesh = new THREE.Mesh(dialGeo, this.dialMaterial);
    this.dialMesh.position.z = 0.22;
    this.layerDial.add(this.dialMesh);

    // Applied Roman Numerals & Diamond-Cut Hour Markers
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.95,
      roughness: 0.15
    });

    for (let h = 1; h <= 12; h++) {
      // Skip 6 o'clock because of tourbillon aperture
      if (h === 6) continue;

      const angle = -(h / 12) * Math.PI * 2 + Math.PI / 2;
      const markerR = 2.85;
      const markerGeo = new THREE.BoxGeometry(0.12, 0.45, 0.06);
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(Math.cos(angle) * markerR, Math.sin(angle) * markerR, 0.3);
      marker.rotation.z = angle - Math.PI / 2;
      this.layerDial.add(marker);
    }
  }

  /**
   * 7. Flame-Blued Breguet Hands & Chronograph Hand
   */
  private buildBreguetHands() {
    const handMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8, // Royal flame-blued steel
      metalness: 0.95,
      roughness: 0.15,
      wireframe: this.isWireframe
    });

    // Hour Hand (with Breguet eccentric moon tip)
    this.hourHand = new THREE.Group();
    const hourStem = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.4, 0.03), handMat);
    hourStem.position.y = 0.7;
    const hourTip = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 16, 24), handMat);
    hourTip.position.y = 1.35;
    this.hourHand.add(hourStem, hourTip);
    this.hourHand.position.z = 0.38;
    this.layerHands.add(this.hourHand);

    // Minute Hand (Longer Breguet hand reaching minutes track)
    this.minuteHand = new THREE.Group();
    const minStem = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.3, 0.03), handMat);
    minStem.position.y = 1.15;
    const minTip = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 16, 24), handMat);
    minTip.position.y = 2.25;
    this.minuteHand.add(minStem, minTip);
    this.minuteHand.position.z = 0.42;
    this.layerHands.add(this.minuteHand);

    // Central Chronograph Seconds Hand (Slender needle with crescent counterweight)
    this.chronoSecondHand = new THREE.Group();
    const chronoNeedle = new THREE.Mesh(new THREE.BoxGeometry(0.035, 3.2, 0.025), handMat);
    chronoNeedle.position.y = 1.3;
    const chronoCounterweight = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 16, 24), handMat);
    chronoCounterweight.position.y = -0.55;
    this.chronoSecondHand.add(chronoNeedle, chronoCounterweight);
    this.chronoSecondHand.position.z = 0.46;
    this.layerHands.add(this.chronoSecondHand);

    // Center Cap/Cannon Pinion Jewel
    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 0.1, 24),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.95, roughness: 0.15 })
    );
    cap.rotation.x = Math.PI / 2;
    cap.position.z = 0.48;
    this.layerHands.add(cap);
  }

  /**
   * 8. Front & Rear Sapphire Crystals with Double Anti-Reflective Coating
   */
  private buildSapphireCrystals() {
    const sapphireMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      opacity: 0.98,
      transparent: true,
      roughness: 0.02,
      ior: 1.77, // Real Sapphire glass IOR
      reflectivity: 0.3,
      thickness: 0.8,
      attenuationColor: new THREE.Color(0xdbeafe),
      attenuationDistance: 2.0,
      wireframe: this.isWireframe
    });

    // Front Domed Sapphire Crystal
    const frontCrystalGeo = new THREE.SphereGeometry(3.5, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.28);
    const frontCrystal = new THREE.Mesh(frontCrystalGeo, sapphireMat);
    frontCrystal.position.z = -0.6;
    this.layerCrystal.add(frontCrystal);

    // Rear Flat Sapphire Exhibition Crystal
    const rearCrystalGeo = new THREE.CylinderGeometry(2.35, 2.35, 0.1, 48);
    const rearCrystal = new THREE.Mesh(rearCrystalGeo, sapphireMat);
    rearCrystal.rotation.x = Math.PI / 2;
    rearCrystal.position.z = -0.2;
    this.layerCaseback.add(rearCrystal);
  }

  /**
   * Animation & Physics Loop
   */
  private animate() {
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Kinetic Tourbillon Mechanics
    // Outer cage 1 RPM rotation (60s period)
    if (this.tourbillonOuterCage) {
      this.tourbillonOuterCage.rotation.z = -elapsedTime * (Math.PI * 2 / 60);
    }
    // Inner cage multi-axis tilt and rotation
    if (this.tourbillonInnerCage) {
      this.tourbillonInnerCage.rotation.x = Math.sin(elapsedTime * 1.5) * 0.35;
      this.tourbillonInnerCage.rotation.y = elapsedTime * (Math.PI * 2 / 30);
    }
    // Glucydur Balance Wheel 4Hz Harmonic Oscillation (28,800 vph = 4 complete oscillations/sec)
    if (this.balanceWheel) {
      const balanceAngle = Math.sin(elapsedTime * Math.PI * 2 * 4.0) * (280 * (Math.PI / 180));
      this.balanceWheel.rotation.z = balanceAngle;

      // Realistic Hairspring breathing expansion/contraction
      if (this.hairspringMesh) {
        const breathingScale = 1.0 + Math.sin(elapsedTime * Math.PI * 2 * 4.0) * 0.08;
        this.hairspringMesh.scale.set(breathingScale, breathingScale, 1.0);
      }
    }
    // Pallet Fork discrete tick rock
    if (this.palletFork) {
      this.palletFork.rotation.z = Math.sign(Math.sin(elapsedTime * Math.PI * 2 * 4.0)) * 0.12;
    }

    // 2. Mathematically calculated gear ratios
    if (this.barrelMesh) this.barrelMesh.rotation.z -= delta * 0.05;
    if (this.centerWheel) this.centerWheel.rotation.z += delta * 0.2;
    if (this.thirdWheel) this.thirdWheel.rotation.z -= delta * 0.6;
    if (this.fourthWheel) this.fourthWheel.rotation.z += delta * 1.5;
    if (this.escapeWheel) {
      // Escape wheel moves in discrete impulse steps (8 steps per second)
      const stepIndex = Math.floor(elapsedTime * 8);
      this.escapeWheel.rotation.z = -stepIndex * (Math.PI * 2 / 15);
    }

    // 3. 3D Lunar Moon Phase slow orbital rotation
    if (this.moonSphere) {
      this.moonSphere.rotation.y += delta * 0.03;
    }

    // 4. Time Hands Simulation
    if (this.minuteHand) this.minuteHand.rotation.z = -elapsedTime * 0.08;
    if (this.hourHand) this.hourHand.rotation.z = -elapsedTime * 0.08 / 12;

    // 5. Chronograph Seconds Sweeping
    if (this.chronoRunning) {
      this.chronoElapsed = (performance.now() - this.chronoStartTime) / 1000;
      if (this.chronoSecondHand) {
        this.chronoSecondHand.rotation.z = -(this.chronoElapsed % 60) * (Math.PI * 2 / 60);
      }
    }

    // 6. Camera Auto-Rotation
    if (this.isAutoRotating) {
      this.explodedGroup.rotation.y += delta * 0.4;
    }

    // Controls update & render
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Exploded View Spatial Tween along Z axis
   */
  public setExplodedRatio(ratio: number, animate: boolean = true) {
    this.explodeRatio = Math.max(0, Math.min(1, ratio));

    const targetOffsets = {
      crystal: this.explodeRatio * 6.5,
      bezel: this.explodeRatio * 4.8,
      hands: this.explodeRatio * 3.6,
      dial: this.explodeRatio * 2.4,
      moonPhase: this.explodeRatio * 1.5,
      tourbillon: this.explodeRatio * 0.5,
      bridges: this.explodeRatio * -0.9,
      gearTrain: this.explodeRatio * -2.2,
      mainplate: this.explodeRatio * -3.6,
      caseback: this.explodeRatio * -5.2
    };

    if (animate) {
      gsap.to(this.layerCrystal.position, { z: targetOffsets.crystal, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerBezel.position, { z: targetOffsets.bezel, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerHands.position, { z: targetOffsets.hands, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerDial.position, { z: targetOffsets.dial, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerMoonPhase.position, { z: targetOffsets.moonPhase, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerTourbillon.position, { z: targetOffsets.tourbillon, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerBridges.position, { z: targetOffsets.bridges, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerGearTrain.position, { z: targetOffsets.gearTrain, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerMainplate.position, { z: targetOffsets.mainplate, duration: 0.9, ease: 'power2.out' });
      gsap.to(this.layerCaseback.position, { z: targetOffsets.caseback, duration: 0.9, ease: 'power2.out' });
    } else {
      this.layerCrystal.position.z = targetOffsets.crystal;
      this.layerBezel.position.z = targetOffsets.bezel;
      this.layerHands.position.z = targetOffsets.hands;
      this.layerDial.position.z = targetOffsets.dial;
      this.layerMoonPhase.position.z = targetOffsets.moonPhase;
      this.layerTourbillon.position.z = targetOffsets.tourbillon;
      this.layerBridges.position.z = targetOffsets.bridges;
      this.layerGearTrain.position.z = targetOffsets.gearTrain;
      this.layerMainplate.position.z = targetOffsets.mainplate;
      this.layerCaseback.position.z = targetOffsets.caseback;
    }
  }

  public getExplodedRatio(): number {
    return this.explodeRatio;
  }

  /**
   * Material Customization
   */
  public updateCaseMaterial(material: 'platinum' | 'rosegold' | 'titanium' | 'carbon') {
    this.currentConfig.caseMaterial = material;
    const colorHex = this.getCaseColorHex();

    this.caseMeshes.forEach(mesh => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.color.setHex(colorHex);
      if (material === 'carbon') {
        mat.map = ProceduralTextures.createCarbonTexture();
        mat.metalness = 0.2;
        mat.roughness = 0.45;
      } else {
        mat.map = null;
        mat.metalness = material === 'titanium' ? 0.88 : 0.95;
        mat.roughness = material === 'titanium' ? 0.32 : 0.18;
      }
      mat.needsUpdate = true;
    });
  }

  public updateDialPattern(pattern: 'clous_de_paris' | 'sunburst' | 'skeleton' | 'navy_guilloche') {
    this.currentConfig.dialPattern = pattern;

    if (!this.dialMaterial) return;

    if (pattern === 'clous_de_paris') {
      this.dialMaterial.map = ProceduralTextures.createClousDeParis(1024, '#1e293b');
      this.dialMaterial.opacity = 1.0;
      this.dialMaterial.transparent = false;
    } else if (pattern === 'sunburst') {
      this.dialMaterial.map = ProceduralTextures.createSunburst(1024, '#0f172a');
      this.dialMaterial.opacity = 1.0;
      this.dialMaterial.transparent = false;
    } else if (pattern === 'navy_guilloche') {
      this.dialMaterial.map = ProceduralTextures.createClousDeParis(1024, '#0c4a6e');
      this.dialMaterial.opacity = 1.0;
      this.dialMaterial.transparent = false;
    } else if (pattern === 'skeleton') {
      this.dialMaterial.map = null;
      this.dialMaterial.opacity = 0.15;
      this.dialMaterial.transparent = true;
    }
    this.dialMaterial.needsUpdate = true;
  }

  public updateScrewFinish(finish: 'blued' | 'polished' | 'gold') {
    this.currentConfig.screwFinish = finish;
    let color = 0x1d4ed8;
    if (finish === 'gold') color = 0xeab308;
    if (finish === 'polished') color = 0xf1f5f9;

    this.screwMeshes.forEach(m => {
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.color.setHex(color);
      mat.needsUpdate = true;
    });
  }

  private getCaseColorHex(): number {
    switch (this.currentConfig.caseMaterial) {
      case 'platinum': return 0xe2e8f0;
      case 'rosegold': return 0xe0a96d;
      case 'titanium': return 0x94a3b8;
      case 'carbon': return 0x1e293b;
    }
  }

  // Interactive controls
  public toggleAutoRotate(): boolean {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  public toggleWireframe(): boolean {
    this.isWireframe = !this.isWireframe;
    this.scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mat = (obj as THREE.Mesh).material;
        if (Array.isArray(mat)) {
          mat.forEach(m => {
            if ('wireframe' in m) (m as THREE.MeshStandardMaterial).wireframe = this.isWireframe;
          });
        } else if (mat && 'wireframe' in mat) {
          (mat as THREE.MeshStandardMaterial).wireframe = this.isWireframe;
        }
      }
    });
    return this.isWireframe;
  }

  public resetCamera() {
    gsap.to(this.camera.position, { x: 0, y: 4.5, z: 9.5, duration: 1.2, ease: 'power2.inOut' });
    gsap.to(this.controls.target, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'power2.inOut' });
    gsap.to(this.explodedGroup.rotation, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'power2.inOut' });
  }

  // Chronograph controls
  public startChronograph() {
    if (!this.chronoRunning) {
      this.chronoRunning = true;
      this.chronoStartTime = performance.now() - (this.chronoElapsed * 1000);
    }
  }

  public stopChronograph() {
    this.chronoRunning = false;
  }

  public resetChronograph() {
    this.chronoRunning = false;
    this.chronoElapsed = 0;
    if (this.chronoSecondHand) {
      gsap.to(this.chronoSecondHand.rotation, { z: 0, duration: 0.35, ease: 'elastic.out(1, 0.4)' });
    }
  }

  public flybackChronograph() {
    this.chronoElapsed = 0;
    this.chronoStartTime = performance.now();
    this.chronoRunning = true;
    if (this.chronoSecondHand) {
      this.chronoSecondHand.rotation.z = 0;
    }
  }

  private onResize = () => {
    if (!this.container) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public dispose() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}
