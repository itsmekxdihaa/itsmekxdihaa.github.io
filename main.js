/* Edit this list to change the archive. */

const ENTRIES = [
  {
    id: "001",
    slug: "planetze",
    group: "work",
    name: "Planetze sustainability app",
    role: "Carbon footprint tracker",
    when: "Agile sprint build",
    focus: "React · Firebase",
    kicker: "Android app · public repo",
    summary:
      "A carbon footprint tracker that takes live user metrics and keeps the interface quick. I built it in React against Firebase Firestore, on a strict Agile sprint schedule.",
    points: [
      "Modular React components, with state kept separate from the Firestore sync.",
      "Collaborative development, code review, and sprint planning on GitHub.",
      "This one is an Android project. The code is public; there isn’t a website build.",
    ],
    links: [{ href: "https://github.com/itsmekxdihaa/planetze", label: "GitHub" }],
    mode: "rings",
    mark: "PZ",
  },
  {
    id: "002",
    slug: "stocks",
    group: "work",
    name: "Stocks portfolio network",
    role: "Social network for portfolios",
    when: "CSCC43",
    focus: "Node · PostgreSQL",
    kicker: "Full stack · public repo",
    summary:
      "A full-stack app where people build shareable stock portfolios, talk to each other, and look at investment risk. Built for the databases course.",
    points: [
      "REST API in Node.js and Express, with JWT authentication.",
      "PostgreSQL queries and functions for price movement and portfolio risk.",
      "Schema for friends, portfolio reviews, and shared lists.",
      "The repo is public. It needs its own Postgres database, so it isn’t hosted yet.",
    ],
    links: [{ href: "https://github.com/itsmekxdihaa/stocks-portfolio", label: "GitHub" }],
    mode: "scan",
    mark: "ST",
  },
  {
    id: "003",
    slug: "taskmate",
    group: "work",
    name: "TaskMate focus timer",
    role: "Pomodoro timer and tasks",
    when: "Desktop and web",
    focus: "React · TypeScript · Firebase",
    kicker: "Electron app · live site",
    summary:
      "A cross-platform timer and task manager I built because I wanted a clock that doesn’t drift and a list that stays where I left it.",
    points: [
      "React and TypeScript interface, with Firebase for the account and the tasks.",
      "Electron build for the desktop app, plus a web build.",
      "Git branches for the feature work.",
    ],
    links: [
      { href: "https://itsmekxdihaa.github.io/taskmate/", label: "Open app" },
      { href: "https://github.com/itsmekxdihaa/taskmate", label: "GitHub" },
    ],
    mode: "grid",
    mark: "TM",
  },
  {
    id: "004",
    slug: "budget",
    group: "work",
    name: "BudgetBuddy budgeting app",
    role: "Documentation and systems design lead",
    when: "Team of 5",
    focus: "React · Node · JWT",
    kicker: "Course project · live site",
    summary:
      "A budgeting app for tracking spending without leaving session or financial data sitting in the open. I led documentation and systems design on a five-person Scrum team.",
    points: [
      "Authentication with OAuth 2.0 and JWT.",
      "Network code kept separate from the budgeting logic, so the core is easier to test.",
      "Jira burndown charts for the sprint.",
    ],
    links: [{ href: "https://www.kungfu-budgetbuddy.me/", label: "Open app" }],
    mode: "diag",
    mark: "BB",
  },
  {
    id: "005",
    slug: "marketing",
    group: "exp",
    name: "U of T",
    role: "Technical Marketing & Engagement Assistant",
    when: "Sept 2025 – Apr 2026",
    focus: "Newsletters · metrics",
    kicker: "University of Toronto · Toronto",
    summary:
      "Marketing and engagement for the university. The job was accuracy, the brand, and the deadline: newsletters out, and the numbers behind them cleaned up.",
    points: [
      "Audience engagement and communications across digital channels.",
      "Newsletter content in Word and Outlook, and Excel sheets for campaign metrics.",
      "Used those numbers to plan the next month’s content. Open rates went up.",
    ],
    links: [],
    mode: "scan",
    mark: "UT",
  },
  {
    id: "006",
    slug: "arise",
    group: "exp",
    name: "ARISE",
    role: "Web Manager and Marketing Assistant",
    when: "June 2025 – Present",
    focus: "React · events",
    kicker: "UTSC ARISE · Scarborough",
    summary:
      "The club site needed to be easier to update, and easier for people to find an event and actually register.",
    points: [
      "Built and maintained a React site for UTSC ARISE.",
      "Folded stakeholder feedback into the next version.",
      "Watched traffic and registration so the content matched what people used.",
    ],
    links: [{ href: "https://ariseclub.netlify.app/", label: "Club site" }],
    mode: "rings",
    mark: "AR",
  },
  {
    id: "007",
    slug: "create",
    group: "exp",
    name: "CREATE",
    role: "Vice President",
    when: "Sept 2025 – Present",
    focus: "Marketing operations",
    kicker: "CREATE UofT · UTSC",
    summary:
      "Vice President at CREATE, the UTSC club that pairs students with hands-on tech projects. I run the marketing side: what ships, when, and that it still sounds like one club.",
    points: [
      "Prioritized the backlog, delegated the work, and set campaign timelines.",
      "Weekly briefings with the executive team.",
      "Campus campaigns shipped on time, with one brand voice.",
      "CREATE was named CMS Club of the Year at UTSC.",
    ],
    links: [{ href: "https://create.utsc.utoronto.ca/", label: "Club site" }],
    mode: "code",
    mark: "CR",
  },
  {
    id: "008",
    slug: "freelance",
    group: "exp",
    name: "Freelance",
    role: "Web developer",
    when: "Jan 2024 – Present",
    focus: "Small business sites",
    kicker: "Self employed · Toronto",
    summary:
      "Custom sites for small businesses — a home inspection company, a culinary client, and portfolios — from the first conversation through the domain.",
    points: [
      "Requirements, interface, contact forms, and a layout that holds up on a phone.",
      "Domain, hosting, and SEO as part of the handoff.",
      "Shipped on the date we agreed.",
    ],
    links: [{ href: "mailto:itsmekxdihaa@gmail.com", label: "Email" }],
    mode: "diag",
    mark: "FW",
  },
  {
    id: "010",
    slug: "languages",
    group: "stack",
    name: "Languages",
    role: "What I write in",
    when: "In use",
    focus: "Python · Java · C · JS · TS · SQL",
    kicker: "Stack",
    summary:
      "Python, Java, C, JavaScript, TypeScript, SQL, and also Racket, Haskell, Prolog, and Scala from coursework.",
    points: ["The day-to-day set is Python, Java, JavaScript, TypeScript, and SQL."],
    links: [],
    mode: "code",
    mark: "LN",
  },
  {
    id: "011",
    slug: "frontend",
    group: "stack",
    name: "Frontend",
    role: "Interface",
    when: "In use",
    focus: "React · HTML · CSS",
    kicker: "Stack",
    summary: "React, HTML, CSS, responsive layout, and Context API.",
    points: ["Most of the interfaces here — Planetze, TaskMate, ARISE, BudgetBuddy — start in React."],
    links: [],
    mode: "rings",
    mark: "FE",
  },
  {
    id: "012",
    slug: "backend",
    group: "stack",
    name: "Backend",
    role: "APIs and data",
    when: "In use",
    focus: "Node · REST · PostgreSQL",
    kicker: "Stack",
    summary: "Node.js, REST APIs, and PostgreSQL. Firebase when the project is already on it.",
    points: ["Stocks is Express and Postgres. TaskMate and Planetze use Firebase."],
    links: [],
    mode: "scan",
    mark: "BE",
  },
  {
    id: "013",
    slug: "tools",
    group: "stack",
    name: "Tools",
    role: "How the work gets shipped",
    when: "In use",
    focus: "Git · Linux · GCP · Jira",
    kicker: "Stack",
    summary:
      "Git, Linux, CI/CD, VS Code, IntelliJ, Eclipse, and Google Cloud Platform. Plus Agile, Power BI, Jira, and the Office apps.",
    points: ["Jira for the Scrum teams. Git for everything that has more than one person on it."],
    links: [{ href: "https://github.com/itsmekxdihaa", label: "GitHub" }],
    mode: "diag",
    mark: "TL",
  },
];

