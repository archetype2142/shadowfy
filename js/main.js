$("button").click(function(){
      var myName = $("input:text").val();
      $("#elegantshadow").text(myName);
      console.log(myName);
});


    $(function(){
      $(".element").typed({
        strings: ["Welcome to Shadowfy", "Hi, I'm Ritwick :)", "Type your name below and press the shadowfy button"],
        typeSpeed: 10
      });
    });