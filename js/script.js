/* =============================================================
   VINAYAK BENAKE | GAME ANIMATOR — interactive resume
   -------------------------------------------------------------
   ALL EDITABLE CONTENT LIVES IN `DATA` BELOW. The page rebuilds
   itself from it. See README.md for step-by-step instructions.
   ============================================================= */

const DATA = {
  person: {
    name: "Vinayak Benake",
    title: "Game Animator",
    subtitle: "2D Animator",
    tagline: "Bringing Characters to Life Through Movement.",
    company: "ZVKY Design Studio",
    since: "2020",
    specialty: "2D Character Animation",
    baseShort: "Kolhapur, India",
    location: "Mangaon, Chandgad, Kolhapur 416507",
    email: "benakevinayak@gmail.com",
    phoneDisplay: "+91 86004 89393",
    phoneTel: "+918600489393",
    linkedin: "https://www.linkedin.com/in/vinayakbenake",
    portfolio: "https://drive.google.com/file/d/1ocyQ55XvDARAm6TXaKOn9muolZ92CsAs/view?usp=drive_link",
    portfolioLabel: "Work Reel",
    resumePdf: "assets/documents/resume.pdf",
    /* Your public address once deployed, e.g. "https://your-username.github.io/vinayak-resume/".
       Used by Copy Link and Share. Leave "" to use the address the page is opened from. */
    siteUrl: "",
  },

  /* false hides the amber "End date to confirm" badge once dates are confirmed */
  showConfirmFlags: true,
  /* false hides the dashed "Slot open" cards for showreel categories without media */
  showEmptySlots: true,
  /* true: YouTube/Drive play inside the page. false: play opens them in a new tab */
  embedPlayers: true,

  bio: [
    "Game Animator at <strong>ZVKY Design Studio</strong>, building on hands-on 2D character animation experience in studio production since 2020.",
    "Before moving into games I animated on kids’ animated series at Tip Tales India and Reliance Animation Studios — character animation, lip-sync and shot execution, primarily in Adobe Animate — on titles including <strong>Piku and Tuki</strong>, <strong>Little Singham</strong> and <strong>Smashing Simba</strong>.",
    "Comfortable working in studio pipelines, meeting deadlines and collaborating with teams. Currently exploring AI-assisted tools to improve workflow efficiency.",
  ],

  focus: ["Character Animation", "Game Animation", "Lip-Sync", "Shot Execution", "Studio Pipelines", "AI-Assisted Workflow"],

  stats: [
    { k: "Active since", v: "2020", n: "Professional animation" },
    { k: "Studios", v: "3", n: "ZVKY · Tip Tales · Reliance" },
    { k: "Series", v: "7", n: "Animated series credited" },
    { k: "Class", v: "GAME", n: "Animator at ZVKY" },
  ],

  education: [
    { when: "2019–20", title: "Diploma in VFX and Animation", where: "Crescents Animation & VFX" },
    { when: "2018–19", title: "B.Com", where: "" },
    { when: "2018–19", title: "HSC", where: "" },
    { when: "2016–17", title: "SSC", where: "" },
  ],

  /* Newest first. status: "live" (current job) or "done".
     end: null + confirmEnd: true shows an "End date to confirm" flag. */
  missions: [
    {
      code: "Mission 03", status: "live",
      role: "Game Animator", company: "ZVKY Design Studio",
      start: "March 2026", end: "Present",
      brief: ["Creating game animation for the studio’s game projects, working in Spine."],
      objectivesLabel: "", objectives: [], open: true,
    },
    {
      code: "Mission 02", status: "done",
      role: "2D Animator (Senior)", company: "Tip Tales India Pvt. Ltd.",
      start: "2023", end: null,          // ← add the end date, e.g. "Feb 2026"
      confirmEnd: true,
      brief: ["Worked on the Piku and Tuki series, contributing character animation to the show."],
      objectivesLabel: "Production",
      objectives: [{ t: "Piku and Tuki", d: "Animated series." }],
      open: true,
    },
    {
      code: "Mission 01", status: "done",
      role: "2D Animator (Mid)", company: "Reliance Animation Studios",
      start: "2020", end: "2023",
      brief: ["Animated across multiple kids’ series in the studio pipeline."],
      objectivesLabel: "Productions",
      objectives: [
        { t: "Little Singham", d: "Key role animating scenes for the popular series." },
        { t: "Smashing Simba", d: "Dynamic animation for the action-packed series." },
        { t: "Golmaal Jr.", d: "Animation support for the comedy series’ characters." },
        { t: "Bhaiyaji Balwan", d: "Character animation for the series." },
        { t: "Baby Little Singham", d: "Character animation for the spin-off series." },
        { t: "Pandeyji Pehelwan", d: "Character animation for the series." },
      ],
      open: false,
    },
  ],

  /* Skill categories → colour */
  skillGroups: {
    Core: "#FF8A24",
    Craft: "#20D9E8",
    Production: "#884DFF",
    Game: "#287BFF",
  },

  /* x / y place a node on a 1000 × 620 map; `from` draws its connector */
  skills: [
    { id: "core", name: "2D Character Animation", group: "Core", x: 500, y: 95, core: true, icon: "figure",
      desc: "The foundation: bringing characters to life frame by frame for studio productions.",
      src: "Resume — professional 2D animation since 2020 across seven animated series." },
    { id: "shot", name: "Shot Execution", group: "Production", x: 160, y: 300, from: "core", icon: "frame",
      desc: "Taking shots from brief to finished animation inside a studio pipeline.",
      src: "Resume — listed as a core skill." },
    { id: "prod", name: "Animation Production", group: "Production", x: 160, y: 480, from: "shot", icon: "layers",
      desc: "Working in studio pipelines, meeting deadlines and collaborating with teams.",
      src: "Resume — Tip Tales India and Reliance Animation Studios." },
    { id: "move", name: "Character Movement", group: "Craft", x: 380, y: 300, from: "core", icon: "arrow",
      desc: "Body mechanics and acting that make a character feel weighted and alive.",
      src: "Character animation on series production." },
    { id: "cycles", name: "Walk & Run Cycles", group: "Craft", x: 380, y: 480, from: "move", icon: "loop",
      desc: "Looping locomotion built for reuse — a staple of both series and game animation.",
      src: "Character animation on series and game production." },
    { id: "timing", name: "Animation Timing", group: "Craft", x: 590, y: 300, from: "core", icon: "clock",
      desc: "Spacing and timing choices that sell weight, comedy and impact.",
      src: "Shot work across studio productions." },
    { id: "lipsync", name: "Lip-Sync", group: "Craft", x: 590, y: 480, from: "timing", icon: "wave",
      desc: "Matching mouth shapes and performance to dialogue and songs.",
      src: "Resume — listed as a core skill; series and nursery-rhyme work." },
    { id: "game", name: "Game Animation", group: "Game", x: 825, y: 300, from: "core", icon: "pad",
      desc: "Animation built for interactive use — loops, states and game-ready exports.",
      src: "Current role — Game Animator, ZVKY Design Studio (March 2026 – present)." },
    { id: "idle", name: "Idle Animation", group: "Game", x: 745, y: 480, from: "game", icon: "pulse",
      desc: "Seamless idle loops that keep characters alive between actions.",
      src: "Game animation work at ZVKY Design Studio." },
    { id: "spine", name: "Spine Animation", group: "Game", x: 905, y: 480, from: "game", icon: "bone",
      desc: "Skeletal 2D animation in Spine for game-ready, runtime-friendly assets.",
      src: "Current game animation work in Spine." },
  ],

  /* Tiers keep the proficiency wording from the resume.
     cls: "" (orange) | "tier--game" (cyan) | "tier--basic" (purple) | "tier--utility" (blue) */
  loadout: [
    { tier: "Primary Arsenal", note: "Core production tools", cls: "",
      items: [
        { code: "An", name: "Adobe Animate", note: "Main tool for character animation, lip-sync and shot work.", tag: "Primary" },
        { code: "Fl", name: "Adobe Flash", note: "Timeline-based 2D animation.", tag: "Primary" },
        { code: "Ps", name: "Adobe Photoshop", note: "Image editing and asset preparation.", tag: "Primary" },
        { code: "Ai", name: "Adobe Illustrator", note: "Vector artwork.", tag: "Primary" },
      ] },
    { tier: "Game Rig", note: "Used in current game animation work", cls: "tier--game",
      items: [
        { code: "Sp", name: "Spine", note: "Skeletal 2D animation for games.", tag: "In use · ZVKY" },
      ] },
    { tier: "Support Gear", note: "Basic proficiency", cls: "tier--basic",
      items: [
        { code: "Pr", name: "Adobe Premiere Pro", note: "Editing and assembly.", tag: "Basic proficiency" },
        { code: "Ae", name: "Adobe After Effects", note: "Compositing and motion.", tag: "Basic proficiency" },
        { code: "Bl", name: "Blender", note: "3D fundamentals.", tag: "Basic proficiency" },
      ] },
    { tier: "Utility", note: "Workflow enhancement", cls: "tier--utility",
      items: [
        { code: "AI", name: "AI-Assisted Creative Tools", note: "Exploring AI tools to improve workflow efficiency.", tag: "Utility" },
      ] },
  ],

  categories: [
    { id: "all", label: "All" },
    { id: "reels", label: "Work Reels" },
    { id: "series", label: "Series" },
    { id: "rhymes", label: "Rhymes" },
    { id: "stories", label: "Stories" },
    { id: "ai", label: "AI Cinematic" },
    { id: "game", label: "Game Character Animation" },
    { id: "idle", label: "Idle Animation" },
    { id: "cycles", label: "Walk & Run Cycles" },
    { id: "spine", label: "Spine Animation" },
  ],

  /* type: youtube { yt } | drive { drive } | mp4 { src, poster } | gif { src } */
  replays: [
    { title: "Work Reel", cat: "reels", type: "drive", drive: "1ocyQ55XvDARAm6TXaKOn9muolZ92CsAs",
      desc: "Showreel of 2D animation work.",
      link: "https://drive.google.com/file/d/1ocyQ55XvDARAm6TXaKOn9muolZ92CsAs/view?usp=drive_link" },
    { title: "Piku & Tuki — Episode", cat: "series", type: "youtube", yt: "TLPYcSUPNLY",
      desc: "An episode from the Piku and Tuki series." },
    { title: "Piku & Tuki — Nursery Rhymes", cat: "rhymes", type: "youtube", yt: "_a9Pw3-0Oso",
      desc: "Nursery rhymes from the Piku and Tuki series." },
    { title: "Ghode Ka Hatoda Rhymes", cat: "rhymes", type: "youtube", yt: "MiocKIiiM40",
      desc: "Rhyme animation." },
    { title: "Cinderella", cat: "stories", type: "youtube", yt: "TyBa2DLGi0g",
      desc: "Story animation." },
    { title: "AI Cinematic Work Reel", cat: "ai", type: "drive", drive: "12LCcYhR4Ezg9rR0twIb1w8WT8M9Q2cD0",
      desc: "Cinematic reel made with AI-assisted tools.",
      link: "https://drive.google.com/file/d/12LCcYhR4Ezg9rR0twIb1w8WT8M9Q2cD0/view?usp=drivesdk" },

    /* Add your own work, e.g.
    { title: "Hero Idle Loop", cat: "idle", type: "mp4",
      src: "assets/videos/hero-idle.mp4", poster: "assets/thumbnails/hero-idle.jpg", desc: "Spine idle loop." },
    { title: "Run Cycle", cat: "cycles", type: "gif", src: "assets/gifs/run-cycle.gif", desc: "2D run cycle." },
    */
  ],

  slots: [
    { cat: "game", title: "Game Character Animation", hint: "assets/videos/" },
    { cat: "idle", title: "Idle Animation", hint: "assets/gifs/" },
    { cat: "cycles", title: "Walk & Run Cycles", hint: "assets/gifs/" },
    { cat: "spine", title: "Spine Animation", hint: "assets/videos/" },
  ],

  workflow: [
    { name: "Reference Study", desc: "Gathering video reference, acting choices and style targets before setting a key — the brief, the character and what the motion needs to say." },
    { name: "Character Preparation", desc: "Breaking the design into clean, named parts and layers so the character can move without the artwork falling apart." },
    { name: "Rigging", desc: "Building the rig — bones, pivots and controls — that drives the animation, in Animate or Spine." },
    { name: "Animation Blocking", desc: "Key poses and timing first. Readability and silhouette are locked in before any polish." },
    { name: "Refinement", desc: "Breakdowns, overlap, follow-through, easing and lip-sync, until the motion feels weighted and alive." },
    { name: "Final Export", desc: "Exporting to the target: rendered shots for series production, or game-ready runtime data and loops for engines." },
  ],
};

