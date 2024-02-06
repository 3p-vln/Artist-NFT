'use strict';

window.onload = function () {
    const paralax = document.querySelector('.wrapper');

    if (paralax) {
        const mainEllipseFirst = document.querySelector('.background__ellipse-first');
        const mainEllipseSecond = document.querySelector('.background__ellipse-second');
        const mainEllipseThird = document.querySelector('.background__ellipse-third');
        const mainStarFirst = document.querySelector('.background__star-first');
        const mainStarSecond = document.querySelector('.background__star-second');
        const mainStarThird = document.querySelector('.background__star-third');

        const contactSapphireFirst = document.querySelector('.contact-background__sapphire-first');
        const contactSapphireSecond = document.querySelector('.contact-background__sapphire-second');
        const contactSapphireThird = document.querySelector('.contact-background__sapphire-third');
        const contactCube = document.querySelector('.contact-background__cube');

        // const nftsEllipse = document.querySelector('.background__ellipse');
        // const nftsStar = document.querySelector('.background__star');

        const forEllipse = 3;
        const forStar = 3;

        const forContact = 20;

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

            mainEllipseFirst.style.cssText = `transform: translate(${positionX / forEllipse}%,${positionY / forEllipse}%);`;
            mainEllipseSecond.style.cssText = `transform: translate(${positionX / forEllipse}%,${positionY / forEllipse}%);`;
            mainEllipseThird.style.cssText = `transform: translate(${positionX / forEllipse}%,${positionY / forEllipse}%);`;
            mainStarFirst.style.cssText = `transform: translate(${positionX / forStar}%,${positionY / forStar}%);`;
            mainStarSecond.style.cssText = `transform: translate(${positionX / forStar}%,${positionY / forStar}%);`;
            mainStarThird.style.cssText = `transform: translate(${positionX / forStar}%,${positionY / forStar}%);`;

            contactSapphireFirst.style.cssText = `transform: translate(${positionX / forContact}%,${positionY / forContact}%);`;
            contactSapphireSecond.style.cssText = `transform: translate(${positionX / forContact}%,${positionY / forContact}%);`;
            contactSapphireThird.style.cssText = `transform: translate(${positionX / forContact}%,${positionY / forContact}%);`;
            contactCube.style.cssText = `transform: translate(${positionX / forContact}%,${positionY / forContact}%);`;

            // nftsEllipse.style.cssText = `transform: translate(${positionX / forEllipse}%,${positionY / forEllipse}%);`;
            // nftsStar.style.cssText = `transform: translate(${positionX / forStar}%,${positionY / forStar}%);`;

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
        });
    }
};
