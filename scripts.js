const typed = new Typed(".auto-type", {
  strings: [
    "Web Designing",
    "Figma To Html Coding",
    "Web Development",
    "JavaScript Development",
  ],
  typeSpeed: 35,
  backSpeed: 35,
  loop: true,
});

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");

  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messageValue = messageField.value;
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    console.log(nameValue, emailValue, messageValue);
    emailjs.send(
      "service_practice",
      "template_xdrzs3g",
      templateParams,
      "WvD1FaE2SF8Nnfv4T"
    );
  }

  if (nameValue && emailValue && messageValue) {
    formData.innerHTML = `<p>Form Submitted by : <br>${nameValue}.</p>`;
    errorText.innerHTML = "";
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
  } else {
    errorText.innerHTML = '<p class="text-danger">Please fill all empty box!</p>';
    formData.innerHTML = "";
  }
});

const loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  
  if(pos>100){
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ff7b00 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;