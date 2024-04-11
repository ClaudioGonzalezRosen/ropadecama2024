// script carrusel categorias

    require(['jquery', 'slick'], function($) {
        $(document).ready(function() {
            $('.slick-slider').slick({
                autoplay: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 2000, // Velocidad de reproducción automática (en milisegundos)
                dots: false,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                infinite: true, // Activar el desplazamiento infinito
                slidesToShow: 9, // Cantidad de slides a mostrar por defecto
                responsive: [
                    {
                        breakpoint: 1024, // Breakpoint para dispositivos con un ancho máximo de 1024px
                        settings: {
                            slidesToShow: 6 // Mostrar 2 slides en dispositivos con un ancho máximo de 1024px
                        }
                    },
                    {
                        breakpoint: 768, // Breakpoint para dispositivos con un ancho máximo de 600px
                        settings: {
                            slidesToShow: 4 // Mostrar 4 slide en dispositivos con un ancho máximo de 600px
                        }
                    },
                    {
                        breakpoint: 480, // Breakpoint para dispositivos con un ancho máximo de 600px
                        settings: {
                            slidesToShow: 2 // Mostrar 2 slide en dispositivos con un ancho máximo de 600px
                        }
                    }
                ]
            });

              // Controlar los sliders para mostrar uno a la vez
            //$('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
                // Ocultar todos los slides excepto el actual
                  //$('.slick-slider').slick('slickSetOption', 'slidesToShow', 9);
                  //$('.slick-slider').slick('slickSetOption', 'slidesToScroll', 1);
            //});
        });
    });

window.addEventListener('scroll', function() {
    var contenidoPrincipal = document.getElementById('contenido_principal');
    var scrollPosY = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var contentOffset = contenidoPrincipal.offsetTop;
    var contentHeight = contenidoPrincipal.offsetHeight;

    if (scrollPosY > contentOffset + contentHeight - windowHeight || scrollPosY < contentOffset) {
        // Si el scroll está en la parte superior o inferior del contenido, restauramos la opacidad
        contenidoPrincipal.style.opacity = '1';
    } else {
        // Si el scroll está dentro del contenido, reducimos la opacidad
        var opacity = 1 - ((scrollPosY - contentOffset) / (contentHeight - windowHeight));
        contenidoPrincipal.style.opacity = opacity;
    }
});

window.addEventListener('scroll', function() {
    var elemento = document.getElementById('elemento');
    var elemento2 = document.getElementById('elemento2');
    var scrollPosY = window.scrollY || window.pageYOffset;
    var opacity;

    // Calcular la opacidad en función del desplazamiento
    if (scrollPosY <= 140) {
        opacity = 1 - (scrollPosY / 140);
    } else {
        opacity = 0; // Opacidad mínima después de 140px
    }

    elemento.style.opacity = opacity;

    // Calcular la opacidad en función del desplazamiento
    if (scrollPosY <= 140) {
        opacity = 1 - (scrollPosY / 140);
    } else {
        opacity = 0; // Opacidad mínima después de 140px
    }

    elemento2.style.opacity = opacity;
});

//Dos Sliders
//Carrusel 1

//<![CDATA[
require([
    'jquery',
    'domReady!',
    'slick'
], function($){
    $(document).ready(function(){

$('.slider-sw__slider').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 9,
    responsive: [
{
  breakpoint: 769,
  settings: {
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '5px',
    focusOnSelect: true,
    slidesToShow: 4
  }
},
{
  breakpoint: 641,
  settings: {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '5px',
    slidesToShow: 2
  }
},
{
  breakpoint: 9999,
  settings: 'unslick'
}
]
});
})});
//]]>
function changeImage(elementId, newImageSrc) {
var image = document.getElementById(elementId);
image.src = newImageSrc;
}
//Carrusel 2

//<![CDATA[
require([
    'jquery',
    'domReady!',
    'slick'
], function($){
    $(document).ready(function(){

$('.slider-sw__slider-2').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
{
  breakpoint: 769,
  settings: {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    slidesToShow: 2
  }
},
{
  breakpoint: 641,
  settings: {
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '5px',
    slidesToShow: 1
  }
},
{
  breakpoint: 9999,
  settings: 'unslick'
}
]
});
})});
//]]>
function changeImage(elementId, newImageSrc) {
var image = document.getElementById(elementId);
image.src = newImageSrc;
}

// Video Pop Up

    //<![CDATA[
        require([
            'jquery',
            'domReady!',
            'slick'
        ], function($){
            $(document).ready(function(){
      
            //Video Popup
        $('.video-btn').click(function(){
            $('.video-popup').fadeIn();
            $('#iframeHolder').html('');
            var link = $(this).attr("link");
            $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });
    $('.close-video').click(function(){
            $('.video-popup').fadeOut();
            $('#iframeHolder').html('');
        });
    
    
        })});
        //]]>

//<![CDATA[
require([
    'jquery',
    'domReady!',
    'slick'
], function($){
    $(document).ready(function(){
      
    //Video Popup
    $(".vpop").on('click', function(e) {
        e.preventDefault();
        $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
        
        var srchref='',autoplay='1',loop='1',playsinline='1',muted='1',id=$(this).data('id');
        if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
        else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
        
        if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
        if($(this).data('loop') == true) loop = '&loop=1';
        if($(this).data('playsinline') == true) playsinline = '&playsinline=1';
        if($(this).data('muted') == true) muted = '&muted=1';

        $("#video-popup-iframe").attr('allow', 'autoplay');

        if(window.innerWidth < 768) {
          
          $("#video-popup-iframe").attr('src', srchref+id+autoplay+loop+muted+playsinline);
        
        } else {
          
          $("#video-popup-iframe").attr('src', srchref+id+autoplay+loop+playsinline);
          
        }
        // $("#video-popup-iframe").attr('src', srchref+id+autoplay+loop+muted+playsinline);
        
        
        $("#video-popup-iframe").on('load', function() {
            $("#video-popup-container").show();
        });
        });

        $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
        $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
        $("#video-popup-iframe").attr('src', '');
    });
})});
//]]>

require(['jquery', 'slick'], function($) {
$(document).ready(function() {
    $('.additional-slider-2 .slick-slider').slick({
        // Configuraciones para el segundo carrusel adicional
        autoplay: false,
        // Otras configuraciones...
    });
});
});