"use strict";
import "bootstrap/dist/js/bootstrap";

$(function () {
	//background color chaging

	if ($(".blue_lg").length) {
		blueBg();
		$(window).resize(blueBg);

		function blueBg() {
			const blue = $(".bg_blue");
			const itemB = $(".blue_side").offset().left;

			blue.css("width", itemB);
		}
	}

	//show-hide-section

	$("#index_form #nextbtn").on("click", function () {
		$("#payment_form").show();
		$("#index_form").hide();
	});

	//dropdown

	$(".contract_dropdown .dropdown_header").on("click", function () {
		$(this).toggleClass("active");
		$(this).siblings($(".content")).slideToggle();
	});

	$(document.body).click(function () {
		$(this).siblings($(".content")).hide();

		console.log("clicked");
	});
});
