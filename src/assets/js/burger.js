const burger=document.querySelector('.burger')

burger.addEventListener('click', function(){
    burger.classList.toggle('burger_active');
    contentMenu.classList.toggle('header-menu_active');
    bg.classList.toggle('header-bg-pink_active');
  })