const EXPERIENCE = [
  { entry: "005", org: "University of Toronto", role: "Technical Marketing · Sept 2025 – Apr 2026" },
  { entry: "006", org: "UTSC ARISE", role: "Web Manager · June 2025 – Present" },
  { entry: "007", org: "CREATE UofT", role: "Vice President · Sept 2025 – Present" },
  { entry: "008", org: "Freelance", role: "Web developer · Jan 2024 – Present" },
];

const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

const canvas = document.getElementById("dither");
const ctx2d = canvas.getContext("2d", { alpha: false });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeId = "001";
let motionOn = !reduceMotion;
let raf = 0;
let bootFrame = 0;
let lastDraw = 0;
let audioCtx = null;

const workList = document.getElementById("work-list");
const expList = document.getElementById("exp-list");
const stackList = document.getElementById("stack-list");

function byId(id) {
  return ENTRIES.find((entry) => entry.id === id);
}

function renderRows() {
  const work = ENTRIES.filter((entry) => entry.group === "work");
  const stack = ENTRIES.filter((entry) => entry.group === "stack");

  workList.replaceChildren(
    ...work.map((entry) => rowButton(entry, `${entry.role} · ${entry.focus}`))
  );
  stackList.replaceChildren(
    ...stack.map((entry) => rowButton(entry, entry.focus))
  );
  expList.replaceChildren(
    ...EXPERIENCE.map((item) => {
      const entry = byId(item.entry);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "exp-row";
      button.dataset.id = item.entry;
      button.innerHTML = `<span class="mark">${entry.mark}</span><span class="org">${item.org}</span><span class="role">${item.role}</span>`;
      button.addEventListener("click", () => select(item.entry, true));
      return button;
    })
  );
}

