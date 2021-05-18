const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolated
console.log('Hello %s my friend!', '🤪');

// Styled
console.log('%c This are some good text', 'font-size: 30px; background: red; text-shadow: 10px 10px 0 pink;')

// warning!
console.warn('Oh Nooo!');

// Error :|
console.error('ERROR 💩');

// Info
console.info('This is some information');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('Ouch'), 'This is wrong.');

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Igor');
console.count('Ivan');
console.count('Igor');
console.count('Ivan');
console.count('Ivan');
console.count('Ivan');
console.count('Ivan');
console.count('Igor');
console.count('Igor');
console.count('Ivan');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);