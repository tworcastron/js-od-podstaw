// hoisting - przenoszenie deklaracji zmiennych/funkcji na górę zakresu
// let i const jest pomijane w hoistingu


functionA()
// functionB()
// functionC()

function functionA() {
  var a

  a
  a = 'a'

  return 'cos'
}
var functionB = () => {}
var functionC = function() {}

