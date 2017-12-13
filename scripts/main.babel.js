const carousel = new Carousel({
    selector: '#carousel',
    time: 4,
    background: 'images/1.jpg',
    full: true,
    images: [
        { "src": "images/1.jpg", "name": "Image 1", title: 'Título', desc: 'selfies Odd Future pork belly beard Cosby sweater mumblecore ethical.' },
        { "src": "images/2.jpg", "name": "Image 2", title: 'Título', desc: 'selfies Odd Future pork belly beard Cosby sweater mumblecore ethical.' },
        { "src": "images/3.jpg", "name": "Image 3", title: 'Título', desc: 'selfies Odd Future pork belly beard Cosby sweater mumblecore ethical.' },
        { "src": "images/4.jpg", "name": "Image 4", title: 'Título', desc: 'selfies Odd Future pork belly beard Cosby sweater mumblecore ethical.' },
        { "src": "images/5.jpg", "name": "Image 5", title: 'Título', desc: 'selfies Odd Future pork belly beard Cosby sweater mumblecore ethical.' }
    ]
});
carousel.init();
