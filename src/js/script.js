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


        menuTitle.forEach((item, i) => {
            item.addEventListener('click', () => {
                menuImg[i].classList.toggle('unactive');
                menuImgViolet[i].classList.toggle('active');
            });
        });

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
});