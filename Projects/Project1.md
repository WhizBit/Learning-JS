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

## Project 2
```javascript
const Container = document.querySelector('form');

// If we write height and weight here, so as soon as page gets loaded the empty value gets stored in the height and weight variable

Container.addEventListener('submit', function (e) {
  e.preventDefault(); // Waiting for default action
  const height = parseInt(document.querySelector('#height').value); //.value gives the value
  // Converts the value that we got as string to Integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results'); // No need to parse as just a element
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${Bmi}</span>`;
    const div = document.createElement('div');
    div.className = 'ResultText';
    if (Bmi < 16.8) {
      div.appendChild(document.createTextNode('Under Weight'));
    } else if (16.8 < Bmi < 24.9) {
      div.appendChild(document.createTextNode('Normal'));
    } else if (Bmi > 24.9) {
      div.appendChild(document.createTextNode('Over Weight'));
    } else {
      div.appendChild(document.createTextNode('Write Correct enteries'));
    }
    results.appendChild(div);
  }
});

```


## Project 3
