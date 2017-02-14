$(document).ready(() => {
	$('.btn-send-message').attr('disabled', 'disabled');

	$('#mail-form input, #mail-form textarea').keydown(event => {
		const name = $('#name').val();
		const email = $('#email').val();
		const phone = $('#phone').val();
		const message = $('#message').val();


		if (name !== "" && email !== "" && phone !== "" && message !== "") {
			$('.btn-send-message').removeAttr('disabled');
		}
	})

	/**
	 * Vide les champs du formulaire
	 */
	var emptyFields = () => {
		$('#name').val('');
		$('#email').val('');
		$('#phone').val('');
		$('#message').val('');
	};



	/**
	 * 
	 */
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

		// emptying the form fields
		emptyFields();

		$('.btn-send-message').attr('disabled', 'disabled');
		$('.spinner-sub-container').fadeIn();

		request.done((msg) => {
			$('.mdl-spinner').hide();
			$('.material-icons.checked').fadeIn();

			setTimeout(() => {
				$('.spinner-sub-container').fadeOut();
			}, 4000);
		});

		request.fail((jqXHR, textStatus) => {
			console.log("Request failed: " + textStatus);
		});



		event.preventDefault();
	});

});