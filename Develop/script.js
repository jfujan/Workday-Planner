
$(function () {
 $(".saveBtn").click(function(){
  var text = $(this).siblings(".description").val()
  var rowTime = $(this).parent().attr("id")
  localStorage.setItem(rowTime, text)
 });

 for(let i = 9; i<18; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
 };
  

 $(".time-block").each(function(){
  var rowHour = parseInt($(this).attr("id").split("-")[1])
  var currentHour = dayjs().hour()
  console.log(typeof(rowHour), currentHour)

  if(rowHour<currentHour){
    $(this).addClass("past")
  }else if(rowHour === currentHour){
    $(this).addClass("present")
  }else{
    $(this).addClass("future")
  }
 });
 

  var today = dayjs();
  $('#currentDay').text(today);
});
