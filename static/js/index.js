"use-strict";

let flash_msg_flag = false;
let message_handler;

const sanitizeHTML = function (str) {
    return str.replace(/[^\w. ]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
};

/*-------------------icon links---------------------*/
$('#linkedin').on("mouseover", () => {
    $('#linkedin').addClass('icon-img-animation');
})
.on("mouseout", () => {
    $('#linkedin').removeClass('icon-img-animation');
})
.on("click", () => {
    if (window.open('https://www.linkedin.com/in/erinna-widjaja/', '_blank')) {
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }        
});

$('#github').on("mouseover", () => {
    $('#github').addClass('icon-img-animation');
})
.on("mouseout", () => {
    $('#github').removeClass('icon-img-animation');
})
.on("click", () => {
    if (window.open('https://github.com/erinnaw', '_blank')) {
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }    
});

$('#email').on("mouseover", () => {
    $('#email').addClass('icon-img-animation');
})
.on("mouseout", () => {
    $('#email').removeClass('icon-img-animation');
})
.on("click", () => {
    if (window.open('', '_blank')) {
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }    
});

/*------------------Email--------------------*/
$('#contact-form').on('submit', (evt) => {
    evt.preventDefault();

    if ($('#name').val() === "" || $('#email').val() === "" || $('#message').val() === "") {
        $('#flash-msg').html("Field(s) cannot be empty");
        $('#flash-msg').addClass("visible");

        if (flash_msg_flag) {
            clearTimeout(message_handler);
            message_handler = window.setTimeout(function(){ $('#flash-msg').removeClass("visible"); }, 3000);
            flash_msg_flag = false;
        }
        else {
            message_handler = window.setTimeout(function(){ $('#flash-msg').removeClass("visible"); }, 3000);
            flash_msg_flag = true;
        }
    }
    else {
        emailjs.sendForm('service_r99va1r', 'template_49ohq9c', '#contact-form', 'user_ev8piRgi7T6AjHvJdvM01')
            .then(function(response) {
                console.log("Message sent.", response.status, response.text);
                $('#flash-msg').html("Message sent.");
                $('#flash-msg').addClass("visible");

                $('#user_name').val("");
                $('#user_email').val("");
                $('#message').val("");

            }, function(error) {
                console.log("Message failed to send.", error);
                $('#flash-msg').html("Message failed to send.");
                $('#flash-msg').addClass("visible");
            });

        if (flash_msg_flag) {
            clearTimeout(message_handler);
            message_handler = window.setTimeout(function(){ $('#flash-msg').removeClass("visible"); }, 3000);
            flash_msg_flag = false;
        }
        else {
            message_handler = window.setTimeout(function(){ $('#flash-msg').removeClass("visible"); }, 3000);
            flash_msg_flag = true;
        }
    }
});