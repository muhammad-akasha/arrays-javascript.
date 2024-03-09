// array practicing..

let ourCities = [" karachi ", " quetta ", " rawalpindi ", " muree ", " lahore "]; //use to different values in one variable.
console.log(ourCities);

ourCities[1] = "islamabad";// in this islamabad has add to index of 1 which was quetta..


//if you check numbers in an array variable typing variable name plus 0 1 2 etc number are add in square braket [ ] an arrays has add numbering to its values start from zero .

console.log(ourCities);

ourCities.push("lala musa"); // to add another value in array at end.

console.log(ourCities);

ourCities.pop();// to remove last added value in an array.

console.log(ourCities);

console.log(ourCities.slice(0,3));//to see array value from starting 3 values.

ourCities.forEach(function(element) {  // to see value in on another line ..
    console.log(element);
});

ourCities.splice(0,1,"gujarkhan","okara","gujrawala");// in this example 0 means start and 1 mean to delete after 0 and add this value ..
console.log(ourCities);



// let name = "100";

// fullName = parseInt("Str");

// console.log(name);

console.log(ourCities.length);

 ourCities.unshift("multan" , "peshawar"); // to add value in start.

 console.log(ourCities);

 ourCities.shift();

 console.log(ourCities);// to remove start value.

 console.log(Object(ourCities));

 
 ourCities.forEach(function(index,element) {  // to see value in on another line ..
    console.log(element,index);
});


ourCities.reverse();

console.log(ourCities);

let veg =["potato"  , "tomato"]


let fruit = ["mango" , "pineapple" , "apple"];

let arrayJoin = ourCities.concat(fruit,veg);// to join different arrays in one array.

console.log(arrayJoin);

let check = veg.entries();

console.log(check.next().value);


let numbers = [10 , 11, 12, 12 ,15];

console.log(numbers.fill(5,1,5)); // fill the array with no 5 .. the first value is for fill second is for start index and last is for to end for filling no 5.

let num = [1000, 11, 12, 12 ,15,1000];

console.log(num)

let findingNum = num.find((element) => element > 14);// to find only one greater then 14 in an array. start finding from index of 0

console.log(findingNum);


let checkLength = ["hello" , "hi" , "welcome" , "to" , "array" , "topic"] 

let lengthResult = checkLength.filter((checkLength) => checkLength.length > 4); // find all greater then 4  ..

console.log(lengthResult);

let  num_str = [1, 100, "a" , "2"]

console.log(num_str.toString());





// // array assignment..


// //Question 1. literal notation

// let studentNames = [];

// //Question 2 . object notation

// let student = {
//   Names :  []
// };

// // Question 3 to 6.


// let currencies = ["PKR", "USD" , "INR" , "EUR" , "JPY" ] ;

// console.log(currencies);



// let tableOf10 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];

// console.log(tableOf10);

// let boleanValue = [true , false];

// console.log(boleanValue);


// let mixArr = [ "USD" , 1 , 250 , true , false ];

// console.log(mixArr);

// //Question 7.

// let qualificationEduPak = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL." , "PhD"];

// console.log(qualificationEduPak[7])

// document.write("<h1> Qualification </h1>");

// qualificationEduPak = qualificationEduPak.values();

// for (let values of qualificationEduPak){
//     // console.log(values)
//     document.write("<h2>", values , "</h2>")
// }

// //Question 8

// let student_names = ["Ahmed" , "Kashan" , "Asif"];

// let studentMarks = [287 , 376 , 488];

// let totalMarks = 500;


// let student_1=  studentMarks [0] / totalMarks * 100 ;
// let student_2=  studentMarks [1] / totalMarks * 100 ;
// let student_3=  studentMarks [2] / totalMarks * 100 ;


// document.write(" <h2> scores of ",student_names[0] , " is " ,studentMarks[0], ". percentage ",student_1 , "% </h2>");

// document.write(" <h2> scores of ",student_names[1] , " is " ,studentMarks[1], ". percentage ",student_2 , "% </h2>");

