
/**
 * Created by wahaj on 1/28/2017.
 */



$(document).ready(function() {


    $.validator.addMethod("fName",function(value,element){
        return this.optional(element) || /[A-Za-z]+$/i.test(value);
    },"Enter Valid name that contain Alphabates");


    $.validator.addMethod("com",function(value,element){
        return this.optional(element) || /^\(?([0-9]{4})\)?[- ]?([0-9]{7})$/i.test(value);
    },"Enter Valid Contact Number");

    $.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
    }, "Email Address is invalid: Please enter a valid email address.");

    $.validator.addMethod("pas",function(value,element){
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    },"Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number.");

    $.validator.addMethod("submit",function(value,element){
        return this.optional(element) || /[^ ]/i.test(value);
    },"You did not click the submit button.");


    $("#reg-form").validate({
        rules: {
            fName: "required fName",
            lName: "required fName",
            contact:"required com",
            email: "required email",
            password: "required pas",
            c_password: {
                equalTo: "#password"
            },
            date:"required",
            genders:"required",
            button: "required submit"

        },
        submitHandler: function() {
            console.log("abc");
            console.log($('#fName')[0].value);
          //  window.location.href="show.html?username="+ $('#fName')[0].value +"show.html?lname="+$('#fName')[0].value;
            window.location.href="show.html?username=" + encodeURIComponent($("#fName").val()) + "&lName=" + encodeURIComponent($("#lName").val()) + "&email=" + encodeURIComponent($("#email").val())
                + "&date=" + encodeURIComponent($("#date").val()) + "&contact=" + encodeURIComponent($("#contact").val());

            console.log("abc");

        }
    });
});


/*function validate()
{


    var pas         =       document.registration.password; // tmhare input box haina ? tou value sahi hai kara to h :/ lekin direct yahan karna na :P -_- wahan 20000 dafa kara :P ayaha aik bar hoga :P han sae h smjh gae :p ab mjhy ye to krdo jo krny ae  :p oki :P
    var cPas        =       document.registration.c_password;
    var firstName   =       document.registration.fName;
    var lastName    =       document.registration.lName;
    var uEmail      =       document.registration.emailID;
    var gender     =
        document.registration.genders;
    var number      =       document.registration.contact;

    console.log(pas);


    if(validateName(firstName.value,lastName.value))
    {
        if(ValidatePassword(pas.value,cPas.value))
        {


                if( ValidateEmail(uEmail.value))
                {
                   if(ValidateContact(number.value))
                   {

                   }
                }

        }
    }





}

/*function abc()

{
    document.getElementsByTagName('input').onkeypress = function () {
        console.log("abc");
        if (document.getElementsByTagName('input').value == "") {

            document.getElementsByTagName('input').className += " error";
        }

    };
}



function validateName(value, value2) {

    if(value !="" && value2!="")
    {
        if (/^[A-Za-z]+$/.test(value) && /^[A-Za-z]+$/.test(value2)) {
        return (true);
        }
        else {
            document.getElementsByTagName('input').className += " error";
        return (fasle);
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

function ValidatePassword(pas,cpas)
{
    if(cpas!=pas)
    {
        //console.log("Name");
         alert("Passwords doesnt match")
        return (false);
    }
    return(true);
}

function gender() {
    if(document.registration.getElementById('genderF').checked){
        // alert("Female")
        console.log("Name");
        return (true);

    }else if(document.registration.getElementById('genderM').checked){
        // alert("Male")
        console.log("Name");
return(true);
    }
    else
    {
        // alert(Enter)
        console.log("Name");
        return(false)
    }
}

function ValidateEmail(email)
    {

            if(email!="")
                {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                {
                    return (true)
                }
            else
                // alert("You have entered an invalid email address!")
                        console.log("Name");
                return (false);

            }
        else {
                // alert("Enter an email address!")
                document.getElementById("email").className += " error";

                console.log("Name");
                return (false);
            }
    }

    function email(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            document.getElementById("email").className += "nr";

            return (true)
        }
        else
        // alert("You have entered an invalid email address!")
            console.log("Name");
        document.getElementById("email").className += " error";

        return (false);

    }



function ValidateContact(value) {
if(value!=""){
        if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)){
        return (true);
        }
        else{
            console.log("Name");
            // alert("Enter valid contact number")
            return (false);
        }
}
}
*/