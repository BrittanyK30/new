const panels = document.querySelectorAll('.panels');

function toggleOpen() { 
this.classList.toggle('open');
}

function toggleActive(e) { 
console.log(e.propertyName);
 if (e.propertyName.includes('flex')) {
  this.classList.toggle('open-active');
}
}
//when I am clicked toggle me open- loop through 
panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
