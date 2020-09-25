    const burger = document.querySelector('.burger'),
        plate = document.querySelector('.plate'),
        menuNav = document.querySelector('.menu'),
        overlay = document.querySelector('.menu__overlay');


    /* Burger */
    burger.addEventListener('click', () => {
        plate.classList.toggle('active');
        menuNav.classList.toggle('active');
        if (menuNav.classList.contains('active')) {
            burger.style.transform = "translateX(calc(-100vw + 345px))";
        } else {
            burger.style.transform = "translateX(0)";
        }
    });

    overlay.addEventListener('click', () => {
        menuNav.classList.remove('active');
        plate.classList.remove('active');
        burger.style.transform = "translateX(0)";
    });

    const percent = document.querySelectorAll('.counter__item-percent');
    const lines = document.querySelectorAll('.counter__item-body-percent');



    percent.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });