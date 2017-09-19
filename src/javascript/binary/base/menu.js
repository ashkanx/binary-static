const Client = require('./client');
require('../../lib/mmenu/jquery.mmenu.min.all.js');

const Menu = (() => {
    let main_menu,
        menu_top,
        items;

    const init = () => {
        main_menu = document.getElementById('main-menu');
        menu_top  = document.getElementById('menu-top');
        items     = main_menu.getElementsByClassName('item');

        const li_menu = menu_top.getElementsByTagName('li');
        for (let i = 0; i < li_menu.length; i++) {
            li_menu[i].classList.remove('active');
        }
        hideMainMenu();

        const active = activeMenuTop();
        if (active) active.classList.add('active');

        if (Client.isLoggedIn() || /\/(cashier|resources|trading|trading_beta|multi_barriers_trading)/i.test(window.location.pathname)) {
            showMainMenu();
        }
    };

    const showMainMenu = () => {
        main_menu.setVisibility(1);
        activateMainMenu();
    };

    const hideMainMenu = () => {
        main_menu.setVisibility(0);
    };

    const activateMainMenu = () => {
        // First unset everything.
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active', 'hover');
        }
        const link_sub_items = main_menu.querySelectorAll('.sub_item a');
        for (let i = 0; i < link_sub_items.length; i++) {
            link_sub_items[i].classList.remove('a-active');
        }

        const active         = activeMainMenu();
        const active_item    = active.item;
        const active_subitem = active.subitem;
        if (active_subitem) {
            active_subitem.classList.add('a-active');
        }

        if (active_item) {
            active_item.classList.add('active', 'hover');
            onMouseHover(active_item);
        }
    };

    const onUnload = () => {
        main_menu.removeEventListener('mouseleave', onMouseLeave);
        for (let i = 0; i < items.length; i++) {
            items[i].removeEventListener('mouseenter', onMouseEnter);
        }
    };

    const removeHover = () => {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('hover');
        }
    };

    const onMouseHover = (active_item) => {
        main_menu.addEventListener('mouseleave', () => {
            onMouseLeave(active_item);
        });
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('mouseenter', onMouseEnter);
        }
    };

    const onMouseLeave = (active_item) => {
        removeHover();
        if (active_item) active_item.classList.add('hover');
    };

    const onMouseEnter = (e) => {
        removeHover();
        e.target.classList.add('hover');
    };

    const activeMenuTop = () => {
        let active = '';
        const path = window.location.pathname;
        const link_menu_top = menu_top.getElementsByTagName('a');
        for (let i = 0; i < link_menu_top.length; i++) {
            if (path.indexOf(link_menu_top[i].pathname.replace(/\.html/i, '')) >= 0) {
                active = link_menu_top[i].closest('li');
            }
        }
        return active;
    };

    const activeMainMenu = () => {
        let pathname = window.location.pathname;
        if (/cashier/i.test(pathname) && !(/cashier_password|payment_methods/.test(pathname))) {
            pathname = document.getElementById('topMenuCashier').getElementsByTagName('a')[0].getAttribute('href');
        }
        let subitem;
        let item = main_menu.querySelector(`a[href*="${pathname}"]`);

        if (item) {
            const parent = item.closest('li');
            // Is something selected in main items list
            if (parent.classList.contains('sub_item')) {
                subitem = item;
                item    = subitem.closest('.item');
            } else {
                item = parent;
            }
        }

        return { item, subitem };
    };

    const makeMobileMenu = () => {
        if (document.getElementById('mobile-menu-container').offsetParent) {
            $('#mobile-menu').mmenu({
                position       : 'right',
                zposition      : 'front',
                slidingSubmenus: false,
                searchfield    : true,
                onClick        : { close: true },
            }, { selectedClass: 'active' });
        }
    };

    return {
        init,
        onUnload,
        makeMobileMenu,
    };
})();

module.exports = Menu;
