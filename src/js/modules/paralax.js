'use strict';

window.onload = function () {
const paralax = document.querySelector('.background');

console.log(paralax);

if (paralax) {
  const ellipseFirst = document.querySelector('.background__ellipse-first');
  const ellipseSecond = document.querySelector('.background__ellipse-second');
  const ellipseThird = document.querySelector('.background__ellipse-third');
  const starFirst = document.querySelector('.background__star-first');
  const starSecond = document.querySelector('.background__star-second');
  const starThird = document.querySelector('.background__star-third');

  const forEllipse = 40;
  const forStar = 40;

  const speed = 0.05;

  let positionX = 0,
    positionY = 0;
  let coordXpersent = 0,
    coordYpersent = 0;

  function setMouseParalaxStyle() {
    const distX = coordXpersent - positionX;
    const distY = coordYpersent - positionY;

    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;

    ellipseFirst.style.cssText = `transform: translate(${positionX / forEllipse}%,${
      positionY / forEllipse
    }%);`;
    ellipseSecond.style.cssText = `transform: translate(${positionX / forEllipse}%,${
      positionY / forEllipse
    }%);`;
    ellipseThird.style.cssText = `transform: translate(${positionX / forEllipse}%,${
      positionY / forEllipse
    }%);`;
    starFirst.style.cssText = `transform: translate(${positionX / forStar}%,${
      positionY / forStar
    }%);`;
    starSecond.style.cssText = `transform: translate(${positionX / forStar}%,${
      positionY / forStar
    }%);`;
    starThird.style.cssText = `transform: translate(${positionX / forStar}%,${
      positionY / forStar
    }%);`;

    requestAnimationFrame(setMouseParalaxStyle);
  }
  setMouseParalaxStyle();

    paralax.addEventListener('mousemove', function (e) {
      const paralaxWidth = paralax.offsetWidth;
      const paralaxHeight = paralax.offsetHeight;

      const coordX = e.pageX - paralaxWidth / 2;
      const coordY = e.pageY - paralaxHeight / 2;

      coordXpersent = (coordX / paralaxWidth) * 100;
      coordYpersent = (coordY / paralaxHeight) * 100;
      console.log('111');
    });
}

// console.log(paralax);
};
