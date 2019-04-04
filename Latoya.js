
/*all built in methods and functions used in this script where taken from myString = myString.toLowerCase();
https://developer.mozilla.org/en-US/docs/Web/JavaScript*/

/*Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Tuesday.*/
function DisplayCurrentDate(){
	var result;
    var myDate; 
    var day
    //used Date and getday method to determine current date
    myDate = new Date();
    day = myDate.getDay();
  //I gave names to days since the getday function works in number format
    if(day == 1){result ="monday"}
    else if(day === 2){result ="Tuesday"}
    else if(day === 3){result ="Wednesday"}
    else if(day === 4){result ="Thursday"}
    else if(day === 5){result ="Friday"}
    else if(day === 6){result ="Saturday"}
    else if(day === 7){result ="Sunday"}

 alert("Today is: " +  result + " \ncurrent time is: " + myDate.getHours() + "PM " + " : " + myDate.getMinutes() + " :" + myDate.getSeconds());

};


//Write a JavaScript program to get the website URL;
function GetWebsite(){
    //used the document.url property to get location of my document
    var website = document.URL;
    alert("Location of this document is:\n" + website);
return website;
};


//Write a JavaScript program to check if a string starts with 'Java' and false otherwise.     
function Chekstring(){
    var myString = prompt("enter word");
    var result;
	//convert all entered string to lowercase to make my search case insensitive
	myString = myString.toLowerCase();
    /*used substring method to tell computer to look at the first 4 letters,
     and used if statement to check if they start with word java*/
    result = myString.substring(0,4);
    if(result === "java"){
 alert("true");
}else{
     alert("false");
    };
};


//Write a JavaScript program to find the largest of three given integers.
function largestNumber(){
	var num1;
	var num2;
	var num3;
    
	num1 = prompt("enter the first number");
	num2 = prompt("enter the second number");
	num3 = prompt("enter the third number");
	//used Math.max function to check highest of inputed values
    alert("highest number is: " + Math.max(num1,num2,num3));
};


//Write a JavaScript program to capitalize the first letter of each word of a given string.
function capital(){
    var myString = prompt("enter string");
    //used split method to save each letter at its own (loadvar hoursspace in array
    myString = myString.split(" ");

//used for loop to create array and save splitted letters in the array
    for (var i = 0;i< myString.length; i++) {
        myString[i] = myString[i][0].toUpperCase() + myString[i].substr(1);
    }
//join back all the letters i splited
alert(myString.join(" "));
   
};


//Write a JavaScript program to convert a given number to hours and minutes. 
function convert(){
    var num = prompt("enter number");
        var hours;
        var min;
        //used if statement to make sure function only works with numbers
        if(isNaN(num)){alert("please enter a number not a string");}
        else if(num == ""){alert("please enter a value");}
        else{
        //divided number by 60 to determine the hours since 1 hour is equal to 60minutes
        hours = num /60;
        //divided number by 60 to determine the minutes
        min = num % 60;
        //used math.floor to round of the hours
        alert(num + " is equal to  " + Math.floor(hours) + "  hours and  " + min + " minutes ");
        };
        return hours;
    };
