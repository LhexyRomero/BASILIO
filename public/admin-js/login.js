$(function(){
    "use strict";
});

$(".login-btn").click((e)=> {
    e.preventDefault();

    let data = $(".log-in-form").serializeArray();
    let check = true; 
    let data_insert = {};

    for(let i=0; i<data.length; i++) {
        if(validate(data[i]) == false){
            validateResults(data[i]);
            check = false;
            return;
        }
        data_insert[data[i].name] = data[i].value;
    }

    if(check) {
        $.post('/admin',data_insert,(data)=>{
            if(data.success == false){
                alert("error");
                return;
            }
            else{/* 
                window.location = "admin/dashboard";  */
            }
        });
    }

});

function validate (data) {
    if(data.value == ""){
        return false;
    }
}

function validateResults () {/* 
    alertify.success("You've clicked OK "); */
    alert("Fill out the fields!");
}