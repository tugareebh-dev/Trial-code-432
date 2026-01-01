/* =====================================================
   PASSWORD UNLOCK – CINEMATIC ENTRY
===================================================== */
function checkPassword() {
  const input = document.getElementById("passwordInput");
  const error = document.getElementById("errorText");
  const lock = document.getElementById("lockScreen");
  const content = document.getElementById("siteContent");
  const music = document.getElementById("bgMusic");

  if (input.value === "divyareel2026") {
    lock.style.opacity = "0";
    lock.style.transform = "scale(1.1)";
    setTimeout(() => {
      lock.style.display = "none";
      content.style.display = "block";
      startMusic(music);
      initScrollReveal();
    }, 800);
  } else {
    error.innerText = "This reel opens only for Divya.";
    error.style.animation = "shake 0.4s";
    setTimeout(() => (error.style.animation = ""), 400);
  }
}

/* =====================================================
   MUSIC CONTROL – SMOOTH & PREMIUM
===================================================== */
function startMusic(music) {
  music.volume = 0;
  music.play().catch(() => {});
  let v = 0;
  const fade = setInterval(() => {
    v += 0.02;
    music.volume = Math.min(v, 0.6);
    if (v >= 0.6) clearInterval(fade);
  }, 120);
}

/* =====================================================
   SCROLL REVEAL – REEL SCENE FEEL
===================================================== */
function initScrollReveal() {
  const scenes = document.querySelectorAll(".scene");

  scenes.forEach(scene => {
    scene.style.opacity = "0";
    scene.style.transform = "translateY(80px)";
  });

  window.addEventListener("scroll", () => {
    scenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        scene.style.opacity = "1";
        scene.style.transform = "translateY(0)";
        scene.style.transition = "all 1.2s ease";
      }
    });
  });
}

/* =====================================================
   HEART INTERACTION – EMOTIONAL TOUCH
===================================================== */
function heartEffect() {
  spawnHearts(20);
}

function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animation = "floatHeart 3s ease-out forwards";
    heart.style.zIndex = 10;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

/* =====================================================
   FIREWORKS – FINAL CELEBRATION
===================================================== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
resizeCanvas();

let particles = [];

function celebrate() {
  launchFirework();
  spawnConfetti();
}

function launchFirework() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: cx,
      y: cy,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12,
      life: 100,
      color: `hsl(${Math.random() * 360},100%,60%)`
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

/* =====================================================
   CONFETTI – REEL STYLE
===================================================== */
function spawnConfetti() {
  for (let i = 0; i < 120; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.top = "-10px";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.width = "8px";
    conf.style.height = "14px";
    conf.style.background = `hsl(${Math.random() * 360},100%,60%)`;
    conf.style.animation = "confettiFall 4s linear forwards";
    conf.style.zIndex = 9;
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 4000);
  }
}

/* =====================================================
   RESIZE
===================================================== */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);

/* =====================================================
   EXTRA CSS ANIMATIONS (INJECTED)
===================================================== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatHeart{
  0%{transform:translateY(0) scale(1);opacity:1;}
  100%{transform:translateY(-300px) scale(1.4);opacity:0;}
}
@keyframes confettiFall{
  0%{transform:translateY(0) rotate(0deg);}
  100%{transform:translateY(110vh) rotate(720deg);}
}
@keyframes shake{
  0%{transform:translateX(0);}
  25%{transform:translateX(-5px);}
  50%{transform:translateX(5px);}
  75%{transform:translateX(-5px);}
  100%{transform:translateX(0);}
}
`;
document.head.appendChild(style);
