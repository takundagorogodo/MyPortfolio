/* ── AOS init ── */
AOS.init({ once: true, offset: 60, duration: 650, easing: 'ease-out-quad' });

/* ── Dark / Light mode ── */
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

/* ── Navbar scroll shadow ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('shadow-md', window.scrollY > 10);
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a.nav-link');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4, rootMargin: '-60px 0px -40% 0px' });
sections.forEach(s => observer.observe(s));

/* ── Mobile menu ── */
const mobileMenu = document.getElementById('mobile-menu');
document.getElementById('hamburger').addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});
function closeMenu() {
  mobileMenu.classList.add('hidden');
  document.body.style.overflow = '';
}
document.getElementById('menu-close').addEventListener('click', closeMenu);

/* close mobile menu when resizing to desktop */
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) closeMenu();
});

/* ── Skill bars (trigger when in view) ── */
const bars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => barObserver.observe(b));

/* ── Contact form ── */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    document.getElementById('form-success').classList.remove('hidden');
    this.reset();
    setTimeout(() => document.getElementById('form-success').classList.add('hidden'), 4000);
  }, 1500);
});