let section_invest_icon = document.getElementsByClassName(
  "section-invest__icon"
);

let section_service_margin = document.getElementsByClassName(
  "section-service__header-margin"
);

let section_service_img01 = document.getElementById(
  "section-service__image-01"
);
let section_service_img02 = document.getElementById(
  "section-service__image-02"
);
let section_service_img03 = document.getElementById(
  "section-service__image-03"
);
let section_service_img04 = document.getElementById(
  "section-service__image-04"
);

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

  section_service_margin[0].style.width = `${
    -(1 / 36) * window.scrollY + 294
  }%`;
  section_service_margin[1].style.width = `${
    -(1 / 36) * window.scrollY + 294
  }%`;

  section_service_img01.style.opacity = (1 / 800) * this.window.scrollY - 14;
  section_service_img02.style.opacity = (1 / 800) * this.window.scrollY - 15.6;
  section_service_img03.style.opacity = (1 / 800) * this.window.scrollY - 16;
  section_service_img04.style.opacity = (1 / 800) * this.window.scrollY - 17;
});
