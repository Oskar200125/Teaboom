document.addEventListener('DOMContentLoaded', () => {
    const productSwiper = new Swiper('.product__inner', {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        navigation: {
            prevEl: '.product__arrow--prev',
            nextEl: '.product__arrow--next'
        },

        breakpoints: {
            601: {
                slidesPerView: 3
            }
        }
    });



    document.querySelectorAll('.product__block').forEach(block => {
        const links = block.querySelectorAll('.product__link');
        const contents = block.querySelectorAll('.product__content');

        links.forEach((link, index) => {
            link.addEventListener('click', () => {
                links.forEach(l => l.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                link.classList.add('active');
                contents[index].classList.add('active');
            });
        });
    });



    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const modal = document.querySelector(this.dataset.modal);

            document.body.classList.add('no-scroll');
            modal.classList.add('show');

            setTimeout(() => {
                modal.querySelector('.modal__content').style.transform = 'scale(1)';
                modal.querySelector('.modal__content').style.opacity = '1';
            }, 100);
        });
    });

    document.querySelectorAll('[data-modal-close]').forEach(closeBtn => {
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const modal = this.closest('.modal');
            modalClose(modal);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function() {
            modalClose(this);
        });
    });

    document.querySelectorAll('.modal__content').forEach(content => {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    function modalClose(modal) {
        const content = modal.querySelector('.modal__content');
        content.style.transform = 'scale(0.5)';
        content.style.opacity = '0';

        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            modal.classList.remove('show');
        }, 200);
    }
});
