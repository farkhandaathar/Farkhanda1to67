var greeting = "welcome to our website";
        alert(greeting);

        var pass = "Error! Please enter a valid password";
        alert(pass);

        var msg = "Welcome to JS land.....\n Happy Coding!";
        alert(msg);

        var jsland = "Welcome to JS Land....";
        alert(jsland);

        var message = "Happy Coding! \n Prevent this page from creating additional dialogs";
        alert(message);

        console.log("Hello..... I can run Js through my web browsers console.") 
        //Second chapter

var username;
var myname ="Farkhanda Athar";
document.write(myname);


// 3rd question
var message = "Hello World";
alert(message);

//4th question

var name = "Farkhanda Athar";
var age = "15 year old";
var status = "Certified Application Developer";
alert(name);
alert(age);
alert(status);

//5th question
var name= "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);


//6th question 

var email = "farkhanda_athar@yahoo.com";
alert( "My email is " + email);

//7th question
var book = "A smarter way to learn javascript";
alert("I am trying to learn from the book " + book);

//8th question
document.write("<br>" +"Yah! I can write the HTML content through javascript");

//9th question
var string = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(string);





// 3rd chapter
//1st question
var age = 15;
alert( "I am " + age + " year old");

//second question 

var time = 14;
alert("You have visited this page " + time + " times.");

//3rd question

var birthyaer = 200;
document.write("My birth year is " + birthyaer + "<br>" + "Data type of my ddeclared variable is a number");

//4th question 

var name="Jhon Doe";
var product ="T shirts";
var quantity = "5";
document.write("<br>" + name.bold() + " ordered " + quantity.bold() + " " + product.bold() + " on XYZ online stroe");

//4th chapter
//question 1
var username, age, job_title;
//question#2
//legal
var username, age12, job_title, MyName, _result;
//invalid
//var 123name, job job_title, mybook, *MyName;
//Question#3

var heading = "Rules for declaring the variable names";
document.write(heading.bold());
document.write("<br>" + "<br>")
document.write("Variable names can only contain, numbers, $ and_. For Example:$my_1stVariable");
document.write("<br>" + "Variable name must begin with letter, $");
document.write("<br>" + "Variable name are case sensitive");
document.write("<br>" + "Variables names should not JS keyword");


//5th chapter

//1st & 2nd question

var fnum = 3;
var snum = 5;
var sum = fnum + snum;
var mul = fnum * snum;
var div = fnum / snum;
var mod = fnum % snum;
var sub = fnum - snum;
document.write("Sum of " + fnum +" and " + snum + " is " + sum);
document.write("<br> Multiplication of " + fnum +" and " + snum + " is " + mul );
document.write("<br> Subtraction of " + fnum +" and " + snum + " is " + sub );
document.write("<br> Division of " + fnum +" and " + snum + " is " + div );
document.write("<br> Modulus of " + fnum +" and " + snum + " is " + mod + "<br><br>" );

//3rd question
var declareVar ;
document.write("<br> The value of variable after declaration is: " + declareVar);
 var num = 5;
 document.write("<br> Initial value is : " + num);
 num = num++;
 document.write("<br> Value after increment is : " + num);
 num = num +7;
 document.write("<br> The value after adding 7 is :" + num);
 num = num--;
 document.write ("<br> Tha value after decrementing is : " + num);
 num = num % 3;
 document.write("<br> The remainder is: " + num + "<br><br>");

 //4th question
 var ticketCost = 600;
 ticketCost = 600 * 5;
 document.write("<br> Total cost of buying the 5 tickets to a movie is :" + ticketCost + "PKR.");

 //5th question
 document.write("<br><br> Table of 4");
 var i;
 for(i=1; i<=10; i++ )
 {
       document.write("<br> 4 * " + i + "=" + 4*i);
 }

 //6th question
 var C = 25;
 F = (C*9/5) + 32;
 document.write("<br><br>" + C + "C is" + F + "F" );
 var F = 70;
 C = (F-32) * 5/9;
 document.write( "<br>"+ F + "F is" + C + "C" );

 //7th question
 document.write("Shopping Cart" .bold());
 var priceItem1 = 650;
document.write("<br><br> Price of item 1 is" + priceItem1);
 var quantityItem1 = 3;
 document.write("<br> Quantity of item 1 is" + quantityItem1);
 var priceItem2 = 100;
 document.write("<br> Price of item 2 is" + priceItem2);
 var quantityItem2 = 7;
 document.write("<br> Quantity of item 2 is" + quantityItem2);
 var shippingCharges = 100;
 document.write("<br> Shipping Charges are" + shippingCharges);
 var totalCharges = priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;
 document.write("<br>Total cost of your order is : " + totalCharges);


//8th question

document.write("<br><br> Marks Sheet".bold());

var totalMarks = +prompt("Enter total marks", "Total marks are :");
var obtainMarks = +prompt("Enter marks obtained", "Marks obtained are: ");
var percentage = (obtainMarks/totalMarks)*100;
document.write("<br>Total Marks are" + totalMarks);
document.write("<br>Marks obtained are" + obtainMarks);
document.write("<br>Percentage is: " + percentage);

//9th question

var usDollars = 10;
var saudiCurrency = 25;
var totalCurrency = usDollars* 104.80 + saudiCurrency*28 ;
document.write("<br><br> Total currency in PKR : " + totalCurrency);

//10th question
var number = 5;
number = ((number + 5 )* 10) /2;
document.write("<br><br> Final number is : " + number);

