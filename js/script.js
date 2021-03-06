  var $mycolor =  "hsl("+ Math.floor((Math.random() * 360) + 1)+", 80%, 40%)";
  var $positivo;
  var $altezza = $( window ).height();
  var $altezzaSvg  = $( '.svg' ).height();
  var $altezzaObjectBox = $altezza-260;
  

/* ================= Change Interface depending on sun position (now Day Hours)  ===============*/  
  var d = new Date();
  var n = d.getHours();

  if(n >=9 && n<=18 ){
    $positivo= true;
  }else{
    $positivo= false;
  }

  /* ================= SETUP ===============*/
  $( ".objectBox" ).height($altezzaObjectBox);
  $( ".objectBox" ).css("padding-top", $altezzaObjectBox/2-$altezzaSvg/2-60);   
  $('pre').fadeTo( "slow", 0.33);
  posneg();

  /* ================= Replace all SVG images with inline SVG ===============*/

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
        $(".scuro").css({ fill: $mycolor });
        $(".scuroStroke").css({ stroke: $mycolor });
        $('.img01').fadeTo( "slow", 1 );
      }
                                
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
                                
      // Replace image with new SVG
      $img.replaceWith($svg);
    });
  });

  /* === scrolling page ====*/

      $(".linkPittogramma").click(function(event) {
        event.stopImmediatePropagation();
          $('html, body').animate({ scrollTop: $("#pittogramma").offset().top-50}, 1000);
      });
      $(".linkStruttura").click(function() {
        event.stopImmediatePropagation(event);
          $('html, body').animate({scrollTop: $("#structure").offset().top-50}, 1000);
      });
      $(".linkSpace").click(function() {
        event.stopImmediatePropagation(event);
          $('html, body').animate({scrollTop: $("#space").offset().top-50}, 1000);
      });
      $(".linkLogotipo").click(function(event) {
        event.stopImmediatePropagation();
          $('html, body').animate({scrollTop: $("#logotipo").offset().top-50}, 1000);
      });
      $(".linkRandom").click(function(event) {
        event.stopImmediatePropagation();
          $('html, body').animate({scrollTop: $("#random").offset().top-50}, 1000);
      });
      $(".linkDont").click(function(event) {
        event.stopImmediatePropagation();
          $('html, body').animate({scrollTop: $("#dont").offset().top-50}, 1000);
      });


 /* ================= INTERACTION ===============*/
      $( "#pittogramma .action00 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "fast", 1 );
         $('#pittogramma .img01').fadeTo( "slow", 0 );
         $('#pittogramma .img02').fadeTo( "slow", 0 );
      });
      $( "#pittogramma .action00 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "fast", 1 );
      });

      $( "#pittogramma .action01 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "fast", 0 );
        $('#pittogramma .img01').fadeTo( "fast", 1 );
        $('#pittogramma .img02').fadeTo( "fast", 0 );
      });
      $( "#pittogramma .action01 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "fast", 0);
      });

      $( "#pittogramma .action02 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma .img02').fadeTo( "fast", 1 );
        $('#pittogramma pre').fadeTo( "fast", 0 );
         $('#pittogramma .img01').fadeTo( "fast", 0 );
      });
      $( "#pittogramma .action02 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#pittogramma pre').fadeTo( "fast", 0 );
      });


      $( "#structure .action00 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
        $('#structure .img01').fadeTo( "slow", 1 );
        $('#structure .img02').fadeTo( "0.1", 0 );
        $('#structure .img03').fadeTo( "0.1", 0 );
      });
      $( "#structure .action00 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
      });

      $( "#structure .action01 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
        $('#structure .img01').fadeTo( "slow", 0 );
        $('#structure .img02').fadeTo( "0.1", 1 );
        $('#structure .img03').fadeTo( "0.1", 0 );
      });
      $( "#structure .action01 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
      });

      $( "#structure .action02 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
         $('#structure .img01').fadeTo( "slow", 0 );
         $('#structure .img02').fadeTo( "0.1", 0);
         $('#structure .img03').fadeTo( "slow", 3 );
      });
      $( "#structure .action02 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#structure pre').fadeTo( "slow", 0 );
      });


      $( "#logotipo .action00 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
        $('#logotipo .img01').fadeTo( "slow", 1 );
        $('#logotipo .img02').fadeTo( "0.1", 0 );
        $('#logotipo .img03').fadeTo( "0.1", 0 );
      });
      $( "#logotipo .action00 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
      });

      $( "#logotipo .action01 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
        $('#logotipo .img01').fadeTo( "slow", 0 );
        $('#logotipo .img02').fadeTo( "0.1", 1 );
        $('#logotipo .img03').fadeTo( "0.1", 0 );
      });
      $( "#logotipo .action01 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
      });

      $( "#logotipo .action02 h3" ).mouseover(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
         $('#logotipo .img01').fadeTo( "slow", 0 );
         $('#logotipo .img02').fadeTo( "0.1", 0);
         $('#logotipo .img03').fadeTo( "slow", 1 );
      });
      $( "#structure .action02 h3" ).mouseout(function(event) {
        event.stopImmediatePropagation();
        $('#logotipo pre').fadeTo( "slow", 0 );
      });

  /* ================= POSITIVO vs NEGATIVO ===============*/

  $('#posNeg').click(function() {
    $positivo=!$positivo;
    posneg();
  });

  $('.main').click(function() {
     // alert("gino");
      $mycolor =  "hsl("+ Math.floor((Math.random() * 360) + 1)+", 80%, 40%)";
      posneg();
  });

function posneg(){
  if($positivo){
    $('body, .interactivities a').css( "background-color", "#fff");
    $('nav').css( "background-color", $mycolor);
    $("h2, h3, p, pre, body, .interactivities a, .main a, .interactivities a").css("color", $mycolor);
    $(".scuro").css({ fill: $mycolor });
    $(".scuroStroke").css({ stroke: $mycolor });
  }else{
    $('body, .interactivities a, nav').css( "background-color", $mycolor);
    $('nav').css( "background-color", $mycolor);
    $("h2, h3, p, pre, body, .main a, .interactivities a, nav").css("color", "#fff");
    $(".scuro").css({ fill: "#fff" });
    $(".scuroStroke").css({ stroke: "#fff" });
  }
}