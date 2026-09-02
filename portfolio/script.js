/* ==========================================================================
   SANJIT BHANDARI — PORTFOLIO
   All personal content lives in CONFIG below.
   ========================================================================== */

const CONFIG = {
  profile: {
    name: "Sanjit Bhandari",
    title: "Operations Officer · Developer · Creative Technologist",
    location: "Lalitpur, Nepal",
    status: "Building / Learning / Creating",
    idNumber: "SB-2082-KTM",
    email: "sanjitbhandari2061@gmail.com",
    profileImage: "images/profile.jpg",
    cv: "Sanjit-Bhandari-CV.pdf",
  },

  socials: [
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/sanjit-bhandari-900a3a2b4/" },
    { label: "GitHub",    url: "https://github.com/Sanjit2061/" },
    { label: "Facebook",  url: "https://www.facebook.com/sanjit.bhandari.12382/" },
    { label: "YouTube",   url: "https://youtube.com/@sanjitbhandari-3117?si=4WgPe_nyM6oYCm9j" },
    { label: "Instagram", url: "https://www.instagram.com/who_is_sanjit/" },
    { label: "Email",     url: "mailto:sanjitbhandari2061@gmail.com" },
  ],

  skills: [
    { name: "Python",         detail: "Daily driver — scripting, Django, data cleanup." },
    { name: "Django",         detail: "Auth, ORM, deployment — the backbone of KrishiKart." },
    { name: "JavaScript",     detail: "Vanilla — everything interactive on this page, zero dependencies." },
    { name: "HTML & CSS",     detail: "Semantic structure, responsive layout, no framework crutch." },
    { name: "SQL / SQLite",   detail: "Schema design and queries for real production data." },
    { name: "Git & GitHub",   detail: "Version control, branching, the occasional force-push regret." },
    { name: "Figma / UI-UX",  detail: "Wireframes before code, always." },
    { name: "Graphic Design", detail: "Layouts, visuals, and the odd bit of generative art on the side." },
  ],

  projects: [
    {
      title: "KrishiKart",
      year: "2025 — College Project",
      description: "A Django-based marketplace connecting local Nepali farmers directly to buyers — built solo from schema to deployment, with eSewa payment integration and PythonAnywhere hosting.",
      technologies: ["Django", "Python", "SQLite", "eSewa API", "HTML/CSS"],
      image: "images/project-krishikart.jpg",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Household Management System",
      year: "2025 — Personal Project",
      description: "A web-based system for tracking household expenses, income, savings and budgeting — built with PHP, MySQL, and vanilla front‑end. Practical, used daily.",
      technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      image: "images/project-playground.jpg",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "This Portfolio Website",
      year: "2025 — Personal Project",
      description: "A fully custom, interactive portfolio built from scratch with vanilla JavaScript, elastic physics, and a dark mode toggle — no frameworks, just code.",
      technologies: ["Vanilla JS", "HTML/CSS", "Canvas API", "CSS Physics"],
      image: "images/project-portfolio.jpg",
      liveUrl: "",
      githubUrl: "",
    },
  ],

  timeline: [
    { year: "2023", title: "Began BCA at ACHS", desc: "Bachelor in Computer Application at Asian College of Higher Studies, Lalitpur. Started the journey into computer science.", milestone: false },
    { year: "2023", title: "Joined eSewa in Customer Support", desc: "Started at eSewa in customer support — first real look at how Nepal's digital payments actually work from the ground up.", milestone: false },
    { year: "2025", title: "Moved to Operations at eSewa", desc: "Promoted to Operations Officer — handling reconciliation, escalations, and the edge-cases nobody wrote a policy for.", milestone: false },
    { year: "2025", title: "Built Household Management System", desc: "First practical project — a PHP/MySQL system for tracking family expenses and savings.", milestone: true },
    { year: "2026", title: "Built KrishiKart", desc: "Designed, built, and deployed a local farmer marketplace as a college project with eSewa payment integration.", milestone: true },
    { year: "2026", title: "Built This Portfolio", desc: "Vibe coding, elastic physics, dark mode, and a healthy respect for CSS specificity — all in vanilla JS.", milestone: true },
  ],
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;

/* ==========================================================================
   Populate content from CONFIG
   ========================================================================== */
function renderProfile() {
  $("#cfgName").textContent = CONFIG.profile.name;
  $("#cfgTitle").textContent = CONFIG.profile.title;
  $("#cfgLocation").textContent = CONFIG.profile.location;
  $("#cfgStatus").textContent = CONFIG.profile.status;
  $("#cfgId").textContent = CONFIG.profile.idNumber;
  $("#idPhoto").src = CONFIG.profile.profileImage;
  document.title = `${CONFIG.profile.name} — ${CONFIG.profile.title}`;
}

function renderSocials() {
  const list = $("#socialList");
  list.innerHTML = CONFIG.socials.map(s => `
    <li>
      <a href="${s.url}" target="_blank" rel="noopener" data-cursor-label="${s.label.toUpperCase()}">
        <span>${s.label}</span><span class="soc-arrow">↗</span>
      </a>
    </li>
  `).join("");
}

function renderSkills() {
  const list = $("#skillList");
  list.innerHTML = CONFIG.skills.map((s, i) => `
    <li class="skill-item" tabindex="0">
      <span class="skill-index">${String(i + 1).padStart(2, "0")}</span>
      <span class="skill-name">${s.name}</span>
      <span class="skill-detail">${s.detail}</span>
    </li>
  `).join("");
}

function renderProjects() {
  const wrap = $("#projectList");
  wrap.innerHTML = CONFIG.projects.map((p, i) => `
    <article class="project reveal-up">
      <div class="project-media">
        <img src="${p.image}" alt="${p.title} preview"
             onerror="this.parentElement.style.background='linear-gradient(135deg, var(--cobalt), var(--crimson))'; this.remove();">
      </div>
      <div class="project-copy">
        <span class="project-index">Project ${String(i + 1).padStart(2, "0")}<span class="project-year">${p.year}</span></span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">${p.technologies.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="project-links">
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" data-cursor-label="VIEW">Live ↗</a>` : ""}
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" data-cursor-label="CODE">GitHub ↗</a>` : ""}
          ${(!p.liveUrl && !p.githubUrl) ? `<span class="muted" style="font-family:var(--f-mono); font-size:.78rem;">Links coming soon</span>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  const wrap = $("#timeline");
  wrap.innerHTML = CONFIG.timeline.map(t => `
    <div class="timeline-item reveal-up ${t.milestone ? "is-milestone" : ""}">
      <p class="timeline-year">${t.year}</p>
      <h4 class="timeline-title">${t.title}</h4>
      <p>${t.desc}</p>
    </div>
  `).join("");
}

function updateLocalTime() {
  const el = $("#localTime");
  if (!el) return;
  try {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kathmandu",
    });
    el.textContent = fmt.format(new Date());
  } catch (e) {
    el.textContent = "";
  }
}

/* ==========================================================================
   Hero canvas – dot interaction
   ========================================================================== */
function initHeroCanvas() {
  const canvas = $("#heroCanvas");
  const hero = $(".hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");

  let w, h, dots = [];
  const isMobile = window.innerWidth < 768;
  const GAP = isMobile ? 40 : 26;
  const pointer = { x: -9999, y: -9999 };

  function getDotColor() {
    const isDark = document.body.classList.contains("dark-mode");
    return getComputedStyle(document.documentElement).getPropertyValue("--dot-color").trim() || (isDark ? "#7F9CF5" : "#16171B");
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    w = canvas.width = rect.width * devicePixelRatio;
    h = canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    dots = [];
    const cols = Math.ceil(rect.width / GAP) + 1;
    const rows = Math.ceil(rect.height / GAP) + 1;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({ x: i * GAP, y: j * GAP, ox: i * GAP, oy: j * GAP });
      }
    }
  }

  function draw() {
    const rect = hero.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const dotColor = getDotColor();
    const hoverColor = getComputedStyle(document.documentElement).getPropertyValue("--dot-hover-color").trim() || "#E7344B";

    dots.forEach(d => {
      const dx = d.ox - pointer.x, dy = d.oy - pointer.y;
      const dist = Math.hypot(dx, dy);
      const radius = 160;
      let px = d.ox, py = d.oy, r = 1.3;
      let color = dotColor;
      if (dist < radius) {
        const force = (1 - dist / radius);
        px = d.ox + (dx / (dist || 1)) * force * 22;
        py = d.oy + (dy / (dist || 1)) * force * 22;
        r = 1.3 + force * 2.2;
        color = hoverColor;
      }
      d.x += (px - d.x) * 0.18;
      d.y += (py - d.y) * 0.18;
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = dist < radius ? 0.6 : 0.18;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
  });
  hero.addEventListener("pointerleave", () => { pointer.x = -9999; pointer.y = -9999; });

  resize();
  if (!prefersReducedMotion) requestAnimationFrame(draw);
}

/* ==========================================================================
   Nav
   ========================================================================== */
function initNav() {
  const toggle = $("#navToggle");
  const menu = $("#mobileMenu");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  $("#year").textContent = `© ${new Date().getFullYear()}`;
}

/* ==========================================================================
   Page transitions
   ========================================================================== */
function initPageTransitions() {
  const curtain = $("#pageCurtain");
  if (!curtain) { document.body.classList.remove("is-loading"); return; }

  const reveal = () => {
    document.body.classList.remove("is-loading");
    curtain.style.pointerEvents = "none";
    setTimeout(() => { curtain.style.display = "none"; }, 650);
  };

  if (prefersReducedMotion) {
    document.body.classList.remove("is-loading");
    curtain.style.display = "none";
    return;
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      curtain.classList.add("is-wiping");
      reveal();
    }, 260);
  });
}

/* ==========================================================================
   Custom cursor
   ========================================================================== */
function initCursor() {
  if (isTouch) return;
  document.documentElement.classList.add("has-hover");
  const cursor = $("#cursor");
  const label = $("#cursorLabel");
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let cx = x, cy = y;

  window.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; });

  function loop() {
    cx += (x - cx) * 0.22;
    cy += (y - cy) * 0.22;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("a, button, .skill-item, .project, .timeline-item, .social-dock a");
    if (target) {
      cursor.classList.add("is-active");
      label.textContent = target.dataset.cursorLabel || "";
    }
  });
  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest("a, button, .skill-item, .project, .timeline-item, .social-dock a");
    if (target) {
      cursor.classList.remove("is-active");
      label.textContent = "";
    }
  });

  const card = $("#idCard");
  if (card) {
    card.addEventListener("pointerdown", () => { cursor.classList.add("is-grab"); });
    card.addEventListener("pointerup", () => { cursor.classList.remove("is-grab"); });
    card.addEventListener("pointercancel", () => { cursor.classList.remove("is-grab"); });
  }
}

/* ==========================================================================
   Scroll reveals
   ========================================================================== */
function initReveals() {
  const els = $$(".reveal-up, .reveal-lines");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));
}

function wrapStatementWords() {
  const el = $(".about-statement");
  if (!el) return;
  el.classList.add("reveal-lines");

  const wrapTextNode = (text) =>
    text.split(/(\s+)/).filter(Boolean).map(chunk =>
      /^\s+$/.test(chunk) ? chunk : `<span>${chunk}</span>`
    ).join("");

  const walk = (node) => {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const wrapper = document.createElement("span");
        wrapper.innerHTML = wrapTextNode(child.textContent);
        child.replaceWith(...wrapper.childNodes);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
}

/* ==========================================================================
   Scroll FX
   ========================================================================== */
function initScrollFX() {
  if (prefersReducedMotion) return;

  const featureMedia = $("#featureMedia");
  const featureSection = $("#feature");
  const splitDivider = $("#splitDivider");
  const splitSection = $("#splitSection");
  if (!featureMedia && !splitDivider) return;

  const progressWithin = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    return Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
  };

  let ticking = false;
  function update() {
    ticking = false;
    if (featureMedia && featureSection) {
      const p = progressWithin(featureSection);
      const scale = 1 + p * 0.1;
      const y = (p - 0.5) * -70;
      featureMedia.style.transform = `translateY(${y}px) scale(${scale})`;
    }
    if (splitDivider && splitSection) {
      const rect = splitSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.8 - rect.top) / (rect.height * 0.5)));
      splitDivider.style.transform = `scaleY(${0.3 + p * 0.7})`;
    }
  }
  function onScroll() {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
}

/* ==========================================================================
   ID Card Physics – SHARED COORDINATE SYSTEM
   ========================================================================== */
function initIdCardPhysics() {
  const rig = $("#idRig");
  const card = $("#idCard");
  const svg = $("#lanyardSvg");
  const ropeLeft = $("#ropeLeft");
  const ropeRight = $("#ropeRight");
  const ropeLeftHighlight = $("#ropeLeftHighlight");
  const ropeRightHighlight = $("#ropeRightHighlight");
  const ropeClipBottom = $("#ropeClipBottom");
  const ropeClipHoleBottom = $("#ropeClipHoleBottom");
  const hint = $("#dragHint");

  if (!rig || !card || !svg) return;

  // --- Shared coordinate system ---
  // All positions are in the SVG viewBox coordinate space (0–400 x 0–400)
  // The card's attachment point is at (200, 195) in the viewBox when at rest.
  // We track an offset from this rest position.

  const REST_ATTACH_X = 200;
  const REST_ATTACH_Y = 195;

  // Left and right rope origins (fixed)
  const LEFT_ORIGIN_X = 180;
  const LEFT_ORIGIN_Y = 109;
  const RIGHT_ORIGIN_X = 220;
  const RIGHT_ORIGIN_Y = 109;

  // Physics state (offset in viewBox coordinates)
  let pos = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let dragging = false;
  let pointerId = null;
  let rafId = null;

  let swingAngle = 0;
  let swingVelocity = 0;

  const SPRING = 0.06;
  const DRAG_SPRING = 0.28;
  const DAMPING = 0.84;
  const MAX_DRAG = 280;
  const MAX_ROTATE = 22;
  const SWING_DAMPING = 0.93;
  const SWING_STIFFNESS = 0.025;

  // Frame bounds (in viewBox coordinates)
  let frameBounds = { minX: -Infinity, maxX: Infinity, minY: -Infinity, maxY: Infinity };

  // Convert between viewBox and DOM coordinates
  function getViewBoxToDomScale() {
    const svgRect = svg.getBoundingClientRect();
    const viewBoxWidth = 400; // from viewBox attribute
    const viewBoxHeight = 400;
    return { scaleX: svgRect.width / viewBoxWidth, scaleY: svgRect.height / viewBoxHeight };
  }

  function recomputeFrameBounds() {
    const svgRect = svg.getBoundingClientRect();
    const heroEl = rig.closest(".hero");
    if (!heroEl) return;
    const heroRect = heroEl.getBoundingClientRect();
    const { scaleX, scaleY } = getViewBoxToDomScale();

    // Get the card's current DOM position
    const cardRect = card.getBoundingClientRect();
    // Approximate the attachment point in DOM space
    const attachDomX = cardRect.left + cardRect.width * 0.5;
    const attachDomY = cardRect.top;

    // Convert attachment point to viewBox space (accounting for offset)
    const attachViewX = REST_ATTACH_X + pos.x;
    const attachViewY = REST_ATTACH_Y + pos.y;

    // Convert hero bounds to viewBox space
    const leftView = (heroRect.left - svgRect.left) / scaleX;
    const rightView = (heroRect.right - svgRect.left) / scaleX;
    const topView = (heroRect.top - svgRect.top) / scaleY;
    const bottomView = (heroRect.bottom - svgRect.top) / scaleY;

    const margin = 20;
    frameBounds = {
      minX: leftView + margin - REST_ATTACH_X,
      maxX: rightView - margin - REST_ATTACH_X,
      minY: topView + margin - REST_ATTACH_Y,
      maxY: bottomView - margin - REST_ATTACH_Y,
    };
  }

  const SOFT_ZONE = 0.75;

  function applyAxisElastic(v, min, max) {
    if (v >= 0) {
      const limit = max === Infinity ? MAX_DRAG : max;
      const soft = limit * SOFT_ZONE;
      if (v > soft) {
        const over = v - soft;
        v = soft + Math.log(1 + over) * 6;
      }
      return Math.min(v, limit);
    } else {
      const limit = min === -Infinity ? -MAX_DRAG : min;
      const soft = limit * SOFT_ZONE;
      if (v < soft) {
        const over = soft - v;
        v = soft - Math.log(1 + over) * 6;
      }
      return Math.max(v, limit);
    }
  }

  function clampToElastic(dx, dy) {
    return {
      x: applyAxisElastic(dx, frameBounds.minX, frameBounds.maxX),
      y: applyAxisElastic(dy, frameBounds.minY, frameBounds.maxY),
    };
  }

  function updateRopeAndClip() {
    // Current attachment point in viewBox
    const attachX = REST_ATTACH_X + pos.x;
    const attachY = REST_ATTACH_Y + pos.y;

    // --- Left rope ---
    if (ropeLeft) {
      const midX = (LEFT_ORIGIN_X + attachX) / 2 + pos.x * 0.05;
      const midY = (LEFT_ORIGIN_Y + attachY) / 2 + 12 + pos.y * 0.07;
      ropeLeft.setAttribute("d", `M ${LEFT_ORIGIN_X} ${LEFT_ORIGIN_Y} Q ${midX} ${midY} ${attachX - 10} ${attachY - 5}`);
    }
    if (ropeLeftHighlight) {
      const midX = (LEFT_ORIGIN_X + attachX) / 2 + pos.x * 0.05;
      const midY = (LEFT_ORIGIN_Y + attachY) / 2 + 12 + pos.y * 0.07;
      ropeLeftHighlight.setAttribute("d", `M ${LEFT_ORIGIN_X} ${LEFT_ORIGIN_Y} Q ${midX} ${midY} ${attachX - 10} ${attachY - 5}`);
    }

    // --- Right rope ---
    if (ropeRight) {
      const midX2 = (RIGHT_ORIGIN_X + attachX) / 2 + pos.x * 0.05;
      const midY2 = (RIGHT_ORIGIN_Y + attachY) / 2 + 12 + pos.y * 0.07;
      ropeRight.setAttribute("d", `M ${RIGHT_ORIGIN_X} ${RIGHT_ORIGIN_Y} Q ${midX2} ${midY2} ${attachX + 10} ${attachY - 5}`);
    }
    if (ropeRightHighlight) {
      const midX2 = (RIGHT_ORIGIN_X + attachX) / 2 + pos.x * 0.05;
      const midY2 = (RIGHT_ORIGIN_Y + attachY) / 2 + 12 + pos.y * 0.07;
      ropeRightHighlight.setAttribute("d", `M ${RIGHT_ORIGIN_X} ${RIGHT_ORIGIN_Y} Q ${midX2} ${midY2} ${attachX + 10} ${attachY - 5}`);
    }

    // --- Clip ---
    if (ropeClipBottom) {
      const clipX = attachX - 25;
      const clipY = attachY - 9;
      ropeClipBottom.setAttribute("x", clipX);
      ropeClipBottom.setAttribute("y", clipY);
    }
    if (ropeClipHoleBottom) {
      const holeX = attachX - 10;
      const holeY = attachY - 5;
      ropeClipHoleBottom.setAttribute("x", holeX);
      ropeClipHoleBottom.setAttribute("y", holeY);
    }
  }

  function render() {
    const rot = Math.max(-MAX_ROTATE, Math.min(MAX_ROTATE, pos.x * 0.10 + swingAngle * 2.2));
    const scale = 1 + Math.min(Math.hypot(pos.x, pos.y) / MAX_DRAG, 1) * 0.035;

    // Use viewBox coordinates to scale the card transform
    const { scaleX, scaleY } = getViewBoxToDomScale();
    const domX = pos.x * scaleX;
    const domY = pos.y * scaleY;

    card.style.transform = `translate(${domX}px, ${domY}px) rotate(${rot}deg) scale(${scale})`;
    updateRopeAndClip();
  }

  function tick() {
    const springStrength = dragging ? DRAG_SPRING : SPRING;
    const dx = target.x - pos.x;
    const dy = target.y - pos.y;

    vel.x += dx * springStrength;
    vel.y += dy * springStrength;
    vel.x *= DAMPING;
    vel.y *= DAMPING;

    pos.x += vel.x;
    pos.y += vel.y;

    // Swing physics
    if (!dragging) {
      swingVelocity += -swingAngle * SWING_STIFFNESS;
      swingVelocity *= SWING_DAMPING;
      swingAngle += swingVelocity;
      swingVelocity += vel.x * 0.006;
    } else {
      const targetSwing = pos.x * 0.012;
      swingVelocity += (targetSwing - swingAngle) * 0.035;
      swingVelocity *= 0.92;
      swingAngle += swingVelocity;
    }

    render();

    const settled = !dragging &&
      Math.hypot(vel.x, vel.y) < 0.01 &&
      Math.hypot(pos.x, pos.y) < 0.02 &&
      Math.abs(swingAngle) < 0.006 &&
      Math.abs(swingVelocity) < 0.001;

    if (settled) {
      pos.x = 0; pos.y = 0;
      swingAngle = 0;
      swingVelocity = 0;
      render();
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function ensureLoop() {
    if (rafId === null) rafId = requestAnimationFrame(tick);
  }

  let startPointer = { x: 0, y: 0 };
  let startPos = { x: 0, y: 0 };

  function onPointerDown(e) {
    if (pointerId !== null) return;
    pointerId = e.pointerId;
    dragging = true;
    card.classList.add("is-dragging");
    card.setPointerCapture(pointerId);

    // Store pointer start in DOM coords
    startPointer = { x: e.clientX, y: e.clientY };
    startPos = { x: pos.x, y: pos.y };

    recomputeFrameBounds();
    document.body.classList.add("is-grabbing-card");
    if (hint) hint.style.opacity = "0";
    if (!isTouch) $("#cursor")?.classList.add("is-grab");
    swingVelocity *= 0.4;
  }

  window.addEventListener("resize", () => { if (!dragging) recomputeFrameBounds(); });

  function onPointerMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;

    // Convert pointer delta to viewBox coordinates
    const { scaleX, scaleY } = getViewBoxToDomScale();
    const dxDom = e.clientX - startPointer.x;
    const dyDom = e.clientY - startPointer.y;
    const rawDx = startPos.x + dxDom / scaleX * 0.85;
    const rawDy = startPos.y + dyDom / scaleY * 0.50;

    const clamped = clampToElastic(rawDx, rawDy);
    target = clamped;
    ensureLoop();
  }

  function onPointerUp(e) {
    if (e.pointerId !== pointerId) return;
    dragging = false;
    pointerId = null;
    card.classList.remove("is-dragging");
    document.body.classList.remove("is-grabbing-card");
    if (!isTouch) $("#cursor")?.classList.remove("is-grab");
    target = { x: 0, y: 0 };
    swingVelocity += pos.x * 0.035 + vel.x * 0.05;
    ensureLoop();
    setTimeout(() => {
      if (hint) hint.style.opacity = "0.5";
    }, 2000);
  }

  card.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);

  // Hover tilt
  if (!isTouch && !prefersReducedMotion) {
    rig.addEventListener("pointermove", (e) => {
      if (dragging) return;
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      target = { x: relX * -5, y: relY * -4 };
      ensureLoop();
    });
    rig.addEventListener("pointerleave", () => {
      if (dragging) return;
      target = { x: 0, y: 0 };
      ensureLoop();
    });
  }

  // Keyboard support
  card.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    target = { x: 0, y: 35 };
    ensureLoop();
    setTimeout(() => {
      target = { x: 0, y: 0 };
      swingVelocity = 2.0;
      ensureLoop();
    }, 200);
  });

  render();
}

/* ==========================================================================
   Dark Mode Toggle
   ========================================================================== */
function initDarkMode() {
  const toggle = document.getElementById("darkToggle");
  if (!toggle) return;

  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
  });
}

/* ==========================================================================
   Back to Top
   ========================================================================== */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.id = "backToTop";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  let lastScroll = 0;
  const threshold = 400;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > threshold) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
    lastScroll = currentScroll;
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   Image loading
   ========================================================================== */
function initImageLoading() {
  const images = $$("img");
  images.forEach(img => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => { img.classList.add("loaded"); });
      img.addEventListener("error", () => { img.classList.add("loaded"); });
    }
  });
}

/* ==========================================================================
   ID Photo fallback
   ========================================================================== */
function initIdPhotoFallback() {
  const photo = document.getElementById("idPhoto");
  if (!photo) return;
  photo.addEventListener("error", () => {
    const parent = photo.parentElement;
    if (parent) { parent.classList.add("id-photo--empty"); }
  });
  if (!photo.complete || photo.naturalWidth === 0) {
    const parent = photo.parentElement;
    if (parent) { parent.classList.add("id-photo--empty"); }
  }
}

/* ==========================================================================
   Contact form
   ========================================================================== */
function initContactForm() {
  const form = $("#contactForm");
  const note = $("#formNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cName").value.trim();
    const email = $("#cEmail").value.trim();
    const message = $("#cMessage").value.trim();
    if (!name || !email || !message) {
      note.textContent = "Fill in every field first — I'd like to actually reply.";
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONFIG.profile.email}?subject=${subject}&body=${body}`;
    note.textContent = "Opening your email client…";
  });
}


function initCopyProtection() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("copy", (e) => e.preventDefault());
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  renderProfile();
  renderSocials();
  renderSkills();
  renderProjects();
  renderTimeline();
  updateLocalTime();
  setInterval(updateLocalTime, 30000);

  initHeroCanvas();
  initNav();
  initCursor();
  wrapStatementWords();
  initReveals();
  initScrollFX();
  initIdCardPhysics();
  initContactForm();
  initDarkMode();
  initBackToTop();
  initImageLoading();
  initIdPhotoFallback();
  initCopyProtection();
});