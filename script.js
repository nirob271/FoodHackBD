document.addEventListener('DOMContentLoaded',()=>{
      const links = document.querySelectorAll('.navlinks a');
      links.forEach((l,i)=>{ l.style.opacity=0; l.style.transform='translateY(-6px)'; setTimeout(()=>{ l.style.transition='all .45s cubic-bezier(.2,.9,.2,1)'; l.style.opacity=1; l.style.transform='none'; }, 120*i) });
    })