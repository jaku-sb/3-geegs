



const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentitems = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlocks.forEach( item => {
        item.style.display = 'none';
    })
    tabContentitems.forEach( item => {
        item.classList.remove ('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContentBlocks [i].style.display = 'block'
    tabContentitems[i].classList.add ('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item'))
    tabContentitems.forEach( (item,i) => {
        console.log(i)
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }

    })
}