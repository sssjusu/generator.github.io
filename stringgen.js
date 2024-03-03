	let originalWidth = 0;
	
    function generateRandomString() {
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*;:'`<>,.?";
		var randomString = "";
		for (var i = 0; i < document.getElementById("stringLength").value; i++) {
			randomString += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		var inputElement = document.getElementById('generatedString');
		inputElement.value = randomString;
		var currentWidth = inputElement.offsetWidth;
		inputElement.style.width = Math.min(document.getElementById("stringLength").value * 10 + 20, currentWidth) + "px";
		updateInputWidth(inputElement);
		showPopup('Generated string: ' + randomString);
		return randomString;
	}
    function save() {
        var generatedString = document.getElementById('generatedString').value;
        document.getElementById('savedGeneratedString').value = generatedString;
        localStorage.setItem('saved', generatedString);
		showPopup('Saved generated string');
    }

    function loadSavedString() {
        var savedString = localStorage.getItem('saved');
        if (savedString) {
            document.getElementById('generatedString').value = savedString;
            updateInputWidth(document.getElementById('generatedString'));
			showPopup('Loaded saved string: ' + savedString);
        } else {
            console.log('No saved string found.');
			showPopup('No saved string found.');
        }
    }

	function updateInputWidth(inputElement) {
		const lengthInput = document.getElementById("stringLength");
		const length = parseInt(lengthInput.value);
		const originalWidth = document.getElementById('generatedString').offsetWidth;
		inputElement.style.width = `${Math.min(length * 10 + 20, Math.max(length * 10 + 20, originalWidth))}px`;
		inputElement.style.transition = "width 0.3s";
	}
	
	function showPopup(message) {
		document.getElementById('popup-message').innerText = message;
		document.getElementById('popup').style.display = 'block';
		setTimeout(function() {
			document.getElementById('popup').style.display = 'none';
		}, 6000);
	}