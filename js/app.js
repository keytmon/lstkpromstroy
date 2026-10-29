import { CostCalculationForm } from "./components/cost-calculation-form.js";
import { LSTKHeader } from "./components/header.js";
import { LSTKFooter } from "./components/footer.js";
import { LSTKAdvantages } from "./components/advantages.js";
import { ReviewsBlock } from "./components/reviews-block.js";
import { LSTKProjects } from "./components/projects.js";
import { LSTKClients } from "./components/clients.js";
import { CallbackForm } from "./components/callback-form.js";
import { TextBlock } from "./components/text-block.js";
import { LSTKServices } from "./components/services.js";
import { LSTKArticle } from "./components/article-card.js";
import { ArticleDetail } from "./components/article-detail.js";
import { LSTKReviews } from "./components/reviews.js";
import { ReviewsModal } from "./components/reviews-modal.js";
import { initServiceSpoiler } from './scripts/services-detail.js';
import { initHeroSlider } from './scripts/main-slider.js';
import { initProjectsFilter } from "./scripts/projects.js";
import { initServicesTabs } from "./scripts/services.js";
import { CallbackModal } from "./components/callback-modal.js";
import { servicesSearch } from "./scripts/search.js";


document.addEventListener("DOMContentLoaded", function (){

    initServiceSpoiler();
    initHeroSlider();
    initProjectsFilter();
    initServicesTabs();
    servicesSearch();

    let callbackModal = document.querySelector('#header-call-modal');

    if (!callbackModal) {
        callbackModal = document.createElement('callback-modal');
        callbackModal.id = 'header-call-modal';
        document.body.appendChild(callbackModal);
    }

    let costModal = document.querySelector('#header-cost-modal');

    if (!costModal) {
        costModal = document.createElement('cost-calculation-form');
        costModal.id = 'header-cost-modal';
        costModal.classList.add('cost-form--modal');
        document.body.appendChild(costModal);
    }
})