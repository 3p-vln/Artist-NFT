import { getElement } from '../composables/callDom';

('use strict');

window.onload = function () {
  const paralax = getElement('.wrapper');

  if (paralax) {
    const elements = {
      mainEllipseFirst: '.background__ellipse-first',
      mainEllipseSecond: '.background__ellipse-second',
      mainEllipseThird: '.background__ellipse-third',
      mainStarFirst: '.background__star-first',
      mainStarSecond: '.background__star-second',
      mainStarThird: '.background__star-third',
      contactSapphireFirst: '.contact-background__sapphire-first',
      contactSapphireSecond: '.contact-background__sapphire-second',
      contactSapphireThird: '.contact-background__sapphire-third',
      contactCube: '.contact-background__cube',

      nftsEllipse: '.background__ellipse',
      nftsStar: '.background__star',

      sapphireFirst: '.background__brilliant-first',
      sapphireSecond: '.background__brilliant-second',
      sapphireThird: '.background__brilliant-third',
    };

    const forElements = {
      ellipse: 3,
      star: 3,
      contact: 20,
    };

    const speed = 0.05;

    let positionX = 0,
      positionY = 0;
    let coordXpersent = 0,
      coordYpersent = 0;

    let isParallaxActive = true; 

    function setMouseParallaxStyle() {
      if (!isParallaxActive) return; 

      const distX = coordXpersent - positionX;
      const distY = coordYpersent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      Object.keys(elements).forEach((key) => {
        const element = document.querySelector(elements[key]);
        if (element) {
          const type = key.includes('Ellipse')
            ? 'ellipse'
            : key.includes('Star')
              ? 'star'
              : 'contact';
          const forValue = forElements[type];
          element.style.cssText = `transform: translate(${positionX / forValue}%,${positionY / forValue}%);`;
        }
      });

      requestAnimationFrame(setMouseParallaxStyle);
    }

    function checkScreenWidth() {
      isParallaxActive = window.innerWidth >= 768;
    }

    checkScreenWidth(); 

    window.addEventListener('resize', checkScreenWidth);

    setMouseParallaxStyle();

    paralax.addEventListener('mousemove', function (e) {
      if (!isParallaxActive) return; 

      const paralaxWidth = paralax.offsetWidth;
      const paralaxHeight = paralax.offsetHeight;

      const coordX = e.pageX - paralaxWidth / 2;
      const coordY = e.pageY - paralaxHeight / 2;

      coordXpersent = (coordX / paralaxWidth) * 100;
      coordYpersent = (coordY / paralaxHeight) * 100;
    });
  }
};
