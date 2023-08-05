let section_invest_icon = document.getElementsByClassName(
  "section-invest__icon"
);

let section_service_margin = document.getElementsByClassName(
  "section-service__header-margin"
);

const fadeInAndOut = document.getElementsByClassName("fade-in-out-target");

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.opacity = entry.intersectionRatio;
    } else if (entry.boundingClientRect.top < 0) {
      entry.target.style.opacity = 1;
      console.log(1);
    }
  });
};

const options = {
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
};

const iconObserver = new IntersectionObserver(callback, options);

for (let i = 0; i < fadeInAndOut.length; i++) {
  iconObserver.observe(fadeInAndOut[i]);
}

// iconObserver.observe(section_invest_icon[1]);
// iconObserver.observe(section_invest_icon[2]);
// iconObserver.observe(section_invest_icon[4]);
// iconObserver.observe(section_invest_icon[5]);

// // scroll Event
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 8800 && window.scrollY < 10690) {
//     section_invest_icon[2].style.opacity = (1 / 200) * window.scrollY - 45;
//     section_invest_icon[3].style.opacity = (1 / 200) * window.scrollY - 45;
//     section_invest_icon[1].style.opacity = (1 / 200) * window.scrollY - 46;
//     section_invest_icon[4].style.opacity = (1 / 200) * window.scrollY - 46;
//     section_invest_icon[0].style.opacity = (1 / 200) * window.scrollY - 47;
//     section_invest_icon[5].style.opacity = (1 / 200) * window.scrollY - 47;
//   }

//   section_service_margin[0].style.width = `${
//     -(1 / 36) * window.scrollY + 294
//   }%`;
//   section_service_margin[1].style.width = `${
//     -(1 / 36) * window.scrollY + 294
//   }%`;

//   section_service_img01.style.opacity = (1 / 800) * this.window.scrollY - 14;
//   section_service_img02.style.opacity = (1 / 800) * this.window.scrollY - 15.6;
//   section_service_img03.style.opacity = (1 / 800) * this.window.scrollY - 16;
//   section_service_img04.style.opacity = (1 / 800) * this.window.scrollY - 17;
// });
