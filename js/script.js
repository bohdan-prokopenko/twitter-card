$(document).ready(
	function setup() {

		let followers = 100500;

		let following = false;

		let followTxt = 'Follow';

		function format(number) {
			return number.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		function toogleFollowing() {
			following = true;
			followers++;
			$('#followBtn').css('background-color', '#34CF7A');
			$('#followBtn').html('<div class="icon-ok"></div> Following');
		}

		function toogleFollow() {
			following = false;
			followers--;
			$('#followBtn').removeClass('icon-ok');
			$('#followBtn').css('background-color', '#2589cc');
			$('#followBtn').html(followTxt);
		}

		$('.counter').html(format(followers));

		$('.follow').on("click", function () {

			if (!following) {
				toogleFollowing();
			}
			else {
				toogleFollow()
			}
			$('.counter').html(format(followers));
		});
	},
);