document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const successModal = document.getElementById("successModal");
    const errorModal = document.getElementById("errorModal");
    const closeSuccessModal = successModal.getElementsByClassName("close")[0];
    const closeErrorModal = errorModal.getElementsByClassName("close")[0];

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        if (email === "admin" && password === "1234") {
           
            successModal.style.display = "flex";

            
            closeSuccessModal.onclick = function() {
                successModal.style.display = "none";
                window.location.href = "cadastro_medicos.html";
            }

            window.onclick = function(event) {
                if (event.target == successModal) {
                    successModal.style.display = "none";
                    window.location.href = "index.html";
                }
            }
        } else {
            // Show error modal
            errorModal.style.display = "flex";

            // Close error modal
            closeErrorModal.onclick = function() {
                errorModal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == errorModal) {
                    errorModal.style.display = "none";
                }
            }
        }
    });

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        window.location.href = "404.html";
    });

    // Lógica para alternar entre os formulários
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const container = document.getElementById("container");

    signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });
});
