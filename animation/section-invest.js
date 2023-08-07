// 투자 섹션 아이콘 애니메이션 구현

const icon = document.getElementsByClassName(
    "section-invest__icon"
  );

function Effect(targets, triggerPoint) {  
    this.targets = targets; // 타깃 아이콘 배열
    this.triggerPoint = triggerPoint; // 타깃 boundingClientRect.top 값으로 이펙트 trigger-point 지정
    this.effect = function(){ 

        const targetPosition = icon[0].getBoundingClientRect();

        if(targetPosition.top > this.triggerPoint){
            this.targets.forEach(target => target.style.opacity = 0)
        }else{
            this.targets.forEach(target => target.style.opacity = 1)
        }
    }
}

const firstEffect = new Effect([icon[2], icon[3]], 850);
const secondEffect = new Effect([icon[1], icon[4]], 750);
const thirdEffect =  new Effect([icon[0], icon[5]], 650);



window.addEventListener('scroll', () => {
    firstEffect.effect();
    secondEffect.effect();
    thirdEffect.effect();
});
