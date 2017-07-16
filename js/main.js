$(document).ready(function(){
	 $("#owl-demo").owlCarousel({
		 
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		 
	});
	
	 $("#slide-testimonial").owlCarousel({
		 
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
		singleItem:true,
		pagination: true,
		 
	});
	
	$('#menu').slicknav();

	$('.sign-me-out').click(function() {
		window.location.href = 'index.html';
	});

	calcThenDisplay();

	$( ".update-trips-btn" ).click(addRandomTrip);
	$( ".trip-calc-btn" ).click(calcEstCost);
});

const calcEstCost = () => {
	let estCostPeak = 0;
	let estCostOffPeak = 0;
	let showError = false;

	let valueOut = $('#numOutCBD').val();
	if (isNaN(valueOut)) { 
		valueOut = 0; 
		showError = true;
	} 

	estCostPeak = parseFloat(valueOut) * 0.1; 
	estCostOffPeak = parseFloat(valueOut) * 0.05; 

	let valueIn = $('#numInCBD').val();
	if (isNaN(valueIn)) {
		valueIn = 0;
		showError = true;
	}

	if (valueIn > 0) {
		estCostPeak += (parseFloat(valueIn * 0.1)) + 5; 
		estCostOffPeak += (parseFloat(valueIn * 0.05)) + 5;
	}

	$('.est-cost-peak-display').text('$' + estCostPeak.toFixed(2));
	$('.est-cost-offpeak-display').text('$' + estCostOffPeak.toFixed(2));

	if (showError) {
		$('.calc-error').css("visibility", "visible");
	} else {
		$('.calc-error').css("visibility", "hidden");
	}
	
}

const calcThenDisplay = () => {
	let tripTotal = 0;
	$( ".trip-total" ).each(function() {
		tripTotal += parseFloat($( this ).text().slice(1));
	});
	$( ".current-owing" ).text("$"+tripTotal.toFixed(2));
}

const addRandomTrip = () => {
	let numberOfElements = $('.tablist-number').length;
	$('.super-tab-list').prepend(`
	<li><a href="#abc${numberOfElements}" aria-controls="abc${numberOfElements}" role="tab" data-toggle="tab">
									<i class="fa fa-circle"></i>
									xxxx <span class='tablist-number'>0</span>
									</a></li>
	`);




	incTabListNumber();
}

const incTabListNumber = () => {
	$( ".tablist-number" ).each(function(idx) {
		let newNum = parseInt($( this ).text())+1;
		$(this).text(newNum);

		if (idx >= 5) {
			$(this).parent().hide();
		}
    });
}
