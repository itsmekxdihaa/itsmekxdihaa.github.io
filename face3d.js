import * as THREE from "three";

const canvas = document.getElementById("cine-view");
const tilt = document.getElementById("cine-tilt");

let lookX = 0;
let lookY = 0;

window.setFaceLook = (x, y) => {
  lookX = x;
  lookY = y;
};

if (canvas && tilt) mount(canvas, tilt);

function mount(view, frame) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: view,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 30);
  camera.position.set(0, 0.05, 6.5);
  camera.lookAt(0, -0.05, 0);

  scene.add(new THREE.AmbientLight(0xfff3ea, 0.72));
  const key = new THREE.DirectionalLight(0xfff6ee, 1.15);
  key.position.set(1.4, 2.2, 3.2);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xd5e2ff, 0.38);
  fill.position.set(-2.2, 0.6, 2);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0x3d6bff, 1.35);
  rim.position.set(-1.6, 1.2, -2.2);
  scene.add(rim);
  const rimRight = new THREE.DirectionalLight(0x0a3cff, 0.55);
  rimRight.position.set(2, 0.2, -1.6);
  scene.add(rimRight);

  const avatar = buildAvatar();
  scene.add(avatar.root);
  frame.classList.add("is-3d");

  let currentX = 0;
  let currentY = 0;

  function resize() {
    const width = view.clientWidth || 480;
    const height = view.clientHeight || 560;
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }

  resize();

  function frameLoop(now) {
    if (!view.isConnected) {
      renderer.dispose();
      return;
    }
    const bootEl = document.getElementById("boot");
    if (bootEl && bootEl.classList.contains("is-done")) {
      requestAnimationFrame(frameLoop);
      return;
    }
    currentX += (lookX - currentX) * 0.1;
    currentY += (lookY - currentY) * 0.1;
    avatar.head.rotation.y = currentX * 0.62;
    avatar.head.rotation.x = currentY * -0.32;
    avatar.body.rotation.y = currentX * 0.12;
    const gazeX = currentX * 0.09;
    const gazeY = currentY * -0.022;
    for (const eye of avatar.eyes) {
      eye.iris.position.x = gazeX;
      eye.iris.position.y = gazeY;
      eye.shine.position.set(0.022 + gazeX, 0.02 + gazeY, 0.080);
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frameLoop);
  }

  requestAnimationFrame(frameLoop);
  window.addEventListener("resize", resize);
}

