function getFirst<T>(arr:T[]):T{
    return arr[0];
}   

console.log(getFirst([1,2,3]));
console.log(getFirst(["a","b","c"]));
console.log(getFirst([true,false,true]));


const x= <G>(value:G):G=>{
    return value;
}

x(123)
x("hello")
x(true)


interface apiResponse<M>{
    success:boolean;
    message:string;
    data:M;
}

const response:apiResponse<string> = {
    success:true,
    message:"success",
    data:"data"
}

const response2:apiResponse<number> = {
    success:true,
    message:"success",
    data:123
}

interface hasId {
    id:number;
}


function getId<T extends hasId>(val:T):number{
    return val.id;
}

class Stack<T> {  //generic class
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.pop(); // returns number

const stringStack = new Stack<string>();
stringStack.push("hello");
// stringStack.push(42); // ERROR — T is string here

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Ayush", age: 25 };

getProperty(user, "name");  // returns string ✅
getProperty(user, "age");   // returns number ✅
//getProperty(user, "email"); // ❌ ERROR — 'email' not in user