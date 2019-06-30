// Some code is commented out because I'm still working on a functional 
// user profile system to work from local storage. This code will be
// available next week with the WEEK 3 FORMS UPDATE

var returnLookUp = function (e) {
    e.preventDefault();
    var getInfo = document.getElementById("thisSearch");
    // Starting code for user profile
    //var searchedValue = data[getInfo.value];
    //localStorage.setItem('bandName', getInfo.value);
    //console.log(getInfo.value);

    /************ The Rolling Stones Bio Page ***************/
    if (getInfo.value === "The Rolling Stones" || getInfo.value === "the rolling stones") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../web401site/bandbiohtml/therollingstones.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ Led Zeppelin Bio Page ***************/
    else if (getInfo.value === "Led Zeppelin" || getInfo.value === "led zeppelin") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../web401site/bandbiohtml/ledzeppelin.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ Lynyrd Skynyrd Bio Page ***************/
    else if (getInfo.value === "Lynyrd Skynyrd" || getInfo.value === "lynyrd skynyrd") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../web401site/bandbiohtml/lynyrdskynyrd.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ The Beatles Bio Page ***************/
    else if (getInfo.value === "The Beatles" || getInfo.value === "the beatles") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../web401site/bandbiohtml/thebeatles.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ Jimmy Page Bio Page ***************/
    else if (getInfo.value === "Jimmy Page" || getInfo.value === "jimmy page") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../WEB401Site/artistbiohtml/jimmypage.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ Robert Plant Bio Page ***************/
    else if (getInfo.value === "Robert Plant" || getInfo.value === "robert plant") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../WEB401Site/artistbiohtml/robertplant.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ John Bonham Bio Page ***************/
    else if (getInfo.value === "John Bonham" || getInfo.value === "john bonham") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../WEB401Site/artistbiohtml/johnbonham.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ John Paul Jones Bio Page ***************/
    else if (getInfo.value === "John Paul Jones" || getInfo.value === "john paul jones") {
        //alert(localStorage.getItem('bandName'));
        location.href = '../WEB401Site/artistbiohtml/johnpauljones.html';
        //console.log(localStorage.getItem('bandName'));
    }
    /************ User Typed Incorrect Info ***************/
    else {
        alert(getInfo.value + "  can't be found please try a new band, artist or genre until I give the user the ability to add a new item.")
    }
}

var returnUserProfile = function (e) {
    e.preventDefault();
    var setUserName = document.loginForm.userName.value;
    localStorage.setItem('getuser', setUserName);
    location.href = '../web401site/userprofileform.html';
    
}

var getUserLogin = function (e) {
    e.preventDefault();
    var getuser = localStorage.getItem('getuser');
    var firstname = localStorage.getItem('firstname');
    var lastname = localStorage.getItem('lastname');
    var favmusicgenre = localStorage.getItem('favmusicgenre');
    var favband = localStorage.getItem('favband');
    var favsinger = localStorage.getItem('favsinger');
    

    var obj = {
        "USERNAME":
        getuser,
        "FIRST NAME":
        firstname,
        "LAST NAME":
        lastname,
        "FAV MUSIC GENRE":
        favmusicgenre,
        "FAV BAND":
        favband,
        "FAV SINGER":
        favsinger,
    };
    var data = "text/txt;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.txt';
    a.innerHTML = 'click to download .txt file of user profile';

    document.getElementById('container').appendChild(a);
    /*var obj = {
        a: "username",
        b: user,
        c: "password",
        d: psw,
    };
    var data = "text/txt;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.txt';
    a.innerHTML = 'download .txt file of json';

    //document.getElementById('container').appendChild(a);
    
    var txt;
    var r = confirm("Would you like to download your user profile information?");
    if (r == true) {
        //txt = "You pressed OK!";
        document.getElementById('container').appendChild(a);
    } else {
        //txt = "You pressed Cancel!";
        alert("Returning to home page");
        location.href = "../WEB401Site/home.html";
    }*/
    // CODE FOR DOWNLOADING FILE
    /*var txt;
    var r = confirm("Would you like to download your user profile information?");
    if (r == true) {
        //txt = "You pressed OK!";
        document.getElementById('container').appendChild(a);
    } else {
        //txt = "You pressed Cancel!";
        alert("Returning to home page");
        location.href = "../WEB401Site/home.html";
    }*/
    //document.getElementById("demo").innerHTML = txt;

}

