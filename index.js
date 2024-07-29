const emailMessage = document.getElementById("email-message");

document.getElementById("email").addEventListener("click", () => {
    emailMessage.classList.toggle("hidden");
    navigator.clipboard.writeText("astraikis.jackson@gmail.com");
    
    setTimeout(() => {
        emailMessage.classList.toggle("hidden");
    }, 2000)
});