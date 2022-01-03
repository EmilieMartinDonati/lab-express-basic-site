


// Accordion (biography), page about.
const accordionBtn = document.querySelectorAll(".accordion-button");
console.log(accordionBtn);


function showElement(event) {
  const btn = event.target;
  console.log("yo");
  const id = btn.getAttribute('id');
  console.log(id);
  switch (id) {
    case "accordion-button-1":
      document.getElementById("collapseOne").classList.toggle("show");
      break;
    case "accordion-button-2":
      document.getElementById("collapseTwo").classList.toggle("show");
      break;
    case "accordion-button-3":
      document.getElementById("collapseThree").classList.toggle("show");
      break;
    default:
      console.log(`Sthg went wrong`);
  }


}

[...accordionBtn].forEach((btn) => (btn.addEventListener("click", showElement)));

// // Gallery page photo-gallery.

// function switchImages(event) {
// const control = event.target;
// const label = control.getAttribute('aria-label');
// switch (label) {
//   case "accordion-button-1":
//     document.getElementById("collapseOne").classList.toggle("show");
//     break;
//   case "accordion-button-2":
//     document.getElementById("collapseTwo").classList.toggle("show");
//     break;
//   case "accordion-button-3":
//     document.getElementById("collapseThree").classList.toggle("show");
//     break;
//   default:
//     console.log(`Sthg went wrong`);
// }
// }

// const carouselControls = document.querySelectorAll(".carousel-indicators button");
// [...carouselControls].forEach((btn) => btn.addEventListener("click", switchImages))




function prevHandler() {
  const items = document.querySelectorAll(".carousel-item");
  [...items].filter(function (item, index, items) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      console.log(index);

      switch (index) {
        case 0:
          items[3].classList.add("active");
          break;
        case 1:
          items[0].classList.add("active");
          break;
        case 2:
          items[1].classList.add("active");
          break;
        case 3:
          items[2].classList.add("active");
          break;
          case 4:
            items[3].classList.add("active");
        default:
          console.log("wot");
      }

    }
})
}
const prevBtn = document.getElementById("btn-carousel-prev");
console.log(prevBtn);
prevBtn.addEventListener("click", prevHandler);


function nextHandler() {
  const items = document.querySelectorAll(".carousel-item");
  [...items].forEach(function(item, index) {
    console.log(index);
  });
  [...items].filter(function (item, index, items) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      console.log(index);
      console.log(item.classList);

      switch (index) {
        case 0:
          items[1].classList.add("active");
          break;
        case 1:
          items[2].classList.add("active");
          break;
        case 2:
          items[3].classList.add("active");
          break;
        case 3:
          items[0].classList.add("active");
          break;
          case 4:
            items[0].classList.add("active");
        default:
          console.log("wot");
      }

    }
})
}

const nextBtn = document.getElementById("btn-carousel-next");
nextBtn.addEventListener("click", nextHandler);