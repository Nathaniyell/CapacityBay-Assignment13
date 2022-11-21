const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.navbar-nav');

toggleBtn.addEventListener('click', ()=>{
    console.log('added')
    sidebar.setAttribute('style', "transform:translate(0)")
})
closeBtn.addEventListener('click', ()=>{
    console.log('removed')
    sidebar.removeAttribute('style', "transform:translate(0)")
})
