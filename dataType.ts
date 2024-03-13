// Числа (Numbers): 
console.log(5 + 3);

// Строки (Strings):  
console.log('Hello' + ' World');

// Булевые значения (Boolean): 
console.log(5 === 5);
console.log(5 !== 5);

// Массивы (Arrays): 
const arr: (number | string | undefined | null | boolean)[] = [1, undefined, "3", null, true];
console.log(arr);

// Объекты (Objects): 
const obj: { name: string, age: number } = { name: 'John', age: 30 };
console.log(obj);

// Undefined:
let x: undefined;
console.log(x);

// Null:  
let y: null = null;
console.log(y);

//Any: 
let z: any;
z = 5;
z = 'Hello';
console.log(z);


//Void: 
function displayMessage(): void {
    console.log('This is a message');
}
displayMessage();