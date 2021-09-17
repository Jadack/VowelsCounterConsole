// Initial Configuration
import { VowelsCounter } from 'vowels-counter';
import readline from 'readline';
let readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let vc = new VowelsCounter();

// Initial Function
function init() {
  console.clear();
  console.log('Bienvenido a Vowels Counter');
  console.log('Seleccione una opción');
  console.log('1- Contar Vocales');
  console.log('2- Salir');
  readLine.question('Opción: ', (input) => {
    switch(input.trim()) {
      case '1':
        vowelsCounterMenu();
        break;
      case '2':
        process.exit();
      default:
        init();
        break;
    }
  });
}

// Vowels Counter Menu
function vowelsCounterMenu() {
  console.clear();
  console.log('Contador de Vocales');
  readLine.question('Ingrese Palabra: ', (input) => {
    console.log('Vocales Contadas');
    console.log(vc.vowelsCounter(input));
    console.log(' ');
    console.log('¿Desea Repetir?');
    console.log('1- Si');
    console.log('2- No');
    readLine.question('Opción: ', (input) => {
      switch(input.trim()) {
        case '1':
          vowelsCounterMenu();
          break;
        case '2':
          init();
          break;
        default:
          vowelsCounterMenu();
          break;
      }
    });
  });
}

init();
