//Learning DOM
const container = document.querySelector('#container');

const content = document.createElement('div');
const red_p = document.createElement('p');
const blue_h3 = document.createElement('h3');
const box = document.createElement('div');
const another_h1 = document.createElement('h1');
const another_p = document.createElement('p');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
red_p.textContent = 'Hey I\'m red!';
blue_h3.textContent = 'I\'m a blue h3!';
another_h1.textContent = 'I\'m in a div';
another_p.textContent = 'ME TOO!';

red_p.style.color = 'red';
blue_h3.style.color = 'blue';
box.style.backgroundColor = 'pink';
box.style.border = 'black';
box.style.borderStyle = 'solid';


container.appendChild(content);
container.appendChild(red_p);
container.appendChild(blue_h3);

box.appendChild(another_h1);
box.appendChild(another_p);
container.appendChild(box);


//Now Events
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

btn3.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
  });