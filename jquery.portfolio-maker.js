(function( $ ){
	
	$.fn.portfolioMaker = function() {
		
		// Private vars
		var itemsPerRow = 5,
			currentItemNum = 0,
			currentRow = ".row-1",
			rowCounter = 1,
			itemViewer = "<div class='item-viewer'></div>",
			el = ".portfolio-maker";


		// Private methods
		var moveViewerPosition = function( row ){
				
				$( ".item-viewer" ).insertAfter( row );

			},

			openViewer = function(){
				
				$( ".item-viewer" ).animate( {
					height : "300px"
				} , 500 );

			},

			closeViewer = function(){
				
				$( ".item-viewer" ).animate( {
					height : "30px"
				} , 1000 , function(){
					$('html, body').animate({
			        	scrollTop: $(".item-viewer").offset().top
			     }, 2000);
				} );

			};


		// Setup 
		$( "body" ).prepend( "<div class='portfolio-maker'></div>" );
		$( el ).append( "<div class='row row-1 clear'></div>" );
		$( el ).prepend( itemViewer );


		return this.each( function() {
			$( this ).css({
				"width" : "200px",
				"height" : "200px",
				"float" : "left"
			});

			if ( (currentItemNum % 5) === 0 ) {
				rowCounter++;
				currentRow = ".row-" + rowCounter;
				$( el ).append( "<div class='row row-" + rowCounter + " clear'></div>" );
			}

			currentItemNum++;

			$( this ).addClass( "item-num-" + currentItemNum )
			$( this ).appendTo( currentRow );

			$( this ).on( "click" , function(){		
				closeViewer();
				moveViewerPosition( $( this ).closest(".row") );
				openViewer();
			});
		});


	};

}( jQuery ));