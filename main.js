/*
===============================================
Student Name: 	Priyatham Goud Kata
Solution for Assignment 2
===============================================
*/

	/* Function to append the output using parameters*/
	function append_to_div(div_name, data)
		{ 
            document.getElementById(div_name).innerText += data; 
        } 
	/* Function to return the time */
	function addZero(i)
		{
		if (i < 10) 
		{
			i = "0" + i;
		}
		return i;
		}
	/* Function to perform all the validations */
	function myFunction() 
		{ 
			var startYear = document.myform.startYear.value;
			var startYearInt= parseInt(startYear);
			var myDate=new Date();
	/* Calculating the hours and mintues using addZero function */
			var h= addZero(myDate.getHours());
			var m = addZero(myDate.getMinutes());
	/* Condition to check if the startYear is greater than or equal to 2000 */
				if (startYearInt  >= 2000)
				{
	/* Assigning the form values to variable final message and appending the result to div element using append_to_div function */
					var finalmessage = h + ":" + m + " - " + document.myform.fullName.value + 
					", " + document.myform.major.value +", " + document.myform.startYear.value +"\n" ;
					append_to_div("my_div", finalmessage + "\n");
		
					document.myform.fullName.value = ""; 
					document.myform.major.value= "";
					document.myform.startYear.value = "";
				}
	/* Condition to throw an alert */
				else 
				{
					window.alert("Incorrect Year:" + startYearInt);
				}
		}

	
