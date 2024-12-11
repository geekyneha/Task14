// Prmise 

const myFunc = (a, b) => {
  const promise = new Promise(function (res, rej) {
    const divsion = a / b;
    if (b === 0) {
      rej('rejected');
    } else {
      res(divsion);
    }
  });
  return promise;
};
myFunc(10, 2)
  .then((data) => {
    console.log('promise fulfilled: ' + data);
  })
  .catch((error) => {
    console.log('Division by zero is not allowed. : ' + error);
  });
myFunc(10, 0)
  .then((data) => {
    console.log('promise fulfilled: ' + data);
  })
  .catch((error) => {
    console.log('Division by zero is not allowed. : ' + error);
  });
myFunc(8, 4)
  .then((data) => {
    console.log('promise fulfilled: ' + data);
  })
  .catch((error) => {
    console.log('Division by zero is not allowed. : ' + error);
  });
myFunc(50, 5)
  .then((data) => {
    console.log('promise fulfilled: ' + data);
  })
  .catch((error) => {
    console.log('Division by zero is not allowed. : ' + error);
  });

// console.log(myFunc(3,4));
// console.log(myFunc(3,0));
