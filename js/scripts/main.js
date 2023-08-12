var slide_thumb = new Swiper(".slide-thumb", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true
});

var slider_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumb,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });



  const allFilters = document.querySelectorAll('.js-nav-games li a');
  const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    })

    tabPane.forEach(tab => {
      tab.classList.remove('active');
    })

    tabPane[index].classList.add('active');
    filter.classList.add('active');
  })
})

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const clickOutside = document.querySelector('.modal');
const tagHtml = document.documentElement;


btnOpenModal.addEventListener('click', (event) => {
  event.preventDefault();
  tagHtml.classList.add('show-modal')
})

btnCloseModal.addEventListener('click', () => {
  tagHtml.classList.remove('show-modal')
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    tagHtml.classList.remove('show-modal');
  }
})

document.addEventListener('click', (event) => {  
  if(event.target.closest('.js-open-modal')) return
  if(!event.target.closest('.modal .box')){
    tagHtml.classList.remove('show-modal')
  }
})

const btnMenu = document.querySelectorAll ('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
   btn.addEventListener('click', (event) => {
      event.preventDefault();
      
      menuSite.forEach(itemMenu => {
        itemMenu.classList.remove('active');
        
        itemMenu.addEventListener('mouseleave',() => {
          itemMenu.classList.remove('active');
          btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
          })
        })
      })

      btnMenu.forEach(itemBtn => {
        itemBtn.classList.remove('active');
      })

      btn.classList.add('active');
      menuSite[index].classList.add('active');

   })
   
  })


