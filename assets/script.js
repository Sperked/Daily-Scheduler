// Current Date Displayed in Header
var todaysDate = dayjs().format('dddd ' + 'MMM D, YYYY');
$('#currentDay').text(todaysDate);


var saveBtn = $('.saveBtn');


$(document).ready(function () {

// Event listener for Click Event
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");

// Saving info to local storage
    localStorage.setItem(time, text);
  })

})

$("#hour-00 .description").val(localStorage.getItem("hour-00"));
$("#hour-01 .description").val(localStorage.getItem("hour-01"));
$("#hour-02 .description").val(localStorage.getItem("hour-02"));
$("#hour-03 .description").val(localStorage.getItem("hour-03"));
$("#hour-04 .description").val(localStorage.getItem("hour-04"));
$("#hour-05 .description").val(localStorage.getItem("hour-05"));
$("#hour-06 .description").val(localStorage.getItem("hour-06"));
$("#hour-07 .description").val(localStorage.getItem("hour-07"));
$("#hour-08 .description").val(localStorage.getItem("hour-08"));
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
$("#hour-21 .description").val(localStorage.getItem("hour-21"));
$("#hour-22 .description").val(localStorage.getItem("hour-22"));
$("#hour-23 .description").val(localStorage.getItem("hour-23"));

// Added Code to differentiate the past, present, or future class to each 
// Time block Hour comparisons

var present = dayjs().hour();
var timeBlock = $('.time-block');

function updateClasses() {
  $('.time-block').each(function () {
    var timeInBlock = parseInt($(this).attr('id').split('-')[1]);

    if (timeInBlock < present) {
      $(this).addClass('past');
    }
    else if (timeInBlock === present) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');

    }
  }

  );


}

updateClasses();
//   adding text to the app from local storage
$("#userInput-00").val(localStorage.getItem("12 AM"));
$("#userInput-01").val(localStorage.getItem("1 AM"));
$("#userInput-02").val(localStorage.getItem("2 AM"));
$("#userInput-03").val(localStorage.getItem("3 AM"));
$("#userInput-04").val(localStorage.getItem("4 AM"));
$("#userInput-05").val(localStorage.getItem("5 AM"));
$("#userInput-06").val(localStorage.getItem("6 AM"));
$("#userInput-07").val(localStorage.getItem("7 AM"));
$("#userInput-08").val(localStorage.getItem("8 AM"));
$("#userInput-09").val(localStorage.getItem("9 AM"));
$("#userInput-10").val(localStorage.getItem("10 AM"));
$("#userInput-11").val(localStorage.getItem("11 AM"));
$("#userInput-12").val(localStorage.getItem("12 PM"));
$("#userInput-13").val(localStorage.getItem("1 PM"));
$("#userInput-14").val(localStorage.getItem("2 PM"));
$("#userInput-15").val(localStorage.getItem("3 PM"));
$("#userInput-16").val(localStorage.getItem("4 PM"));
$("#userInput-17").val(localStorage.getItem("5 PM"));
$("#userInput-18").val(localStorage.getItem("6 PM"));
$("#userInput-19").val(localStorage.getItem("7 PM"));
$("#userInput-20").val(localStorage.getItem("8 PM"));
$("#userInput-21").val(localStorage.getItem("9 PM"));
$("#userInput-22").val(localStorage.getItem("10 PM"));
$("#userInput-23").val(localStorage.getItem("11 PM"));
