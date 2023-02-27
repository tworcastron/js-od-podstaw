// switch
const color = 'azure';

// if (color === 'green') {
// 	console.log('zielony');
// } else if (color === 'red') {
// 	console.log('czerwony');
// }else if (color === 'blue' || color === 'azure') {
// 	console.log('niebieski');
// } else {
// 	console.log('brak koloru');
// }

switch (color) {
  case 'green':
    console.log('zielony');
    break;
  case 'red':
    console.log('czerwony');
    break;
  case 'blue':
  case 'azure':
    console.log('niebieski');
    break;
  default:
    console.log('brak koloru');
}