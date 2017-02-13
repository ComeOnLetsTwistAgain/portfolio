$(document).ready(() => {



	$('#submit-contact').click((event) => {
		const name = $('#name').val();
		const email = $('#email').val();
		const phone = $('#phone').val();
		const message = $('#message').val();


		const request = $.ajax({
			url: "https://api-portfolio.herokuapp.com/mail/send",
			method: "POST",
			data: {
				name,
				email,
				phone,
				message
			}
		});

		request.done((msg) => {
			console.log("Request sent, ", msg);
		});

		request.fail((jqXHR, textStatus) => {
			alert("Request failed: " + textStatus);
		});



		event.preventDefault();
	});

});