    const burger = document.querySelector('.burger'),
        plate = document.querySelector('.plate'),
        menuNav = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay'),
        body = document.querySelector('body');


    /* Burger */
    burger.addEventListener('click', () => {
        plate.classList.toggle('active');
        menuNav.classList.toggle('active');
        if (menuNav.classList.contains('active')) {
            burger.style.transform = "translateX(calc(-100vw + 345px))";
            body.classList.add('no-scroll')
        } else {
            burger.style.transform = "translateX(0)";
            body.classList.remove('no-scroll')
        }
    });

    overlay.addEventListener('click', () => {
        menuNav.classList.remove('active');
        plate.classList.remove('active');
        burger.style.transform = "translateX(0)";
        body.classList.remove('no-scroll')
    });

    const percent = document.querySelectorAll('.counter__item-percent');
    const lines = document.querySelectorAll('.counter__item-body-percent');



    percent.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });


    /* Anchors */
    const scrollItem = document.querySelectorAll('a[href*="#"]');

    scrollItem.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const blockId = link.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            menuNav.classList.remove('active');
            plate.classList.remove('active');
            burger.style.transform = "translateX(0)";
            body.classList.remove('no-scroll')
        })
    })