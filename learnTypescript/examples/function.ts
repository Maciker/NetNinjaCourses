let greet: Function = () => {
    console.log("hello world!");
  };
  
  const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  };
  
  add(5, 10);
  
  const minus = (a: number, b: number): number => {
    return a - b;
  };
  
  let result = minus(20, 10);
  
  type StringOrNum = string | number;
  
  const logDetals = (uid: StringOrNum) => {
    console.log(`Uid is ${uid}`);
  };
  
  let greetAgain: (a: string, b: string) => void;
  
  greetAgain = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
  };
  
  let calc: (numberOne: number, numberTwo: number, action?: string) => number | void;
  
  calc = (numberOne: number, numberTwo: number, action?: string) => {
    if (action === 'add') {
      return numberOne + numberTwo
    }
    if (action === 'minus') {
      return numberOne - numberTwo
    }
  }
  
  console.log(calc(10, 10, 'add'));
  console.log(calc(20, 10, 'minus'));
  console.log(calc(10, 10));