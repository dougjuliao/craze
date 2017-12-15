const getElementHeight = (container) => {
    return (container.innerHeight - 18)+'px';
};
const setHeaderHeight = (header) => {
    header.style.height = getElementHeight(window);
}
const testimonials = new Carousel({ // INIT CAROUSEL
    selector: '#testimonials',
    time: 4,
    effect: 'bounceInRight',
    slides: [
        { title: 'Sara Hunt', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.' },
        { title: 'Jhon Doe', desc:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.' },
        { title: 'Mary moon', desc: 'Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.' },
    ]
});
setHeaderHeight(document.getElementById('header'));
window.onresize = () => {  
    setHeaderHeight(document.getElementById('header'));
};
