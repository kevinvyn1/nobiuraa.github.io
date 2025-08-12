// Tahun di footer
document.getElementById('y').textContent = new Date().getFullYear();

// Intersection Observer untuk animasi scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target); // tampil sekali saja
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Parallax / rescale halus pada background hero (opsional, ringan)
const hero = document.querySelector('.hero');
function onScroll() {
  // skala naik tipis saat scroll untuk memberikan kesan depth
  const sc = Math.min(1.12, 1 + window.scrollY / 3000);
  hero.style.setProperty('--bg-scale', sc.toFixed(3));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
