let isFirstClick = true;
        const burger = document.querySelector('.burger-menu__button');
        const menu = document.querySelector('.burger-menu__content');
        const overlay = document.querySelector('.burger-menu__overlay');
        const body = document.body;

        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('body-no-scroll');

            // Скрываем элементы только при первом клике
            if (isFirstClick && this.classList.contains('active')) {
                document.querySelector('.burger-menu__arrow').style.opacity = '0';
                document.querySelector('.burger-menu__text').style.opacity = '0';
                isFirstClick = false;
            }
        });

        // Закрытие по клику на overlay
        overlay.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('body-no-scroll');
        });

        const swiper = new Swiper('.swiper', {
            speed: 800,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 100,
            loop: false,
            lazy: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });