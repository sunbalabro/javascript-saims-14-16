// Chapter no 13-15

// Task no 1

// 1. Declare an empty array using JS literal notation to store
// student names in future.

//  var literalArray = [];

// Task no 2

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var objectArray = [{studentName:[]}];

// Task no 3

// 3. Declare and initialize a strings array.

// var stringArray = ["Jawan" , "Pakistan"];

// Task no 4

// 4. Declare and initialize a numbers array.

// var numberArray = [234,535,256];

// Task no 5

// 5. Declare and initialize a boolean array.

// var booleanArray = [true,false];

// Task no 6

// 6. Declare and initialize a mixed array.

// var mixedArray = ["Jawan",25,true,"Pakistan",false,1992];

// Task no 7

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualificationArr = ["SSC","HSC","BSC","BS","BCOM","MS","M. Phil","PhD"];
 // document.write(`<h1>Qualifications</h1>
     // 1) ${qualificationArr[0]}<br>
    // 2) ${qualificationArr[1]}<br>
    // 3) ${qualificationArr[2]}<br>
    // 4) ${qualificationArr[3]}<br>
    // 5) ${qualificationArr[4]}<br>
    // 6) ${qualificationArr[5]}<br>
    // 7) ${qualificationArr[6]}<br>
    // 8) ${qualificationArr[7]}<br>
    // `)

// Task no 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentsName = ['Micheal' , 'John' , 'Tony'];
// var studentScore = [320 , 230 , 480];
// var totalScore = 500;

 // document.write(`
// Score of ${studentsName[0]} is ${studentScore[0]}. Percentage: ${studentScore[0]/totalscore*100 }% <br>
// Score of ${studentsName[1]} is ${studentScore[1]}. Percentage: ${studentScore[1]/totalscore*100 }%<br>
// Score of ${studentsName[2]} is ${studentScore[2]}. Percentage: ${studentScore[2]/totalScore*100 }%<br>
    // `)

// Task no 9

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colorArr = ["royalBlue","Jasmic"];
// document.write("The array at beginning is:"+colorArr+"<br>");
// var userFirstColor = prompt("Enter the color name you want to add on beginning");
// colorArr.unshift(userFirstColor);
// document.write("The array after adding color at beginning is:"+colorArr+"<br>");
// var userEndColor = prompt("Enter the color name you want to add on Ending");
// colorArr.push(userEndColor);
// document.write("The array at ending is:"+colorArr+"<br>");
// colorArr.push("Green");
// colorArr.push("White");
// document.write("Now the array  is:"+colorArr+"<br>");
// colorArr.shift();
// document.write("Now the array  is:"+colorArr+"<br>");
// colorArr.pop();
// document.write("Now the array  is:"+colorArr+"<br>");
// var userIndex = parseInt(prompt("Enter the Index you want to add the color"));
// var userColor = prompt("Enter the color you want to add");
// colorArr.splice(userIndex,0,userColor);
// document.write("Now the array  is:"+colorArr+"<br>");
// var userIndex = parseInt(prompt("Enter the Index you want to delete the color"));
// var deleteIndex = parseInt(prompt("How many color you want to deletee"))
// colorArr.splice(userIndex,deleteIndex);
// document.write("Now the array  is:"+colorArr+"<br>");

// Task no 10

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentsScore = [320,230,480,120];
// document.write("Scores of Students : " + studentsScore + "<br />");
// studentsScore.sort(function(a , b){ return a - b});
// document.write("Ordered Score of Students:"+studentsScore );

// Task no 11

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cityNames = ["Karchi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: <br>"+cityNames+"<br /> <br />");
// var copyArray = cityNames.splice(2,2);
// document.write("Selected Cities Array list: <br>"+copyArray);

// Task no 12

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//  var arr = ["This", "is ", "my","cat"];
// document.write("Array: <br>"+arr+"<br>")
// var a = arr.join(" ");
// document.write("Array: <br>"+a+"<br>");

// Task no 13

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var itemArray = ["keyboard", "mouse", "printer", "monitor"];
// document.write(`Device:<br>${itemArray} <br>Out:<br>${itemArray[0]}
// <br><br>Out:<br>${itemArray[1]}<br><br>Out:<br>${itemArray[2]}<br>
// <br>Out:<br>${itemArray[3]}<br>`);

// Task no 14

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var itemArr = ["monitor", "printer", "mouse", "keyboard"]
// var reverseArr = itemArr.reverse();
// document.write(`Device:<br>${reverseArr} <br> Out:<br>${itemArr[0]}<br><br>Out:<br>${itemArr[1]}<br><br>Out:<br>${itemArr[2]}<br><br>Out:<br>${itemArr[3]}<br`)

// Task no 15

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var phoneArr = ["Apple", "Samsung", "Motorola","Nokia","Sony","Haier"];
                        
//  document.write(`<select>
//     <option value="${phoneArr[0]}">${phoneArr[0]}</option>
//     <option value="${phoneArr[1]}">${phoneArr[1]}</option>
//     <option value="${phoneArr[2]}">${phoneArr[2]}</option>
//     <option value="${phoneArr[3]}">${phoneArr[3]}</option>
//     <option value="${phoneArr[4]}">${phoneArr[4]}</option>
//     <option value="${phoneArr[5]}">${phoneArr[5]}</option>
//         <select>`);


////// A Table made by loop ////////////
// var userValue = parseInt(prompt("Enter a value which table you want"));
// for(i=1; i<=10 ; i++){
//     document.write( userValue + "x" + [i]+ "=" + i*userValue  + "<br />");
// }