//11th question
document.write("<br><br> Age Calculator" .bold());
var currentYear = +prompt("Enter the current year" + "Current year is : ");
var birthYear = +prompt ("Enter the birth year" + "Birth year is : ");
var age =  currentYear - birthYear;
document.write("<br> Current year is : " + currentYear);
document.write("<br> Birth year is : " + birthYear);
document.write("<br> Your age is " + age );


//12th question

document.write("<br><br> The Geometrizer".bold());
var radius = +prompt("Enter the radius of circle", "The radius of circle is : ");
document.write("<br> The radus is: " + radius);
var circum = 2 * 3.14 * radius;
document.write("<br> The circumference of circle is : " + circum);
var area = 3.14 * radius * radius;
document.write("<br> The area of circle is : " + area);


//13th 
document.write("<br><br> The Lifetime Supply Calculator".bold());
var snack = +prompt("Enter you favorite snack" , "Your favorite snack is ");
var currentAge = +prompt("Enter you current age" , "Your age  is ");
var estimatedAge = +prompt("Enter your estimated age" , "Your estimated age is");
var snackPerDay = +prompt("Enter amount of snack per day" , "The amount of snack per day is");
var age= estimatedAge - currentAge;
var totalSnack = age * 3;
document.write("<br>Favorite snack: " + snack);
document.write("<br>Current Age: " + currentAge);
document.write("<br> EstimatedAge" + estimatedAge);
document.write("<br>Amount of snack per day : " + snackPerDay);
document.write("<br> You will need "+ totalSnack + " " + snack + " to last you until the age of ripe old age of " + estimatedAge);


             // Chapt 6-9

//question#1
document.write("<br> Result".bold());
var a = 10;
document.write("<br> The value of a is : " + a);
document.write("<br><br> ........................");

document.write("<br><br> The value of a after ++a is : " + ++a);
document.write("<br> Now thw value of a is : "+ a);

document.write("<br><br> The value of a++ is : " + a++);
document.write("<br> Now thw value of a is : " + a);

document.write("<br><br> The value of --a is : " + --a);
document.write("<br> Now thw value of a is : " +a);

document.write("<br><br> The value of a-- is : " + a--);
document.write("<br> Now thw value of a is : " +a);

//Question #2 
var a = 2;
var b =1;
document.write("<br><br> The value of a is : " +a);
document.write("<br> The value of b is : " + b );
var Result = --a;
document.write("<br> Now the value is : " + Result);
Result = --a - --b;
document.write("<br> Now the value is : " + Result);
Result = --a - --b + ++b;
document.write("<br> Now the value is : " + Result);
Result = --a - --b + ++b + b--;
document.write("<br> Result is : " + Result);


var user = prompt ("Enter you name", "The user name is : ");
document.write("<br><br> Hello " + user + " Good to see you!");

//question 5
var table=0; 
table = +prompt(" Enter the number to print table:");
document.write("<br><br> The table is of : " + table);
if (table== 0)
{
      table = 5;
}
for(i=1; i<=10; i++) 
{
      document.write("<br>" + table + "*" + i + "=" + table * i); 
}


//question #7
var fisrtSubject = prompt("Enter first subject", "First subject is ");
var secondSubject = prompt("Enter second subject", "Second subject is ");
var thirdSubject = prompt("Enter third subject", "Third subject is ");
var totalMarks = 100;
var totalAll = 300;
var firstSubjectMarks = +prompt("Enter marks of first subject", "First subject marks is:");
var secondSubjectMarks = +prompt("Enter marks of second subject", "Second subject marks is:");
var thirdSubjectMarks = +prompt("Enter marks of second subject", "Third subject marks is:");
var obtainMarks = firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks;
var percentage = (obtainMarks /totalAll) * 100;
var percentage1 = (firstSubjectMarks /totalMarks) * 100;
var percentage2 = (secondSubjectMarks /totalMarks) * 100;
var percentage3 = (thirdSubjectMarks /totalMarks) * 100;

