//add your js code here 

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  
    if (userInfo && email === userInfo.email && password === userInfo.password) {
        alert('Login Successfull');
      // Redirect the user to index.html
      window.location.href = 'index.html';
    } else {
      // Invalid email or password, display an error message
      alert('Invalid email or password');
    }
  });
