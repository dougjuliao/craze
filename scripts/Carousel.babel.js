/*
		@Autor  : Douglas Julião
		@email  : douglas_juliao16@hotmail.com
		@github : https://github.com/dougjuliao
*/
class Carousel {
    constructor(config = {}) {
        this.effect = config.effect || 'slideLeft';
        this.width = config.width || '100%';
        this.height = config.height || '250px';
        this.selector = config.selector;
        this.nav = config.nav || false;
        this.time = config.time || 4;
        this.slides = config.slides || [];
        this.init();
    }
    addClass(selector, classe) {
        selector.className += ' '+classe;
    }
    removeClass(selector, classe) {
        selector.forEach(item => {
            item.className = item.className.replace(classe, '');
        });
    }
    setDimensions(selector) {
        selector.style.width = this.width;
        selector.style.height = this.height;
    }
    execEffect(selectorSlides) {
        let count = 1;
        let interval = null;
        const container = document.querySelector(this.selector);
        const circleItems = document.querySelectorAll('.ca-circles .ca-circles-item');

        const setSlide = (loopCount) => { // SLIDE LOGIC AND CIRCLES NAV
            if (loopCount !== undefined) {
                count = loopCount;
            }
            const remove = new RegExp(` active| ${this.effect}| before| after`, 'g');
            this.removeClass(selectorSlides, remove);

            this.addClass(selectorSlides[(count >= 1 ? count - 1 : selectorSlides.length - 1)], 'before');
            this.addClass(selectorSlides[count], `active ${this.effect}`);
            this.addClass(selectorSlides[(count < selectorSlides.length - 1 ? count + 1 : 0)], 'after');

            this.removeClass(circleItems, remove);
            this.addClass(circleItems[count],' active');

            count++;
            if (count == selectorSlides.length) { count = 0; }
        };

        const loop = () => { //LOOP SLIDES
            interval = setInterval(() => {
                setSlide();
            }, this.time * 1000);
        };
        const loopStop = () => { // CLEAR LOOP
            clearInterval(interval);
        };

        if (selectorSlides.length > 1){ // IF MORE THAN 1 SLIDE
            loop();
            container.addEventListener('mouseover',() => {
                loopStop();
            });
            container.addEventListener('mouseout',() => {
                loop();
            });
            document.querySelectorAll('.ca-circles .ca-circles-item').forEach((item,idx) => {
                item.addEventListener('click', () => {
                    loopStop();
                    setSlide(idx);
                });
            });
        }
    }
    drawSlide(arrSlides) { // ADD ELEMNTS TO HTML
        let txtHTML = '';
        let navCircles = '';
        let first = true;

        for (let i = 0, len = arrSlides.length; i < len; i++) {
            txtHTML += `<div class="ca-slides-item animated ${(first ? 'active' : '')}">
                            <h2>${arrSlides[i].title}</h2>
                            <p>${arrSlides[i].desc}</p>
                        </div>`;
            navCircles += `<div class="ca-circles-item ca-slides-${i} ${(first ? 'active' : '')}" data-slide="${i}"></div>`;

            first = false;
        };

        let containerHTML = `<div class="ca-slides">${txtHTML}</div>`;
        let containerCircles = `<div class="ca-circles">${navCircles}</div>`;
        let navHTML = this.nav ? `<div class="ca-nav">
                            <a class="ca-prev" href="#"><</a>
                            <a class="ca-next" href="#">></a>
                       </div>` : '';

        document.querySelector(this.selector).innerHTML = containerHTML + containerCircles + navHTML;
        this.execEffect(document.querySelectorAll('.ca-slides .ca-slides-item')); // CALL SLIDE LOGIC AFTER HTML INSERT
    }
    init() {
        if (this.slides.length <= 0){
            return false;
        }
        const container = document.querySelector(this.selector);
        container.classList.add('carousel-craze');

        const callFunctions = () => {
            this.drawSlide(this.slides);
            this.setDimensions(container);
        };
        callFunctions();
        window.onresize = () => { callFunctions() };
    }
}