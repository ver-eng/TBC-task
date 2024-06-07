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

const questionHeader = document.querySelectorAll(".question-header");
const QuestionBox = document.querySelectorAll(".question-box");
const chevronUp = document.querySelector(".chevron-up");
const chevronDown = document.querySelector(".chevron-down");
const Answers = document.querySelector(".question-answer");

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header-stick");
  header.style.opacity = ".95";
  const rect = header.getBoundingClientRect();
  if (window.scrollY === 0) {
    header.style.opacity = "1";
  }
});

const itemsPerPage = 3;
let currentPage = 1;
let timeoutId;

function renderItems() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  partnerBox.innerHTML = "";

  partnerBox.classList.remove("hidden");
  partnerBox.classList.add("visible");

  partnerPhotos.slice(start, end).forEach((photo) => {
    const photoDiv = document.createElement("div");
    // photoDiv = document.createElement("div");

    // photoDiv.classList.add("fade");
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
    timeoutId = setTimeout(() => {
      console.log("timeout");
      partnerBox.classList.add("hidden");
      partnerBox.classList.remove("visible");

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
        console.log("Timeout cleared.");
      }
    }, 2500);
  });
}

function renderItemsWitoutTimeOut() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  partnerBox.innerHTML = "";

  partnerPhotos.slice(start, end).forEach((photo) => {
    const photoDiv = document.createElement("div");
    // photoDiv = document.createElement("div");

    // photoDiv.classList.add("fade");
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
    partnerBox.classList.remove("hidden");
    partnerBox.classList.add("visible");
    // setTimeout(() => {
    //   partnerBox.classList.add("hidden");
    //   partnerBox.classList.remove("visible");
    // }, 3000);
  });
}

renderItems();

const changePartnerLogos = () => {
  if (currentPage < 3) currentPage++;
  else currentPage = 1;

  renderItems();
};
function startCarousel() {
  intervalId = setInterval(changePartnerLogos, 4000);
}
startCarousel();

function stopCarousel() {
  clearInterval(intervalId);
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
    console.log("Timeout cleared.");
  }
}

carouselBox.addEventListener("mouseover", function () {
  stopCarousel();
});
carouselBox.addEventListener("mouseout", function () {
  startCarousel();
});
leftBtn.addEventListener("click", function () {
  console.log(currentPage);
  if (currentPage === 1) {
    currentPage = 3;

    renderItemsWitoutTimeOut();
  } else if (currentPage === 2 || currentPage === 3) {
    --currentPage;

    renderItemsWitoutTimeOut();
  }
});
rightBtn.addEventListener("click", function () {
  console.log(currentPage);
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
    console.log("Timeout cleared.");
  }
  if (currentPage === 3) {
    currentPage = 1;

    renderItemsWitoutTimeOut();
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      console.log("Timeout cleared.");
    }
  } else if (currentPage === 2 || currentPage === 1) {
    currentPage++;

    renderItemsWitoutTimeOut();
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      console.log("Timeout cleared.");
    }
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

function showPage(pageNumber) {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
    console.log("Timeout cleared.");
  }
  currentPage = pageNumber;

  renderItemsWitoutTimeOut();
}

questionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const askedQuestion = header.parentElement;
    askedQuestion.classList.toggle("active");

    const chevronUp = askedQuestion.querySelector(".chevron-up");
    const chevronDown = askedQuestion.querySelector(".chevron-down");
    chevronUp.classList.toggle("active-chevron");
    chevronDown.classList.toggle("active-chevron");

    QuestionBox.forEach((box) => {
      if (box !== askedQuestion) {
        box.classList.remove("active");
      }
    });
  });
});
