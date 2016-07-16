  $(function() {

// menu

var $menu = $('.menu li');

$menu.has('ul')
     .addClass('dropdown');

    $('.dropdown').mouseenter(function() {
      $(this).children('.sub-menu').slideDown(200)
      });

 $('.dropdown').mouseleave(function() {
  $(this).children('.sub-menu').slideUp(200);
} );


 // menu animate color

$('.sub-menu').mouseenter(
  function () {
    $(this).animate({
        backgroundColor:"#FF8181",
    }, 500 );
});

$('.sub-menu').mouseleave(function() {
    $(this).animate({
        backgroundColor:"#FF6464",
    }, 500 );
});


  // carousel 

        $('.jcarousel').jcarousel()
         .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });

        $('[data-jcarousel]').each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $('[data-jcarousel-control]').each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });
$('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();  

 //selectbox
 $('.basic').fancySelect();
$('.selectic').selectik();


   // Checkbox style

   $('.checkBoxJS').nStCheck();


   });



