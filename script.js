const header=document.querySelector('.site-header');
const menu=document.querySelector('.nav');
const menuBtn=document.querySelector('.menu-btn');
function onScroll(){if(header)header.classList.toggle('scrolled',window.scrollY>30)}
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
if(menuBtn&&menu){menuBtn.addEventListener('click',()=>{menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',menu.classList.contains('open'))});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
