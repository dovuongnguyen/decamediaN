//var deviceId = "20150925_bc53f90b7da34605b259dbbab285d9a9";
function loadBanner(deviceId,isFirst) {
	$
			.getJSON(
					"http://twin.vn/DecaMedia/api/devicebillboard/"+ deviceId + "/" + isFirst,
					function(data) {
						if (data != null && data.length > 0) {
							var html = '<div class="tp-banner-container"><div class="tp-banner"><ul>';
							for (var i = 0; i < data.length; i++) {
								html += "<li class='revolution-mch-1' data-transition='"
										+ data[i].Transition
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
							RevolutionSlider.initRSfullScreenOffset();
						}
					});
}