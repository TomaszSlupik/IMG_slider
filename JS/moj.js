const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const photoSlider = document.querySelectorAll(".photoSlider");
const imgBox = document.querySelector(".imgBox");
const dogOne = document.querySelector(".dogOne");
const dogTwo = document.querySelector(".dogTwo");
const dogThree = document.querySelector(".dogThree");
const dogFour = document.querySelector(".dogFour");
const carouselWidth = 600;
const carouselSpeed = 3000;

let index = 0;

console.log(photoSlider.index);

const upper = () => {
	index++;
	changeImages();
};

let start = setInterval(upper, carouselSpeed);

const changeImages = () => {
	imgBox.style.transform = `translateX(${-index * carouselWidth}px)`;
	if (index > photoSlider.length - 2) {
		index = -1;
	} else if (index < 0) {
		index = photoSlider.length - 1;
	}
};

const right = () => {
	index++;
	reset();
};
const left = () => {
	index--;
	reset();
};

const reset = () => {
	changeImages();
	clearInterval(start);
	start = setInterval(upper, carouselSpeed);
};

btnRight.addEventListener("click", right);
btnLeft.addEventListener("click", left);
