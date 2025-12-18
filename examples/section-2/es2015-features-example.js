// ES2015 features: destructuring, arrow functions, template literals, default parameters
const user = { name: 'Faizan', role: 'Dev' };
const { name } = user; // destructuring
const greet = (who = 'world') => `Hello, ${who}!`; // arrow + default + template
console.log(greet(name)); // Hello, Faizan!

