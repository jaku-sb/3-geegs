const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentitems = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let currentIndex = 0; // Текущий активный индекс
let intervalId; // ID интервала для автоматического переключения

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    });
    tabContentitems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabContentitems[i].classList.add('tab_content_item_active');
};

const startAutoSlide = () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabContentBlocks.length; // Переход к следующей вкладке
        hideTabContent();
        showTabContent(currentIndex);
    }, 3000); // Интервал 3 секунды
};

const stopAutoSlide = () => {
    clearInterval(intervalId); // Остановка автопереключения
};

// Начальная инициализация
hideTabContent();
showTabContent();

// Автопереключение
startAutoSlide();

// Обработка кликов по вкладкам
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentitems.forEach((item, i) => {
            if (event.target === item) {
                stopAutoSlide(); // Останавливаем автоматическое переключение при клике
                currentIndex = i; // Обновляем текущий индекс
                hideTabContent();
                showTabContent(i);
                startAutoSlide(); // Перезапускаем автопереключение
            }
        });
    }
};




// модальное окошко
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close');

let isModalShown = false;


const openModal = () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    isModalShown = true;
};


const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};


const scrollHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener('scroll', scrollHandler);
    }
};


window.addEventListener('scroll', scrollHandler);


setInterval(() => {
    openModal();
}, 20000);


closeModalBtn.addEventListener('click', closeModal);


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