document.write("<br><br>");
document.write("<table>");
      document.write("<tr>");
            document.write("<th>");
            document.write("Subjects");
            document.write("</th>");

            document.write("<th>");
            document.write("Total Marks");
            document.write("</th>");

            document.write("<th>");
            document.write("Obtained Marks");
            document.write("</th>");

            document.write("<th>");
            document.write("Percentage");
            document.write("</th>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(fisrtSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(firstSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage1 + "%");
            document.write("</td>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(secondSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(secondSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage2 + "%");
            document.write("</td>");
      document.write("</tr>");

      document.write("<tr>");
            document.write("<td>");
            document.write(thirdSubject);
            document.write("</td>");

            document.write("<td>");
            document.write(totalMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(thirdSubjectMarks);
            document.write("</td>");

            document.write("<td>");
            document.write(percentage3+ "%");
            document.write("</td>");
      document.write("</tr>"); 

      document.write("<tr>");
            document.write("<td>");
            
            document.write("</td>");

            document.write("<td>");
            document.write("        " +totalAll);
            document.write("</td>");

            document.write("<td>");
            document.write("        " + obtainMarks);
            document.write("</td>");

            document.write("<td>");
            document.write("       " + percentage +"%");
            document.write("</td>");
      document.write("</tr>"); 


//chapter 9-11
//question 1 
 var city = prompt("ENter the city name", "The city name is : ");
 if (city == "Karachi" || city == "karachi")
 {
      alert("Welcome to city of lights!")
 }

 //question 2 
 var gender = prompt("Enter the gender", "The gender is");
 if (gender=="Male" || gender=="male")
 {
      document.write("<br><br> Good Morning Sir!");
 }
 if(gender == "Female" || gender== "female")
 {
       document.write("<br><br> Good Morning Ma'am");
 }
      

//question #3
var light = prompt("ENter the taffic light color");
if(light=="red" || light=="Red")
{
      document.write("<br><br> Must stop!");
}
if(light=="Yellow" || light=="yellow")
{
      document.write("<br><br> Ready to move!");
}
if(light=="green" || light=="Green")
{
      document.write("<br><br> Move now!");
}


//question #4
var fuel = +prompt("Enter the fuel quantity");
if(fuel < 0.25)
{
      document.write("<br><br> Please refill the fuel in your car");
}

//question # 5
var a =4;
if(++a === 5 )
{
      alert("Given condition for a variable is true");
}

var b =82;
if(b++ === 83 )
{
      alert("Given condition for b variable is true");
}


var c = 12; 
if (c++ === 13)
{ 
      alert("condition 1 is true");
 } 
 if (c === 13)
 {
        alert("condition 2 is true");
       } 
if (++c < 14)
{ 
      alert("condition 3 is true");
 } 
 if(c === 14)
 { 
       alert("condition 4 is true"); 
      }

var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost)
  { 
      alert("The cost equals");
 }
 
if (true)
{
      alert("True");
} 
if (false)
{ 
      alert("False");
}

if("car" < "cat")
{ 
      alert("car is smaller than cat");
 }
 
var totalMarks = +prompt("ENter the total marks of three subjects");
var subject1 = +prompt("Enter marks of firts subject");
var subject2 = +prompt("Enter marks of second subject");
var subject3 = +prompt("Enter marks of third subject");
var obtainMarks = subject1 + subject2 + subject3;
var percentage = (obtainMarks/totalMarks) *100;
if(percentage >= 80)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> A-one");
      document.write("<br> Remarks: Excellent");
}
if(percentage >= 70 && percentage <80)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade: A");
      document.write("<br> Remarks : Good");
}
if(percentage >= 60 && percentage < 70)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade: B");
      document.write("<br> Remarks: You need to improve");
}
if(percentage < 60)
{
      document.write("<br><br> Total Marks" + totalMarks);
      document.write("<br> Marks ontain" + obtainMarks);
      document.write("<br> Percentage : " + percentage);
      document.write("<br> Grade :Fail");
      document.write("<br> Remarks : sorry");
}

//Question # 7
var secretNo = 7;
var num = +prompt("Enter number to guess the secret number ");
if ( num == 7)
{
      document.write("<br> Bingo! Corret Answer");
}
if ( num + 1 == 7)
{
      document.write("You are close enough to guess the number");
}
else{
      document.write("Wrong answer");
}

//question # 8
var num = +prompt("ENter a number");
if ( num % 3 == 0)
{
      document.write("<br><br> The number is divisible by 3 ");

}
if ( num % 3 != 0)
{
      document.write("<br><br> The number is not divisible by 3 ");

}

var num = +prompt("ENter a number");
if ( num % 2 == 0)
{
      document.write("<br><br> The number is even ");

}
if ( num % 2 != 0)
{
      document.write("<br><br> The number is odd ");

}

//question # 10
var temp = +prompt("ENter temprature");
if ( temp > 40)
{
      document.write("<br><br> The temprature is too hot ");

}
if ( temp > 30 && temp < 40)
{
      document.write("<br><br> The weather is normal ");

}
if ( temp > 20  && temp < 30)
{
      document.write("<br><br> Today! weather is cool ");

}
if ( temp > 12 && temp < 20)
{
      document.write("<br><br> OMG! weather is too much cool ");

}

//question # 11
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var operator = prompt("Enter the oprator");
var Result;
if(operator === "+")
{
      Result= num1 + num2;     
      document.write("<br> Result is : " + num1  + "+" + num2 + "=" + Result);
}
if(operator === "-")
{
      Result= num1 - num2; 
      document.write("<br> Result is : " + num1 + "-" + num2 + "=" + Result);
}
if(operator === "%")
{
      Result= num1 % num2; 
      document.write("<br> Result is : " + num1 + "%" + num2 + "=" + Result);
}
if(operator === "/")
{
      Result= num1 / num2; 
      document.write("<br> Result is : " + num1 + "/" + num2 + "="  + Result);
}
if(operator === "*")
{
      Result= num1 * num2; 
      document.write("<br> Result is : " + num1 + "*" + num2 + "="  + Result);
}


// Chapter 12-13
//question # 1
var char = +prompt("Enter a charcter or number (48-57 for 0-9 numbers, 65 to 90 for Uppercase letter , 97 to 122 for lowercase");
if(char>=48 && char<57)
{
    alert("Its number " );
}
else
if(char>=65 && char<90 )
{
    alert("Upercase leter" );
}
else
if(char>=97 && char<122 )
{
    alert("Lowercase leter" );
}

//Question # 2
var num1 = +prompt("Enter first number");
var num2 = + prompt("Enter second number");
if(num1 > num2 ){
      document.write("<br> num1 is greater than num2");
}
if(num2 > num1 )
{
      document.write("<br> Num2 is greater than num1");
}
if( num1 == num2 )
{
      document.write("<br> Both numbers are equal");
}

//Question #3
var num = +prompt("ENter a number");
if (num > 0)
{
      document.write("<br> The number is positive");
}
if(num < 0)
{e
      document.write("<br> The number is negative");
}
if (num == 0)
{
      document.write("<br> The number is 0");
}

//question # 5
var enterPassword =  prompt("ENter your password");
var reenterPassword = prompt("ReENter your password");
if (enterPassword == 0 )
{
      alert("Please enter your password");
      var enterPassword = prompt("Enter your password");
}
if (enterPassword == reenterPassword)
{
      alert("Great! you password matches");
}
else {
      alert("Incorrect password");
}

