/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
let day1 = document.getElementById("monday");
day1.addEventListener("click",applyClass(day1));

let day2 = document.getElementById("tuesday");
day2.addEventListener("click",applyClass(day2));

let day3 = document.getElementById("wednesday");
day3.addEventListener("click",applyClass(day3));

let day4 = document.getElementById("thursday");
day4.addEventListener("click",applyClass(day4));

let day5 = document.getElementById("friday");
day5.addEventListener("click",applyClass(day5));

function applyClass(day)
{
    day.classList.add("clicked");
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearDay = document.getElementById("clear-button");
clearDay.addEventListener("click",removeClass(clearDay));
function removeClass(day)
{
    day.classList.remove("clicked");
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDay = document.getElementById("half");
halfDay.addEventListener("click",applyClassHalf(halfDay));
function applyClassHalf(day)
{
    day.classList.add("clicked");
    dailyRate = 20;
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullDay = document.getElementById("full");
fullDay.addEventListener("click",fullFunc(fullDay));
function fullFunc(day)
{
    day.classList.add("clicked");
    halfDay.classList.remove("clicked");
    dailyRate = 35;
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


