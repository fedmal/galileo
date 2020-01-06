$(function() {

    $.fn.filepond.registerPlugin(FilePondPluginImagePreview);

    // Turn input element into a pond
    const pond = $('.my-pond').filepond( {
      labelIdle : '<span class="filepond--label-icon"></span> добавьте фото обложки'
    }); 

    const pond2 = $('.my-pond-2').filepond( {
      labelIdle : '<span class="filepond--label-icon"></span> добавьте <br> личное фото'
    }); 


  var siteToggle = $('.navbar-toggler'),
    layer=$('.site__layer'),
    siteMenu= $('.menu-mob');


  siteToggle.on('click', function(){
    layer.toggleClass('active');
    $(this).toggleClass("collapsed");
      siteMenu.toggleClass("show");
    $('body').toggleClass('overflow-hidden');
  });


  function equalHeight(elem) {

    var highestBox = 0;
    var heightAuto = 'auto'
    $(elem).height(heightAuto);
    $(elem).each(function(){

      if($(this).height() > highestBox) {
        highestBox = $(this).height(); 
      }
      
    });  
    $(elem).height(highestBox);
  }

  jQuery(window).resize(function() {
    setTimeout(function() {
      equalHeight('.sidebar-mob-panel__inner');
    }, 500);
  }).resize();


  $('.sidebar-mob-toggle').on('click', function (t) { 

      $('.sidebar-mob-toggle').not(this).parents('.sidebar-mob-panel').removeClass('show');

      $(this).parents('.sidebar-mob-panel').toggleClass('show');

      t.preventDefault();
    
  } );


  $(".scrollbar-inner, .chat-sidebar__profiles").mCustomScrollbar({
          theme:"minimal"
  });


  var sidebar = new StickySidebar('.category-panel', {topSpacing: 20, bottomSpacing: 40, minWidth: 1250});


  $('.voice-btn').on('click', function (e) { 

      $(this).toggleClass('voice-on');


      e.preventDefault();
    
  } );


  // var sticky = new Waypoint.Sticky({
  //   element: $('.header__inner')[0]
  // })


     $(function() {
        $(window).on("scroll", function () {
            // Navbar On Scroll Animation
            var navbar = $(".header__inner"),
            HeroHeight = $(".header").height();
            if ($(window).scrollTop() >= HeroHeight) {
                navbar.addClass("nav-collapsed");
            }
            else {
                navbar.removeClass("nav-collapsed");
            }
        })
    });

});