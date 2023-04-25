$(function(){
    $('#btn').click(function(event){
        event.preventDefault();
       const milhas = parseFloat($("#milhas").val());
      if(isNaN(milhas) ){
        alert("milhas precisa ser um numero")
      }else{
        const metros = milhas * 1609.344;
        $("#metros").val(metros);
      }
      
    
    })
})