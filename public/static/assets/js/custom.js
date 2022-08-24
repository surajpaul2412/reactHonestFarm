$( document ).ready(function() {
   // YouTube video pause
   $("#video").on('hidden.bs.modal', function (e) {
      $("#video iframe").attr("src", $("#video iframe").attr("src"));
   });

   // Accordian Toggler
   $(function(){
     $(".read-more-less").click(function () {
        $(this).text(function(i, text){
            return text === "Read Less " ? "Read More" : "Read Less ";
        })
     });
   })

   // OnLoad Triggers
   var postUrl = window.location.href;
   var pathArray = postUrl.split("#");

   if (pathArray[1] == "thankyou") {
      $(window).on('load', function() {
         $('#thankyou').modal('show');
         $('[data-toggle="tooltip"]').tooltip();
      });
   } else {
      $(window).on('load', function() {
          $('#video').modal('show');
          $('[data-toggle="tooltip"]').tooltip();
      });
   }
});
