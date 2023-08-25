// Don't remove this lines
console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function() {
  console.logs.push(Array.from(arguments).join(" "));
  console.stdlog.apply(console, arguments);
}

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Your code here 
//1. on supprime le dernier élément dans le tableau
secretMessage.pop();
console.log(secretMessage);
//2. on affiche le nombre d'élement dans le tableau
console.log(secretMessage.length);
//3. On ajoute deux mots to et program à la fin du tableau 
secretMessage.push('to', 'Program');
console.log(secretMessage);
//4.on supprime la première chaine de caractère dans le tableau
secretMessage.shift();
console.log(secretMessage);
//5.
let index = 7;
let newWord = 'right';
secretMessage[7] = newWord;
console.log(secretMessage);
//6. on ajoute une chaine de caractère au debut du tableau
secretMessage.unshift('Programming');
console.log(secretMessage);



//7.ajout d'une chaine au debut du 
let index1 = [6, 7, 8, 9, 10];
let newWord1 = 'know';
secretMessage = secretMessage.filter(item => !index1.includes(item));
secretMessage[6, 7, 8, 9, 10] = newWord1;
console.log(secretMessage);



//8.
let phrase = secretMessage.join(' ');
console.log(phrase);
const newelement = ['Je suis un dévévoloppeur', 'qui a dévélopper', 'plusieurs site web.'];
// jethroMuluba.shift();
// console.log(jethroMuluba.shift());
// jethroMuluba = ['Je suis un dévévoloppeur', 'qui a dévélopper', 'plusieurs site web.'];
console.log(newelement);



// Don't remove this line 
module.exports = { secretMessage }