function rowButton(entry, sub) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "entry";
  button.dataset.id = entry.id;
  button.innerHTML = `<span class="idx">${entry.id}</span><span class="title">${entry.name}</span><span class="sub">${sub}</span>`;
  button.addEventListener("click", () => select(entry.id, true));
  return button;
}

function select(id, fromUser) {
  const entry = byId(id);
  if (!entry) return;
  activeId = id;
  document.querySelectorAll("[data-id]").forEach((node) => {
    if (node.dataset.id === id) node.setAttribute("aria-current", "true");
    else node.removeAttribute("aria-current");
  });

  document.getElementById("fig").textContent = `Fig. ${entry.id}`;
  document.getElementById("case-title").textContent = entry.name;
  document.getElementById("case-num").textContent = entry.id;
  document.getElementById("case-name").textContent = entry.slug;
  document.getElementById("case-kicker").textContent = entry.kicker;
  document.getElementById("case-summary").textContent = entry.summary;
  document.getElementById("case-role").textContent = entry.role;
  document.getElementById("case-when").textContent = entry.when;
  document.getElementById("case-focus").textContent = entry.focus;

  const points = document.getElementById("case-points");
  points.replaceChildren(
    ...entry.points.map((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      return li;
    })
  );

  const linkWrap = document.getElementById("case-link-wrap");
  linkWrap.replaceChildren();
  const links = entry.links?.length
    ? entry.links
    : entry.href
      ? [{ href: entry.href, label: entry.hrefLabel }]
      : [];
  links.forEach((item) => {
    const link = document.createElement("a");
    link.className = "out";
    link.href = item.href;
    if (!item.href.endsWith(".pdf") && !item.href.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.textContent = `${item.label} ↗`;
    linkWrap.append(link);
  });

  if (location.hash !== `#${entry.slug}`) {
    history.replaceState(null, "", `#${entry.slug}`);
  }

  draw(performance.now(), true);

  if (fromUser) {
    blip();
    if (window.innerWidth <= 920) {
      document.querySelector(".case").scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    }
  }
}

function field(x, y, t, mode, w, h) {
  const nx = x / w;
  const ny = y / h;
  if (mode === "rings") {
    const dx = nx - 0.5;
    const dy = ny - 0.42;
    return 0.5 + 0.5 * Math.sin(Math.hypot(dx, dy) * 26 - t);
  }
  if (mode === "scan") return 0.5 + 0.5 * Math.sin(ny * 36 + nx * 5 - t);
  if (mode === "grid") {
    const gx = Math.abs(((nx * 9) % 1) - 0.5);
    const gy = Math.abs(((ny * 7) % 1) - 0.5);
    return Math.min(gx, gy) * 2.2;
  }
  if (mode === "diag") return 0.5 + 0.5 * Math.sin((nx + ny) * 20 - t * 0.85);
  return 0.5 + 0.5 * Math.sin(nx * 16 + Math.sin(ny * 9 + t) * 3.2);
}

function draw(now, force) {
  if (!force && now - lastDraw < 70) return;
  lastDraw = now;
  const entry = byId(activeId);
  const w = canvas.width;
  const h = canvas.height;
  const image = ctx2d.createImageData(w, h);
  const data = image.data;
  const t = motionOn ? now / 420 : 1.2;
  const cream = [232, 229, 221];
  const blue = [10, 60, 255];
  const black = [12, 12, 11];

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const value = field(x, y, t, entry.mode, w, h) * 78;
      const threshold = BAYER[y & 7][x & 7];
      let color = black;
      if (value > threshold) color = cream;
      else if (value > threshold - 16) color = blue;
      const i = (y * w + x) * 4;
      data[i] = color[0];
      data[i + 1] = color[1];
      data[i + 2] = color[2];
      data[i + 3] = 255;
    }
  }
  ctx2d.putImageData(image, 0, 0);
}

