let burger = document.querySelector('.mobile-wrapper__mobile-burger')
let menu = document.querySelector('.mobile-wrapper__mobile-menu')
burger.onclick = () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
}
var mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5.8,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
});

const date = new Date()
let currentYear = date.getFullYear()
let year = document.querySelector('.footer-section_year')
year.innerHTML = currentYear


let slider = document.querySelector('.header__input')
let bar = document.querySelector('.progress-bar')
let thumb = document.querySelector('.thumb')
let container = document.querySelector('.main__slider-container')

slider.oninput = () => {
  let value = slider.value
  thumb.style.left = value + '%'
  bar.style.width = value + '%'
  if (value < 30) {
    container.style.marginLeft = '0'
  } else if (value >= 30 && value < 60) {
    container.style.marginLeft = '-100%'
  } else {
    container.style.marginLeft = '-100%'
  }

}

const counters = document.querySelectorAll('.countup__content h3')
const speed = 5000

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    const inc = target / speed

    if (count < target) {
      counter.innerText = Math.ceil(count + inc)
      setTimeout(updateCount, 1)
    } else {
      count.innerText = Math.ceil(target)
    }
  }
  updateCount()
})

// function changeImgboxSize(){
//   let imgBox = document.querySelector('.interviews-section__imgBox')
//   let img = document.querySelector('.interviews-section__main-img')

//   let imgHeight = img.height
//   console.log(imgHeight)
//   imgBox.style.height = imgHeight + "" + "!important"
// }

// window.addEventListener('resize', changeImgboxSize)  


// const select = document.querySelector('.select-items div')
// const allLang = ['uz','en','ru']
// select.addEventListener('change',changeURLLanguage)


// function changeURLLanguage(){
//   let lang = select.value
//   location.href = window.location.pathname + '#' + lang
//   location.reload()
// }

// function changeLanguage(){
//   let hash = window.location.hash
//   hash = hash.substr(1)
//   console.log(hash)
//   if(!allLang.includes(hash)){
//     location.href = window.location.pathname + '#en'
//     location.reload()
//   }
//   select.value = hash
//   // document.querySelector('title').innerHTML = langArr['unit'][hash]
//   for(let key in langArr){
//     let elem = document.querySelector('.lng-' + key)
//     if(elem){
//       elem.innerHTML = langArr[key][hash]
//     }
//   }

// }

// changeLanguage()


// Custom select and option

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);