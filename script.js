const div = {
	div1 : function() {
		div1.style.width = '100px';
		div1.style.height = '100px';
		div1.style.margin = '10px auto';
		div1.style.border = '2px solid #222';
	},

	div2 : function() {
		div2.style.width = '100px';
		div2.style.height = '100px';
		div2.style.margin = '10px auto';
		div2.style.border = '2px solid #222';
		div2.style.transform = 'scale(1)';
	}
}

document.body.style.textAlign = 'center';

// button1

const button1 = document.createElement('button');
const tButton1 = document.createTextNode('Lampu');

button1.appendChild(tButton1);
document.body.appendChild(button1);

// div1

const div1 = document.createElement('div');
document.body.appendChild(div1);

div.div1();

// alur

button1.onclick = function () {
	div1.classList.toggle('kuning');
}

// button 2
const button2 = document.createElement('button'),
tButton2 = document.createTextNode('Scale');

button2.appendChild(tButton2);
document.body.appendChild(button2);

// div 2

const div2 = document.createElement('div');
document.body.appendChild(div2);
div2.classList.add('div2');

// div.div2();

// alur 

button2.addEventListener('click', function() {
	div.div2();
});