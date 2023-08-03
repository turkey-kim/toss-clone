// title-box

let title03 = document.getElementsByClassName(
  "section-consume__title-container"
)[0];
let title04 = document.getElementsByClassName(
  "section-remit__title-container"
)[0];
let title05 = document.getElementsByClassName(
  "section-loan__title-container"
)[0];
let title06 = document.getElementsByClassName("section06__title-container")[0];
let title07 = document.getElementsByClassName("section07__title-container")[0];
let title09 = document.getElementsByClassName("section09__title")[0];
let title10 = document.getElementsByClassName("section10__title-container")[0];

//section-consume - variable

let image01 = document.getElementsByClassName(
  "section-consume__image-container01"
)[0];
let image02 = document.getElementsByClassName(
  "section-consume__image-container02"
)[0];
let sub_desc = document.getElementsByClassName("section-consume__sub-desc")[0];

//section-remit - variable

let section_remit_text = document.getElementsByClassName(
  "section-remit__sub-text-container"
);
let section_remit_img = document.getElementsByClassName(
  "section-remit__sub-image-container"
);

//section-loan - variable

let section_loan_img = document.getElementsByClassName(
  "section-loan__image-container"
);
let section_loan_text01 = document.getElementById("section-loan__desc-01");
let section_loan_text02 = document.getElementById("section-loan__desc-02");
let section_loan_text03 = document.getElementById("section-loan__desc-03");
let section_loan_subText = document.getElementsByClassName(
  "section-loan__sub-desc"
);

//section06 - variable

let section06_img = document.getElementsByClassName("section06__desc-img");

//section06 - variable

let section11_title = document.getElementsByClassName(
  "section11__title-container"
);
let section11_detail = document.getElementsByClassName(
  "section11__contents-bar"
);

const changeOpacity = (e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(-3rem)";
    }
  });
};

let observer = new IntersectionObserver(changeOpacity);

observer.observe(title03);
observer.observe(title04);
observer.observe(title05);
observer.observe(title06);
observer.observe(title07);
observer.observe(title09);
observer.observe(title10);

observer.observe(image01);
observer.observe(image02);
observer.observe(sub_desc);

observer.observe(section_remit_text[1]);
observer.observe(section_remit_text[0]);
observer.observe(section_remit_text[2]);
observer.observe(section_remit_img[0]);
observer.observe(section_remit_img[1]);
observer.observe(section_remit_img[2]);

observer.observe(section_loan_img[0]);
observer.observe(section_loan_text01);
observer.observe(section_loan_text02);
observer.observe(section_loan_text03);
observer.observe(section_loan_subText[0]);

observer.observe(section06_img[0]);
observer.observe(section06_img[1]);
observer.observe(section06_img[2]);
observer.observe(section06_img[3]);

observer.observe(section11_title[0]);
observer.observe(section11_detail[0]);
