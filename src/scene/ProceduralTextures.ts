import * as THREE from 'three';

/**
 * ProceduralTextures
 * High-resolution procedural canvas textures for haute horlogerie finishing:
 * - Clous de Paris (Hobnail guilloché)
 * - Sunburst (Soleillé rayonnant)
 * - Perlage (Circular graining on movement mainplates)
 * - Côtes de Genève (Geneva wave stripes)
 * - Moon Phase Crater Texture
 * - Carbon Composite Texture
 */

export class ProceduralTextures {
  /**
   * Clous de Paris (Hobnail) Dial Pattern
   */
  public static createClousDeParis(size: number = 1024, tint: string = '#1e293b'): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    // Background
    ctx.fillStyle = tint;
    ctx.fillRect(0, 0, size, size);

    const pyramidSize = 32;
    const half = pyramidSize / 2;

    for (let y = 0; y < size; y += pyramidSize) {
      for (let x = 0; x < size; x += pyramidSize) {
        // 4 pyramid facets for 3D metallic reflection
        // Top facet
        ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.beginPath();
        ctx.moveTo(x + half, y);
        ctx.lineTo(x + half, y + half);
        ctx.lineTo(x, y + half);
        ctx.fill();

        // Right facet
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.moveTo(x + half, y + half);
        ctx.lineTo(x + pyramidSize, y + half);
        ctx.lineTo(x + half, y + pyramidSize);
        ctx.fill();

        // Bottom facet
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.moveTo(x + half, y + half);
        ctx.lineTo(x, y + half);
        ctx.lineTo(x + half, y + pyramidSize);
        ctx.fill();

        // Left facet
        ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
        ctx.beginPath();
        ctx.moveTo(x + half, y);
        ctx.lineTo(x + pyramidSize, y + half);
        ctx.lineTo(x + half, y + half);
        ctx.fill();

        // Center apex highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillRect(x + half - 1, y + half - 1, 2, 2);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * Sunburst Radial Dial Pattern
   */
  public static createSunburst(size: number = 1024, baseColor: string = '#0b1329'): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2;

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, size, size);

    // Fine radial brushed lines
    const rays = 720;
    for (let i = 0; i < rays; i++) {
      const angle = (i / rays) * Math.PI * 2;
      const alpha = 0.03 + Math.sin(i * 12) * 0.02 + Math.random() * 0.03;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.stroke();
    }

    // Radial gradient glow
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)');
    grad.addColorStop(0.85, 'rgba(0, 0, 0, 0.25)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.65)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  /**
   * Perlage (Circular graining) on mainplate
   */
  public static createPerlage(size: number = 1024): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 0, size, size);

    const beadRadius = 24;
    const step = beadRadius * 0.85;

    for (let y = -beadRadius; y < size + beadRadius; y += step) {
      for (let x = -beadRadius; x < size + beadRadius; x += step) {
        const offset = (Math.floor(y / step) % 2) * (step / 2);
        const bx = x + offset;
        const by = y;

        const grad = ctx.createRadialGradient(bx - 4, by - 4, 2, bx, by, beadRadius);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        grad.addColorStop(0.4, 'rgba(203, 213, 225, 0.4)');
        grad.addColorStop(0.8, 'rgba(100, 116, 139, 0.3)');
        grad.addColorStop(1, 'rgba(51, 65, 85, 0.6)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, beadRadius, 0, Math.PI * 2);
        ctx.fill();

        // Fine circular swirling micro-scratches
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, beadRadius * 0.65, 0, Math.PI * 1.5);
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * Côtes de Genève (Geneva Stripes on Bridges)
   */
  public static createCotesDeGeneve(size: number = 1024): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, size, size);

    const stripeWidth = 64;

    for (let x = 0; x < size; x += stripeWidth) {
      const grad = ctx.createLinearGradient(x, 0, x + stripeWidth, 0);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      grad.addColorStop(0.5, 'rgba(226, 232, 240, 0.1)');
      grad.addColorStop(0.95, 'rgba(100, 116, 139, 0.35)');
      grad.addColorStop(1, 'rgba(71, 85, 105, 0.6)');

      ctx.fillStyle = grad;
      ctx.fillRect(x, 0, stripeWidth, size);

      // Micro curved abrasive polishing arcs inside each stripe
      for (let y = 0; y < size; y += 12) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.arc(x + stripeWidth / 2, y, stripeWidth * 0.7, 0.2, Math.PI - 0.2);
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  /**
   * 3D Lunar Moon Texture with Craters & Seas (Maria)
   */
  public static createMoonTexture(size: number = 1024): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d')!;

    // Base lunar regolith gray
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Darker lunar maria (lunar seas)
    const maria = [
      { x: canvas.width * 0.35, y: canvas.height * 0.4, rx: 90, ry: 60, rot: 0.2 },
      { x: canvas.width * 0.48, y: canvas.height * 0.35, rx: 110, ry: 75, rot: -0.1 },
      { x: canvas.width * 0.28, y: canvas.height * 0.6, rx: 70, ry: 50, rot: 0.4 },
      { x: canvas.width * 0.65, y: canvas.height * 0.5, rx: 80, ry: 55, rot: 0.1 },
      { x: canvas.width * 0.82, y: canvas.height * 0.45, rx: 60, ry: 40, rot: -0.3 }
    ];

    maria.forEach(m => {
      const grad = ctx.createRadialGradient(m.x, m.y, 10, m.x, m.y, m.rx);
      grad.addColorStop(0, 'rgba(51, 65, 85, 0.85)');
      grad.addColorStop(0.7, 'rgba(71, 85, 105, 0.55)');
      grad.addColorStop(1, 'rgba(148, 163, 184, 0)');

      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.rot);
      ctx.scale(1, m.ry / m.rx);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, m.rx, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Impact craters with rim highlights and shadow depths
    for (let i = 0; i < 180; i++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height;
      const r = 2 + Math.random() * 14;

      // Rim shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
      ctx.beginPath();
      ctx.arc(cx - 1, cy - 1, r, 0, Math.PI * 2);
      ctx.fill();

      // Rim light
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(cx + 1, cy + 1, r * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Floor depth
      ctx.fillStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  /**
   * Carbon Composite Forged Texture
   */
  public static createCarbonTexture(size: number = 512): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, size, size);

    // Random fibrous marbled patches
    for (let i = 0; i < 240; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const w = 20 + Math.random() * 80;
      const h = 8 + Math.random() * 25;
      const rot = Math.random() * Math.PI;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      const shade = Math.floor(25 + Math.random() * 45);
      ctx.fillStyle = `rgb(${shade}, ${shade + 4}, ${shade + 8})`;
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.restore();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }
}
