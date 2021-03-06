jQuery( document ).ready( function() {
	jQuery( '#hamburger' ).click( function () {
		jQuery( '.hamburger__item' ).toggleClass( 'hamburger__item_open' );
	});
});

jQuery( document ).ready( function() {
  if ( window.matchMedia( '(min-width: 991px)' ).matches ) {
    jQuery( '#navigation__list' ).removeClass( 'navigation__hidden' );
  }
  jQuery( '#hamburger, .navigation__hidden li a' ).click( function() {
    jQuery( '#navigation' ).fadeToggle(600);
  });  
});

jQuery( document ).ready( function() {
  jQuery( '.parallax-window' ).parallax({ imageSrc: 'assets/images/coast/coast.jpg' });
  jQuery( '.parallax-window' ).parallax({ imageSrc: 'assets/images/fact/fact.jpg' });
});

jQuery( document ).ready( function() {
  jQuery( '#header__search' ).click( function() {
    jQuery( '#search' ).fadeIn( 600 );
  });
  jQuery( '#search__button, #search__shut' ).click( function() {
    jQuery( '#search' ).fadeOut( 600 );
  });
});

jQuery( document ).ready( function() {
  jQuery( '.service__frame, .service__name' ).click( function() {
    jQuery( '.service__frame, .service__name' ).css({
      'cursor': 'auto'
    });
    jQuery( this ).parent( '.service__one' ).css({
      'zIndex': '600'
    });
    jQuery( this ).parent( '.service__one' ).find( '.service__shut' ).fadeIn( 600 );
    jQuery( this ).parent( '.service__one' ).find( '.service__description' ).fadeIn( 600 );
    jQuery( '#service__overlay' ).fadeIn( 600 );
  });
  jQuery( '.service__shut' ).click( function() {
    jQuery( '.service__frame, .service__name' ).css({
      'cursor': 'pointer'
    });
    jQuery( this ).parent( '.service__one' ).css({
      'zIndex': '1'
    });
    jQuery( this ).parent( '.service__one' ).find( '.service__shut' ).hide();
    jQuery( this ).parent( '.service__one' ).find( '.service__description' ).fadeOut( 400 );
    jQuery( '#service__overlay' ).fadeOut( 400 );
  });
  jQuery( '#service__overlay' ).click( function() {
    jQuery( '.service__frame, .service__name' ).css({
      'cursor': 'pointer'
    });
    jQuery( '.service__one' ).css({
      'zIndex': '1'
    });
    jQuery( '.service__shut' ).hide();
    jQuery( '.service__description' ).fadeOut( 400 );
    jQuery( '#service__overlay' ).fadeOut( 400 );
  });
});

jQuery( document ).ready( function() {
  var owl = jQuery( '.owl-carousel' );
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items:1
      },
      576: {
        items:2
      },
      768: {
        items:3
      },
      1200: {
        items:4
      }
    }
  });
  jQuery( '.play' ).on( 'click', function() {
    owl.trigger( 'play.owl.autoplay', [1000] );
  });
  jQuery( '.stop' ).on( 'click', function() {
    owl.trigger( 'stop.owl.autoplay' );
  });
});
