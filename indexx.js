const items = document.querySelectorAll(".accordion button");
const container = document.querySelector(".container")

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    container.style.height = "559px"
  } else {
   
    const allFalse = Array.from(items).every(item => item.getAttribute('aria-expanded') === 'false');

    if (allFalse) {
      container.style.height = "445px"; 
    }
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion,

));