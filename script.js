var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let date = new Date()
let currentYear = date.getFullYear()
let year = document.querySelector('.footer-section_year')
year.innerHTML = currentYear


let slider = document.querySelector('.header__input')
let bar = document.querySelector('.progress-bar')
let thumb = document.querySelector('.thumb')
let container = document.querySelector('.main__slider-container')

slider.oninput= ()=>{
  let value = slider.value
  thumb.style.left = value + '%'
  bar.style.width = value + '%'
  console.log(value)
  if(value < 30){
    container.style.marginLeft = '0'
    console.log('1111111111111111111111111')
  }
  if(value >= 30 && value < 60){
    container.style.marginLeft = '-100%'
    console.log('2222222222222222222222222')
  }
  if(value >= 60 && value < 100){
    container.style.marginLeft = '-100%'
    console.log('3333333333333333333333333')
  }

}

const counters = document.querySelectorAll('.countup__content h3')
const speed = 500

counters.forEach(counter=>{
  const updateCount = () =>{
    const target = +counter.getAttribute('data-target')
    const count  = +counter.innerText

    const inc = target / speed
    
    if (count < target){
      counter.innerText= Math.ceil(count + inc)
      setTimeout(updateCount, 1)
    } else {
      count.innerText = Math.ceil(target)
    }
  }
  updateCount()
})

const select = document.querySelector('select')
const allLang = ['uz','en','ru']
select.addEventListener('change',changeURLLanguage)


function changeURLLanguage(){
  let lang = select.value
  location.href = window.location.pathname + '#' + lang
  location.reload()
}

function changeLanguage(){
  let hash = window.location.hash
  hash = hash.substr(1)
  console.log(hash)
  if(!allLang.includes(hash)){
    location.href = window.location.pathname + '#en'
    location.reload()
  }
  select.value = hash
  // document.querySelector('title').innerHTML = langArr['unit'][hash]
  for(let key in langArr){
    let elem = document.querySelector('.lng-' + key)
    if(elem){
      elem.innerHTML = langArr[key][hash]
    }
  }

}
changeLanguage()