//question # 6
var greeting;
var hours = 13
if(hours < 18)
{
      greeting = "Good Day";
    document.write("<br>" + greeting);
}
else
{
      greeting =" Good Evening";
      document.write("<br>" + greeting);
}

//question # 4 
var char = prompt("ENter a character");
if( char=="A"  || char=="a" || char=="E" || char=="e" || char== "I" || char=="i" || char=="O" || char=="o" || char=="U" || char=="u")
{
      alert("true");
}
else
{
      alert("False");
}

//question # 7 

var time = +prompt("Enter the time in 24hours clock format");
if (time >= 0000 && time <= 1200)
{
       alert("Good Morning!");
}
else if (time >= 1200 && time < 1700)
{
      alert("Good afternoon");
}
else if (time >= 1700 && time < 2100)
{
      alert("Good Evening");
}
else(time>= 2100 && time <= 2359)
{
      alert("Good night");
}

//chp 14-16 Arrays
//question #1
var literalArray = [];
//array with data
var literalArray = ["Farkhanda", "Tabinaa"];
//Question#2 
var studentName = {};
var studentName = {
      firstName: "Farkhanda",
      lastName : "Tabinda"};

//Question # 3
var countries = ["Pakistan", "India", "USA", "UAE", "Turkey"];
//Question # 4
var number = [1, 2, 3, 4, 5, 6];
//Question # 5
var boolean = [true, false];
//Question # 6
var mixedArray = [200, "Bahawalput", "Pakistan", true, 12, "USA"];


//Question # 7 
var education = ["SSC", "HSC" , "BCS", "BS" , "BCOM", "MS", "M.Phil", "PHD"];
document.write("<br><br> Qualification".bold());
for (var i =0; i<education.length; i++)
{
      document.write("<br>"  + (i+1) +")" + education[i]  );
}

//Question # 8
var totalMarks= +prompt("Enter total marks");
var studentName =[];
var studentMarks =[];
var studentPercentage=[];

for (var i=0; i<=2; i++)
{
      
       studentName[i] = prompt("Enter student Name");
       studentMarks[i] = prompt("Enter student marks");
       studentPercentage[i] = studentMarks[i] / totalMarks * 100;
       document.write("<br> Score of " + studentName[i] + " is " + studentMarks[i] + ". Percentage : " + studentPercentage[i] + "%");
}


//Question # 9
var array =["Red", "Green", "White", "Blue", "Black", "Orange"];
document.write("<br><br> Array of color is : " );
for(var i=0; i<array.length; i++)
{
      document.write("<br>" + array[i]);
}

//a part
var newColor = prompt("ENter the color name you want to add at the begining");
array.unshift(newColor);
document.write("<br>The new array is ");
for(var i=0; i<array.length; i++)
{
document.write("<br> " + array[i]);
}
//b part
var endColor = prompt("ENter the color name you want to add at the end");
array.push(endColor);
document.write("<br>The new array is ");
for(var i=0; i<array.length; i++)
{
document.write("<br> " + array[i]);
}
//c part
var colors= [];
var n = +prompt ("How many colors you want to add");
for ( var i =1; i<=n; i++)
{
      colors[i] = prompt("Enter the " + i + "color name");
}
array.unshift(colors);
document.write("<br><br> Now array is : " + array);

//d part
array.shift();
document.write("<br><br> Now thw array values is : " + array);

//e part
array.pop();
document.write("<br><br> Now thw array value is: " + array);

// f part 
var newColor = prompt("ENter the color name");
var index = prompt("Enter index");
array.splice(index, 0, newColor);
document.write("<br><br> Now the array is : " + array);

// g part
var number = prompt("How many numbers you want to delete");
var index = prompt("Enter index");
array.splice(index, number);
document.write("<br><br> Now the array is : " + array);

//Question # 10
var studentScore = [320, 230, 480, 120];
document.write("<br><br> Score of student is : " + studentScore);
studentScore.sort();
document.write("<br> Student score after sorting is : " + studentScore);

//Question # 11 
var cities = ["Karachi", "Lahore", "bahawallpur", "Multan", "Queta"];
document.write("<br><br> The cities select is : " + cities);
var selectedCities = cities.slice(2, 4);
document.write("<br> Selected cities are : " + selectedCities);

//Question # 12
var array = ["This", "is", "my", "cat"];
var arrayJoin = array.join("  ");
document.write("<br><br> Array: <br>".bold() + array);
document.write("<br><br> String :  <br> " .bold() + arrayJoin);

//Question # 13;
var devices = ["keyboard" , "mouse", "printer", "moniter"];
document.write("<br><br> Devices: <br> ".bold() + devices + "<br><br>");

for (var i=0; i< devices.length; i++)
{
          document.write("<br> Out: ".bold() + "<br>" + devices[i]);
}

//question # 14 
var devices = ["keyboard" , "mouse", "printer", "moniter"];
document.write("<br><br> Devices: <br> ".bold() + devices + "<br><br>");

for (var i=devices.length-1; i>=0; i--)
{
          document.write("<br> Out: ".bold() + "<br>" + devices[i]);
}

//Question # 15
var phones =["Apple", "Samsung", "Motrola", "Nokia", "Sony", "Haier"]
for(var i=0; i< phones.length; i++)
{
      document.write("<br>" + phones[i]);
}


//Chpater 17-20
//Question # 1
var arrarMulti = [[], [], [], []];
//Question # 2
var arrayMulti = [
      [0, 1, 2, 3],
      [1,0, 1, 2],
      [2, 1,0,1]];

