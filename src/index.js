module.exports = function solveEquation(equation) {
  var index1 = equation.indexOf('x');
  var index2 = equation.lastIndexOf('x');

  var a = Number(equation.slice(0, index1-3));
  var b = Number(equation.slice(index1+5, index2-3));
  var c = Number(equation.slice(index2+3));
  
  var signOfB = equation.slice(index1+4, index1+5);
  var signOfC = equation.slice(index2+2, index2+3);

  if (signOfB == '-') {
    b = b * -1;
  }
  if (signOfC == '-') {
    c = c * -1;
  }

  var x1 = Math.round(( -b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a));
  var x2 = Math.round(( -b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a));

  var array=[x1, x2];
  array.sort(function(a, b) {
    return a - b;
  });

  return array;
}



