const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',(e)=>{
  if(window.innerWidth > 900){
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// Small parallax effect for the hero artwork.
const heroArt = document.querySelector('.hero-art');
window.addEventListener('scroll',()=>{
  if(!heroArt || window.innerWidth < 900) return;
  const y = Math.min(window.scrollY, 500);
  heroArt.style.transform = `translateY(${y * .035}px)`;
});
