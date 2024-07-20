/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((btnClose) => {
    btnClose.addEventListener('click', () => {
        modal.forEach(modalRemove => {
            modalRemove.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
  });

/*=============== SHOW SCROLL UP ===============*/ 
const showScroll = () => {
    const scrollUp = document.getElementById('scrollup')
    // when the scroll is higher than 350 viewport height, add the 'show-scroll'
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', showScroll)
