  $(document).ready(function () {
    $(' .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,

      responsiveClass: true,
      item: 1,
      dots: false,
      nav: false,
      autoplaySpeed: 120,
      responsive: {
        0: {
          items: 1,

          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 1,
          nav: false,
          loop: true
        }
      }
    });

  });
  var lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    var subHeading = document.querySelector('.sub_heading');
    var scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollTop) {
      subHeading.classList.add('light');
    } else {
      subHeading.classList.remove('light');
    }
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; 
  });

setTimeout(function(){
    document.getElementById('toast').animate([
        {transform : 'translateY(0px)'},
        {transform : 'translateX(300px)'}
    ],{
        duration:2000,
        iteration:1
    
    })
},3000);

setInterval(function(){
    document.getElementById('toast').style.display = 'none'
},6000);