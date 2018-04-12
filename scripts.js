var smallBtn = document.getElementById('small');
var mediumBtn = document.getElementById('medium');
var largeBtn = document.getElementById('large');
var addBtn = document.getElementById('addBtn');

var firstImage = document.getElementById('1');
var secondImage = document.getElementById('2');
var thirdImage = document.getElementById('3');
var fourthImage = document.getElementById('4');
var fifthImage = document.getElementById('5');

var activeImage = document.getElementById('active-image')

var smallClicked = false;
var mediumClicked = false;
var largeClicked = false;


smallBtn.addEventListener('click', function(e){
		return smallClicked = true;
	});

mediumBtn.addEventListener('click', function(e){
		return mediumClicked = true;
	});

largeBtn.addEventListener('click', function(e){
		return largeClicked = true;
	});

addBtn.addEventListener('click', function(e){
		if(smallClicked === true){
			alert("Small Size Selected");
			smallClicked = false;
			smallBtn.classList.remove('active');
		}else if(mediumClicked === true){
			alert("Medium Size Selected");
			mediumClicked = false;
			mediumBtn.classList.remove('active');
		}else if(largeClicked === true){
			alert("Large Size Selected");
			largeClicked = false;
			largeBtn.classList.remove('active');
		}else{
			alert("Please Pick a Size")
		}
});

function activeColorAll(size){
	if(!size.classList.contains('active')){
		size.classList.add('active');
	}else{
		size.classList.remove('active');
	}
}

function showImage(image){
	activeImage.innerHTML = '<img src=' +  image + ' />';
	activeImage.setAttribute("style", "border:solid black 1px;");
}












