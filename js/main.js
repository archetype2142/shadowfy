$("button").click(function(){
      var myName = $("input:text").val();
      $("#elegantshadow").text(myName);
      console.log(myName);
});


    $(function(){
      $(".element").typed({
        strings: ["Welcome to Shadowfy", "Hi, I'm Ritwick :)"],
        typeSpeed: 10
      });
    });