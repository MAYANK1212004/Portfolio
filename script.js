// Initialize animations and small interactions
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic'
});

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Small: animate skill bars when they enter viewport
const skillFills = document.querySelectorAll('.skill-fill');
function animateSkills(){
  skillFills.forEach(s => {
    const w = s.style.width || '0%';
    s.style.width = '0%';
    setTimeout(()=> s.style.width = w, 120);
  });
}
window.addEventListener('load', animateSkills);
window.addEventListener('resize', ()=>{/* no-op, ensures CSS handles it */});
