const colorToggle = document.getElementById('colorToggle');
const body = document.body;

colorToggle.addEventListener('click', function() {
  body.classList.toggle('dark');
});

///////////////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//////////////////

