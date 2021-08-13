$(document).ready(
	function setup() {

		let followers = 100500;

		let following = false;

		let followTxt = 'Follow';

		let followingTxt = 'Following';

		function format(number) {
			return number.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		function toogleFollowing() {
			$('#followBtn').css('background-color','#34CF7A');
		    $('#followBtn').html('<div class="icon-ok"></div> Following');
		}

		function toogleFollow() {
			$('#followBtn').removeClass('icon-ok');
			$('#followBtn').css('background-color','#2589cc');
			$('#followBtn').html(followTxt);
		}

		$('.counter').html(format(followers));

		$('.follow').on("click", function () {

			if (!following) {
				following = true;
				followers++;
				toogleFollowing();
			}
			else {
				following = false;
				followers--
				toogleFollow()
			}
			$('.counter').html(format(followers));
		});
	},
);