for (var i =0; i< 3; i++)
{
      for(var j=0; j<4; j++)
      {
            document.write( arrayMulti[i][j]);
      }
      document.write("<br>")
}

//Question # 3
var counting = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 10];
for( var i=0; i< 10; i++)
{
      document.write("<br>" + counting[i]);
}

//Question # 4
var tableNo = +prompt("Enter the table number");
var tableLength = + prompt("Enter teh table length");
for (var i=1; i<=tableLength; i++)
{
      document.write("<br>" +tableNo + " x " + i + " = " + tableNo*i );
}

//Question # 5
var fruits=["apple","banana","mango","orange","straberry"];

for (var i=0; i<fruits.length; i++)
{
      
      document.write("<br> " + fruits[i]);
}
document.write("<br><br>");
for( var i=0; i<fruits.length; i++)
{
      document.write("<br> Element at index " + i + "  is " + fruits[i]);
}

//Question # 6
document.write("<br> Counting: ".bold() + "<br>");
for( var i=1; i<=15; i++)
{
      document.write (i + ",  ");
}

document.write("<br> Reverse Counting: ".bold() + "<br>");
for( var i=10; i>=1; i--)
{
      document.write (i + ",  ");
}

document.write("<br> Even: ".bold() + "<br>");
for( var i=0; i<=20; i++)
{
      if (i%2==0)
      {
            document.write (i + ",  ");
      }
      
}
document.write("<br> Odd: ".bold() + "<br>");
for( var i=0; i<=20; i++)
{
      if (i%2!=0)
      {
            document.write (i + ",  ");
      }
      
}
document.write("<br> Even: ".bold() + "<br>");
for( var i=2; i<=20; i++)
{
      if (i%2==0)
      {
            document.write (i + "K,   ");
      }
      
}

//Question # 7
var array = ["Apple", "Apple pie", "Cookies", "Chips", "Patties"];
var order = prompt("Welcome to Our Store. What you want to order ");
for (var i=0; i<array.length; i++)
{
      if (order== array[i])
      {
            document.write("<br>" + order + " is Available at index " + i + "in our bakery");
            break;
      }
      if (order!= array[i])
      {
      document.write("<br> We are sorry " + order + "is not available at our store");
      break;
      }
}

//Question # 8

var array =[24, 53, 78, 91, 12 ];
document.write("<br> Array items are : " + array);
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("<br> The largest number is " .bold() + largest);

//Question # 9
var array =[24, 53, 78, 91, 12 ];
document.write("<br> Array items are : " + array);
var smallest= array[0];

for (i=0; i< array.length ;i++){
      var temp = array[i]
      if ( temp < smallest) {
         smallest = array[i];
    }
}
document.write("<br> The smallest number is " .bold() + smallest);


//Question # 10


document.write("<br><br>");
for ( var i=1; i<=100; i++)
{
      if(i % 5 == 0)
      {
            document.write( i + ",  ");
      }
}


// CHAPTER #21 to 25
// Question # 1
var firstname = prompt("Enter your first name?");
var lastname = prompt("Enter your last  name?");
document.write("<br>" + firstname + " "+ lastname + " "+ "<br>"+ "Welcome to our site");


// Question # 2
 var phone = prompt("Enter your favourite phone model?");
document.write("<br>My Favourite phone is: "+ phone + "<br>"+ "Length of string: " + phone.length);


// Question # 3
var country = "Pakistan";
 var index = country.indexOf("n");
 document.write("<br> String: "+ country + "<br>"+ "Index of n is:" +index);


// Question #4
 var str = "Hello World";
 var index = str.lastIndexOf("l");
 document.write("<br>String: "+ str + "<br>"+ "Last Index of l is:" + index);


// Question #5
 var str = "Pakistani";
 var index = str.substring(3,4);
 document.write(" <br>String: "+ str + "<br>"+ "Character at index 3 is: "+index);


// Question #6
 var str1 = prompt("Enter your first name?");
 var str2 = prompt("Enter your last name?");
 var full = str1.concat(str2);
 document.write(full + "<br>" + "Welcome to this site.");


// Question #7
  var text = "Hyderabad"    ;
  var replace = text.replace("Hyder", "Islam") ;
   document.write("<br> City: "+text+"<br>"+"After Replacement: "+replace);

// Question #8
 var message = "Ali and Sami are best friends. They play cricket and football together."; 
 var replace = message.replace(/and/g, "&") ;
 document.write("<br> "+ replace);


// Question #9
var num = '472';
 document.write("Value: "+num+"<br>"+ "Type: string");
 var num1 = parseInt('472');
 document.write("<br>Value: "+num1 +"<br>"+ "Type: number");


// Question #10
 var text = prompt("Enter any name/thing?");
 var capital = text.toUpperCase();
 document.write("<br>User Input: "+text+"<br>Upper case: "+capital);


// Question #11
 var text = prompt("Enter any name/thing?");
 document.write("<br> " + text[0].toUpperCase() + text.slice(1));


// Question #12
 var num = 35.36;
 var strReplace = num.toString().replace(".", "");
 document.write("<br>Number: "+ num+ "<br>Result: "+ strReplace);

//Question # 13
var name = prompt("ENter a name");
for ( var i =0; i<= name.length; i++)
{
    if (name.charAt[i] == "@" || name.charAt[i]== "!" || name.charAt[i] == "." || name.charAt[i]== ",")
    {
        document.write("<br> Enter a valid username.");
        break;

    }
    else
    {
        document.write("<br> The username is : " + name);
        break;
    }
   
}



// Question #16
 var university = "U\nn\ni\nv\ne\nr\ns\ni\nt\ny\n o\nf\n K\na\nr\na\nc\nh\ni\n"; 
 var arr = university.split(" ")
 document.write( "<br> " + arr)