/* =============================================================
   APP
   ============================================================= */
(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = () => typeof window.gsap !== "undefined";
  const motion = () => hasGsap() && !reduced;
  const isMobileTree = () => window.matchMedia("(max-width: 760px)").matches;
  const P = DATA.person;
  const pad2 = (n) => String(n).padStart(2, "0");

  const ICONS = {
    figure: '<circle cx="12" cy="5" r="2.2"/><path d="M12 8v7m0 0l-3.5 6M12 15l3.5 6M6 11l6-2 6 2"/>',
    frame: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 5v4M16 5v4"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    arrow: '<path d="M4 18c4-1 6-5 8-9s4-5 8-5M15 4h5v5"/>',
    loop: '<path d="M4 12a8 8 0 0114-5.3L20 9M20 12a8 8 0 01-14 5.3L4 15"/><path d="M20 4v5h-5M4 20v-5h5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
    wave: '<path d="M3 12h2l2-5 3 10 3-14 3 12 2-3h3"/>',
    pad: '<path d="M7 8h10a4 4 0 014 4v1a4 4 0 01-7 2.6h-4A4 4 0 013 13v-1a4 4 0 014-4z"/><path d="M8 11v3M6.5 12.5h3M16 12h.01M18 13.5h.01"/>',
    pulse: '<path d="M3 12h4l2-4 3 8 2-4h7"/>',
    bone: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M7.4 16.6l9.2-9.2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>',
    play: '<path d="M7 4l13 8-13 8z"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
    download: '<path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
  };
  const icon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ""}</svg>`;

  /* ---------- toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("is-on");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("is-on"), 2400);
  }

  /* ---------- sharing ---------- */
  const siteUrl = () => P.siteUrl || (location.protocol.startsWith("http") ? location.origin + location.pathname : location.href.split("#")[0]);
  async function copyText(text, okMsg) {
    try { await navigator.clipboard.writeText(text); toast(okMsg); return true; }
    catch (_) {
      const f = $("#linkField");
      f.value = text; f.select();
      try { if (document.execCommand("copy")) { toast(okMsg); return true; } } catch (_) {}
      toast("Select the link and copy it");
      return false;
    }
  }
  async function sharePortfolio() {
    const data = { title: `${P.name} | ${P.title}`, text: `${P.name} — ${P.title} portfolio`, url: siteUrl() };
    if (navigator.share) {
      try { await navigator.share(data); return; } catch (e) { if (e && e.name === "AbortError") return; }
    }
    copyText(data.url, "Link copied — paste it anywhere to share");
  }
  const ACTIONS = [
    { id: "email", label: "Email Me", cls: "btn--orange", icon: "mail", href: () => `mailto:${P.email}?subject=${encodeURIComponent("Hello " + P.name.split(" ")[0])}` },
    { id: "copy", label: "Copy Link", cls: "btn--blue", icon: "link" },
    { id: "share", label: "Share Portfolio", cls: "btn--purple", icon: "share" },
    { id: "resume", label: "Download Resume", cls: "btn--cyan", icon: "download", href: () => P.resumePdf, download: true },
    { id: "linkedin", label: "LinkedIn", cls: "btn--ghost", icon: "linkedin", href: () => P.linkedin, external: true },
  ];
  const actionHTML = (a) => a.href
    ? `<a class="btn ${a.cls}" data-action="${a.id}" href="${esc(a.href())}"${a.download ? ` download="${esc(P.name.replace(/\s+/g, "_"))}_Resume.pdf"` : ""}${a.external ? ' target="_blank" rel="noopener"' : ""}>${icon(a.icon)}<span>${a.label}</span></a>`
    : `<button type="button" class="btn ${a.cls}" data-action="${a.id}">${icon(a.icon)}<span>${a.label}</span></button>`;

  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-action]");
    if (!a) return;
    const id = a.dataset.action;
    if (id === "copy") { e.preventDefault(); copyText(siteUrl(), "Portfolio link copied"); }
    if (id === "share") { e.preventDefault(); sharePortfolio(); }
    if (id === "copy-email") { e.preventDefault(); copyText(P.email, "Email copied"); }
  });

  /* ---------- DIALOGS ---------- */
  const dlg = { open: null, opener: null };
  const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

  function openDialog(id, opener) {
    const el = document.getElementById(id);
    if (!el) return;
    if (dlg.open && dlg.open !== el) closeDialog(true);
    dlg.open = el; dlg.opener = opener || document.activeElement;
    $("#scrim").hidden = false; el.hidden = false;
    document.body.classList.add("is-locked");
    $$("[data-open]").forEach((b) => b.setAttribute("aria-expanded", b.dataset.open + "Panel" === id));
    const card = $(".dialog__card", el);
    $(".dialog__body", el).scrollTop = 0;
    if (motion()) {
      gsap.fromTo("#scrim", { opacity: 0 }, { opacity: 1, duration: .25 });
      gsap.fromTo(card, { y: 28, scale: .96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .42, ease: "back.out(1.4)", clearProps: "transform,opacity" });
      const items = $$(".menu-list a, .action-grid .btn", el);
      if (items.length) gsap.from(items, { x: -14, opacity: 0, duration: .35, stagger: .03, delay: .08, ease: "power2.out", clearProps: "transform,opacity" });
    }
    const first = $("[data-close]", el);
    setTimeout(() => (first || $(FOCUSABLE, el))?.focus({ preventScroll: true }), 30);
  }
  function closeDialog(instant) {
    const el = dlg.open;
    if (!el) return;
    const done = () => {
      el.hidden = true; $("#scrim").hidden = true;
      document.body.classList.remove("is-locked");
      $$("[data-open]").forEach((b) => b.setAttribute("aria-expanded", "false"));
    };
    dlg.open = null;
    if (motion() && !instant) {
      gsap.to("#scrim", { opacity: 0, duration: .2 });
      gsap.to($(".dialog__card", el), { y: 18, scale: .97, opacity: 0, duration: .22, ease: "power2.in", onComplete: () => { done(); gsap.set($(".dialog__card", el), { clearProps: "all" }); } });
    } else done();
    if (dlg.opener && dlg.opener.focus && !instant) dlg.opener.focus({ preventScroll: true });
  }
  function initDialogs() {
    document.addEventListener("click", (e) => {
      const o = e.target.closest("[data-open]");
      if (o) { openDialog(o.dataset.open + "Panel", o); return; }
      if (e.target.closest("[data-close]")) { closeDialog(); return; }
      if (dlg.open && (e.target === dlg.open || e.target.id === "scrim")) closeDialog();
    });
    document.addEventListener("keydown", (e) => {
      if (!dlg.open) return;
      if (e.key === "Escape") { e.preventDefault(); closeDialog(); }
      if (e.key === "Tab") {
        const f = $$(FOCUSABLE, dlg.open).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    // menu list + action grids
    const sections = [["profile", "Character Profile", "#287BFF"], ["missions", "Career Missions", "#884DFF"], ["skills", "Skill Tree", "#10ADC0"], ["loadout", "Equipment Loadout", "#EC6A0B"], ["replays", "Gameplay Replay", "#287BFF"], ["workflow", "Build Pipeline", "#884DFF"], ["contact", "Contact", "#EC6A0B"]];
    $("#menuList").innerHTML = sections.map(([id, label, k], i) => `<a href="#${id}" data-nav="${id}" style="--k:${k}"><kbd>${i + 1}</kbd><span>${label}</span></a>`).join("");
    $("#menuList").addEventListener("click", (e) => { if (e.target.closest("a")) closeDialog(true); });
    $$("[data-actions]").forEach((g) => (g.innerHTML = ACTIONS.map(actionHTML).join("")));
    $$("[data-actions] a").forEach((a) => a.addEventListener("click", () => closeDialog(true)));
    $("#linkField").value = siteUrl();
  }

  /* ---------- TEXT BINDINGS ---------- */
  function bindText() {
    const map = {
      title: P.title.toUpperCase(), subtitle: P.subtitle.toUpperCase(), titleCase: P.title, tagline: P.tagline,
      company: P.company, since: P.since, baseShort: P.baseShort, specialty: P.specialty,
    };
    $$("[data-bind]").forEach((el) => { const v = map[el.dataset.bind]; if (v != null) el.textContent = v; });
    const parts = P.name.toUpperCase().split(" ");
    const lines = $$(".hero__line");
    lines[0].textContent = parts[0] || "";
    lines[1].textContent = parts.slice(1).join(" ");
    $(".hero__name").setAttribute("aria-label", P.name);
    $("#year").textContent = new Date().getFullYear();
  }
  function splitName() {
    $$("[data-split]").forEach((el) => {
      el.innerHTML = [...el.textContent].map((ch) => `<span class="ch" aria-hidden="true">${esc(ch)}</span>`).join("");
    });
  }
  function initPortrait() {
    const wrap = $("#portrait"), img = $(".portrait__img", wrap);
    const fail = () => wrap.classList.add("no-img");
    img.addEventListener("error", fail);
    if (img.complete && img.naturalWidth === 0) fail();
  }

  /* ---------- GAME MENU (hero) ---------- */
  function initGameMenu() {
    const menu = $("#gameMenu"), sel = $("#menuSel"), items = $$(".gmenu__item", menu);
    let current = 0;
    const place = (i) => {
      const it = items[i];
      sel.style.height = it.offsetHeight + "px";
      sel.style.transform = `translateY(${it.offsetTop}px)`;
      sel.dataset.c = it.dataset.c;
      items.forEach((x, j) => x.classList.toggle("is-sel", j === i));
    };
    items.forEach((it, i) => {
      it.addEventListener("pointerenter", () => place(i));
      it.addEventListener("focus", () => { current = i; place(i); });
      it.addEventListener("click", () => { current = i; });
      it.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const n = (i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
          items[n].focus();
        }
      });
    });
    menu.addEventListener("pointerleave", () => place(current));
    place(0);
    window.addEventListener("resize", () => place(current));
    document.fonts && document.fonts.ready.then(() => place(current));

    // number keys 1–6 jump to the matching menu option
    document.addEventListener("keydown", (e) => {
      if (dlg.open || e.metaKey || e.ctrlKey || e.altKey || e.target.closest("input, textarea")) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= items.length && !$("#loader")) {
        current = n - 1; place(current);
        const href = items[current].getAttribute("href");
        document.querySelector(href)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
        history.replaceState(null, "", href);
      }
    });
  }

  /* ---------- PROFILE ---------- */
  function renderProfile() {
    $("#bio").innerHTML = DATA.bio.map((p) => `<p>${p}</p>`).join("");
    $("#focusChips").innerHTML = DATA.focus.map((f) => `<li>${esc(f)}</li>`).join("");
    $("#profileStats").innerHTML = DATA.stats.map((s) => `<div class="stat"><span class="stat__k">${esc(s.k)}</span><span class="stat__v">${esc(s.v)}</span><span class="stat__n">${esc(s.n)}</span></div>`).join("");
    $("#education").innerHTML = DATA.education.map((e) => `<li><time>${esc(e.when)}</time><div><b>${esc(e.title)}</b>${e.where ? `<span>${esc(e.where)}</span>` : ""}</div></li>`).join("");
  }

  /* ---------- MISSIONS (with expandable briefings) ---------- */
  function renderMissions() {
    const total = DATA.missions.length;
    $("#missionList").innerHTML = DATA.missions.map((m, i) => {
      const flag = m.confirmEnd && !m.end && DATA.showConfirmFlags;
      const endTxt = m.end || (flag ? "End date to confirm" : "");
      const live = m.status === "live";
      const badge = live ? `<span class="badge badge--live"><span class="dot"></span>Currently working</span>`
        : flag ? `<span class="badge badge--warn">End date to confirm</span>`
        : `<span class="badge badge--done">Mission complete</span>`;
      const has = m.objectives && m.objectives.length;
      const did = `mission-det-${i}`;
      return `<li class="mission ${live ? "is-active" : ""}">
        <span class="mission__node" aria-hidden="true">${pad2(total - i)}</span>
        <article class="gpanel">
          <header class="gpanel__ribbon"><span>${esc(m.code)}</span><span class="mission__ribbon-status">${live ? "Active" : "Complete"}</span></header>
          <div class="gpanel__body">
            <div class="mission__top">
              <div><h3 class="mission__role">${esc(m.role)}</h3><p class="mission__co">${esc(m.company)}</p></div>
              <span class="mission__date">${esc(m.start)}${endTxt ? " – " + esc(endTxt) : ""}</span>
            </div>
            ${badge}
            ${m.brief && m.brief.length ? `<ul class="mission__brief">${m.brief.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
            ${has ? `
              <button type="button" class="btn btn--ghost btn--sm mission__toggle" aria-expanded="${!!m.open}" aria-controls="${did}">
                <span>${m.open ? "Hide" : "Show"} ${esc((m.objectivesLabel || "details").toLowerCase())} (${m.objectives.length})</span>${icon("chevron")}
              </button>
              <div class="mission__details" id="${did}" ${m.open ? "" : "hidden"}>
                <div class="mission__details-inner">
                  <p class="objectives-label">${esc(m.objectivesLabel || "Details")}</p>
                  <ul class="objectives">${m.objectives.map((o) => `<li><b>${esc(o.t)}</b><span>${esc(o.d)}</span></li>`).join("")}</ul>
                </div>
              </div>` : ""}
          </div>
        </article>
      </li>`;
    }).join("");

    $("#missionList").addEventListener("click", (e) => {
      const btn = e.target.closest(".mission__toggle");
      if (!btn) return;
      const det = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") !== "true";
      const label = $("span", btn);
      btn.setAttribute("aria-expanded", open);
      label.textContent = label.textContent.replace(open ? /^Show/ : /^Hide/, open ? "Hide" : "Show");
      const after = () => { if (window.ScrollTrigger) ScrollTrigger.refresh(); };
      if (!motion()) { det.hidden = !open; after(); return; }
      gsap.killTweensOf(det);
      if (open) {
        det.hidden = false;
        gsap.fromTo(det, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: .45, ease: "power3.out", clearProps: "height,opacity", onComplete: after });
        gsap.from($$(".objectives li", det), { y: 12, opacity: 0, duration: .35, stagger: .04, delay: .1, ease: "power2.out", clearProps: "transform,opacity" });
      } else {
        gsap.to(det, { height: 0, opacity: 0, duration: .32, ease: "power2.in", onComplete: () => { det.hidden = true; gsap.set(det, { clearProps: "height,opacity" }); after(); } });
      }
    });
  }

  /* ---------- SKILL TREE ---------- */
  function renderTree() {
    const nodes = DATA.skills;
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    const col = (n) => DATA.skillGroups[n.group] || "#20D9E8";
    const groups = Object.keys(DATA.skillGroups).filter((g) => nodes.some((n) => n.group === g));

    $("#treeLegend").innerHTML = groups.map((g) => `<span style="--k:${DATA.skillGroups[g]}"><i></i>${esc(g)}</span>`).join("");
    $("#treeLinks").innerHTML = nodes.filter((n) => n.from && byId[n.from]).map((n) => {
      const a = byId[n.from], my = (a.y + n.y) / 2;
      return `<path data-to="${n.id}" style="--k:${col(n)}" d="M${a.x} ${a.y} C ${a.x} ${my}, ${n.x} ${my}, ${n.x} ${n.y}"/>`;
    }).join("");

    const nodeHTML = (n) => `<button type="button" class="node ${n.core ? "node--core" : ""}" data-skill="${n.id}" style="--k:${col(n)};left:${n.x / 10}%;top:${n.y / 6.2}%" aria-pressed="false">
      <span class="node__gem">${icon(n.icon)}</span><span class="node__name">${esc(n.name)}</span></button>`;

    let current = "core";
    const detailHTML = (n) => `
      <header class="gpanel__ribbon"><span>${esc(n.group)}${n.core ? " · Root" : ""}</span></header>
      <div class="gpanel__body">
        <h3>${esc(n.name)}</h3>
        <p>${esc(n.desc)}</p>
        <div class="detail__src"><b>Source</b><p>${esc(n.src)}</p></div>
      </div>`;

    function select(id, fromUser) {
      current = id;
      const n = byId[id];
      $$(".node").forEach((el) => {
        const on = el.dataset.skill === id;
        el.classList.toggle("is-selected", on);
        el.setAttribute("aria-pressed", on);
        $(".node__gem", el).classList.toggle("sel-ring", on);
      });
      const lit = new Set(); let k = id;
      while (k && byId[k] && byId[k].from) { lit.add(k); k = byId[k].from; }
      $$("#treeLinks path").forEach((p) => p.classList.toggle("is-lit", lit.has(p.dataset.to)));
      const d = $("#treeDetail");
      d.style.setProperty("--k", col(n));
      d.innerHTML = detailHTML(n);
      if (fromUser && isMobileTree()) {
        $("#inspectTitle").textContent = "Ability";
        $("#inspectBody").innerHTML = `<div style="--k:${col(n)}"><span class="inspect__tag">${esc(n.group)}</span>
          <h3 style="margin:10px 0 10px;font:900 italic 32px/1 var(--f-display);text-transform:uppercase">${esc(n.name)}</h3>
          <div class="inspect__body"><p>${esc(n.desc)}</p></div>
          <div class="detail__src"><b>Source</b><p>${esc(n.src)}</p></div></div>`;
        openDialog("inspectPanel");
      } else if (fromUser && motion()) {
        gsap.fromTo("#treeDetail .gpanel__body > *", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .4, stagger: .05, ease: "power3.out", clearProps: "transform,opacity" });
      }
    }

    const build = () => {
      const host = $("#treeNodes");
      host.innerHTML = isMobileTree()
        ? groups.map((g) => `<div class="tree-group" style="--k:${DATA.skillGroups[g]}"><p>${esc(g)}</p><div class="tree-group__items">${nodes.filter((n) => n.group === g).map(nodeHTML).join("")}</div></div>`).join("")
        : nodes.map(nodeHTML).join("");
      select(current, false);
    };
    $("#treeNodes").addEventListener("click", (e) => { const b = e.target.closest(".node"); if (b) select(b.dataset.skill, true); });
    build();
    let mq = isMobileTree();
    window.addEventListener("resize", () => { if (isMobileTree() !== mq) { mq = isMobileTree(); build(); } });
  }

  /* ---------- LOADOUT (cards open an inspect panel) ---------- */
  function renderLoadout() {
    const all = [];
    $("#loadoutGrid").innerHTML = DATA.loadout.map((t, ti) => `
      <div class="tier ${t.cls}">
        <div class="tier__head"><h3>${esc(t.tier)}</h3><p>${esc(t.note)}</p></div>
        <ul class="tier__grid">${t.items.map((g) => { all.push({ ...g, tier: t }); const idx = all.length - 1; return `
          <li><button type="button" class="gear" data-gear="${idx}" aria-haspopup="dialog">
            <span class="gear__inspect">Inspect</span>
            <span class="gear__icon" aria-hidden="true">${esc(g.code)}</span>
            <span class="gear__name">${esc(g.name)}</span>
            <span class="gear__note">${esc(g.note)}</span>
            <span class="gear__tag">${esc(g.tag)}</span>
          </button></li>`; }).join("")}
        </ul>
      </div>`).join("");

    $("#loadoutGrid").addEventListener("click", (e) => {
      const b = e.target.closest("[data-gear]");
      if (!b) return;
      const g = all[+b.dataset.gear];
      $("#inspectTitle").textContent = "Equipment";
      $("#inspectBody").innerHTML = `
        <div class="tier ${g.tier.cls}">
          <div class="inspect__hero"><span class="gear__icon" aria-hidden="true">${esc(g.code)}</span>
            <div><h3>${esc(g.name)}</h3><span class="inspect__tag" style="--k:var(--tc)">${esc(g.tag)}</span></div></div>
          <div class="inspect__body"><p>${esc(g.note)}</p></div>
          <dl class="inspect__facts">
            <div><dt>Slot</dt><dd>${esc(g.tier.tier)}</dd></div>
            <div><dt>Proficiency</dt><dd>${esc(g.tier.note)}</dd></div>
          </dl>
        </div>`;
      openDialog("inspectPanel", b);
    });
  }

  /* ---------- REPLAYS ---------- */
  const thumbFor = (r) => r.thumb || (r.type === "youtube" ? `https://i.ytimg.com/vi/${r.yt}/hqdefault.jpg` : r.type === "mp4" ? r.poster || "" : r.type === "gif" ? r.src : "");
  const linkFor = (r) => r.link || (r.type === "youtube" ? `https://youtu.be/${r.yt}` : r.type === "drive" ? `https://drive.google.com/file/d/${r.drive}/view` : r.src || "#");
  const catLabel = (id) => (DATA.categories.find((c) => c.id === id) || { label: id }).label;
  const typeLabel = (r) => ({ youtube: "Video", drive: "Reel", mp4: "MP4", gif: "GIF" }[r.type] || "Media");
  const posterGen = (t) => `<div class="poster-gen"><span>${esc(t)}</span></div>`;
  const playBtn = `<span class="play-btn">${icon("play")}</span>`;

  function renderReplays() {
    const items = DATA.replays.map((r, i) => ({ ...r, _i: i }));
    let filter = "all", playing = 0;
    const count = (id) => id === "all" ? items.length : items.filter((r) => r.cat === id).length;
    const cats = DATA.categories.filter((c) => c.id === "all" || count(c.id) || (DATA.showEmptySlots && DATA.slots.some((s) => s.cat === c.id)));

    $("#replayFilters").innerHTML = cats.map((c) => `<button type="button" role="tab" class="filter" data-cat="${c.id}" aria-selected="${c.id === "all"}">${esc(c.label)}<small>${pad2(count(c.id))}</small></button>`).join("");

    function grid() {
      const list = filter === "all" ? items : items.filter((r) => r.cat === filter);
      const slots = DATA.showEmptySlots ? DATA.slots.filter((s) => (filter === "all" || s.cat === filter) && !items.some((r) => r.cat === s.cat)) : [];
      $("#reelGrid").innerHTML = list.map((r) => {
        const t = thumbFor(r);
        const media = r.type === "mp4" && !r.poster ? `<video src="${esc(r.src)}#t=0.5" muted playsinline preload="metadata"></video>`
          : t ? `<img src="${esc(t)}" alt="" loading="lazy" decoding="async">` : posterGen(r.title);
        return `<li class="reel ${r._i === playing ? "is-playing" : ""}" data-i="${r._i}">
          <button type="button" aria-label="Play ${esc(r.title)}">
            <span class="reel__thumb">${media}<span class="reel__type">${typeLabel(r)}</span><span class="reel__now">Now playing</span></span>
            <span class="reel__meta"><b>${esc(r.title)}</b><span>${esc(catLabel(r.cat))}</span></span>
          </button></li>`;
      }).join("") + slots.map((s) => `
        <li class="reel reel--slot"><button type="button" tabindex="-1" aria-disabled="true">
          <span class="reel__thumb"><span class="slot-lock"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>Slot open</span></span>
          <span class="reel__meta"><b>${esc(s.title)}</b><span>Add media → ${esc(s.hint)}</span></span>
        </button></li>`).join("");

      $$("#reelGrid .reel").forEach((li) => {
        const r = items[li.dataset.i];
        if (!r || r.type !== "mp4" || reduced) return;
        const thumb = $(".reel__thumb", li); let v;
        li.addEventListener("pointerenter", () => {
          v = v || Object.assign(document.createElement("video"), { src: r.src, muted: true, loop: true, playsInline: true });
          v.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover";
          thumb.prepend(v); v.play().catch(() => {});
        });
        li.addEventListener("pointerleave", () => { if (v) { v.pause(); v.remove(); } });
      });
      if (motion()) gsap.from("#reelGrid .reel", { y: 22, opacity: 0, duration: .45, stagger: .04, ease: "power3.out", clearProps: "transform,opacity" });
    }

    function load(i, autoplay) {
      const r = items[i];
      if (!r) return;
      playing = i;
      $$("#reelGrid .reel").forEach((li) => li.classList.toggle("is-playing", +li.dataset.i === i));
      $("#playerCat").textContent = `Now playing · ${catLabel(r.cat)}`;
      $("#playerTitle").textContent = r.title;
      $("#playerDesc").textContent = r.desc || "";
      const ext = $("#playerExt");
      ext.href = linkFor(r);
      ext.hidden = r.type === "mp4" || r.type === "gif";
      const stage = $("#playerStage");
      const t = thumbFor(r), yt = r.type === "youtube";
      const posterImg = t ? `<img src="${esc(yt ? `https://i.ytimg.com/vi/${r.yt}/maxresdefault.jpg` : t)}" alt=""${yt ? ` data-fallback="${esc(t)}"` : ""}>` : posterGen(r.title);

      if (!DATA.embedPlayers && (r.type === "youtube" || r.type === "drive")) {
        stage.innerHTML = `<a class="player__poster" href="${esc(linkFor(r))}" target="_blank" rel="noopener" aria-label="Watch ${esc(r.title)} (opens in a new tab)">${posterImg}${playBtn}</a>`;
      } else if (!autoplay) {
        stage.innerHTML = `<div class="player__poster" role="button" tabindex="0" aria-label="Play ${esc(r.title)}">${posterImg}${playBtn}</div>`;
        const p = $(".player__poster", stage);
        const go = () => load(i, true);
        p.addEventListener("click", go);
        p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      } else {
        let html = "";
        if (r.type === "youtube") html = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(r.yt)}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="${esc(r.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
        else if (r.type === "drive") html = `<iframe src="https://drive.google.com/file/d/${encodeURIComponent(r.drive)}/preview" title="${esc(r.title)}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        else if (r.type === "mp4") html = `<video src="${esc(r.src)}"${r.poster ? ` poster="${esc(r.poster)}"` : ""} controls autoplay playsinline preload="metadata"></video>`;
        else if (r.type === "gif") html = `<img src="${esc(r.src)}" alt="${esc(r.title)}">`;
        stage.innerHTML = html;
        if (motion()) gsap.fromTo(stage.firstElementChild, { opacity: 0 }, { opacity: 1, duration: .5 });
        return;
      }
      const img = $("img[data-fallback]", stage);
      if (img) {
        img.addEventListener("load", () => { if (img.naturalWidth <= 120) img.src = img.dataset.fallback; }, { once: true });
        img.addEventListener("error", () => { img.src = img.dataset.fallback; }, { once: true });
      }
    }

    $("#replayFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      filter = b.dataset.cat;
      $$(".filter").forEach((f) => f.setAttribute("aria-selected", f === b));
      grid();
    });
    $("#reelGrid").addEventListener("click", (e) => {
      const li = e.target.closest(".reel:not(.reel--slot)");
      if (!li) return;
      load(+li.dataset.i, true);
      const p = $("#player");
      if (p.getBoundingClientRect().top < 60) p.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    });
    $("#playerFs").addEventListener("click", () => {
      const stage = $("#playerStage"), v = $("video", stage);
      const req = stage.requestFullscreen || stage.webkitRequestFullscreen;
      if (req) { const pr = req.call(stage); if (pr && pr.catch) pr.catch(() => toast("Fullscreen isn't available here")); }
      else if (v && v.webkitEnterFullscreen) v.webkitEnterFullscreen();
      else toast("Fullscreen isn't available here");
    });
    grid();
    load(0, false);
  }

  /* ---------- WORKFLOW ---------- */
  function renderWorkflow() {
    const steps = DATA.workflow;
    $("#pipeSteps").innerHTML = steps.map((s, i) => `<li class="step ${i === 0 ? "is-active" : ""}"><button type="button" data-step="${i}" aria-pressed="${i === 0}"><span class="step__num">${pad2(i + 1)}</span><span class="step__name">${esc(s.name)}</span></button></li>`).join("");
    const show = (i, animate) => {
      $$(".step").forEach((el, j) => { el.classList.toggle("is-active", j === i); $("button", el).setAttribute("aria-pressed", j === i); });
      $("#pipeDetail").innerHTML = `<header class="gpanel__ribbon"><span>Step ${pad2(i + 1)} of ${pad2(steps.length)}</span></header>
        <div class="gpanel__body"><span class="big" aria-hidden="true">${pad2(i + 1)}</span><h3>${esc(steps[i].name)}</h3><p>${esc(steps[i].desc)}</p></div>`;
      if (animate && motion()) gsap.fromTo("#pipeDetail .gpanel__body > *", { x: 18, opacity: 0 }, { x: 0, opacity: 1, duration: .4, stagger: .06, ease: "power3.out", clearProps: "transform,opacity" });
    };
    $("#pipeSteps").addEventListener("click", (e) => { const b = e.target.closest("[data-step]"); if (b) show(+b.dataset.step, true); });
    show(0, false);
  }

  /* ---------- CONTACT ---------- */
  function renderContact() {
    const handle = "in/" + (P.linkedin.split("/in/")[1] || "").replace(/\/$/, "");
    const cards = [
      { k: "Email", v: P.email, ic: "mail", g: "var(--g-orange)", dark: true, action: "copy-email", hint: "Tap to copy" },
      { k: "Phone", v: P.phoneDisplay, ic: "phone", g: "var(--g-blue)", href: `tel:${P.phoneTel}` },
      { k: "Location", v: P.location, ic: "pin", g: "var(--g-purple)", href: `https://www.google.com/maps/search/${encodeURIComponent(P.location)}`, ext: true },
      { k: "LinkedIn", v: handle, ic: "linkedin", g: "var(--g-cyan)", dark: true, href: P.linkedin, ext: true },
      { k: "Portfolio", v: P.portfolioLabel, ic: "play", g: "var(--g-orange)", dark: true, href: P.portfolio, ext: true },
    ];
    const kOf = (g) => g.replace("--g-", "--");
    $("#contactGrid").innerHTML = cards.map((c) => {
      const inner = `<span class="ccard__icon ${c.dark ? "is-dark" : ""}">${icon(c.ic)}</span><span class="ccard__txt"><span class="ccard__k">${esc(c.k)}${c.hint ? ` · ${esc(c.hint)}` : ""}</span><span class="ccard__v">${esc(c.v)}</span></span>`;
      const style = `style="--kg:${c.g};--k:${kOf(c.g)}"`;
      return `<li class="reveal-c">${c.action
        ? `<button type="button" class="ccard" data-action="${c.action}" ${style}>${inner}</button>`
        : `<a class="ccard" href="${esc(c.href)}" ${style}${c.ext ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>`}</li>`;
    }).join("");
    $("#contactActions").innerHTML = ACTIONS.map(actionHTML).join("");
  }

  /* ---------- NAV STATE ---------- */
  function initNav() {
    const hud = $("#hud");
    const onScroll = () => hud.classList.toggle("is-solid", window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const ids = ["top", "profile", "missions", "skills", "loadout", "replays", "workflow", "contact"];
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      $$("[data-nav]").forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));
      $$("[data-rail]").forEach((a) => a.classList.toggle("is-active", a.dataset.rail === id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- PARTICLES ---------- */
  function initParticles() {
    const c = $("#particles"), ctx = c.getContext("2d");
    if (!ctx) return;
    const COLORS = ["32,217,232", "40,123,255", "136,77,255", "255,138,36"];
    let w, h, parts = [], raf, running = true;
    const spawn = (any) => ({ x: Math.random() * w, y: any ? Math.random() * h : h + 10, r: Math.random() * 1.8 + .4, vy: -(Math.random() * .3 + .06), vx: (Math.random() - .5) * .14, a: Math.random() * .5 + .2, c: COLORS[(Math.random() * COLORS.length) | 0], t: Math.random() * 6.28 });
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      parts = Array.from({ length: Math.min(80, Math.round((w * h) / 22000)) }, () => spawn(true));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.t += .02;
        if (p.y < -10) Object.assign(p, spawn(false));
        ctx.beginPath(); ctx.fillStyle = `rgba(${p.c},${p.a * (.6 + .4 * Math.sin(p.t))})`; ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduced) draw(); }, 150); });
    document.addEventListener("visibilitychange", () => { running = !document.hidden; cancelAnimationFrame(raf); if (running && !reduced) raf = requestAnimationFrame(draw); });
  }

  /* ---------- LOADER ---------- */
  function runLoader(onDone) {
    const loader = $("#loader"), bar = $("#loaderBar"), pct = $("#loaderPct"), tip = $("#loaderTip");
    const tips = ["Loading animation data…", "Setting keyframes…", "Rigging character…", "Syncing timeline…", "Player ready!"];
    let seen = false;
    try { seen = sessionStorage.getItem("vb-seen") === "1"; sessionStorage.setItem("vb-seen", "1"); } catch (_) {}
    const duration = reduced ? 300 : seen ? 700 : 2000;
    let done = false, raf;
    const start = performance.now();
    const finish = () => {
      if (done) return;
      done = true; cancelAnimationFrame(raf);
      bar.style.width = "100%"; pct.textContent = "100%"; tip.textContent = tips[tips.length - 1];
      loader.classList.add("is-done");
      window.removeEventListener("keydown", onKey);
      setTimeout(() => loader.remove(), 700);
      onDone();
    };
    const onKey = (e) => { if (e.key === "Escape" || e.key === "Enter") finish(); };
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration), e = 1 - Math.pow(1 - t, 3);
      bar.style.width = `${e * 100}%`; pct.textContent = `${Math.round(e * 100)}%`;
      tip.textContent = tips[Math.min(tips.length - 2, Math.floor(t * (tips.length - 1)))];
      if (t < 1) raf = requestAnimationFrame(tick); else setTimeout(finish, 150);
    };
    $("#loaderSkip").addEventListener("click", finish);
    window.addEventListener("keydown", onKey);
    raf = requestAnimationFrame(tick);
    setTimeout(finish, 6000);
  }

  /* ---------- MOTION ---------- */
  function heroIntro() {
    if (!motion()) return;
    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from(".portrait__frame", { clipPath: "inset(100% 0% 0% 0% round 26px)", duration: 1.3, ease: "expo.inOut" }, 0)
      .from(".portrait__img", { scale: 1.25, duration: 1.9, ease: "power3.out" }, .15)
      .from(".portrait__halo", { opacity: 0, scale: .8, duration: 1.4 }, .3)
      .from(".bracket", { scale: 0, opacity: 0, duration: .55, stagger: .07, ease: "back.out(2.4)" }, .85)
      .from(".portrait__tag", { y: -16, opacity: 0, duration: .5, ease: "back.out(2)" }, 1.1)
      .from(".charcard", { x: -40, opacity: 0, duration: .8 }, 1.05)
      .from(".hero__line .ch", { yPercent: 118, rotate: 8, duration: 1, stagger: .04 }, .3)
      .from("[data-hero='fade']", { opacity: 0, y: 16, duration: .7, stagger: .08 }, .8)
      .from(".gmenu__item", { x: -36, opacity: 0, duration: .55, stagger: .06, ease: "back.out(1.6)", clearProps: "transform,opacity" }, 1.0)
      .from(".gmenu__sel", { scaleX: 0, transformOrigin: "left center", duration: .5, clearProps: "scale" }, 1.4)
      .from(".hud", { y: -20, opacity: 0, duration: .6, clearProps: "transform,opacity" }, .9)
      .from(".rail", { opacity: 0, duration: .6 }, 1.2)
      .add(() => $$(".hero__name .mask").forEach((m) => (m.style.overflow = "visible")));
  }

  function initScrollMotion() {
    if (!motion() || typeof window.ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    $$("[data-parallax]").forEach((el) => gsap.to(el, { yPercent: -parseFloat(el.dataset.parallax) * 100, ease: "none", scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true } }));
    gsap.to(".hero__visual", { yPercent: -8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    const once = (trigger, start = "top 84%") => ({ trigger, start, once: true });
    const reveal = (targets, trigger, vars = {}) => gsap.from(targets, { opacity: 0, y: 36, duration: .8, stagger: .08, ease: "power3.out", clearProps: "transform,opacity", ...vars, scrollTrigger: once(trigger) });

    $$(".sec-head").forEach((h) => {
      gsap.from($$(".sec-head__title .mask > span", h), { yPercent: 108, duration: .95, stagger: .08, ease: "power4.out", scrollTrigger: once(h, "top 86%") });
      gsap.from($$(".sec-head__eyebrow, .sec-head__sub", h), { opacity: 0, x: -24, duration: .7, stagger: .1, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: once(h, "top 86%") });
    });

    reveal(".profile__bio", ".profile");
    reveal(".profile__side > .gpanel", ".profile__side", { x: 30, y: 0, stagger: .12 });
    reveal(".stat", "#profileStats", { y: 18, scale: .94 });

    gsap.fromTo("#timelineFill", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: "#timeline", start: "top 70%", end: "bottom 65%", scrub: .5 } });
    $$(".mission").forEach((m) => {
      gsap.from($(".gpanel", m), { opacity: 0, x: 60, duration: .85, ease: "power3.out", clearProps: "transform,opacity", scrollTrigger: once(m, "top 82%") });
      gsap.from($(".mission__node", m), { scale: 0, rotate: -90, duration: .6, ease: "back.out(2.4)", clearProps: "transform", scrollTrigger: once(m, "top 82%") });
    });

    reveal(".legend span", "#treeLegend", { y: 12, stagger: .05 });
    const paths = $$("#treeLinks path");
    paths.forEach((p) => { p.setAttribute("pathLength", "1"); p.style.strokeDasharray = "1"; });
    gsap.fromTo(paths, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.1, stagger: .07, ease: "power2.inOut", scrollTrigger: once("#treeMap", "top 76%") });
    ScrollTrigger.create({ ...once("#treeMap", "top 76%"), onEnter: () => gsap.from(".node", { opacity: 0, scale: .5, duration: .5, stagger: .05, ease: "back.out(2)", clearProps: "transform,opacity" }) });
    reveal("#treeDetail", ".skilltree", { x: 40, y: 0 });

    $$(".tier").forEach((t) => reveal($$(".tier__head, .gear", t), t, { y: 34, stagger: .07 }));
    reveal(".filters .filter", ".filters", { y: 14, stagger: .03 });
    reveal(".player", ".replays", { y: 50, scale: .97 });

    gsap.fromTo("#pipeFill", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".pipeline", start: "top 78%", end: "top 35%", scrub: .5 } });
    reveal(".step", ".pipeline", { y: 30, stagger: .09, ease: "back.out(1.6)" });
    reveal(".pipeline__detail", ".pipeline__detail");

    gsap.from(".contact__title .mask > span", { yPercent: 108, duration: 1, stagger: .1, ease: "power4.out", scrollTrigger: once(".contact", "top 76%") });
    reveal(".contact__eyebrow", ".contact");
    reveal(".reveal-c", "#contactGrid", { y: 26, stagger: .06 });
    reveal("#contactActions .btn", "#contactActions", { y: 20, stagger: .06, ease: "back.out(1.8)" });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  }

  function initMicro() {
    if (!motion()) return;
    // squash & stretch on hover over the name letters
    $$(".hero__line .ch").forEach((ch) => ch.addEventListener("pointerenter", () => {
      if (gsap.isTweening(ch)) return;
      gsap.timeline()
        .to(ch, { scaleY: .8, scaleX: 1.14, y: 6, duration: .09, ease: "power2.in", transformOrigin: "50% 100%" })
        .to(ch, { scaleY: 1.14, scaleX: .9, y: -16, duration: .17, ease: "power2.out" })
        .to(ch, { scaleY: 1, scaleX: 1, y: 0, duration: .6, ease: "elastic.out(1, .4)" });
    }));
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const p = $(".portrait");
      gsap.set(p, { transformPerspective: 1000 });
      const rx = gsap.quickTo(p, "rotationX", { duration: .8, ease: "power3.out" });
      const ry = gsap.quickTo(p, "rotationY", { duration: .8, ease: "power3.out" });
      $(".hero").addEventListener("pointermove", (e) => { ry((e.clientX / innerWidth - .5) * 7); rx(-(e.clientY / innerHeight - .5) * 5); });
      $(".hero").addEventListener("pointerleave", () => { rx(0); ry(0); });
    }
  }

  /* GSAP loads from the CDN; if that fails, try js/vendor/ copies (see README) */
  const loadScript = (src) => new Promise((res) => { const s = document.createElement("script"); s.src = src; s.onload = s.onerror = res; document.head.appendChild(s); });
  async function ensureGsap() {
    if (!hasGsap()) await loadScript("js/vendor/gsap.min.js");
    if (hasGsap() && typeof window.ScrollTrigger === "undefined") await loadScript("js/vendor/ScrollTrigger.min.js");
  }

  function boot() {
    bindText();
    splitName();
    initPortrait();
    renderProfile();
    renderMissions();
    renderTree();
    renderLoadout();
    renderReplays();
    renderWorkflow();
    renderContact();
    initDialogs();
    initGameMenu();
    initNav();
    initParticles();
    ensureGsap().then(() => { initScrollMotion(); initMicro(); runLoader(heroIntro); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
