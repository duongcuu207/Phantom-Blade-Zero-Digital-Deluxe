/* ============================================================
   PHANTOM BLADE ZERO — Digital Deluxe Edition
   Tương tác: nav, countdown, magnet link, torrent, hạt nền
============================================================ */

"use strict";

/* ------------------------------------------------------------
   TORRENT THẬT (đã trích xuất từ file PhantomBladeZero-Deluxe.torrent):
   - Info hash: 297f6134c625b297ce34f81931f0dcedf573fde7
   - Kích thước: 140.5 GB (298 file, Portable repack InsaneRamZes)
------------------------------------------------------------ */
const TORRENT_MAGNET =
  "magnet:?xt=urn:btih:297f6134c625b297ce34f81931f0dcedf573fde7&dn=Phantom.Blade.Zero-InsaneRamZes&tr=http%3A%2F%2Fbt2.t-ru.org%2Fann%3Fpk%3Db464b7c20c8649d432f8f0770e94e7dd&tr=http%3A%2F%2Fretracker.local%2Fannounce";
const TORRENT_FILE_URL = "PhantomBladeZero-Deluxe.torrent";

// Đếm ngược — đổi ngày ra mắt theo ý bạn.
const RELEASE_DATE = new Date("2027-01-27T00:00:00");

/* ============================ TIỆN ÍCH ============================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ============================ NAV ============================ */
const nav = $("#nav");
const navLinks = $("#navLinks");
const navToggle = $("#navToggle");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
});

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// Đóng menu khi bấm link (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ============================ ĐẾM NGƯỢC ============================ */
function pad(n) { return String(n).padStart(2, "0"); }

function tickCountdown() {
  const diff = RELEASE_DATE - Date.now();
  if (diff <= 0) {
    ["cd-days", "cd-hours", "cd-mins", "cd-secs"].forEach((id) => ($("#" + id).textContent = "00"));
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const mins = Math.floor(diff / 60000) % 60;
  const secs = Math.floor(diff / 1000) % 60;
  $("#cd-days").textContent = pad(days);
  $("#cd-hours").textContent = pad(hours);
  $("#cd-mins").textContent = pad(mins);
  $("#cd-secs").textContent = pad(secs);
}
tickCountdown();
setInterval(tickCountdown, 1000);

/* ============================ MAGNET LINK ============================ */
const magnetInput = $("#magnetInput");
magnetInput.value = TORRENT_MAGNET;

const toast = $("#toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

$("#copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(TORRENT_MAGNET);
    showToast("Đã sao chép magnet link ✓");
  } catch {
    // Fallback cho trình duyệt chặn clipboard
    magnetInput.select();
    document.execCommand("copy");
    showToast("Đã sao chép magnet link ✓");
  }
});

$("#torrentFile").addEventListener("click", () => {
  showToast("Đang tải file .torrent…");
});

/* ============================ TẢI TORRENT (mô phỏng) ============================ */
let downloading = false;
let dlTimer;

$("#downloadBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (downloading) return;
  downloading = true;

  const wrap = $("#progressWrap");
  const bar = $("#progressBar");
  const state = $("#progressState");
  const pct = $("#progressPct");
  wrap.hidden = false;

  const states = [
    "Đang khởi tạo cây torrent…",
    "Đang kết nối trackers…",
    "Đang tải metadata…",
    "Đang tải dữ liệu (135/140.5 GB)…",
    "Đang xác minh checksum…",
  ];
  let i = 0;
  let p = 0;
  state.textContent = states[i];

  dlTimer = setInterval(() => {
    p = Math.min(100, p + Math.random() * 6);
    bar.style.width = p + "%";
    pct.textContent = Math.floor(p) + "%";

    const seg = Math.floor(p / 25);
    if (state.textContent !== states[Math.min(seg, 4)]) {
      state.textContent = states[Math.min(seg, 4)];
    }

    if (p >= 100) {
      clearInterval(dlTimer);
      state.textContent = "Hoàn tất ✓ — mở launcher để bắt đầu chơi";
      showToast("Đã hoàn tất tải (demo) — mở bằng client torrent thật!");
      downloading = false;
    }
  }, 220);
});

/* ============================ SEEDER / LEECHER (sống) ============================ */
let seeders = 12487;
let leechers = 3214;

function fmt(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

setInterval(() => {
  seeders = Math.max(9000, seeders + Math.round((Math.random() - 0.42) * 90));
  leechers = Math.max(1500, leechers + Math.round((Math.random() - 0.5) * 70));
  $("#seeders").textContent = fmt(seeders);
  $("#leechers").textContent = fmt(leechers);

  const sp = (18 + Math.random() * 14).toFixed(1);
  $("#speed").textContent = sp + " MB/s";
}, 3000);

/* ============================ REVEAL KHI CUỘN ============================ */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
$$("[data-reveal]").forEach((el) => io.observe(el));

/* ============================ HẠT NỀN (tia lửa cơ khí) ============================ */
const canvas = $("#particles");
const ctx = canvas.getContext("2d");
let W, H, particles = [];

function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

function makeParticle() {
  return {
    x: Math.random() * W,
    y: H + Math.random() * 30,
    r: Math.random() * 1.8 + 0.4,
    vy: Math.random() * 0.6 + 0.15,
    vx: (Math.random() - 0.5) * 0.3,
    life: Math.random(),
    color: Math.random() > 0.72 ? "200,16,46" : "196,201,207",
  };
}
const COUNT = Math.min(80, Math.floor(innerWidth / 22));
for (let i = 0; i < COUNT; i++) particles.push(makeParticle());

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.y -= p.vy;
    p.x += p.vx + Math.sin(p.life * 6) * 0.2;
    p.life += 0.01;
    if (p.y < -10) Object.assign(p, makeParticle());
    const alpha = Math.min(1, p.life) * (0.25 + 0.5 * Math.sin(p.life * 2));
    ctx.beginPath();
    ctx.fillStyle = `rgba(${p.color},${alpha})`;
    ctx.shadowColor = `rgba(${p.color},${alpha})`;
    ctx.shadowBlur = 8;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
  requestAnimationFrame(draw);
}
draw();