// Question #17
 var input = prompt("Enter something")
 var lastChar = input.slice(-1)
 document.write("<br> user input: "+input + "<br>Last  character of input: "+lastChar)


// Question #18
 function countOccurences(string, word) {
     return string.split(word).length - 1;
 }
 var text="the quick brown fox jumps over the lazy dog"; 
 var count=countOccurences(text,"the");
 document.write("text: "+text+"<br>There are "+count+" occurences of word the.")

// chp ( 26-30)
var num = prompt("Enter a positive number");
// num1 = Math.random(0, num);
document.write(" The number you enter is : " + num );
var round = Math.round(num);
document.write( "<br>Round off value is:" + round);
var floor = Math.floor(num);
document.write("<br>Floor value :" + floor);
var ceil = Math.ceil(num);
document.write("<br> Ceil Value: " +  ceil);

//Question # 2

var num = prompt("Enter a negative floating point  number");
// num1 = Math.random(0, num);
document.write(" <br><br>The number you enter is : " + num );
var round = Math.round(num);
document.write( "<br>Round off value is:" + round);
var floor = Math.floor(num);
document.write("<br>Floor value :" + floor);
var ceil = Math.ceil(num);
document.write("<br> Ceil Value: " +  ceil);

//Question # 3

var num1 = prompt("Enter a positive or negative number");
var num2 = Math.abs(num1);
document.write(" <br><br>The absolute value of number is " +  num1 + " is " + num2);


// Question # 4


var num3 = Math.floor(Math.random() * 6) + 1 
document.write("<br><br> Random dice value is " + num3)



//Question 5 
var num4 = Math.floor(Math.random() * 2) + 1 
document.write("<br><br>  " + num4);
if( num4 == 2)
{

    document.write("<br> Random coin values is : Head" );
}
if(num4 == 1 )
{

    document.write("<br> Random coin values is : Tail" );
}


//Question # 6
var num3 = Math.floor(Math.random() * 100) + 1 
document.write("<br><br> Random dice value between 1 and 100 is " + num3)

//Question # 7

var weight = prompt("Enter your weight ");
document.write("The weight of user is: " + weight);


//Question # 8
var num3 = Math.floor(Math.random() * 10) + 1 
document.write("<br><br>The random number is : " + num3);
var num4 = prompt("Enter a value from range 1 to 10");
document.write("<br> The user input number is : " + num4 );
if(num3 == num4 )
{
    alert("Congratulation! You guess the secret number");
}else
{
    alert("Try again");
}



// CHAPTER #30 to 34
// Question # 1
 var a = new Date()
 document.write(a)


// Question #2
 var m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
               'August', 'September', 'October', 'November', 'December'];
 d = new Date();
 var n = m_names[d.getMonth()]; 
 document.write(n)


// Question #3
 var today = new Date();
   var day = today.getDay();
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.write("Today is : " + dayNames[day] + ".");


// Question #4
 var today = new Date();
 var day = today.getDate();
 var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 daylist =0;
 if(daylist == daylist[0] || daylist[6]){
     document.write("Its Funday.")
 }



// Question  #6
 var a = new Date()
 document.write(a)
 var b = a.getTime()
 document.write("<br>Elapsed milliseconds since January 1, 1970: " +b)

 var date = new Date( "Jan 1, 1970")
 var datemili = date.getTime()

 var today = new Date()
 var todaymili =today.getTime()


 var diff = (todaymili - datemili);
 var accuage = Math.floor(diff/(1000*60))

 document.write("<br>Elapsed minutes since January 1, 1970:"+accuage)


// Question #7
 var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
    console.log(_time)



// Question #14
 var name = prompt("Enter your name?")
 var today = new Date();
   var day = today.getDay();
 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   document.write("<b>K-Electric Bill</b>"+"<br>Customer Name: "+name+"<br>Today is : " + dayNames[day] + ".");
 var UnitNo = +prompt("Enter number of units:")
 var ChargePerUnit = +prompt("Enter charges per unit:")
 document.write("<br>number of units: "+UnitNo+"<br>charges per unit:"+ChargePerUnit)
 surCharge = 350;
 var NetAmountPayable = UnitNo*ChargePerUnit;
 GrossamountPayable = NetAmountPayable + surCharge;
 document.write("<br>Net Amount Payable(within due date): "+ NetAmountPayable+"<br>Late payment surcharge: "+surCharge+"<br>Gross Amount Payable(after due date): "+GrossamountPayable)


// Question #13
 var dob = new Date(prompt("Enter your DOB", "Aug 31, 1999"))
 var dobmili = dob.getTime()
 var today = new Date()
 var todaymili =today.getTime()
 var diff = (todaymili - dobmili);
 var accuage = Math.floor(diff/(1000*60*60*24*30*12))
 document.write("your age is: "+accuage)








// Chapter 35-38
//uestion # 1 
var date = new Date();
document.write("<br><br>" + date);

//Question # 2
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name");
function person(fname, lname) {
   return fname + lname;
}
document.write ("Welcome!    "  + person(fname, lname));

//Question # 3
var fnum = +prompt("Enter first number: ");
var snum = +prompt("Enter Second number");
function add(fnum, snum) {
   return fnum + snum
   
}
document.write ("The sum of two numbers is    "  + add(fnum, snum));


//Question # 4

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter Second number");
var operator = prompt("Enter Operator");

