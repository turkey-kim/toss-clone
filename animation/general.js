// fade-out 애니메이션 타깃
const targets = document.getElementsByClassName("fadeout-target");
const section_loan_text01 = document.getElementById("section-loan__desc-01");
const section_loan_text02 = document.getElementById("section-loan__desc-02");
const section_loan_text03 = document.getElementById("section-loan__desc-03");


const fadeOutController = (e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(-3rem)";
    }
  });
};

const observer = new IntersectionObserver(fadeOutController);

for (let i = 0; i < targets.length; i++) {
  observer.observe(targets[i]);
}

observer.observe(section_loan_text01);
observer.observe(section_loan_text02);
observer.observe(section_loan_text03);