function loop(now) {
  if (motionOn) draw(now, false);
  raf = requestAnimationFrame(loop);
}

function tickClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const text = now.toLocaleTimeString("en-GB", { hour12: false });
  clock.textContent = text;
  clock.dateTime = now.toISOString();
}

function ensureAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function blip() {
  if (document.getElementById("sound").getAttribute("aria-pressed") !== "true") return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.value = 196;
  gain.gain.setValueAtTime(0.04, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}

function tone() {
  const ctx = ensureAudio();
  if (!ctx) return;
  const notes = [196, 247, 294, 392];
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = ctx.currentTime + index * 0.18;
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.05, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.24);
  });
}

function setSound(on) {
  const button = document.getElementById("sound");
  button.setAttribute("aria-pressed", on ? "true" : "false");
  button.textContent = on ? "Sound" : "Muted";
  document.getElementById("audio-state").textContent = on ? "Live" : "Muted";
  if (on) tone();
}

function setTheme(light) {
  document.documentElement.dataset.theme = light ? "light" : "dark";
  const button = document.getElementById("theme");
  button.setAttribute("aria-pressed", light ? "true" : "false");
  button.textContent = light ? "Dark" : "Light";
  try {
    localStorage.setItem("kn-theme", light ? "light" : "dark");
  } catch {
    /* private mode */
  }
}

let scrollLockTimer = 0;

function pinTop() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}

function finishBoot() {
  const bootEl = document.getElementById("boot");
  if (!bootEl || bootEl.classList.contains("is-done")) return;
  clearTimeout(bootFrame);
  clearTimeout(scrollLockTimer);
  document.documentElement.classList.add("boot-lock");
  pinTop();
  bootEl.classList.add("is-done");
  if (!reduceMotion) document.body.classList.add("is-entering");
  scrollLockTimer = window.setTimeout(() => {
    pinTop();
    document.documentElement.classList.remove("boot-lock");
    document.body.classList.remove("is-entering");
  }, reduceMotion ? 0 : 1400);
}

let scrollTravel = 0;
let touchStartY = 0;

