function greet(target: any) {

    console.log("Hello, " + target);
  
    }


    function wrapper(fn:Function){

        return function(...args:any[]){
            console.log("Before function call");
            const result = fn(...args);
            console.log("After function call");
            return result;
        }
       
    }
    //greet("World");

    const wrappedGreet = wrapper(greet);
    wrappedGreet("TypeScript");


class xyz{

    @wrapper
    greet(name:string){
        console.log("Hello, " + name);
    }


}
const obj = new xyz();
obj.greet("TypeScript");







