/*
 * @extends HTMLElement
 * @customElement lstk-header
 */

export class LSTKHeader extends HTMLElement {

    connectedCallback() {
        this.render();
        this.addListeners();

        const initStickyHeader = () => {
            const headerTop = document.querySelector('.header-top');
            const headerBottom = document.querySelector('.header-bottom');

            if (!headerTop || !headerBottom) return;

            const headerTopHeight = headerTop.offsetHeight;

            window.addEventListener('scroll', () => {

                if (window.scrollY > headerTopHeight) {
                    headerBottom.classList.add('fixed');
                } else {
                    headerBottom.classList.remove('fixed');
                }
            });
        };

        document.addEventListener('DOMContentLoaded', initStickyHeader);
    }

    render() {

        this.innerHTML = `
            <header>
                <div class="header-top">
                    <div class='container'>
                        <div class="header-top__logo">
                             <a href="/lstkpromstroy/html/">
                                   <img src="/img/main/header-logo-w.svg" alt="logo">
                             </a>
                        </div>
                        <div class="header-top__address address text header-info">г. Красноярск,<br>ул.&nbsp;Чернышевского 114, пом. 230
                        </div>
                        <div class="header-top__phone phone text header-info">Бесплатная консультация<br>
                            <a href="tel:79130401909">+7 (913) 040-19-09</a>
                        </div>
                        <div class="header-top__work-schedule work-schedule text header-info">ПН-ПТ<br class="break"> с 09:00 до 18:00<br>
                            СБ-ВС - выходной
                        </div>
                        <div class="header-top__social-info">
                            <div class="header-top__contacts">
                                <div class="header-top__email email text header-info"><a href="mailto:lstk.promstroy@mail.ru">
                                        lstk.promstroy@mail.ru</a>
                                    </div>
                                    <div class="header-top__column social">
                                        <div class="header-top__social-icon social-icon"><a href="">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                                                <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="white"/>
                                            </svg>
                                        </a></div>
                                        <div class="header-top__social-icon social-icon"><a href="">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                                                <path d="M27.9268 12.0625C25.9512 10.0937 23.3171 9 20.5366 9C14.7561 9 10.0732 13.6667 10.0732 19.4271C10.0732 21.25 10.5854 23.0729 11.4634 24.6042L10 30L15.561 28.5417C17.0976 29.3438 18.7805 29.7812 20.5366 29.7812C26.3171 29.7812 31 25.1146 31 19.3542C30.9268 16.6563 29.9024 14.0312 27.9268 12.0625ZM25.5854 23.1458C25.3659 23.7292 24.3415 24.3125 23.8293 24.3854C23.3902 24.4583 22.8049 24.4583 22.2195 24.3125C21.8537 24.1667 21.3415 24.0208 20.7561 23.7292C18.122 22.6354 16.439 20.0104 16.2927 19.7917C16.1463 19.6458 15.1951 18.4062 15.1951 17.0937C15.1951 15.7812 15.8537 15.1979 16.0732 14.9062C16.2927 14.6146 16.5854 14.6146 16.8049 14.6146C16.9512 14.6146 17.1707 14.6146 17.3171 14.6146C17.4634 14.6146 17.6829 14.5417 17.9024 15.0521C18.122 15.5625 18.6341 16.875 18.7073 16.9479C18.7805 17.0938 18.7805 17.2396 18.7073 17.3854C18.6341 17.5312 18.561 17.6771 18.4146 17.8229C18.2683 17.9687 18.1219 18.1875 18.0488 18.2604C17.9024 18.4062 17.7561 18.5521 17.9024 18.7708C18.0488 19.0625 18.561 19.8646 19.3659 20.5937C20.3902 21.4687 21.1951 21.7604 21.4878 21.9063C21.7805 22.0521 21.9268 21.9792 22.0732 21.8333C22.2195 21.6875 22.7317 21.1042 22.878 20.8125C23.0244 20.5208 23.2439 20.5938 23.4634 20.6667C23.6829 20.7396 25 21.3958 25.2195 21.5417C25.5122 21.6875 25.6585 21.7604 25.7317 21.8333C25.8049 22.0521 25.8049 22.5625 25.5854 23.1458Z" fill="white"/>
                                            </svg>
                                        </a></div>
                                        <div class="header-top__social-icon social-icon"><a href="">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"/>
                                                <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="white"/>
                                            </svg>
                                        </a></div>
                                    </div>
                                </div>              
                            <div class="header-top__search-input">
                                <form action="./search.html" method="get">
                                    <input type="search" name="search" class="input search text" placeholder="Поиск" required>
                                </form>
                            </div>
                        </div>
                        <button class="header-top__more-btn" type="button" aria-label="Показать скрытые контакты">
                        </button>
                        <div class="header-top__column btn btn-y">
                            <button class="header-top__call-btn call-btn text">Заказать звонок</button>
                        </div>
                        <div class="header-top__mobile-buttons">
                            <a href="tel:79130401909" class="header-top__mobile-phone-btn" aria-label="Позвонить">
                                <img src="/img/main/header-phone-icon.svg" alt="phone">
                            </a>
                            <button class="header-top__burger-btn burger-btn" type="button" aria-label="Открыть меню">
                                <img src="/img/main/header-burger-icon.svg" alt="menu">
                            </button>
                        </div>
                    </div>
                </div>
                <div class="header-bottom__wrapper">
                    <div class="header-bottom">
                        <div class='container'>
                            <div class="header-bottom__logo">
                                <a href="/lstkpromstroy/html/">
                                    <img src="/img/main/header-logo.svg" alt="logo">
                                </a>
                            </div>
                            <div class="header-bottom__search-input">
                                <form action="./search.html" method="get">
                                    <input type="search" name="search" class="input search text" placeholder="Поиск" required>
                                </form>
                            </div>
                            <nav class="header-bottom__menu-list">
                                <div class="header-bottom__menu-item menu-link text menu-arrow">
                                <a href="/lstkpromstroy/html/services.html">Услуги</a>
                                <ul class="header-bottom__dropdown">
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Магазины из ЛСТК</a></li>
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Офисные здания, торговые здания, комплексы, центры</a></li>
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Автокомплексы</a></li>
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Склады, ангары</a></li>
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Объекты сельхоз назначения</a></li>
                                    <li><a href="/lstkpromstroy/html/services-detail.html">Производственные здания</a></li>
                                </ul>
                                </div>
                                <div class="header-bottom__menu-item menu-link text">
                                <a href="/lstkpromstroy/html/price.html">Цены</a>
                                </div>
                                <div class="header-bottom__menu-item menu-link text">
                                <a href="/lstkpromstroy/html/projects.html">Выполненные проекты</a>
                                </div>
                                <div class="header-bottom__menu-item menu-link text menu-arrow">
                                    <a href="/lstkpromstroy/html/company.html">О компании</a>
                                    <ul class="header-bottom__dropdown">
                                        <li><a href="/lstkpromstroy/html/about-technology.html">О технологии ЛСТК</a></li>
                                        <li><a href="/lstkpromstroy/html/reviews.html">Отзывы</a></li>
                                        <li><a href="/lstkpromstroy/html/articles.html">Статьи</a></li>
                                        <li><a href="/lstkpromstroy/html/news.html">Новости</a></li>
                                        <li><a href="/lstkpromstroy/html/work-scheme.html">Схема работы</a></li>
                                    </ul>
                                </div>
                                <div class="header-bottom__menu-item menu-link text">
                                    <a href="/lstkpromstroy/html/contacts.html">Контакты</a>
                                </div>
                            </nav>
                            <div class="header-bottom__cost btn btn-w">
                                <button class="header-bottom__cost-btn cost-btn text">Рассчитать стоимость</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu">
                    <div class="mobile-menu__header">
                        <button class="mobile-menu__close-btn" type="button" aria-label="Закрыть меню">&times;</button>
                    </div>
                    <div class="mobile-menu__content">
                        <div class="mobile-menu__search">
                            <form action="./search.html" method="get">
                                <input type="search" name="search" class="input search text" placeholder="Поиск" required>
                            </form>
                        </div>
                        <nav class="mobile-menu__menu-list">
                            <div class="mobile-menu__menu-item services-menu menu-link text menu-arrow">
                                <a href="/lstkpromstroy/html/services.html">Услуги</a>
                                <div class="mobile-menu__dropdown services-dropdown">
                                    <a href="/lstkpromstroy/html/services-detail.html">Магазины из ЛСТК</a>
                                    <a href="/lstkpromstroy/html/services-detail.html">Офисные здания, торговые здания...</a>
                                    <a href="/lstkpromstroy/html/services-detail.html">Автокомплексы</a>
                                    <a href="/lstkpromstroy/html/services-detail.html">Склады, ангары</a>
                                    <a href="/lstkpromstroy/html/services-detail.html">Объекты сельхоз назначения</a>
                                    <a href="/lstkpromstroy/html/services-detail.html">Производственные здания</a>
                                </div>
                            </div>
                            <a href="/lstkpromstroy/html/price.html" class="mobile-menu__menu-item menu-link text">Цены</a>
                            <a href="/lstkpromstroy/html/projects.html" class="mobile-menu__menu-item menu-link text">Выполненные проекты</a>
                            <div class="mobile-menu__menu-item company-menu menu-link text menu-arrow">
                                <a href="/lstkpromstroy/html/company.html">О компании</a>
                                <div class="mobile-menu__dropdown company-dropdown">
                                    <a href="/lstkpromstroy/html/about-technology.html">О технологии ЛСТК</a>
                                    <a href="/lstkpromstroy/html/reviews.html">Отзывы</a>
                                    <a href="/lstkpromstroy/html/articles.html">Статьи</a>
                                    <a href="/lstkpromstroy/html/news.html">Новости</a>
                                    <a href="/lstkpromstroy/html/work-scheme.html">Схема работы</a>
                                </div>
                            </div>
                            <a href="/lstkpromstroy/html/contacts.html" class="mobile-menu__menu-item menu-link text">Контакты</a>
                        </nav>
                        <div class="mobile-menu__buttons">
                            <div class="mobile-menu__call-btn btn btn-y">
                                <button class="mobile-menu__call-btn call-btn text">Заказать звонок</button>
                            </div>
                            <div class="mobile-menu__cost-btn btn btn-w">
                                <button class="mobile-menu__cost-btn cost-btn text">Рассчитать стоимость</button>
                            </div>
                        </div>
                        <div class="mobile-menu__contacts">
                            <div class="mobile-menu__address address text header-info">г. Красноярск,<br>ул.&nbsp;Чернышевского 114, пом. 230</div>
                            <div class="mobile-menu__phone phone text header-info">Бесплатная консультация<br><a href="tel:79130401909">+7 (913) 040-19-09</a></div>
                            <div class="mobile-menu__work-schedule work-schedule text header-info">ПН-ПТ с 09:00 до 18:00<br>СБ-ВС - выходной</div>
                            <div class="mobile-menu__email email text header-info"><a href="mailto:lstk.promstroy@mail.ru">lstk.promstroy@mail.ru</a></div>
                        </div>
                        <div class="mobile-menu__column social">
                             <div class="mobile-menu__social-icon social-icon"><a href="">
                                   <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor"/>
                                         <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="currentColor"/>
                                   </svg>
                             </a></div>
                             <div class="mobile-menu__social-icon social-icon"><a href="">
                                   <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor"/>
                                          <path d="M27.9268 12.0625C25.9512 10.0937 23.3171 9 20.5366 9C14.7561 9 10.0732 13.6667 10.0732 19.4271C10.0732 21.25 10.5854 23.0729 11.4634 24.6042L10 30L15.561 28.5417C17.0976 29.3438 18.7805 29.7812 20.5366 29.7812C26.3171 29.7812 31 25.1146 31 19.3542C30.9268 16.6563 29.9024 14.0312 27.9268 12.0625ZM25.5854 23.1458C25.3659 23.7292 24.3415 24.3125 23.8293 24.3854C23.3902 24.4583 22.8049 24.4583 22.2195 24.3125C21.8537 24.1667 21.3415 24.0208 20.7561 23.7292C18.122 22.6354 16.439 20.0104 16.2927 19.7917C16.1463 19.6458 15.1951 18.4062 15.1951 17.0937C15.1951 15.7812 15.8537 15.1979 16.0732 14.9062C16.2927 14.6146 16.5854 14.6146 16.8049 14.6146C16.9512 14.6146 17.1707 14.6146 17.3171 14.6146C17.4634 14.6146 17.6829 14.5417 17.9024 15.0521C18.122 15.5625 18.6341 16.875 18.7073 16.9479C18.7805 17.0938 18.7805 17.2396 18.7073 17.3854C18.6341 17.5312 18.561 17.6771 18.4146 17.8229C18.2683 17.9687 18.1219 18.1875 18.0488 18.2604C17.9024 18.4062 17.7561 18.5521 17.9024 18.7708C18.0488 19.0625 18.561 19.8646 19.3659 20.5937C20.3902 21.4687 21.1951 21.7604 21.4878 21.9063C21.7805 22.0521 21.9268 21.9792 22.0732 21.8333C22.2195 21.6875 22.7317 21.1042 22.878 20.8125C23.0244 20.5208 23.2439 20.5938 23.4634 20.6667C23.6829 20.7396 25 21.3958 25.2195 21.5417C25.5122 21.6875 25.6585 21.7604 25.7317 21.8333C25.8049 22.0521 25.8049 22.5625 25.5854 23.1458Z" fill="currentColor"/>
                                   </svg>
                             </a></div>
                             <div class="mobile-menu__social-icon social-icon"><a href="">
                                   <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="currentColor"/>
                                         <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="currentColor"/>
                                   </svg>
                             </a></div>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }

    addListeners() {
        const costBtns = this.querySelectorAll('.cost-btn');
        const callBtns = this.querySelectorAll('.call-btn');
        const moreBtn = this.querySelector('.header-top__more-btn');
        const socialInfo = this.querySelector('.header-top__social-info');
        const burgerBtn = this.querySelector('.header-top__burger-btn');
        const closeBtn = this.querySelector('.mobile-menu__close-btn');
        const mobileMenu = this.querySelector('.mobile-menu');
        const servicesDropdown = this.querySelector('.services-dropdown');
        const companyDropdown = this.querySelector('.company-dropdown');
        const servicesMenu = this.querySelector('.services-menu');
        const companyMenu = this.querySelector('.company-menu');
        const searchContainer = this.querySelector('.header-bottom__search-input');
        const searchInput = searchContainer ? searchContainer.querySelector('input[type="search"]') : null;

        if (costBtns.length > 0) {
            costBtns.forEach(btn => {
                btn.addEventListener('click', () => {

                    if (mobileMenu) mobileMenu.classList.remove('is-open');

                    const costModal = document.querySelector('#header-cost-modal');

                    if (costModal && typeof costModal.openModal === 'function') {
                        costModal.openModal();
                    }
                });
            });
        }

        if (callBtns.length > 0) {
            callBtns.forEach(btn => {
                btn.addEventListener('click', () => {

                    if (mobileMenu) mobileMenu.classList.remove('is-open');

                    const callModal = document.querySelector('#header-call-modal');

                    if (callModal && typeof callModal.openModal === 'function') {
                        callModal.openModal();
                    }
                });
            });
        }

        document.body.addEventListener('click', (e) => {
            if (document.body.classList.contains('menu-open') && !e.target.closest('.mobile-menu')) {

                if (mobileMenu) {
                    mobileMenu.classList.remove('is-open');
                    document.body.classList.remove('menu-open');
                }
            }
        });

        if (moreBtn && socialInfo) {
            moreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                socialInfo.classList.toggle('is-open');
            });

            document.addEventListener('click', () => {
                socialInfo.classList.remove('is-open');
            });
        }

        if (burgerBtn && mobileMenu) {
            burgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('is-open');
                document.body.classList.toggle('menu-open');
            });
        }

        if (closeBtn && mobileMenu) {
            closeBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                document.body.classList.remove('menu-open');
            });
        }

        if (servicesMenu) {
            servicesMenu.addEventListener('click', () => {
                servicesDropdown.classList.toggle('is-open');
            })
        }

        if (companyMenu) {
            companyMenu.addEventListener('click', () => {
                companyDropdown.classList.toggle('is-open');
            })
        }

        if (searchContainer && searchInput) {
            searchInput.addEventListener('click', (e) => {
                if (window.innerWidth < 1440) {

                    if (!searchContainer.classList.contains('is-open')) {
                        e.preventDefault();
                        searchContainer.classList.add('is-open');
                        searchInput.focus();
                    }
                }
            });

            document.addEventListener('click', (e) => {
                if (searchContainer.classList.contains('is-open') && !e.target.closest('.header-bottom__search-input')) {
                    searchContainer.classList.remove('is-open');
                    searchInput.value = '';
                }
            });
        }
    }
}

customElements.define('lstk-header', LSTKHeader);