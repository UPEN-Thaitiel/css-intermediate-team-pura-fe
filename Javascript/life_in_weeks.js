/*
create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.


For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input

e.g. If you are 56 years old:

    lifeInWeeks(56)

Example Output

    You have 12410 days, 1768 weeks, and 408 months left.
*/


function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    var msg = 'Hello World';
    console.log(msg);
    const max = 90;
    const days = 365;
    const weeks = 52;
    const months = 12;
    const yearsLeft = max - age;
    const daysLeft = yearsLeft * days;
    const weeksLeft = yearsLeft * weeks;
    const monthsLeft = yearsLeft * months;
    console.log(You have ${days} days, ${weeks} weeks, and ${months} months left.);

    
    
    
/*************Don't change the code below**********/
}

lifeInWeeks(56)
