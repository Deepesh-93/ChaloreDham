
//------------ hidden-navbar------------------
window.addEventListener('scroll',()=>{
    const scrolled=window.scrollY;
    if(scrolled>713)
    {
    document.querySelector('.mynavbar').classList.add('gradient-background');
    document.querySelector('.homelink').classList.remove('active');
  
    }
    if(scrolled<713){
        document.querySelector('.mynavbar').classList.remove('gradient-background');
       
    }
});

//---------------top-to-down-----------------
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++)
    {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('reveal-active');
    }
    else{
        reveals[i].classList.remove('reveal-active');
    }
}
}
//------------------for explore revealside--------------------------------------
window.addEventListener('scroll',revealside);
function revealside(){
    var reveals=document.querySelectorAll('.revealside');
    for(var i=0;i<reveals.length;i++)
    {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('revealside-active');
    }
    else{
        reveals[i].classList.remove('revealside-active');
    }
}
}

window.addEventListener('scroll',revealside2);
function revealside2(){
    var reveals=document.querySelector('.revealside2');

    var windowheight=window.innerHeight;
    var revealtop=reveals.getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals.classList.add('revealside2-active');
    }
    else{
        reveals.classList.remove('revealside2-active');
    }

}
