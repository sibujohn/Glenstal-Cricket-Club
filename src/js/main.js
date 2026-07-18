AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

jQuery(document).ready(function ($) {

	"use strict";



	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();


	var siteMagnificPopup = function () {
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: false,
				stagePadding: 0,
				margin: 20,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 0,
						stagePadding: 10,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						items: 2
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						items: 3
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		});
	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var sponsorCarousal = function(){
		$('.sponsors').owlCarousel({
			center: false,
			items: 4,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		});
	}
	sponsorCarousal()

	var siteCountDown = function () {

		$('#date-countdown').countdown('2026-05-16 10:00:00', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span>&nbsp;weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span>&nbsp;days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span>&nbsp;hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span>&nbsp;min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span>&nbsp;sec</span>'));
		});

	};
	siteCountDown();

	var formatDatetime = function (date) {
		var dateTime = new Intl.DateTimeFormat('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			hour: 'numeric',
			hour12: true
		}).format(new Date(date));
		return dateTime.replace('at', ',').replace(' am', 'AM').replace(' pm', 'PM')
	}

	var teamMap = {
		'glenstal_united':{
			name: 'Glenstal United',
			place: 'Glenstal',
			logo: 'images-2/logos/home-teams/glenstal-united.jpeg'
		},
		'murroe_united': {
			name: 'Murroe United',
			place: 'Murroe',
			logo: 'images-2/logos/home-teams/murroe-united.jpeg'
		},
		'castletroy_cavaliers': {
			name: 'Castletroy Cavaliers',
			place: 'Castletroy',
			logo: 'images-2/logos/home-teams/castletroy-cavaliers.jpeg'
		},
		'newcastle_west': {
			name: 'Newcastle West',
			place: 'Newastle West',
			logo: 'images-2/logos/away-teams/ncw.jpeg'
		},
		'cork_indians':{
			name: 'Cork Indians',
			place: 'Cork',
			logo: 'images-2/logos/away-teams/coinns.jpeg'
		},
		'royal_strikers':{
			name: 'Royal Strikers',
			place: 'Cork',
			logo: 'images-2/logos/away-teams/royal-strikers.jpeg'
		}
	}


	var renderUpcomingMatches = function (upcomingMatchList) {
		var matchHtmlList = ''
		upcomingMatchList.forEach((item) => {
			var team1 = teamMap[item.team_1]
			var team2 = teamMap[item.team_2]

			var matchHtml = ''
			+ '<div class="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">'
			+ ' <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">'
			+ '	 <div class="text-center text-lg-left">'
			+ '   <div class="d-block d-lg-flex align-items-center">'
			+ '    <div class="image image-small text-center mb-3 mb-lg-0 mr-lg-3">'
			+ '     <img src="'+team1.logo+'" alt="Image" class="img-fluid">'
			+ '    </div>'
			+ '    <div class="text">'
			+ '     <h3 class="h5 mb-0 text-black">'+team1.name+'</h3>'
			+ '     <span class="text-uppercase small country">'+team1.place+'</span>'
			+ '    </div>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ ' <div class="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">'
			+ '  <div class="d-inline-block">'
			+ '   <div class="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">'
			+ '    <span class="h5">'+formatDatetime(item.date)+'</span>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ ' <div class="col-md-4 col-lg-4 text-center text-lg-right">'
			+ '  <div class="">'
			+ '   <div class="d-block d-lg-flex align-items-center">'
			+ '    <div class="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">'
			+ '     <img src="'+team2.logo+'" alt="Image" class="img-fluid">'
			+ '    </div>'
			+ '    <div class="text order-1 w-100">'
			+ '     <h3 class="h5 mb-0 text-black">'+team2.name+'</h3>'
			+ '     <span class="text-uppercase small country">'+team2.place+'</span>'
			+ '    </div>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ '</div>'
			+ '</div>';
			matchHtmlList += matchHtml
		})

		$('#upcoming-match-content').html(matchHtmlList)
	}

	var renderCompletedMatches = function(completedMatchList){
		var matchHtmlList = ''
		completedMatchList.forEach((item) => {
			var team1 = teamMap[item.team_1]
			var team2 = teamMap[item.team_2]
			var team1Score = item.score_1 || 'N/A'
			var team2Score = item.score_2 || 'N/A'
			var winningTeam = teamMap[item.won].name
			var result = item.result ? winningTeam+' won by '+item.margin:'No Result' 

			var matchHtml = ''
			+ '<div class="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">'
			+ ' <div class="col-md-4 col-lg-4 mb-4 mb-lg-0">'
			+ '	 <div class="text-center text-lg-left">'
			+ '   <div class="d-block d-lg-flex align-items-center">'
			+ '    <div class="image image-small text-center mb-3 mb-lg-0 mr-lg-3">'
			+ '     <img src="'+team1.logo+'" alt="Image" class="img-fluid">'
			+ '    </div>'
			+ '    <div class="text">'
			+ '     <h3 class="h5 mb-0 text-black">'+team1.name+'</h3>'
			+ '     <span class="text-uppercase small country">'+team1.place+'</span>'
			+ '     <div>'
			+ '      <span class="h6 bg-black text-white rounded match-score px-1">'
			+ '       '+team1Score+''
			+ '      </span>'
			+ '     </div>'
			+ '    </div>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ ' <div class="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">'
			+ '  <div class="d-inline-block">'
			+ '   <div class="bg-orange py-1 px-2 mb-2 text-black d-inline-block rounded">'
			+ '    <span class="h5">'
			+ '     '+result+''
			+ '    </span>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ ' <div class="col-md-4 col-lg-4 text-center text-lg-right">'
			+ '  <div class="">'
			+ '   <div class="d-block d-lg-flex align-items-center">'
			+ '    <div class="image image-small ml-lg-3 mb-3 mb-lg-0 order-2">'
			+ '     <img src="'+team2.logo+'" alt="Image" class="img-fluid">'
			+ '    </div>'
			+ '    <div class="text order-1 w-100">'
			+ '     <h3 class="h5 mb-0 text-black">'+team2.name+'</h3>'
			+ '     <span class="text-uppercase small country">'+team2.place+'</span>'
			+ '     <div>'
			+ '      <span class="h6 bg-black text-white rounded match-score px-1">'
			+ '       '+team2Score+''
			+ '      </span>'
			+ '     </div>'
			+ '    </div>'
			+ '   </div>'
			+ '  </div>'
			+ ' </div>'
			+ '</div>'
			+ '</div>';
			matchHtmlList += matchHtml
		})

		$('#completed-match-content').html(matchHtmlList)

	}

	$("#matches-section").ready(async function ($) {
		const { data, error } = await matchesClient
		.from("matches")
		.select('*')
		console.log(data)
		var completedMatches = []
		var upcomingMatches = []
		if(data && data.length > 0){
			data.sort((a,b) => {
				return new Date(b.date) - new Date(a.date);
			}).forEach((item) => {
				if(new Date(item.date) > new Date()){
					upcomingMatches.push(item)
				} else{
					completedMatches.push(item)
				}
			})
		}

		renderUpcomingMatches(upcomingMatches)
		renderCompletedMatches(completedMatches)
	})

	$( "#registration" ).on( "submit", async function( event ) {
		event.preventDefault();
		var team_name = $( "#r_tname" ).val();
		var captain_name = $( "#r_cname" ).val();
		var contact_number = $( "#r_contact" ).val();
		var category = $( "#r_category" ).val();

		console.log(team_name,captain_name,contact_number,category)

		const { data, error } = await registrationClient
		.from("registration")
		.insert([{ 
			team_name, captain_name, contact_number, category
		}]);
		console.log(data, error)
		$("#registrationModal").modal('show');
		$( "#r_tname" ).val("");
		$( "#r_cname" ).val("");
		$( "#r_contact" ).val("");
		$( "#r_category" ).val("");

		window.scrollTo({top: 0, behavior: 'smooth'});
	});

	$( "#contact" ).on( "submit", async function( event ) {
		event.preventDefault();
		var first_name = $( "#c_fname" ).val();
		var last_name = $( "#c_lname" ).val();
		var phone = $( "#c_contact" ).val();
		var email = $( "#c_email" ).val();
		var subject = $( "#c_subject" ).val();
		var message = $( "#c_message" ).val();

		console.log(first_name,last_name,phone,email,subject,message)

		const { data, error } = await contactClient
		.from("contacts")
		.insert([{ 
			first_name, last_name, phone, email, subject, message
		}]);
		console.log(data, error)
		$("#contactModal").modal('show');
		$( "#c_fname" ).val("");
		$( "#c_lname" ).val("");
		$( "#c_contact" ).val("");
		$( "#c_email" ).val("");
		$( "#c_subject" ).val("");
		$( "#c_message" ).val("");

		window.scrollTo({top: 0, behavior: 'smooth'});
	});

});