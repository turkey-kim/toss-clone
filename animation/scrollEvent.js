let section_invest_icon = document.getElementsByClassName(
  "section-invest__icon"
);

let section09_margin = document.getElementsByClassName(
  "section09__header__margin"
);

let section09_img01 = document.getElementById("section09__image-01");
let section09_img02 = document.getElementById("section09__image-02");
let section09_img03 = document.getElementById("section09__image-03");
let section09_img04 = document.getElementById("section09__image-04");

// scroll Event
window.addEventListener("scroll", function () {
  if (window.scrollY > 8800 && window.scrollY < 10690) {
    section_invest_icon[2].style.opacity = (1 / 200) * window.scrollY - 45;
    section_invest_icon[3].style.opacity = (1 / 200) * window.scrollY - 45;
    section_invest_icon[1].style.opacity = (1 / 200) * window.scrollY - 46;
    section_invest_icon[4].style.opacity = (1 / 200) * window.scrollY - 46;
    section_invest_icon[0].style.opacity = (1 / 200) * window.scrollY - 47;
    section_invest_icon[5].style.opacity = (1 / 200) * window.scrollY - 47;
  }

  section09_margin[0].style.width = `${-(1 / 36) * window.scrollY + 294}%`;
  section09_margin[1].style.width = `${-(1 / 36) * window.scrollY + 294}%`;

  section09_img01.style.opacity = (1 / 800) * this.window.scrollY - 14;
  section09_img02.style.opacity = (1 / 800) * this.window.scrollY - 15.6;
  section09_img03.style.opacity = (1 / 800) * this.window.scrollY - 16;
  section09_img04.style.opacity = (1 / 800) * this.window.scrollY - 17;
});