var profileform = function (e) {
    e.preventDefault();
    var firstname = document.form1.fname.value;
    var lastname = document.form1.lname.value;
    var favMusicGenre = document.form1.favmusicgenre.value;
    var favBand = document.form1.favband.value;
    var favSinger = document.form1.favsinger.value;
    
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('favmusicgenre', favMusicGenre);
    localStorage.setItem('favband', favBand);
    localStorage.setItem('favsinger', favSinger);
    
    location.href = '../web401site/userprofile.html';
}

var vPlayer = (function () {

	'use strict';

	// Set namespace.
	var NS = {};

	// Control buttons.
	NS.playButton = document.getElementById('play-button');
	NS.stopButton = document.getElementById('stop-button');
	NS.pauseButton = document.getElementById('pause-button');
	NS.loopButton = document.getElementById('loop-button');

	// State variables.
	NS.looping = false;
	NS.paused = false;

	// Check for audio support.
	if ('Audio' in window) {

		// Create new audio object.
		NS.audio = new Audio();

		// Check for ogg support.
		if (!!(NS.audio.canPlayType && NS.audio.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''))) {
			NS.audio.src = 'media/rimshot.ogg';

		// Check for mp3 support.
		} else if (!!(NS.audio.canPlayType && NS.audio.canPlayType('audio/mpeg;').replace(/no/, ''))) {
			NS.audio.src = 'media/rimshot.mp3';

		// Check for mp4 support.
		} else if (!!(NS.audio.canPlayType && NS.audio.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''))) {
			NS.audio.src = 'media/rimshot.m4a';

		// Set default source to mp3.
		} else {
			NS.audio.src = 'media/rimshot.mp3';
		}

		// Reset audio to beginning.
		NS.resetAudio = function () {
			NS.audio.pause();
			NS.audio.currentTime = 0;
		};

		// Play button click listener.
		NS.playButton.onclick = function (e) {
			e.preventDefault();

			// Reset audio and play.
			NS.resetAudio();
			NS.audio.play();
		};

		// Stop button click listener.
		NS.stopButton.onclick = function (e) {
			e.preventDefault();

			// Reset audio.
			NS.resetAudio();
		};

		// Pause button click listener.
		NS.pauseButton.onclick = function (e) {
			e.preventDefault();

			// Toggle off paused state and play audio.
			if (NS.paused) {
				NS.audio.play();
				NS.paused = false;
				this.innerText = 'Pause';

			// Toggle on paused state and pause audio.
			} else {
				NS.audio.pause();
				NS.paused = true;
				this.innerText = 'Resume';
			}
		};

		// Loop button click listener.
		NS.loopButton.onclick = function (e) {
			e.preventDefault();

			// Toggle off looping stated and reset audio.
			if (NS.looping) {
				NS.resetAudio();
				NS.looping = false;
				this.innerText = 'Loop';

			// Toggle on looping state and play audio.
			} else {
				NS.resetAudio();
				NS.audio.play();
				NS.looping = true;
				this.innerText = 'Stop Looping';
			}

		};

		// Audio ended event listener.
		NS.audio.addEventListener('ended', function() {
			// Reset after audio has ended.
			NS.resetAudio();
			NS.pauseButton.innerText = 'Pause';

			// If looping, replay audio after it has ended.
			if (NS.looping) {
				this.play();
			}
		}, false);


	// No audio support.
	} else {
		alert('Your browser does not support the Java Applet.');
	}

})();