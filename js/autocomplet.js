$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Julie",
      "Cheval",
      "Jazz",
      "Obcheck",
      "Amandine",
      "Loïc",
      "Alexandre",
      "Pokemon",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


    $( "form" ).submit(function( event ) {
      if ( $( "input:first" ).val() === "Test" ) {
        $( "span" ).text( "Validated..." ).show();
        return;
      }
     
      $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
      event.preventDefault();
    });