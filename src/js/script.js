'use strict' 

window.addEventListener('DOMContentLoaded', function() {

    //modal

    const modal = document.querySelector('.modal'),
          layout = document.querySelector('.overlay'),
          modalClose = document.querySelector('.modal_close'),
          modalTrigger = document.querySelector('.shop_btn');

    function openModal() {
        modal.style.display = 'block';
        layout.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        layout.style.display = 'none';
        document.body.style.overflow = '';
    }

    modalTrigger.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);

    //menu choice 

    const menuTitle = document.querySelectorAll('.menu_item'),
          menuImg = document.querySelectorAll('.menu_img'),
          menuImgViolet = document.querySelectorAll('.menu_img-violet');

        
    function removeClass(item, clas) {
        item.classList.remove(clas);
    }

    // function addClass(arr1, item, item2, clas) {
    //     arr1.forEach(el => removeClass(el, clas));
    //     item.classList.add(clas);
    //     item2.classList.remove(clas);
    // }


        menuTitle.forEach((item, i) => {
            item.addEventListener('click', () => {
                // addClass(menuImgViolet, menuImgViolet[i], menuImg[i], 'active');
                removeClass(menuImg[i], 'active');
                menuImgViolet.forEach(elem => elem.classList.remove('active'))
                menuImg.forEach((el, c) => {
                    if (c === i) {
                        el.classList.remove('active');
                    } else {
                        el.classList.add('active');
                    }
                });
                menuImgViolet.forEach((el, c) => {
                    if (c === i) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                });
                // 
            });
        });
        //         for (let counter = 0; counter <= 8; counter++) {
        //             if (i != counter) {
        //                 menuImg[i].classList.add('active');
        //             } else {
        //                 menuImg[i].classList.remove('active');
        //             }
        //         }
        //     });
        // });

    //menu navigation 

    function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

        let tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);
    
        function hideTabContent() {
            
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }
        
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    tabs('.menu_item', '.menu_content', '.menu_list', '.menu_item-active');

    //header link 

    const menuHeader = document.querySelectorAll('.menu_item'),
          headerLinks = document.querySelector('.header_links');

    const link = document.createElement('a');

    const linkContent = [
        'Главная',
        'Мои магазины',
        'Промоматериалы',
        'Статистика',
        'Баланс',
        'Персональные данные',
        'FAQ',
        'Техподдержка',
        'Выход'
    ]

    link.classList.add('header_link');
    link.classList.add('page');

    menuHeader.forEach((item, i) => item.addEventListener('click', () => {
        link.innerHTML = linkContent[i];
        headerLinks.appendChild(link);
    }))


    //menu 
    const hamburger = document.querySelector('.hamburger'),
          menuSide = document.querySelector('.menu'),
          menuItems = document.querySelectorAll('.menu_item'),
          menuClose = document.querySelector('.menu_close');

    function openMenu() {
        menuSide.style.display = 'block';
    }
    function closeMenu() {
        menuSide.style.display = 'none';
    }

    hamburger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);

});