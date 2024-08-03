function sayHi(name) {
  return `Hi ${name}`;
}

function add() {
  console.log(arguments);
  // {0:val0, 1:val1 , 2:val2 , 3:val3 ,4:val4}
  let result = 0;
  Object.keys(arguments).map((key) => (result += arguments[key]));

  return result;
}

function add2(...nums) {
  console.log("nums", nums);
}

export { sayHi, add, add2 };
