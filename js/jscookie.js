function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var numberOfTries = getCookie("tries");
    if (numberOfTries != "") {
        numberOfTries++;
        setCookie("tries", numberOfTries, 365);
        document.getElementById('tries').innerHTML = 'You made <strong>'+ numberOfTries + '</strong> attempts';
        document.getElementById("tries").style.display = "block";
        console.log("number of tries " + numberOfTries);
    } else {
        numberOfTries = 1;
        if (numberOfTries != "" && numberOfTries != null) {
            setCookie("tries", numberOfTries, 365);
            document.getElementById('tries').innerHTML = 'You made <strong>'+ numberOfTries + '</strong> attempt';
            document.getElementById("tries").style.display = "block";
        }
    }
}
