$(document).ready(function () {

    console.log("abc");
    $('#fName').on('keyup', function () {
        console.log($('#fName'));
        validateName($('#fName')[0].value, 5, 25)




    });

});

function validateName(value, value2,value3) {

    if(value !="" )
    {
        if (/^[A-Za-z]+$/.test(value) && value>=value2 && value<=value3 ) {
            $('#user').css("color", "blue");
            return (true);
        }
        else {
            $('#user').css("color", "red");
            //document.getElementsByTagName('input').className += " error";
            return (false);
        }

    }
    else {
        console.log("Name");
        document.getElementById("fName").className += " error";
        document.getElementById("lName").className += " error";

        alert("please provide your name")
        if(value==""){
            document.registration.fName.focus() ;
        }
        else{
            document.registration.lName.focus() ;

        }

    }

    return (true);

}