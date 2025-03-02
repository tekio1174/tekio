function register() {
	
    let formData = new FormData();
	
    formData.append('name', document.getElementById('name').value);
    formData.append('username', document.getElementById('username').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('contact', document.getElementById('contact').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('password_confirmation', document.getElementById('password_confirmation').value);
	formData.append('photo', document.getElementById('photo').files[0]);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://tekioapi.kedatonnusantara.id/api/register', true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
        let response = JSON.parse(xhr.responseText);
        if (xhr.status === 201) {
            alert(response.message);
            localStorage.setItem('token', response.token);
			window.location.href = "signin.html";
        } else {
            alert('Pendaftaran gagal! Sila periksa input anda.');
        }
    };
	
    xhr.send(formData);
}
