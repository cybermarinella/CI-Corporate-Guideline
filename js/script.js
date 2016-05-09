
      var altezza = $( window ).height();
      $( ".container>.row>div" ).height(altezza);

      $('#pittogramma pre').fadeTo( "slow", 0.33);
      $('#pittogramma .img01').fadeTo( "0.1", 1 );

      $('#structure pre').fadeTo( "slow", 0.33);
      $('#structure .img01').fadeTo( "0.1", 1 );

      $('#logotipo pre').fadeTo( "slow", 0.33);
      $('#logotipo .img01').fadeTo( "0.1", 1 );



      $( "#pittogramma .action00 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "0.1", 1 );
         $('#pittogramma .img01').fadeTo( "slow", 0 );
         $('#pittogramma .img02').fadeTo( "slow", 0 );
      });
      $( "#pittogramma .action00 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "slow", 0.33 );
      });

      $( "#pittogramma .action01 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "0.1", 0 );
        $('#pittogramma .img01').fadeTo( "slow", 1 );
        $('#pittogramma .img02').fadeTo( "slow", 0 );
      });
      $( "#pittogramma .action01 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "slow", 0.33 );
      });

      $( "#pittogramma .action02 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "slow", 0 );
         $('#pittogramma .img01').fadeTo( "slow", 0 );
         $('#pittogramma .img02').fadeTo( "0.1", 1 );
      });
      $( "#pittogramma .action02 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "slow", 0.33 );
      });




      $( "#structure .action00 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
        $('#structure .img01').fadeTo( "slow", 1 );
        $('#structure .img02').fadeTo( "0.1", 0 );
        $('#structure .img03').fadeTo( "0.1", 0 );
      });
      $( "#structure .action00 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0.33 );
      });

      $( "#structure .action01 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
        $('#structure .img01').fadeTo( "slow", 0 );
        $('#structure .img02').fadeTo( "0.1", 1 );
        $('#structure .img03').fadeTo( "0.1", 0 );
      });
      $( "#structure .action01 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0.33 );
      });

      $( "#structure .action02 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
         $('#structure .img01').fadeTo( "slow", 0 );
         $('#structure .img02').fadeTo( "0.1", 0);
         $('#structure .img03').fadeTo( "slow", 3 );
      });
      $( "#structure .action02 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0.33 );
      });


      $( "#logotipo .action00 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
        $('#logotipo .img01').fadeTo( "slow", 1 );
        $('#logotipo .img02').fadeTo( "0.1", 0 );
        $('#logotipo .img03').fadeTo( "0.1", 0 );
      });
      $( "#logotipo .action00 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0.33 );
      });

      $( "#logotipo .action01 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
        $('#logotipo .img01').fadeTo( "slow", 0 );
        $('#logotipo .img02').fadeTo( "0.1", 1 );
        $('#logotipo .img03').fadeTo( "0.1", 0 );
      });
      $( "#logotipo .action01 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0.33 );
      });

      $( "#logotipo .action02 h3" ).mouseover(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
         $('#logotipo .img01').fadeTo( "slow", 0 );
         $('#logotipo .img02').fadeTo( "0.1", 0);
         $('#logotipo .img03').fadeTo( "slow", 3 );
      });
      $( "#structure .action02 h3" ).mouseout(function() {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0.33 );
      });

      //   dx links

      $(".linkPittogramma").click(function() {
          $('html, body').animate({ scrollTop: $("#pittogramma").offset().top-60}, 1000);
      });
      $(".linkStruttura").click(function() {
          $('html, body').animate({scrollTop: $("#structure").offset().top-60}, 1000);
      });
      $(".linkSpace").click(function() {
          $('html, body').animate({scrollTop: $("#space").offset().top-60}, 1000);
      });
      $(".linkLogotipo").click(function() {
          $('html, body').animate({scrollTop: $("#logotipo").offset().top-60}, 1000);
      });
      $(".linkRandom").click(function() {
          $('html, body').animate({scrollTop: $("#random").offset().top-60}, 1000);
      });
      $(".linkDont").click(function() {
          $('html, body').animate({scrollTop: $("#dont").offset().top-60}, 1000);
      });

/*
     * Replace all SVG images with inline SVG
     */
/*$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
        }, 'xml');
    
    });
});*/