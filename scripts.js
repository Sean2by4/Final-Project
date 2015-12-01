/**
 * Created by Sean on 11/29/2015.
 */

/**
 * Code from http://www.formget.com/jquery-registration-form/. PHP also borrowed from there!
 */

$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        if (name == '' || email == '' || password == '' || cpassword == '') {
            alert("Please fill all fields...!!!!!!");
        } else if ((password.length) < 8) {
            alert("Password should atleast 8 character in length...!!!!!!");
        } else if (!(password).match(cpassword)) {
            alert("Your passwords don't match. Try again?");
        } else {
            $.post("register.php", {
                name1: name,
                email1: email,
                password1: password
            }, function(data) {
                if (data == 'You have Successfully Registered.....') {
                    $("form")[0].reset();
                }
                alert(data);
            });
        }
    });
});

/**
 * Code from http://www.formget.com/jquery-login-form/. PHP also borrowed from there!
 */
$(document).ready(function(){
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
// Checking for blank fields.
        if( email =='' || password ==''){
            $('input[type="text"],input[type="password"]').css("border","2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        }else {
            $.post("login.php",{ email1: email, password1:password},
                function(data) {
                    if(data=='Invalid Email.......') {
                        $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                    }else if(data=='Email or Password is wrong...!!!!'){
                        $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        alert(data);
                    } else if(data=='Successfully Logged in...'){
                        $("form")[0].reset();
                        $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                    } else{
                        alert(data);
                    }
                });
        }
    });
});

function calculateTotal() {
    return common_goods() + common_food() + common_housing() + common_carbon();
}


$(document).ready(function(){
    $("#submit").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var carbon = calculateTotal();
// Checking for blank fields.
        if( email =='' || password ==''){
            $('input[type="text"],input[type="password"]').css("border","2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        }else {
            $.post("submit.php",{ email1: email, password1:password, carbon1: carbon},
                function(data) {
                    if(data=='Invalid Email.......') {
                        $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                    }else if(data=='Email or Password is wrong...!!!!'){
                        $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                        alert(data);
                    } else if(data=='Successfully Logged in...'){
                        $("form")[0].reset();
                        $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                        alert(data);
                    } else{
                        alert(data);
                    }
                });
        }
    });
});

