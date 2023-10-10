// Do not remove nor make any changes in  main() function
function main() {
    var shape = readLine();
   var parameters = readLine().split(" ").map(x => parseInt(x));
    console.log(calculateArea(shape, parameters));
}
function calculateArea(shape, parameters) {

  switch (shape) {
    case 'rectangle':
     if (parameters.length !== 2) {
       throw new Error('Rectangle requires two parameters: length and width.');
     }
      const [length, width] = parameters;
      if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        throw new Error('Invalid parameters for Rectangle.');
     }
      return length * width;
      break;

    case 'Circle':
      if (parameters.length !== 1) {
       throw new Error('Circle requires one parameter: radius.');
      }
      const radius = parameters[0];
      if (isNaN(radius) || radius <= 0) {
        throw new Error('Invalid parameter for Circle.');
      }
      return Math.PI * radius * radius;
      break;

    case 'Triangle':
      if (parameters.length !== 2) {
        throw new Error('Triangle requires two parameters: base and height.');
      }
      const [base, height] = parameters;
      if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
       throw new Error('Invalid parameters for Triangle.');
      }
      return 0.5 * base * height;
      break

    default:
      throw new Error('Invalid shape.');
  }
}
