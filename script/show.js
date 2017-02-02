/**
 * Created by wahaj on 2/1/2017.
 */
$(document).ready(function (){


    processUser();
    });

function processUser()
{
    var parameters = location.search.substring(1).split("&");
    var info = [];
   for(var param in parameters){
       temp = parameters[param].split("=");
       p = unescape(temp[1]);
       info.push(p);
   }
   console.log($('#username').innerHTML);
    $('#username')[0].innerHTML  = "First Name      :   "+"     "+info[0];
    $('#lName')[0].innerHTML     = "Last Name       :   "+"     "+info[1];
    $('#email')[0].innerHTML     = "Email ID        :   "+"     "+info[2];
    $('#date')[0].innerHTML      = "DOB             :   "+"     "+info[3];
    $('#contact')[0].innerHTML   = "Contact No      :   "+"     "+info[4];





}