function cal(num1, operator, num2 ) {
    if(operator=== '+')
    {
        return num1 + num2;
    }
    else if (operator === '-')
    {
        return num1 - num2;
    }
    else if (operator === '*')
    {
        return num1 * num2;
    }
    else if (operator === '/')
    {
        return num1 / num2;
    }
    else if (operator === '%')
    {
        return num1 % num2;
    }
    else
    {
        return "The opeartor is not valid";
    }
}
document.write("<br> The answer is : " + cal(num1, operator, num2));


//Question # 5
var number = +prompt("Enter a number for taking square");
function square(number) {
    return number * number;
  }
document.write("The square of number is : " + square(number));


//Question # 6
var n = +prompt("Enter a number for factorial");
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
document.write("The factorial of " + n + " is " + factorial(n));


//Question # 7

var num1 = + prompt("Enter first number");
var num2 = +prompt("Enter second number");
function display(num1, num2)
{
    for (var i =num1; i<=num2 ; i++)
    {
        document.write("<br> " + i);    
    }
}
display(num1, num2);

//Question # 8

var base = +prompt("Enter base value");
var perpendicular = +prompt("Enter perpendicular");
function hypo(base, perpendicular)
{
    function square1(base)
    {
        return base*base;
    }
    function square2(perpendicular)
    {
        return perpendicular * perpendicular;
    }
    document.write("<br> The square of base is: " + square1(base));
    document.write("<br> The square of perpendicular is : " + square2(perpendicular));
    var result =   square1(base) + square2(perpendicular);
    
    return result;

}
document.write (" <br> The hyposthesus value is "+ hypo(base, perpendicular));

//Question # 9
var width= prompt("Enter width");
var height = prompt("Enter Height");

function A (width, height)
{
    var result = width * height;
    return result;
}
document.write("<br> The area of triangle is : " + A(width, height));


//Question # 10
var str_entry = prompt("Enter string to check plindrome or not");
function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            document.write("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
            document.write("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.write("Entry is not a palindrome.");
                return false;
            }
        }
        document.write("The entry is a palindrome.");
        return true;
    }
    check_Palindrome(str_entry);


//Question # 11
var str = prompt("Enter a string to capital first letter of each word");
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase(str));

//Question # 12
var str = prompt("Enter a string to find longest word from the string");
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word(str));


//Question# 13
var str = prompt("Enter the string");
var letter = prompt("Enter letter to find maximum occurance");
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count(str, letter));

//Question # 14
var radius = prompt("Enter the radius");
function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("<br>The circumfrence is " + y + ".");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("<br>The area is " + x + ".");
  }
  
  calcCircumfrence(radius);
  calcArea(radius);
  
    
    // **********************Ch 38 to 42*************************
                    //  *****Task # 01*****

                    var a=prompt("Enter value of number");
                    var b=prompt("Enter value of power");
            
                function power(a,b){
                    var res=a;
                     for(var i=1;i<b;i++)
                      {
                          res=res*a;
                      }
                      document.write( "The value of " +a +" raised to " +b +" is " +res);
                 }
            
                 power(a,b);
            
                
             document.write("<br>");
             document.write("<br>");
            
            //                         //  *****Task # 02*****
               
                        var year=prompt("Enter a year");
            
                function leapYear(year){
                    if((year % 4 && year % 100 && year % 400)==0)
                    {
                         document.write(year +" is leap year. ")
                     }
                     else
                     {
                         document.write(year +" is not leap year. ")
                     }
                 }
            
                 leapYear(year);
                 document.write("<br>");
                document.write("<br>");
            
                                        //  *****Task # 03*****
                    var a=+prompt("Enter the side a of triangle");
                    var b=+prompt("Enter the side b of triangle");
                    var c=+prompt("Enter the side c of triangle");
            
                    function calculate_S(a,b,c){
                        var s=(a+b+c)/2;
                        return s;
                        
                     }
            
                     function area(a,b,c,s){
                        var area=(s(s-a)(s-b)(s-c));
                        document.write("Area is " +area);
                     }
                     var s= calculate_S(a,b,c);
                     area(a,b,c,s);
            
                 document.write("<br>");
                 document.write("<br>");
            
                                             //  *****Task # 04*****
                 main();
                     function main(){
                         var sunject1=+prompt("Enter a marks of subject 1");
                        var sunject2=+prompt("Enter a marks of subject 2");
                        var sunject3=+prompt("Enter a marks of subject 3");
                        var total=+prompt("Enter total marks of 3 subjects")
                         
                        var avg= average(sunject1,sunject2,sunject3)
                         document.write("Average of 3 subjects is " +avg )
                         document.write("<br>");
                         var percnt= percentage(sunject1,sunject2,sunject3,total)
                         document.write("Percenatge of 3 subjects is " +percnt +"%" )
                     }
            
                     function average(sunject1,sunject2,sunject3){
                               var avg=(sunject1+sunject2+sunject3)/3;
                               return avg;          
                     }
            
                    function percentage(sunject1,sunject2,sunject3,total){
                        var totalGainmarks=sunject1+sunject2+sunject3;
                        var percnt=((totalGainmarks/total)*100);
                        return percnt;
            
                     }
              document.write("<br>");
              document.write("<br>");
            
                                                    //  *****Task # 05*****
            
                    
            
            
            
            
            
            
            
                           // **********************Ch 38 to 42*************************
                                           //  *****Task # 01*****
                 function showalert(){
                      alert("Welcome to my mobile!");
                 }
            
                                           //  *****Task # 02*****    
                 function showMsg(){
                     alert("Thanks for purchasing a phone for us")
                 }
            
                                             //  *****Task # 03***** 
                 var index,table=document.getElementById('table');
                 for(var i=0;i<table.rows.length ;i++)
                 {
                     table.rows[i].cells[2].onclick=function()
                     {
                         index=this.parentElement.rowIndex;
                         table.deleteRow(index);
            
                     }
                 }
            
                                             //  *****Task # 04*****
                                             
                function newImage(){
                    document.getElementById('img').src="images/cat2.jpg";
                }
            
                function oldImage(){
                    document.getElementById('img').src="images/cat1.jpg";
                }
            
            
                                                 //  *****Task # 05*****
               click=0;
                function increaseValue(){
                    click += 1;
                    var value=document.getElementById('count').innerHTML=click;
                   
                }
            
                function decreaseValue(){
                    click -= 1;
                    var value=document.getElementById('count').innerHTML=click;
                   
                }
            
