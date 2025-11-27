// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var today = new Date();
var dd = today.getDate();// get the day of month
var mm = today.getMonth(); // get current month
var year = today.getFullYear();// year

if(dd<10){
    dd= '0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
// Format the date as mm-dd-yyyy and log it
today = mm+'-'+dd+'-'+year;
console.log(today); 

// Format the date as mm/dd/yyyy and log it
today=mm+'/'+dd+'/'+year;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today=dd+'-'+mm+'-'+year;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today=dd+'/'+mm+'/'+year;
