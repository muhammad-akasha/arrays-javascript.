// array practicing..

let shehar = [" karachi ", " quetta ", " rawalpindi ", " muree ", " lahore "]; //use to different values in one variable.
console.log(shehar);

shehar[1] = "islamabad";//if you check numbers in an array variable typing variable name plus 0 1 2 etc number are add in square braket [ ] an arrays has add numbering to its values start from zero .

console.log(shehar);

shehar.push("lala musa"); // to add another value in array.

console.log(shehar);

shehar.pop("quetta");// to remove value in an array.

console.log(shehar);

console.log(shehar.slice(0,3));//to see array value from starting 3 values.

shehar.forEach(function(element) {  // to see value in on another line ..
    console.log(element);
});

shehar.splice(2,1,"gujarkhan","okara","gujrawala");
console.log(shehar);