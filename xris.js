//alert("I've wasted my data");
//confirm("Are you sure ur data has been wasted?");
document.write("<br>")
var z = parseInt(prompt("enter your score in mathematics"));
var a = parseInt(prompt("enter your score in statistics"));
var b = parseInt(prompt("enter your score in computer science"));
var total = z+a+b;
document.write("Total Marks: "+total+"<br>");  
var average = total/3;
document.write("Average: "+average+"<br>");
if(z>=35 && a>=35 && b>=35)
{
	document.write("Results:Passed"+"<br>");	
	if(average>=35 && average<60){
		document.write("Grade: C"+"<br>");  
	}else if(average>=60 && average<70){
		document.write("Grade: B"+"<br>");
	}else{
		document.write("Grade: A"+"<br>");
	}
	
}else{
	document.write("Results:Failed");
}  
var n = prompt("Enter any number","1-3");
switch(n){
	case 1:
	      document.write("you're number one");
		  break;
	case 2:
	      document.write("you're number two");
	      break;
    case 3:
	       document.write("you're number three");
	default:
          document.write("Error, try again");		  

}
