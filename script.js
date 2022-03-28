
const panels = document.querySelectorAll('.panel');

function toggler() {
    this.classList.toggle('open')
}

function toggleActive(e) {
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }

}


panels.forEach(panel => panel.addEventListener("click", toggler))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))



// const panels = document.querySelectorAll('.panel');

// function toggleOpe() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }
