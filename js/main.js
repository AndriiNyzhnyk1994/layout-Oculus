'use strict'
const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')


function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach( function(el) {
        el.classList.remove('tabs__btn-item--active')
    } )
    tabContent.forEach( function(el) {
        el.classList.remove('tabs__content-item--active')
    } )

    tabTarget.classList.add('tabs__content-item--active')
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}


tabItem.forEach( function(el) {
    el.addEventListener('click', open)
} )