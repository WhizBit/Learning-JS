# Projects Related to DOM 


## Project1
```javascript
const Buttons = document.querySelectorAll('.button');
const Body = document.querySelector('body');

Buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target.id === 'grey') {
      Body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      Body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      Body.style.backgroundColor = e.target.id;
    } else {
      Body.style.backgroundColor = 'white';
    }
  });
});
```