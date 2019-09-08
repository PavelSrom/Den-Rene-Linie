window.onscroll = () => {
  if (window.pageYOffset > 120) headerToggle(); // hide nav after scrolling 120px
};

// HIDE AND SHOW HEADER ON SCROLL
let veryTop = window.pageYOffset; // always 0 unless we change it
const headerToggle = () => {
  let currTop = window.pageYOffset; // distance from the very top
  const header = document.querySelector(".header");
  if (veryTop > currTop) {
    // shown, we don't change anything
    header.style.top = "0";
  } else {
    // hidden, we move him away
    header.style.top = `-${header.scrollHeight + 4}px`; // +4 because of box shadow
  }
  veryTop = currTop; // reset veryTop
};

// EVENT HANDLERS FOR FOOTER LINKS (placeholders)
const deadLinks = document.querySelectorAll('a[href="#"]');
deadLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault(); // when clicked, prevent links from redirecting
  })
);

// BURGER MAGIC
const openBurger = document.querySelector(".menu-open");
openBurger.addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".nav-mobile").style.width = "240px";
});
const closeBurger = document.querySelector(".menu-close");
closeBurger.addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".nav-mobile").style.width = "0";
});

// ACCORDION BLACK MAGIC
const questions = document.querySelectorAll(".question");
questions.forEach(q =>
  q.addEventListener("click", () => {
    let content = q.nextElementSibling; // grab answer
    let icon = q.firstElementChild; // grab icon

    if (content.style.height) {
      // when idle
      content.style.height = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      // when clicked
      content.style.height = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  })
);

// HOMEPAGE SLIDESHOW IIFE
(() => {
  const reviews = {
    logo: ["azzurra.png", "spiret.png", "helmuth.png", "thorkild.png"],
    name: ["Thira Claire", "Lars Høgh", "Lars Helmuth", "Lars Ørbæk"],
    location: [
      "Azzura Aalborg",
      "Spiret Aalborg",
      "Helmuth Aalborg",
      "Thorkild Kristensen"
    ],
    text: [
      "We use Den Rene Linie in our restaurants. We are super satisfied with the quality. At the same time, they are very flexible, which is very important to us.",
      "Very efficient cleaning. Nice it is the same person every time. She is always smiling and always leaves the shop shining clean.",
      "I have been using Den Rene Linie as a cleaning company for 5 years. I have always been very satisfied. They are flexible and in connection with extra tasks they can always step in at short notice.",
      "Den Rene Linie's great strength is the ability to summon competent people in a short time. All their people are easily recognizable in the clothes, and everyone is instructed in the work that is to be done. The managers are good at continuously following up on the work and ensuring that it is carried out satisfactorily. The Clean Line also understands how important it is for me to meet deadlines. Their always optimistic and professional approach to, sometimes, ungrateful tasks, I always return."
    ]
  };

  let reviewLogo = document.querySelector(".reviewLogo");
  let reviewAuthor = document.querySelector(".reviewAuthor");
  let reviewPlace = document.querySelector(".reviewPlace");
  let reviewText = document.querySelector(".reviewText");

  let arrPrev = document.querySelector(".prevReview");
  let arrNext = document.querySelector(".nextReview");
  let idx = 0;

  if (document.body.classList.contains("homepage")) {
    // execute this only on homepage
    arrPrev.addEventListener("click", () => {
      idx--;
      if (idx == -1) {
        idx = reviews.logo.length - 1;
      }

      // repetitive code, I know :(
      reviewLogo.src = `img/${reviews.logo[idx]}`;
      reviewAuthor.innerHTML = reviews.name[idx];
      reviewPlace.innerHTML = reviews.location[idx];
      reviewText.innerHTML = reviews.text[idx];
    });
    arrNext.addEventListener("click", () => {
      idx++;
      if (idx == reviews.logo.length) {
        idx = 0;
      }

      // repetitive code, I know :(
      reviewLogo.src = `img/${reviews.logo[idx]}`;
      reviewAuthor.innerHTML = reviews.name[idx];
      reviewPlace.innerHTML = reviews.location[idx];
      reviewText.innerHTML = reviews.text[idx];
    });
  }
})();

// ZIP CODE AND PHONE NUMBER VALIDATOR
(() => {
  let onlyNums = document.querySelectorAll(".onlyNums");

  // add event handler for each input
  onlyNums.forEach(input =>
    input.addEventListener("keyup", () => {
      // if the value doesn't match a number and isn't empty, alert the user
      if (input.value.match(/\D{1,}/g) && input.value !== "") {
        alert("You should type only numbers!");
        input.value = ""; // reset after alert
      }
    })
  );
})();
