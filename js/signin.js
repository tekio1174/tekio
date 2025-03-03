function login() {

    let formData = new FormData();
    formData.append('loginid', document.getElementById('loginid').value);
    formData.append('password', document.getElementById('password').value);
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://tekioapi.kedatonnusantara.id/api/login', true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response.message);
            localStorage.setItem('token', response.token);
            localStorage.setItem('login', 'login');
			window.location.href = "/tekio";
        } else {
            alert('Login gagal!');
        }
    };
	
    xhr.send(formData);
	
}
