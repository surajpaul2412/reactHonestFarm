// Youtube video pause
$("#video").on('hidden.bs.modal', function (e) {
   $("#video iframe").attr("src", $("#video iframe").attr("src"));
});

// accordian toggle button
$(function(){
  $(".read-more-less").click(function () {
     $(this).text(function(i, text){
         return text === "Read Less " ? "Read More" : "Read Less ";
     })
  });
})

// Thankyou modal trigger
var postUrl = window.location.href;
var pathArray = postUrl.split("#");

if (pathArray[1] == "thankyou") {
   $(window).on('load', function() {
      $('#thankyou').modal('show');
   });
} else {
   $(window).on('load', function() {
       $('#video').modal('show');
   });
}

// Tooltip 
$(function () {
 $('[data-toggle="tooltip"]').tooltip()
})