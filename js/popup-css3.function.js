window.onload = document.getElementById("buttonFormInputDataStartPage").onclick = function () {
	if(document.getElementById('buttonFormInputDataStartPage').onclick){ 
		var overlay	= document.querySelector('.overlay'),
		mOpen	= document.querySelectorAll('input[data-modal="idPopupBlockStartPage"]'),
		mClose	= document.querySelectorAll('input[data-close="idPopupBlockStartPage"]'),
		mStatus	= false;
		if (mOpen.length == 0) return;
		[].forEach.call(mOpen, function(el) {
			el.addEventListener('click', function(e) {
				var modalId	= el.getAttribute('data-modal'),
					modal	= document.getElementById(modalId);
				modalShow(modal);
			});
		});
		document.addEventListener('keydown', modalClose);
		function modalShow(modal) {
			overlay.classList.remove('fadeOut');
			overlay.classList.add('fadeIn');
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
			mStatus = true;
		}
		function modalClose(event) {
			if (mStatus) {
				var modals = document.querySelectorAll('.popupBlockStartPage');
				[].forEach.call(modals, function(modal) {
					modal.classList.remove('fadeIn');
					modal.classList.add('fadeOut');
				});
				overlay.classList.remove('fadeIn');
				overlay.classList.add('fadeOut');
				mStatus = false;
			}
		}
	}
}


