$('form').on('submit',function(){
	document.getElementById('popup_content').style.display = 'block';
});

let closePop = document.getElementById('closePop');
closePop.addEventListener('click', hidePopUp);

function hidePopUp() {
	bluePop.style.display = 'none';
}

let bluePop = document.getElementsByClassName('thank-you');


