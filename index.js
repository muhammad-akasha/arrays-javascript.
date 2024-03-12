// array assignment..


//Question 1. literal notation

let studentNames = [];

//Question 2 . object notation

let student = {
  name : []
};

// Question 3 to 6.


let currencies = ["PKR", "USD" , "INR" , "EUR" , "JPY" ] ;

console.log(currencies);



let tableOf10 = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100];

console.log(tableOf10);

let boleanValue = [true , false];

console.log(boleanValue);


let mixArr = [ "USD" , 1 , 250 , true , false ];

console.log(mixArr);

//Question 7.

let qualificationEduPak = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL." , "PhD"];

console.log(qualificationEduPak[7])

document.write("<h1> Qualification </h1>");

qualificationEduPak = qualificationEduPak.values();

for (let values of qualificationEduPak){
  
    document.write("<h2>", values , "</h2>")
}

//Question 8

let student_names = ["Ahmed" , "Kashan" , "Asif"];

let studentMarks = [287 , 376 , 488];

let totalMarks = 500;


let student_1=  studentMarks [0] / totalMarks * 100 ;
let student_2=  studentMarks [1] / totalMarks * 100 ;
let student_3=  studentMarks [2] / totalMarks * 100 ;


document.write(" <h2> scores of ",student_names[0] , " is " ,studentMarks[0], ". percentage ",student_1 , "% </h2>");

document.write(" <h2> scores of ",student_names[1] , " is " ,studentMarks[1], ". percentage ",student_2 , "% </h2>");

document.write(" <h2> scores of ",student_names[2] , " is " ,studentMarks[2], ". percentage ",student_3 , "% </h2>");

//Question 9.

let colorNames = [];

let userColor1 = prompt("Enter Any One Color Your Want To Add The Begining");

let userColor2 = prompt("Enter Any One Color Your Want To Add At The End");


colorNames = [userColor1 , userColor2];

document.write("<h2>",colorNames,"</h2>");
console.log(colorNames);
colorNames.splice(1,0,"purple" , "darkblue");

document.write("<h2>",colorNames,"</h2>");

colorNames.pop();

document.write("<h2>",colorNames,"</h2>");
console.log(colorNames);
let addColor = prompt("Enter Any One Color Name");

let giveIndex = prompt("Enter In Which Index You Want To Add A Color");


colorNames.splice(giveIndex,0,addColor);

document.write("<h2>",colorNames,"</h2>");
console.log(colorNames);


let giveIndexToRemove = prompt("Enter In Which Index You Want To Delete A Color");


let removeColors = prompt("How Many Colors You Want To Delete");


colorNames.splice(giveIndexToRemove,removeColors);

document.write("<h2>",colorNames,"</h2>");
console.log(colorNames);


//Question 10.

let studentScore = [320, 230,480, 120,];
console.log(studentScore);


studentScore.sort();

console.log(studentScore);

//Question 11.

let cities = ["karachi" , "islamabad" , "peshawar" , "quetta","multan"];

console.log(cities);

document.write("<h1>  cities  </h1>");

document.write("<h2>" , cities , "</h2>");

document.write("<h1>select values from cities and add into new array</h1>");

let selectedCities = cities.slice(2,5); //select value from cities and add into select cities.

console.log(selectedCities)
document.write("<h2>" ,selectedCities , "</h2>");

// Question 12.

let array_1 = ["This" , "is" , "my" , "cat"];
document.write("<h1> Array : </h1>");

document.write("<h1>",array_1," : </h1>");

document.write("<h1> remove first , and add - </h1>");

let array_2 = array_1.join(" ");

document.write("<h1> String : </h1>");

document.write("<h2>",array_2," </h2>");

console.log(array_2);

array_2 = array_1.join("-");

document.write("<h2>",array_2,"</h2>");

console.log(array_2);

// Question 13.

let devicesFifo = [];

devicesFifo.push("Keyboard");
devicesFifo.push("Mouse");
devicesFifo.push("Cpu");
devicesFifo.push("Moniter");

document.write("<h1> Devices </h1>");

document.write(" <h2> ", devicesFifo ," </h2> ");

document.write(" <h2>  FIFO : First in First Out  </h2> ");

document.write(" <h2> ", devicesFifo.shift()," </h2> ");
document.write(" <h2> ", devicesFifo.shift()," </h2> ");
document.write(" <h2> ", devicesFifo.shift()," </h2> ");
document.write(" <h2> ", devicesFifo.shift()," </h2> ");

// Question 14

let devicesLifo = [];

devicesLifo.unshift("Keyboard");
devicesLifo.unshift("Mouse");
devicesLifo.unshift("Cpu");
devicesLifo.unshift("Moniter");

document.write("<h1> Devices </h1>");

devicesLifo.reverse();

document.write(" <h2> ", devicesLifo ," </h2> ");

document.write(" <h2>  Last In First Out </h2> ");
document.write(" <h2> ", devicesLifo.pop()," </h2> ");
document.write(" <h2> ", devicesLifo.pop()," </h2> ");
document.write(" <h2> ", devicesLifo.pop()," </h2> ");
document.write(" <h2> ", devicesLifo.pop()," </h2> ");




//Question 15

let phoneManufactures = ["Apple" , "Nokia" , "Samsung" , "Motrola" , "Vivo" , "Oneplus"]

document.write("<select> <option > ", phoneManufactures[0]   ,"</option>  <option> ", phoneManufactures[1]   ,"</option>  <option> ", phoneManufactures[2]   ,"</option>  <option class= hovereff> ", phoneManufactures[3]   ,"</option>  <option> ", phoneManufactures[4]   ,"</option>  <option> ", phoneManufactures[5]   ,"</option> </select>")


let myProfile = {
    firstName : "Akasha",
    lastName : "Shahzad",
    age : 23,
    isLike : true,
    isFollow : false,
    comments : ["first" , "second " , "third" , "fourth" , "fifth"]
  
  }
  
  console.log(myProfile);
  
  let smitGulshanCampus = [   ourClass =   {
    ourTeacherName : "Sir Nadir Bashir",
    classTiming : "11:00 am to 1:00 pm ",
    ramzanTiming : "9:30 am to 11:00 am",
    courseName : "WMA - Web And Mobile App Development",
    courseLanguage : "HTML CSS and Javascript",
    studentsInOurClass : 80,
  
  }];
  
  console.log(smitGulshanCampus);
  