function makeIrisMap() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const center = size / 2;
  const radius = center - 2;
  const tone = ctx.createRadialGradient(center, center, radius * 0.16, center, center, radius);
  tone.addColorStop(0, "#0b0908");
  tone.addColorStop(0.2, "#0b0908");
  tone.addColorStop(0.27, "#7a5340");
  tone.addColorStop(0.42, "#4e3222");
  tone.addColorStop(0.66, "#2c1a12");
  tone.addColorStop(0.86, "#1a100c");
  tone.addColorStop(1, "#0c0908");
  ctx.fillStyle = tone;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.arc(center, center, radius * 0.94, 0, Math.PI * 2);
  ctx.clip();
  for (let i = 0; i < 64; i += 1) {
    const angle = (i / 64) * Math.PI * 2;
    ctx.strokeStyle = i % 3 === 0 ? "rgba(138, 92, 64, 0.5)" : "rgba(18, 10, 8, 0.4)";
    ctx.lineWidth = i % 6 === 0 ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(center + Math.cos(angle) * radius * 0.3, center + Math.sin(angle) * radius * 0.3);
    ctx.lineTo(center + Math.cos(angle) * radius * 0.9, center + Math.sin(angle) * radius * 0.9);
    ctx.stroke();
  }
  ctx.restore();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function buildAvatar() {
  const skin = new THREE.MeshStandardMaterial({
    color: 0xd9a184,
    roughness: 0.58,
    metalness: 0,
  });
  const hairMat = new THREE.MeshStandardMaterial({
    color: 0x120d0b,
    roughness: 0.62,
    metalness: 0.04,
  });
  const navy = new THREE.MeshStandardMaterial({
    color: 0x1a2333,
    roughness: 0.82,
    metalness: 0,
  });
  const shirt = new THREE.MeshStandardMaterial({
    color: 0xf4f0e8,
    roughness: 0.7,
    metalness: 0,
  });
  const lipMat = new THREE.MeshStandardMaterial({
    color: 0xc16b6e,
    roughness: 0.42,
    metalness: 0.06,
  });
  const white = new THREE.MeshStandardMaterial({
    color: 0xf7f4ef,
    roughness: 0.32,
    metalness: 0,
  });
  const irisMat = new THREE.MeshStandardMaterial({
    color: 0x3a261c,
    roughness: 0.28,
    metalness: 0,
  });
  const pupilMat = new THREE.MeshStandardMaterial({
    color: 0x0b0908,
    roughness: 0.2,
    metalness: 0,
  });
  const head = new THREE.Group();

  const skull = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), skin);
  skull.scale.set(0.94, 1.07, 1);
  skull.position.y = 0.07;
  head.add(skull);

  const hair = new THREE.Group();

  const shell = new THREE.Mesh(new THREE.SphereGeometry(1.18, 48, 36), hairMat);
  shell.scale.set(1.12, 0.92, 0.88);
  shell.position.set(0, 0.36, -0.34);
  hair.add(shell);

  const crown = new THREE.Mesh(new THREE.SphereGeometry(0.72, 32, 22), hairMat);
  crown.scale.set(1.28, 0.8, 1.05);
  crown.position.set(0, 0.78, -0.2);
  hair.add(crown);

  function strand(x, y, z, rz, rx, length, radius, sx) {
    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 8, 16), hairMat);
    mesh.position.set(x, y, z);
    mesh.rotation.z = rz;
    mesh.rotation.x = rx;
    mesh.scale.x = sx;
    return mesh;
  }

  hair.add(strand(-0.88, -0.95, -0.14, 0.04, 0.02, 2.0, 0.24, 1.12));
  hair.add(strand(-0.72, -0.9, -0.1, 0.08, 0.06, 1.5, 0.13, 0.85));
  hair.add(strand(-1.04, -1.05, -0.36, -0.04, -0.08, 1.85, 0.18, 1.05));
  hair.add(strand(0.86, -0.92, -0.12, -0.04, 0.02, 1.95, 0.23, 1.1));
  hair.add(strand(0.7, -0.88, -0.08, -0.08, 0.06, 1.45, 0.12, 0.82));
  hair.add(strand(1.02, -1.02, -0.34, 0.04, -0.08, 1.75, 0.17, 1.0));

  const back = new THREE.Mesh(new THREE.CapsuleGeometry(0.82, 1.85, 12, 22), hairMat);
  back.scale.set(1.02, 1.05, 0.5);
  back.position.set(0, -1.05, -0.84);
  hair.add(back);

  hair.add(strand(-0.42, -1.85, -0.48, 0.04, 0.04, 0.72, 0.15, 1.05));
  hair.add(strand(0.4, -1.78, -0.44, -0.05, 0.05, 0.66, 0.14, 1));
  hair.add(strand(0, -1.95, -0.62, 0, 0.02, 0.85, 0.16, 1.1));

  head.add(hair);

  const irisMap = makeIrisMap();
  const irisLook = new THREE.MeshStandardMaterial({
    map: irisMap,
    roughness: 0.32,
    metalness: 0.02,
  });
  const eyes = [];
  const eyeY = 0.12;
  const eyeX = 0.42;
  function makeEye(side) {
    const group = new THREE.Group();
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.128, 32, 24), white);
    ball.scale.set(1.42, 0.78, 0.5);
    group.add(ball);

    const iris = new THREE.Mesh(new THREE.CircleGeometry(0.064, 40), irisLook);
    iris.position.z = 0.07;
    group.add(iris);

    const shine = new THREE.Mesh(
      new THREE.SphereGeometry(0.011, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    shine.position.set(0.022, 0.02, 0.074);
    group.add(shine);

    const lid = new THREE.Mesh(
      new THREE.SphereGeometry(0.142, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.38),
      skin
    );
    lid.scale.set(1.52, 0.86, 0.5);
    lid.position.set(0, 0.02, 0.008);
    group.add(lid);

    const lashLine = [];
    for (let i = 0; i <= 10; i += 1) {
      const t = i / 10;
      const angle = side > 0 ? Math.PI * (0.9 - t * 0.8) : Math.PI * (0.1 + t * 0.8);
      lashLine.push(new THREE.Vector3(Math.cos(angle) * 0.168, Math.sin(angle) * 0.09, 0.078));
    }
    group.add(
      new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lashLine), 12, 0.0032, 4, false),
        hairMat
      )
    );
    const wisps = [0.4, 0.85, 0.32, 1, 0.48, 0.92, 0.36, 1.08, 0.5, 0.95, 0.38, 0.72];
    for (let i = 0; i < wisps.length; i += 1) {
      const t = i / (wisps.length - 1);
      const angle = side > 0 ? Math.PI * (0.88 - t * 0.76) : Math.PI * (0.12 + t * 0.76);
      const x = Math.cos(angle) * 0.166;
      const y = Math.sin(angle) * 0.088;
      const length = (0.012 + t * 0.01) * wisps[i];
      const lash = new THREE.Mesh(new THREE.CapsuleGeometry(0.002, length, 2, 4), hairMat);
      lash.position.set(x, y + length * 0.45, 0.084);
      lash.rotation.z = side * (0.42 - t * 1.05);
      lash.rotation.x = 0.35;
      group.add(lash);
    }

    group.scale.setScalar(1.42);
    group.position.set(side * eyeX, eyeY, 0.9);
    head.add(group);

    const browPts = [];
    for (let i = 0; i <= 14; i += 1) {
      const t = i / 14;
      const x = side * (eyeX - 0.2 + t * 0.42);
      const y = eyeY + 0.32 + Math.sin(Math.pow(t, 1.35) * Math.PI) * 0.022;
      const z = 0.98 - t * 0.06;
      browPts.push(new THREE.Vector3(x, y, z));
    }
    head.add(
      new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(browPts), 18, 0.016, 6, false),
        hairMat
      )
    );

    eyes.push({ iris, shine });
  }

  makeEye(-1);
  makeEye(1);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.085, 20, 14), skin);
  nose.scale.set(0.8, 1.15, 0.85);
  nose.position.set(0, -0.06, 0.96);
  head.add(nose);

  const lipShape = new THREE.Shape();
  lipShape.moveTo(-0.2, -0.411);
  lipShape.bezierCurveTo(-0.152, -0.361, -0.097, -0.333, -0.053, -0.342);
  lipShape.bezierCurveTo(-0.028, -0.361, -0.011, -0.372, 0, -0.375);
  lipShape.bezierCurveTo(0.011, -0.372, 0.028, -0.361, 0.053, -0.342);
  lipShape.bezierCurveTo(0.097, -0.333, 0.152, -0.361, 0.2, -0.411);
  lipShape.bezierCurveTo(0.138, -0.526, -0.138, -0.526, -0.2, -0.411);
  const lipGeo = new THREE.ExtrudeGeometry(lipShape, {
    depth: 0.055,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.01,
    bevelSegments: 2,
    curveSegments: 18,
  });
  lipGeo.translate(0, 0, -0.02);
  const lipPos = lipGeo.attributes.position;
  for (let i = 0; i < lipPos.count; i += 1) {
    const x = lipPos.getX(i);
    const y = lipPos.getY(i);
    const z = lipPos.getZ(i);
    const faceZ = Math.sqrt(
      Math.max(0.04, 1 - (x / 0.94) ** 2 - ((y - 0.07) / 1.07) ** 2)
    );
    lipPos.setZ(i, faceZ + 0.012 + z);
  }
  lipGeo.computeVertexNormals();
  head.add(new THREE.Mesh(lipGeo, lipMat));

  const seamMat = new THREE.MeshStandardMaterial({
    color: 0x8d4548,
    roughness: 0.55,
    metalness: 0,
  });
  const seamPts = [];
  for (let i = 0; i <= 16; i += 1) {
    const t = -1 + (i / 16) * 2;
    const x = t * 0.182;
    const y = -0.412 - Math.pow(Math.cos((t * Math.PI) / 2), 2) * 0.016;
    const faceZ = Math.sqrt(
      Math.max(0.04, 1 - (x / 0.94) ** 2 - ((y - 0.07) / 1.07) ** 2)
    );
    seamPts.push(new THREE.Vector3(x, y, faceZ + 0.05));
  }
  head.add(
    new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(seamPts), 20, 0.008, 6, false),
      seamMat
    )
  );

  function ear(side) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 12), skin);
    mesh.scale.set(0.34, 0.82, 0.5);
    mesh.position.set(side * 0.9, 0.02, 0);
    return mesh;
  }

  head.add(ear(-1), ear(1));

  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x161616,
    roughness: 0.32,
    metalness: 0.45,
  });
  const lensMat = new THREE.MeshBasicMaterial({
    color: 0xb7c7ea,
    transparent: true,
    opacity: 0.14,
    depthWrite: false,
  });
  const glasses = new THREE.Group();
  function addLens(side) {
    const rx = 0.35;
    const ry = 0.248;
    const pts = [];
    const shape = new THREE.Shape();
    for (let i = 0; i <= 56; i += 1) {
      const angle = (i / 56) * Math.PI * 2;
      const s = Math.sin(angle);
      const y = s >= 0 ? ry * (1 - (1 - s) ** 1.4) : s * ry;
      const x = Math.cos(angle) * rx;
      pts.push(new THREE.Vector3(x, y, 0));
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    const ring = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 72, 0.02, 8, true),
      frameMat
    );
    ring.position.set(side * eyeX, eyeY, 1.04);
    const lens = new THREE.Mesh(new THREE.ShapeGeometry(shape), lensMat);
    lens.position.set(side * eyeX, eyeY, 1.03);
    glasses.add(ring, lens);
  }
  addLens(-1);
  addLens(1);
  const bridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.1, 4, 8), frameMat);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, eyeY, 1.04);
  glasses.add(bridge);
  function temple(side) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.013, 0.48, 4, 8), frameMat);
    arm.rotation.x = Math.PI / 2;
    arm.position.set(side * (eyeX + 0.33), eyeY + 0.04, 0.78);
    glasses.add(arm);
  }
  temple(-1);
  temple(1);
  head.add(glasses);

  const body = new THREE.Group();
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.34, 0.38, 28), skin);
  neck.position.y = -1.18;
  body.add(neck);

  const torso = new THREE.Mesh(new THREE.SphereGeometry(1.05, 40, 28), navy);
  torso.scale.set(1.45, 0.82, 0.72);
  torso.position.y = -1.95;
  body.add(torso);

  const neckline = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 14), shirt);
  neckline.scale.set(0.62, 0.72, 0.22);
  neckline.position.set(0, -1.42, 0.34);
  body.add(neckline);

  const root = new THREE.Group();
  root.add(body);
  root.add(head);
  root.position.y = -0.08;
  root.scale.setScalar(1.02);

  return { root, head, body, eyes };
}
