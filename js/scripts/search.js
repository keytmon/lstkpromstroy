export const servicesSearch = () => {
      const resultsContainer = document.getElementById('search-results-container');

      if (!resultsContainer) return;

      const queryTextSpan = document.getElementById('search-text');
      const emptyMessage = document.getElementById('search-empty-message');
      const urlParams = new URLSearchParams(window.location.search);
      const searchQuery = urlParams.get('search')?.trim().toLowerCase() || '';

      if (queryTextSpan) {
          queryTextSpan.textContent = searchQuery ? `«${urlParams.get('search')}»` : 'пустой запрос';
      }

      if (!searchQuery) {
          if (emptyMessage) emptyMessage.style.display = 'block';
          return;
      }

      const siteDatabase = [
          {
              title: "Строительство магазинов из ЛСТК",
              price: "От ХХХ ₽",
              img: "../img/services/services-1.jpg"
          },
          {
              title: "Офисные здания, торговые здания, комплексы, центры",
              price: "От ХХХ ₽",
              img: "../img/services/services-2.jpg"
          },
          {
              title: "Автокомплексы",
              price: "От ХХХ ₽",
              img: "../img/services/services-3.jpg"
          },
          {
              title: "Склады, ангары",
              price: "От ХХХ ₽",
              img: "../img/services/services-4.jpg"
          },
          {
              title: "Объекты сельхоз назначения",
              price: "От ХХХ ₽",
              img: "../img/services/services-5.jpg"
          },
          {
              title: "Производственные здания",
              price: "От ХХХ ₽",
              img: "../img/services/services-6.jpg"
          }
      ];

      const matchedResults = siteDatabase.filter(item =>
          item.title.toLowerCase().includes(searchQuery)
      );

      if (matchedResults.length === 0) {
          if (emptyMessage) emptyMessage.style.display = 'block';
      } else {
          if (emptyMessage) emptyMessage.style.display = 'none';

          matchedResults.forEach(item => {
              const cardLink = document.createElement('a');

              cardLink.href = 'services-detail.html';
              cardLink.classList.add('our-services__item-btn-link');

              cardLink.innerHTML = `
                 <div class="our-services__item">
                      <div class="our-services__item-img item-img ${item.img}">
                           <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                      </div>
                      <div class="our-services__item-title text">${item.title}</div>
                      <div class="our-services__item-price text">${item.price}</div>
                 </div>
              `;
              resultsContainer.appendChild(cardLink);
          });
      }
}