// document.write(" <h2> scores of ",student_names[2] , " is " ,studentMarks[2], ". percentage ",student_3 , "% </h2>");

// //Question 9.

// let colorNames = [];

// let userColor1 = prompt("Enter Any One Color Your Want To Add The Begining");

// let userColor2 = prompt("Enter Any One Color Your Want To Add At The End");


// colorNames = [userColor1 , userColor2];

// document.write("<h2>",colorNames,"</h2>");
// console.log(colorNames);
// colorNames.splice(0,0,"red" , "green");

// document.write("<h2>",colorNames,"</h2>");

// colorNames.pop();

// document.write("<h2>",colorNames,"</h2>");
// console.log(colorNames);
// let addColor = prompt("Enter Any One Color Name");

// let giveIndex = prompt("Enter In Which Index You Want To Add A Color");


// colorNames.splice(giveIndex,0,addColor);

// document.write("<h2>",colorNames,"</h2>");
// console.log(colorNames);


// let giveIndexToRemove = prompt("Enter In Which Index You Want To Delete A Color");


// let removeColors = prompt("How Many Colors You Want To Delete");


// colorNames.splice(giveIndexToRemove,removeColors);

// document.write("<h2>",colorNames,"</h2>");
// console.log(colorNames);


// //Question 10.

// let studentScore = [320, 230,480, 120,];
// console.log(studentScore);


// studentScore.sort();

// console.log(studentScore);

// //Question 11.

// let cities = ["karachi" , "islamabad" , "peshawar" , "quetta","multan"];

// console.log(cities);

// document.write("<h1>  cities  </h1>");

// document.write("<h2>" , cities , "</h2>");

// document.write("<h1>select values from cities and add into new array</h1>");

// let selectedCities = cities.slice(2,5); //select value from cities and add into selected cities.

// console.log(selectedCities)
// document.write("<h2>" ,selectedCities , "</h2>");

// // Question 12.

// let array_1 = ["This" , "is" , "my" , "cat"];
// document.write("<h1> Array : </h1>");

// document.write("<h1>",array_1," : </h1>");

// document.write("<h1> remove first , and add - </h1>");

// let array_2 = array_1.join(" ");

// document.write("<h1> String : </h1>");

// document.write("<h2>",array_2," </h2>");

// console.log(array_2);

// array_2 = array_1.join("-");

// document.write("<h2>",array_2,"</h2>");

// console.log(array_2);

// // Question 13.

// let Devices = [ "Cpu" , "Moniter" , "Keyboard" , "Mouse", "Printer" , "Ram" , "Rom"];

// let out_devices= Devices ;

// console.log(out_devices);



// console.log("out :", out_devices[0]);
// console.log("out :", out_devices[1]);
// console.log("out :", out_devices[2]);
// console.log("out :", out_devices[3]);
// console.log("out :", out_devices[4]);
// console.log("out :", out_devices[5]);
// console.log("out :", out_devices[6]);

// // Question 14

// let Devices_2 = [ "Cpu" , "Moniter" , "Keyboard" , "Mouse", "Printer" , "Ram" , "Rom"];

// let out_devices_2= Devices_2 ;

// console.log(out_devices_2);

// let reverse = out_devices_2.reverse();

// console.log("out :", out_devices_2[0]);
// console.log("out :", out_devices_2[1]);
// console.log("out :", out_devices_2[2]);
// console.log("out :", out_devices_2[3]);
// console.log("out :", out_devices_2[4]);
// console.log("out :", out_devices_2[5]);
// console.log("out :", out_devices_2[6]);

// //Question 15

// let phoneManufactures = ["Apple" , "Nokia" , "Samsung" , "Motrola" , "Vivo" , "Oneplus"]

// document.write("<select> <option > ", phoneManufactures[0]   ,"</option>  <option> ", phoneManufactures[1]   ,"</option>  <option> ", phoneManufactures[2]   ,"</option>  <option class= hovereff> ", phoneManufactures[3]   ,"</option>  <option> ", phoneManufactures[4]   ,"</option>  <option> ", phoneManufactures[5]   ,"</option> </select>")





