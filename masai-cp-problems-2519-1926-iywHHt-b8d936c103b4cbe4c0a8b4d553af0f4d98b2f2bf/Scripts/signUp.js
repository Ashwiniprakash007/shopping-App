//add your js code here

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const newUser = {
      fullname: fullname,
      email: email,
      phone: phone,
      password: password
    };

    localStorage.setItem('userInfo', JSON.stringify(newUser));

    alert('User signed up successfully!');
    window.location.href = "login.html"
  });
