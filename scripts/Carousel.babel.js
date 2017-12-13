class Carousel {
    constructor(config = {}) {
        this.effect = config.effect || 'slide';
        this.position = config.position || 'topleft';
        this.width = config.width || '300px';
        this.height = config.height || 'auto';
        this.selector = config.selector;
        this.nav = config.nav || false;
        this.time = config.time || 4;
        this.full = config.full || true;
        this.images = config.images || [];
    };
    addClass(selector, classe) {
        selector.className += classe;
    };
    removeClass(selector, classe) {
        selector.forEach(item => {
            item.className = item.className.replace(classe, '');
        });
    };
    setDimensions(selector) {
        selector.style.width = this.width;
        selector.style.height = this.height;
    };
    fullScreen(selector) {
        const innerheight = window.innerHeight;
        selector.setAttribute('style', 'width:100%; height:' + innerheight + 'px; min-height:500px;');
    };
    requestJSON(method, url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            const DONE = 4,
                OK = 200;

            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    callback(JSON.parse(xhr.responseText));
                } else {
                    callback(xhr);
                }
            }
        };
    };
    execEffect(selectorImgs) {
        let count = 0;
        setInterval(() => {
            this.removeClass(selectorImgs, / active| fadeInRight| before/g);

            this.addClass(selectorImgs[(count + 0 ? count - 1 : selectorImgs.length - 1)], ' before'); //before the active
            this.addClass(selectorImgs[count], ' active fadeInRight');

            count++;
            if (count == selectorImgs.length) { count = 0; }
        }, this.time * 1000);
    };
    drawSlide(json) {
        let imgsHTML = '';

        for (var i = json.length - 1; i >= 0; i--) {
            imgsHTML += `<img class="animated" src="${json[i].src}" alt="${json[i].name}">`;
        };

        let containerHTML = `<div class="ca-images">${imgsHTML}</div>`;
        let navHTML = this.nav ? `<div class="ca-nav">
                            <a class="ca-prev" href="#"><</a>
                            <a class="ca-next" href="#">></a>
                       </div>` : '';

        document.querySelector(this.selector).innerHTML = containerHTML + navHTML;
        this.execEffect(document.querySelectorAll('.ca-images img'));
    };
    init() {
        const container = document.querySelector(this.selector);

        if (this.images.length <= 0){
            return false;
        }

        const callFunctions = () => {
            this.drawSlide(this.images);
            this.setDimensions(container);
            if (this.full) {
                this.fullScreen(container);
            }
        };
        callFunctions();
        window.onresize = () => { callFunctions() };
    };
}