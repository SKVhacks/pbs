alert("This Web Page build is going On...! 'Backgroung-video sample purpose'");

// let docTitle = document.title;
// window.addEventListener("blur",()=>{
// document.title ="Lakshmi Studio & Video";
// })
// window.addEventListener("focus",()=>{
// document.title = docTitle;
// })

// document.addEventListener('contextmenu',
//                 event => event.preventDefault());
ScrollReveal().reveal('#about', { 
    interval:800,
    distance: '50px',
    origin: 'top',
    interval: 600,
    mobile:true,
   
});

ScrollReveal().reveal('.about-us_img', { 
    interval:800,
    distance: '50px',
    origin: 'left',
    interval: 600,
    mobile:true,
   
});

ScrollReveal().reveal('.about-us_content', { 
    delay: 500,
    distance: '50px',
    origin: 'right',
    mobile:true,
});

ScrollReveal().reveal('#social', { 
    delay: 800,
    distance: '10px',
    easing: 'steps(50)',
    origin: 'left',
    mobile:true,
});

ScrollReveal().reveal('#form', { 
    delay: 900,
    distance: '10px',
    easing: 'steps(50)',
    origin: 'right',
    mobile:true,
});



$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    //     // removing smooth scroll on slide-up button click
    //     $('html').css("scrollBehavior", "auto");
    // });

    // $('.navbar .menu li a').click(function(){
    //     // applying again smooth scroll on menu items click
    //     $('html').css("scrollBehavior", "smooth");
    // });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});

document.getElementById("whatsapp").onclick = function () {
    window.open('https://wa.me/918220887549','blank');
};

document.getElementById("phone-call").onclick = function () {
    window.open('tel:918220887549','blank');
};

document.getElementById("direction").onclick = function () {
    window.open('https://www.google.com/maps/dir//Lakshmi+studio+%26+video/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a55528d5f4e1d11:0x61a46c0db81a93e0!2m2!1d79.4140877!2d10.598823099999999','blank');
};

var today = new Date().toISOString().split('T')[0];

    // Set the min attribute of the date input to today, disabling past dates
    document.getElementById('datepicker').setAttribute('min', today);



