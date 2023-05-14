/**toggle/theme**/

const area = document.querySelector('.toggle-area')
const button = document.querySelector('#toggle-id')
const body = document.querySelector('body')
const icons = document.querySelector('#icon')
const section = document.querySelectorAll('section')

    area.addEventListener('click', function() {
           
            body.classList.toggle('body-dark')
            body.style.transition = '0.5s'
            icons.classList.toggle('bi-sun')
            button.classList.toggle('toggle-dark')


          section.forEach((item) => {
            if(button.classList.contains('toggle-sun'))
            item.classList.toggle('section-dark')
            item.style.transition = '0.5s'

          }

    )});

/**slider**/
/**

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let price = document.querySelector('.price-text');
let textContainer = document.querySelector('.slider-text');

slider.value = this.value
price.textContent = '200 ₽';
textContainer.textContent = 'дадут вкусняшку';
slider.oninput = function() {

if (this.value <= 50) {
price.textContent = '50 ₽';
} else if (this.value <= 100) {
price.textContent = '200 ₽';
} else if (this.value <= 150) {
price.textContent = '500 ₽';
}
if (this.value <= 50) {
textContainer.textContent = 'мне почешут за ушком';
} else if (this.value <= 100) {
textContainer.textContent = 'мне дадут вкусняшку';
} else if (this.value <= 150) {
textContainer.textContent = 'мне купят корм';
}}

/**tab-donate**/

let oneBtn = document.querySelector('#one-tab');
let twoBtn = document.querySelector('#two-tab');
let threeBtn = document.querySelector('#three-tab');
let onePrice = document.querySelector('#one-price');
let twoPrice = document.querySelector('#two-price');
let threePrice = document.querySelector('#three-price');
let allTab = document.querySelectorAll('.tab');
let allContent = document.querySelectorAll('.content');
let tabHover = document.querySelector('.tab-hover');




oneBtn.onclick = () => {

    allTab.forEach((item) => {
        item.classList.remove('active-button');
        item.style.color = 'black'
    })
    allContent.forEach((cont) => {
        cont.classList.remove('active-display')
    })
    onePrice.classList.toggle('active-display')
    oneBtn.classList.toggle('active-button')
    oneBtn.style.color = 'white'
    tabHover.style.right = '64%'
    oneBtn.style.transition = '0.5s'



}


twoBtn.onclick = () => {
    allTab.forEach((item) => {
        item.classList.remove('active-button');
        item.style.color = 'black'
    })
    allContent.forEach((cont) => {
        cont.classList.remove('active-display')
    })
    twoPrice.classList.toggle('active-display')
    twoBtn.classList.toggle('active-button')
    twoBtn.style.color = 'white'
    tabHover.style.right = '35%'
    twoBtn.style.transition = '0.5s'

}


threeBtn.onclick = () => {
    allTab.forEach((item) => {
        item.classList.remove('active-button');
        item.style.color = 'black'
    })
    allContent.forEach((cont) => {
        cont.classList.remove('active-display')
    })
    threePrice.classList.toggle('active-display')
    threeBtn.classList.toggle('active-button')
    threeBtn.style.color = 'white'
    tabHover.style.right = '6%'
    threeBtn.style.transition = '0.5s'


}

/**filter**/

let onesBtn = document.querySelector('#one-tabs');
        let twosBtn = document.querySelector('#two-tabs');
        let threesBtn = document.querySelector('#three-tabs');
        let days = document.querySelector('#days');
        let minutes = document.querySelector('#minutes');
        let seconds = document.querySelector('#seconds');
        let allTabs = document.querySelectorAll('.tabs');
        let wrap = document.querySelectorAll('.timer');
        let tabHovers = document.querySelector('.tab-hovers');




        onesBtn.onclick = () => {

            allTabs.forEach((item) => {
                item.classList.remove('active-button');
                item.style.color = 'black'
            })
            wrap.forEach((cont) => {
                cont.classList.remove('active-time')
            })
            days.classList.toggle('active-time')
            onesBtn.classList.toggle('active-button')
            onesBtn.style.color = 'white'
            tabHovers.style.right = '68%'
            onesBtns.style.transition = '0.5s'
        }


        twosBtn.onclick = () => {
            allTabs.forEach((item) => {
                item.classList.remove('active-button');
                item.style.color = 'black'
            })
            wrap.forEach((cont) => {
                cont.classList.remove('active-time')
            })
            minutes.classList.toggle('active-time')
            twosBtn.classList.toggle('active-button')
            twosBtn.style.color = 'white'
            tabHovers.style.right = '35%'
            twosBtn.style.transition = '0.5s'
        }


        threesBtn.onclick = () => {
            allTabs.forEach((item) => {
                item.classList.remove('active-button');
                item.style.color = 'black'
            })
            wrap.forEach((cont) => {
                cont.classList.remove('active-time')
            })
            seconds.classList.toggle('active-time')
            threesBtn.classList.toggle('active-button')
            threesBtn.style.color = 'white'
            tabHovers.style.right = '2%'
            threesBtn.style.transition = '0.5s'
        }