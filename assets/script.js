$(".saveBtn").on("click", save);
function save() {
  var value = $(this)
    .siblings(".form")
    .val();
  var time = $(this)
    .siblings(".time")
    .text();
  localStorage.setItem(time, value);
};

// Change background color for each box base of local time
$(".row").each(function () {

  if (parseInt($(this).attr("id")) < moment().hours()) {
    $(this).addClass("red");
  }
  else if (parseInt($(this).attr("id")) === moment().hours()) {
    $(this).addClass("gray");
  }
  else {
    $(this).addClass("green");
  }
});
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

$("#local-time").html(moment().format('llll'));