//chp 49-52
//Question # 1 
function showInput() {
    document.getElementById('display').innerHTML = 
                document.getElementById("user_data").value;
               
}
//Question # 2 
 function expandLoris() {
     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which" +
   " make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of"+
    "distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several" +
   " adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time." +
   " Slow lorises have a toxic bite, a rare trait among mammals.";

     document.getElementById("slowLoris").innerHTML = expandedParagraph;
     }


//Question # 3
     function edit_row(no)
     {
      document.getElementById("edit_button"+no).style.display="none";
      document.getElementById("save_button"+no).style.display="block";
         
      var rollno =document.getElementById("rollno_row"+no);
      var name=document.getElementById("name_row"+no);
      var country=document.getElementById("country_row"+no);
         
      var rollno_data=rollno.innerHTML;
      var name_data=name.innerHTML;
      var country_data=country.innerHTML;
         
      rollno.innerHTML="<input type='text' id='rollno_text"+no+"' value='"+rollno_data+"'>";
      name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
      country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
     }
     
     function save_row(no)
     {
      var rollno_val=document.getElementById("rollno_text"+no).value;
      var name_val=document.getElementById("name_text"+no).value;
      var country_val=document.getElementById("country_text"+no).value;
     
      document.getElementById("rollno_row"+no).innerHTML=rollno_val;
      document.getElementById("name_row"+no).innerHTML=name_val;
      document.getElementById("country_row"+no).innerHTML=country_val;
     
      document.getElementById("edit_button"+no).style.display="block";
      document.getElementById("save_button"+no).style.display="none";
     }
     
     function delete_row(no)
     {
      document.getElementById("row"+no+"").outerHTML="";
     }
     
     function add_row()
     {
      var new_rollno=document.getElementById("new_rollno").value;
      var new_name=document.getElementById("new_name").value;
      var new_country=document.getElementById("new_country").value;
         
      var table=document.getElementById("data_table");
      var table_len=(table.rows.length)-1;
      var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='rollno_row"+table_len+"'>"+new_rollno+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
     
      document.getElementById("new_rollno").value="";
      document.getElementById("new_name").value="";
      document.getElementById("new_country").value="";
     }
     
                   //  *****Task # 01*****
                   function showImage(e){
                        var modalImage=document.getElementById("modalImage");
                        modalImage.src=e.src;
                                            
                         }
                
                                             //  *****Task # 02*****
                                                                          
                        function zoomIn() {
                        document.getElementById("myP").style.fontSize = "40px";
                        }
                        function zoomOut() {
                        document.getElementById("myP").style.fontSize = "20px";
                        }
                                            
     // Chapter 58 to 67
// Part 1
 // (i)

 var content = document.getElementById("main-content")

 // (ii)

 var content = document.getElementById("main-content")
 content.childNodes;
console.log(content);


// (iii)
 var main = document.getElementsByClassName("render")
 document.write(main[0].innerHTML +"<br>")
 document.write(main[1].innerHTML +"<br>")
 document.write(main[2].innerHTML +"<br>")
 document.write(main[3].innerHTML +"<br>")
 document.write(main[4].innerHTML +"<br>")

 //(iv)

 document.getElementById("first-name").value = "SANA"

 //(v)
 document.getElementById("last-name").value = "IRSHAD"
 document.getElementById("email").value = "SanaIrshad999@gmail.com"


 // PART 2 (i)
 var type = document.getElementById("form-content").nodeType;
 console.log(type)


 // (ii)

 var type = document.getElementById("lastName").nodeType;
 console.log(type)
 var child = document.getElementById("lastName").childNodes;
 console.log(child)


// (iv)
 var first = document.getElementById("main-content")
 var firstChild = first.firstChild;
 console.log(firstChild)

 var first = document.getElementById("main-content")
 var firstChild = first.firstChild;
 console.log(firstChild)


//(v)
 var next = document.getElementById("lastName");
 nextElement = next.nextSibling;
 console.log(nextElement)

 var firstEl = document.getElementById("lastName");
  var nonexistentEl = firstEl.previousSibling;
  console.log(nonexistentEl)


//(vi)
 var node = document.getElementById("email")
 var pNode = node.parentNode;
 console.log(pNode)

 var node = document.getElementById("email")
 var pNode = node.nodeType;
 console.log(pNode)

 //Calculator
 function getNum(num){
    
  var result = document.getElementById("result");
  result.value += num;
}
function clearResult() {
  var result = document.getElementById("result");
  result.value = "";

}
function getResult() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}
//StopWatch
var min=0;
var sec=0;
var msec=0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer()
{
    msec++;
    msecHeading.innerHTML= msec;
    if(msec >=100)
    {
        sec++;
        secHeading.innerHTML= sec;
        msec =0;

    }
    else if (sec >= 60)
    {
        min++;
        sec=0;
        minHeading.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer, 10)
    
}
function stop() {
    clearInterval(interval);
}
function reset() {
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
}