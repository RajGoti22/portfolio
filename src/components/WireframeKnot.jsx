import { useEffect, useRef } from 'react';

export default function WireframeKnot() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = (canvas.width = 340);
    const height = (canvas.height = 280);

    let angleX = 0.4;
    let angleY = 0;

    // Torus knot parametric setup (p=2, q=3)
    const p = 2;
    const q = 3;
    const numPoints = 110;
    const tubeSegments = 9;
    const tubeRadius = 0.42;

    // Generate knot spine points
    const knotPoints = [];
    for (let i = 0; i < numPoints; i++) {
      const u = (i / numPoints) * Math.PI * 2;
      const r = 2 + Math.cos(q * u);
      const x = r * Math.cos(p * u);
      const y = r * Math.sin(p * u);
      const z = -Math.sin(q * u);
      knotPoints.push({ x, y, z });
    }

    // Build 3D mesh rings around spine
    const mesh = [];
    for (let i = 0; i < numPoints; i++) {
      const curr = knotPoints[i];
      const next = knotPoints[(i + 1) % numPoints];

      let tx = next.x - curr.x;
      let ty = next.y - curr.y;
      let tz = next.z - curr.z;
      const len = Math.sqrt(tx * tx + ty * ty + tz * tz) || 1;
      tx /= len;
      ty /= len;
      tz /= len;

      let nx = -ty;
      let ny = tx;
      let nz = 0;
      const nlen = Math.sqrt(nx * nx + ny * ny) || 1;
      nx /= nlen;
      ny /= nlen;

      const bx = ty * nz - tz * ny;
      const by = tz * nx - tx * nz;
      const bz = tx * ny - ty * nx;

      const ring = [];
      for (let j = 0; j < tubeSegments; j++) {
        const v = (j / tubeSegments) * Math.PI * 2;
        const cosV = Math.cos(v) * tubeRadius;
        const sinV = Math.sin(v) * tubeRadius;

        const px = curr.x + (nx * cosV + bx * sinV);
        const py = curr.y + (ny * cosV + by * sinV);
        const pz = curr.z + (nz * cosV + bz * sinV);

        ring.push({ x: px, y: py, z: pz });
      }
      mesh.push(ring);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.007;
      angleX += 0.002;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const fov = 150;
      const cameraDistance = 6.2;

      const projectedMesh = mesh.map((ring) =>
        ring.map((pt) => {
          const x1 = pt.x * cosY - pt.z * sinY;
          const z1 = pt.x * sinY + pt.z * cosY;

          const y2 = pt.y * cosX - z1 * sinX;
          const z2 = pt.y * sinX + z1 * cosX;

          const scale = fov / (z2 + cameraDistance);
          return {
            x: width / 2 + x1 * scale,
            y: height / 2 + y2 * scale,
            z: z2,
          };
        })
      );

      ctx.lineWidth = 0.7;

      for (let i = 0; i < mesh.length; i++) {
        const ring1 = projectedMesh[i];
        const ring2 = projectedMesh[(i + 1) % mesh.length];

        for (let j = 0; j < tubeSegments; j++) {
          const p1 = ring1[j];
          const p2 = ring2[j];
          const p3 = ring1[(j + 1) % tubeSegments];

          const avgZ = (p1.z + p2.z) / 2;
          const alpha = Math.max(0.12, Math.min(0.75, (avgZ + 3.2) / 6.4));

          ctx.strokeStyle = `rgba(220, 220, 225, ${alpha.toFixed(2)})`;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="wireframe-canvas" width={340} height={280} />;
}
