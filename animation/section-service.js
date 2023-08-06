// 서비스 섹션 이미지 헤더 마진
const imageHeaderMargin = document.getElementsByClassName("section-service__header-margin"); 

// 서비스 섹션 이미지
const images = document.getElementsByClassName("fade-in-out-target"); 


const imageHeaderMarginController = (entries) => {
  entries.forEach((entry)=>{
    if(entry.intersectionRatio > 0.5){
      entry.target.style.flex = 0;
      entry.target.style.transition = '2s';
    }
  })
 }

const imagesOpacityContoroller = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      if(entry.boundingClientRect.top < 0){
        entry.target.style.opacity=1;
      }else{
        entry.target.style.opacity = entry.intersectionRatio; 
      }     
    } 
  });
};

const options = {
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
};

const headerObserver = new IntersectionObserver(imageHeaderMarginController, options);
const imageObserver = new IntersectionObserver(imagesOpacityContoroller, options);

for (let i = 0; i < imageHeaderMargin.length; i++) {
  headerObserver.observe(imageHeaderMargin[i]);
}

for (let i = 0; i < images.length; i++) {
  imageObserver.observe(images[i]);
}


