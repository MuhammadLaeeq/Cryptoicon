 $(window).scroll(function(){
          $('nav').toggleClass('scrolled',$(this).scrollTop() > 50);
        });

        $(document).ready(function() {
          $("#formButton").click(function() {
            $("#form1").toggle('show');
          });
        })


  
        $(function () {
          $("tr.my-tr").after('<tr class="tr-spacer"/>');
     });



     