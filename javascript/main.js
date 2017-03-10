var Main = function() {

    var Private = {

        Methods:  {

            TopSlider: function() {
                $('.slider--top').slick({
                    arrows: false,
                    autoplay: true
                });
            },

            GalerySlider: function() {
                $('.slider--galery').slick({
                  speed: 300,
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  autoplay: true,
                  responsive: [
                    {
                      breakpoint: 1159,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 874,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 619,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 433,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                  ]
                });
            },

            GoogleMap: function () {
                $(window).load(function(){
                    if($('#map')[0]) {
                        var uluru = {lat: 33.647201, lng: -117.829497};
                        var mapOptions = {
                            zoom: 16,
                            center: uluru,
                            scrollwheel: false,
                                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                        };
                        var mapElement = $('#map')[0];
                        var map = new google.maps.Map(mapElement, mapOptions);
                        var marker = new google.maps.Marker({
                              position: uluru,
                              map: map
                        });
                    }
                });
            }

        },

        Events: {

            OpenMenu: function() {
                $('.component--nav').on('click', function(e) {
                    var target = $(e.target);

                    if (!target.is($('.icon--close'))) {
                        $('.component--nav, .wrap--nav').addClass('open');
                        $('.sidenav, .icon--close').addClass('display');
                        $('.icon--burger, .text--menu').addClass('hide');
                    }
                });
            },

            CloseMenu: function() {
                $('.icon--close').on('click', function() {
                    $('.component--nav, .wrap--nav').removeClass('open');
                    $('.sidenav, .icon--close').removeClass('display');
                    $('.icon--burger, .text--menu').removeClass('hide');
                });
            },

            ChangePicture: function() {
                $('.box-button').on('mouseover', function(){
                    var getDataFor = $(this).attr('data-for');
                    var pictureSource = "images/middle-pictures/" + getDataFor + "_middle.jpg";
                    $('.box-picture').attr('src', pictureSource);
                });
            }

        }

    };

    var Public = {
        Init: function() {
            Private.Methods.TopSlider();
            Private.Methods.GalerySlider();
            Private.Methods.GoogleMap();
            Private.Events.OpenMenu();
            Private.Events.CloseMenu();
            Private.Events.ChangePicture();
        }
    };
    return Public;
}();

Main.Init();
