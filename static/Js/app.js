const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.navbar-nav');

toggleBtn.addEventListener('click', ()=>{
    console.log('clicked')
    sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', ()=>{
    console.log('clicked')
    sidebar.classList.remove('show-sidebar')
})
