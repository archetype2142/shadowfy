$("button").click(function(){
      var myName = $("input:text").val();
      $("#elegantshadow").text(myName);
      console.log(myName);
});


    $(function(){
      $(".element").typed({
        strings: ["Welcome to Name-Shadower", "Hi, I'm Ritwick :)"],
        typeSpeed: 10
      });
    });