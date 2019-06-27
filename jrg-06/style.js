/**
 * React Context
 */


//原理：principle
{
  let context = {};
  window.setContext = function(key, value) {
    context[key] = value;
  };
  window.F1 = function () {
    console.log(1);
    F2();
  }
  
  function F2() {
    console.log(2);
    F3();
  }
  
  function F3() {
    console.log(3);
    F4();
  }
  
  function F4() {
    console.log(4);
  }
}

{
  window.setContext("n", 100);
  setTimeout(() => {
    window.f1();
  }, 1000);
  console.log("done");
}

