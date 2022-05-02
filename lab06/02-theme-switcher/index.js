/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const blank = () => {
	var body = document.getElementsByTagName("body")[0];
	body.className = '';
};

const desert = () => {
	var body = document.getElementsByTagName("body")[0];
	body.className = 'desert';
};

const ocean = () => {
	var body = document.getElementsByTagName("body")[0];
	body.className = 'ocean';
};

const highContrast = () => {
	var body = document.getElementsByTagName("body")[0];
	body.className = 'high-contrast';
};

document.getElementById("default").addEventListener('click', blank);
document.getElementById("desert").addEventListener('click', desert);
document.getElementById("ocean").addEventListener('click', ocean);
document.getElementById("high-contrast").addEventListener('click', highContrast);