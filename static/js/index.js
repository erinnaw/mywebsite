"use-strict";

let flash_msg_flag = false;
let message_handler;

const sanitizeHTML = function (str) {
    return str.replace(/[^\w. ]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
};

/*---------------linkedin link------------------*/
$('#linkedin-link').on("mouseover", () => {
    $('#linkedin-link').addClass("link-hover");
})
.on("mouseout", () => {
    $('#linkedin-link').removeClass("link-hover");
});

/*---------------github------------------*/
$('#github-link').on("mouseover", () => {
    $('#github-link').addClass("link-hover");
})
.on("mouseout", () => {
    $('#github-link').removeClass("link-hover");
});

/*---------------learn blackjack------------------*/
$('#learnblackjack-link').on("mouseover", () => {
    $('#learnblackjack-link').addClass("link-hover");
})
.on("mouseout", () => {
    $('#learnblackjack-link').removeClass("link-hover");
});

$('#learnblackjack-github').on("mouseover", () => {
    $('#learnblackjack-github').addClass("link-hover");
})
.on("mouseout", () => {
    $('#learnblackjack-github').removeClass("link-hover");
});

/*---------------fp------------------*/
$('#fp-link').on("mouseover", () => {
    $('#fp-link').addClass("link-hover");
})
.on("mouseout", () => {
    $('#fp-link').removeClass("link-hover");
});

$('#fp-github').on("mouseover", () => {
    $('#fp-github').addClass("link-hover");
})
.on("mouseout", () => {
    $('#fp-github').removeClass("link-hover");
});

/*---------------game session maker------------------*/
$('#gamesessionmaker-link').on("mouseover", () => {
    $('#gamesessionmaker-link').addClass("link-hover");
})
.on("mouseout", () => {
    $('#gamesessionmaker-link').removeClass("link-hover");
});

$('#gamesessionmaker-github').on("mouseover", () => {
    $('#gamesessionmaker-github').addClass("link-hover");
})
.on("mouseout", () => {
    $('#gamesessionmaker-github').removeClass("link-hover");
});

/*-------------------arrows-------------------------*/
$('#learnblackjack-arrow').on("mouseover", () => {
    $('#learnblackjack-arrow').addClass('arrow-bounceright');
})
.on("mouseout", () => {
    $('#learnblackjack-arrow').removeClass('arrow-bounceright');
})
.on("click", () => {
    if (window.open('https://learnblackjack.erinnawidjaja.com', '_blank')) {
        console.log("Learn BlackJack");
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }
});

$('#fp-arrow').on("mouseover", () => {
    $('#fp-arrow').addClass('arrow-bounceright');
})
.on("mouseout", () => {
    $('#fp-arrow').removeClass('arrow-bounceright');
})
.on("click", () => {
    if (window.open('https://fp.erinnawidjaja.com', '_blank')) {
        console.log("FingerprintJS demo");
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }
});

$('#gamesessionmaker-arrow').on("mouseover", () => {
    $('#gamesessionmaker-arrow').addClass('arrow-bounceright');
})
.on("mouseout", () => {
    $('#gamesessionmaker-arrow').removeClass('arrow-bounceright');
})
.on("click", () => {
    if (window.open('http://34.220.94.122/', '_blank')) {
        console.log("Game Session Maker");
    }
    else {
        alert("Your popup blocker has prevented the website from loading.");
    }
});

/*-------------------icon links---------------------*/
$('#linkedin').on("mouseover", () => {
    $('#linkedin').addClass('icon-img-animation');
})
.on("mouseout", () => {
    $('#linkedin').removeClass('icon-img-animation');
})
.on("click", () => {
    if (window.open('https://www.linkedin.com/in/erinna-widjaja/', '_blank')) {
        console.log("linkedin");
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
        console.log("Github");
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