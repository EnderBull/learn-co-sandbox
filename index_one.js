function outerFunction() {
  var innerVariable = "I'm sort of secret.";
  
  return function innerScope(){
    var inaccessible = "Nothing can touch me.";
    
    return innerVariable;
  }
}

var myScope = outerFunction();

myScope;

innerScope();

myScope();