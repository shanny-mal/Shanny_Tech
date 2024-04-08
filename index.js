//sendMail function
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_gmcahoi";
  const templateID = "template_oqxnff8";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
//form validation function



function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var isValid = true;

  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText = "Please enter a valid name";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (message.trim() === "") {
    document.getElementById("messageError").innerText = "Please enter a message";
    isValid = false;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  return isValid;
}