function showBoot() {
  const bootEl = document.getElementById("boot");
  if (!bootEl || !bootEl.classList.contains("is-done")) return;
  clearTimeout(scrollLockTimer);
  scrollTravel = 0;
  document.documentElement.classList.remove("boot-lock");
  document.body.classList.remove("is-entering");
  bootEl.classList.remove("is-done");
  const count = document.getElementById("cine-count");
  if (count && !reduceMotion) {
    const started = performance.now();
    function tick(now) {
      if (!count.isConnected || bootEl.classList.contains("is-done")) return;
      const n = Math.min(100, Math.round(((now - started) / 1200) * 100));
      count.textContent = String(n).padStart(3, "0");
      if (n < 100) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}

function bootOpen() {
  const bootEl = document.getElementById("boot");
  return bootEl && !bootEl.classList.contains("is-done");
}

function boot() {
  const bootEl = document.getElementById("boot");
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  pinTop();
  window.addEventListener(
    "wheel",
    (event) => {
      if (bootOpen() || document.documentElement.classList.contains("boot-lock")) {
        event.preventDefault();
      }
    },
    { passive: false, capture: true }
  );
  window.addEventListener(
    "touchmove",
    (event) => {
      if (bootOpen() || document.documentElement.classList.contains("boot-lock")) {
        event.preventDefault();
      }
    },
    { passive: false, capture: true }
  );
  if (bootEl) {
    bootEl.addEventListener(
      "wheel",
      (event) => {
        if (!bootOpen()) return;
        event.preventDefault();
        if (event.deltaY <= 0) return;
        scrollTravel += event.deltaY;
        if (scrollTravel > 80) finishBoot();
      },
      { passive: false }
    );
    bootEl.addEventListener(
      "touchstart",
      (event) => {
        touchStartY = event.changedTouches[0].clientY;
      },
      { passive: true }
    );
    bootEl.addEventListener(
      "touchmove",
      (event) => {
        if (!bootOpen()) return;
        const travel = touchStartY - event.changedTouches[0].clientY;
        if (travel > 48) {
          event.preventDefault();
          finishBoot();
        }
      },
      { passive: false }
    );
  }
  window.addEventListener("keydown", (event) => {
    if (!bootOpen()) return;
    if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      finishBoot();
    }
  });
  if (reduceMotion) {
    finishBoot();
    return;
  }
  const count = document.getElementById("cine-count");
  const started = performance.now();
  function tick(now) {
    if (!count || !count.isConnected) return;
    const n = Math.min(100, Math.round(((now - started) / 1200) * 100));
    count.textContent = String(n).padStart(3, "0");
    if (n < 100) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  followCursor();
}

function glowCursor() {
  const ball = document.getElementById("cursor");
  if (!ball || reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.documentElement.classList.add("glow-cursor");
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let currentX = x;
  let currentY = y;
  let shown = false;

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    if (!shown) {
      shown = true;
      ball.style.opacity = "1";
    }
  });

  function frame() {
    currentX += (x - currentX) * 0.35;
    currentY += (y - currentY) * 0.35;
    ball.style.left = `${currentX}px`;
    ball.style.top = `${currentY}px`;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function followCursor() {
  const tilt = document.getElementById("cine-tilt");
  if (!tilt) return;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let lastMove = 0;

  function onMove(event) {
    lastMove = performance.now();
    targetX = event.clientX / window.innerWidth * 2 - 1;
    targetY = event.clientY / window.innerHeight * 2 - 1;
  }

  window.addEventListener("pointermove", onMove);

  function frame(now) {
    if (!tilt.isConnected) {
      window.removeEventListener("pointermove", onMove);
      return;
    }
    const idle = now - lastMove > 700;
    const aimX = idle ? Math.sin(now / 900) * 0.45 : targetX;
    const aimY = idle ? Math.cos(now / 1200) * 0.22 : targetY;
    currentX += (aimX - currentX) * 0.14;
    currentY += (aimY - currentY) * 0.14;
    if (window.setFaceLook) {
      window.setFaceLook(currentX, currentY);
      tilt.style.transform = "";
    } else {
      const turnY = currentX * 18;
      const turnX = currentY * -12;
      tilt.style.transform = `rotateX(${turnX.toFixed(2)}deg) rotateY(${turnY.toFixed(2)}deg)`;
    }
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function bind() {
  document.getElementById("replay").addEventListener("click", showBoot);
  document.getElementById("sound").addEventListener("click", () => {
    const on = document.getElementById("sound").getAttribute("aria-pressed") !== "true";
    setSound(on);
  });
  document.getElementById("theme").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme !== "light");
  });
  document.getElementById("motion").addEventListener("click", () => {
    motionOn = !motionOn;
    const button = document.getElementById("motion");
    button.setAttribute("aria-pressed", motionOn ? "true" : "false");
    button.textContent = motionOn ? "Hold" : "Run";
    document.getElementById("frame-note").textContent = motionOn
      ? "Ordered dither · 8×8"
      : "Motion held";
    if (!motionOn) draw(performance.now(), true);
  });

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector("button[type='submit']");
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _subject: "Message from Khadija Noor’s site",
      _template: "table",
      _captcha: "false",
    };
    if (!payload.name || !payload.email || !payload.message) return;
    submit.disabled = true;
    formStatus.textContent = "Sending…";
    try {
      const response = await fetch("https://formsubmit.co/ajax/itsmekxdihaa@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.message || "Could not send");
      }
      const note = String(body.message || "");
      if (/activation/i.test(note)) {
        formStatus.textContent =
          "Check itsmekxdihaa@gmail.com and confirm the form. After that, messages come straight there.";
        return;
      }
      form.reset();
      formStatus.textContent = "Sent. It should arrive at itsmekxdihaa@gmail.com.";
    } catch (error) {
      formStatus.textContent = "That didn’t send. Email itsmekxdihaa@gmail.com directly.";
    } finally {
      submit.disabled = false;
    }
  });

  document.addEventListener("keydown", (event) => {
    const tags = ["INPUT", "TEXTAREA"];
    if (tags.includes(document.activeElement?.tagName)) return;
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const index = ENTRIES.findIndex((entry) => entry.id === activeId);
    const next = event.key === "ArrowDown" ? index + 1 : index - 1;
    const entry = ENTRIES[(next + ENTRIES.length) % ENTRIES.length];
    select(entry.id, true);
    document.querySelector(`.entry[data-id="${entry.id}"]`)?.focus();
  });
}

function start() {
  renderRows();
  const fromHash = location.hash.replace("#", "");
  const match = ENTRIES.find((entry) => entry.slug === fromHash);
  select(match ? match.id : "001", false);
  const stored = (() => {
    try {
      return localStorage.getItem("kn-theme");
    } catch {
      return null;
    }
  })();
  if (stored === "light") setTheme(true);
  setSound(false);
  tickClock();
  window.setInterval(tickClock, 1000);
  bind();
  glowCursor();
  boot();
  raf = requestAnimationFrame(loop);
}

start();
