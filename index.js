const menuIcon=document.querySelector('#menu-icon');
const navBar=document.querySelector('header nav');
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
})
const activePage=()=>{
    const header=document.querySelector('header');
    menuIcon.classList.remove('fa-x');
    navBar.classList.remove('active');
}
// resume
const resumebtn=document.querySelectorAll(".resume-btn")
resumebtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        const resumedetail = document.querySelectorAll('.resume-detail');
        resumebtn.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumedetail.forEach(detailss=>{
            detailss.classList.remove("active");
        });
       resumedetail[idx].classList.add('active')
       
    })
})

