// 투자 섹션 아이콘 애니메이션 구현

let icon = document.getElementsByClassName(
    "section-invest__icon"
  );

function Effect(targets, triggerPoint) {  
    this.targets = targets; // 타깃 아이콘 배열
    this.triggerPoint = triggerPoint; // 타깃 boundingClientRect.top 값으로 이펙트 trigger-point 지정
}

const firstEffect = new Effect([icon[2], icon[3]], 850);
const secondEffect = new Effect([icon[1], icon[4]], 750);
const thirdEffect =  new Effect([icon[0], icon[5]], 650);

const targetOpacityController = () => {
    const targetPosition = icon[0].getBoundingClientRect();

    if(targetPosition.top > firstEffect.triggerPoint){
        firstEffect.targets.forEach(target => target.style.opacity = 0)
    }else{
        firstEffect.targets.forEach(target => target.style.opacity = 1)
    }

    if(targetPosition.top > secondEffect.triggerPoint){
        secondEffect.targets.forEach(target => target.style.opacity = 0)
    }else{
        secondEffect.targets.forEach(target => target.style.opacity = 1)
    }

    if(targetPosition.top > thirdEffect.triggerPoint){
        thirdEffect.targets.forEach(target => target.style.opacity = 0)
    }else{
        thirdEffect.targets.forEach(target => target.style.opacity = 1)
    }

}

window.addEventListener('scroll', targetOpacityController);
