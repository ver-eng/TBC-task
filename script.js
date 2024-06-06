const partnerPhotos = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
];
const dots = document.querySelectorAll(".dot");
const partnerBox = document.querySelector(".each-partners-box");

const carouselBox = document.querySelector(".carousel-box");
const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");

const questionHeader = document.querySelector(".question-header");
const chevronUp = document.querySelector(".chevron-up");
const chevronDown = document.querySelector(".chevron-down");
const Answers = document.querySelector(".question-answer");

// const
console.log(leftBtn);
console.log(rightBtn);

const itemsPerPage = 3;
let currentPage = 1;

function renderItems() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  partnerBox.innerHTML = "";
  partnerPhotos.slice(start, end).forEach((photo) => {
    const photoDiv = document.createElement("div");
    // photoDiv = document.createElement("div");

    // photoDiv.classList.add("fade");
    console.log(photoDiv);
    photoDiv.innerHTML = `<img
    src="photos/${photo}"
    alt="USAID LOGO"
    class="partner-logo"
    />`;
    if (photo === partnerPhotos.at(partnerPhotos.length - 1)) {
      partnerBox.classList.add("third-box-one-child");
    } else {
      partnerBox.classList.remove("third-box-one-child");
    }
    partnerBox.appendChild(photoDiv);
    fadeIn(photoDiv, 1500);
  });
}

renderItems();

const changePartnerLogos = () => {
  if (currentPage < 3) currentPage++;
  else currentPage = 1;

  renderItems();
};
function startCarousel() {
  intervalId = setInterval(changePartnerLogos, 3000);
}
function stopCarousel() {
  clearInterval(intervalId);
}
startCarousel();

carouselBox.addEventListener("mouseover", function () {
  console.log("hover");
  stopCarousel();
});
carouselBox.addEventListener("mouseout", function () {
  console.log("out");
  startCarousel();
});
leftBtn.addEventListener("click", function () {
  console.log(currentPage);
  if (currentPage === 1) {
    currentPage = 3;

    renderItems();
  } else if (currentPage === 2 || currentPage === 3) {
    --currentPage;

    renderItems();
  }
});
rightBtn.addEventListener("click", function () {
  console.log(currentPage);
  if (currentPage === 3) {
    currentPage = 1;

    renderItems();
  } else if (currentPage === 2 || currentPage === 1) {
    currentPage++;

    renderItems();
  }
});
function fadeOut(element, duration) {
  let opacity = 1;
  const interval = 50;
  const increment = interval / duration;

  const fadeEffect = setInterval(() => {
    if (opacity > 0) {
      opacity -= increment;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
    }
  }, interval);
}

function fadeIn(element, duration) {
  element.style.opacity = 0;
  let opacity = 0;
  const interval = 100;
  const increment = interval / duration;

  // element.style.display = "block"; // Ensure the element is displayed

  const fadeEffect = setInterval(() => {
    if (opacity < 1) {
      opacity += increment;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
    }
  }, interval);
}
// dots.forEach((dot) =>
//   dot.addEventListener("click", function (e) {
//     // console.log(dots);
//   })
// );
questionHeader.addEventListener("click", function () {
  console.log("clicked");
  chevronDown.classList.toggle("active");
  chevronUp.classList.toggle("active");
  Answers.classList.toggle("active");
});
