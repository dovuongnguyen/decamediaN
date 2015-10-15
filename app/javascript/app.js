//var deviceId = "20150925_bc53f90b7da34605b259dbbab285d9a9";
function loadBanner(deviceId,isFirst) {
	$
			.getJSON(
					"http://123.30.129.157/DecaMedia/api/devicebillboard/"+ deviceId + "/" + isFirst,
					function(data) {
						if (data != null && data.length > 0) {
							var html = '<div class="tp-banner-container"><div class="tp-banner"><ul>';
							for (var i = 0; i < data.length; i++) {
								html += "<li class='revolution-mch-1' data-transition='"
										+ data[i].Transition
										+ "' data-delay='"
										+ data[i].Delay
										+ "' data-masterspeed='"
										+ data[i].Speed
										+ "' data-title='Slide 1'>"
										+ data[i].Content
										+ data[i].Caption1
										+ data[i].Caption2
										+ data[i].Caption3
										+ data[i].Caption4
										+ data[i].Caption5
										+ data[i].Caption6
										+ data[i].Caption7
										+ data[i].Caption8
										+ data[i].Caption9
										+ data[i].Caption10
										+ "</li>"
							}
							html += "</ul></div></div>";
							console.log(data);
							$('#content').html(html);
							$('#digital-clock').clock({offset: '+7', type: 'digital'});
							$.simpleWeather({
							    woeid: '1252431', //2357536
							    location: '',
							    unit: 'c',
							    success: function(weather) {
							     $('#todaytemp').html(weather.temp +"&deg;C");
							     $('#forecasttemp').html(weather.forecast[0].high +"&deg;C");
							     $('#forecast1temp').html(weather.forecast[1].high +"&deg;C");
							     
							     $('#forecastdate').html(weather.forecast[0].day);
							     $('#forecast1date').html(weather.forecast[1].day);
							     
							     console.log(weather.forecast);
							    },
							    error: function(error) {
							      console.log(error);
							    }
							  });
							
							RevolutionSlider.initRSfullScreenOffset();
						}
					});
}