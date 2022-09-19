window.addEventListener('load', function () {
    "use strict";
    const form = document.querySelector('.guestForm')
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted")
        let fields = document.querySelectorAll(".guestForm .form-input")
        let valid = true;
        for (let i = 0; i < fields.length; i++) {
            fields[i].classList.remove('no-error');
            if (fields[i].value === '') {
                fields[i].classList.add("has-error");
                fields[i].nextElementSibling.style.display = "block";
                valid = false;
            } else {
                fields[i].classList.remove("has-error");
                fields[i].classList.add("no-error");
                fields[i].nextElementSibling.style.display = "none";
            }
        }

        if (valid) {
            document.querySelector(".formFields").style.display = 'none';
            document.querySelector("#alert").innerText = "Processing your request, please wait ...";
            grecaptcha.ready(function () {

                grecaptcha.execute("6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", {
                    action: "guestForm"
                })
                    .then(function (token) {
                        let recaptchaResponse = document.getElementById("recaptchaResponse");
                        recaptchaResponse.value = token;
                        fetch("app/php/get.php", {
                            method: "POST",
                            body: new FormData(form),
                        })
                            .then((response) => response.text())
                            .then((response) => {
                                console.log((response));
                            });
                    })
            })
        }

    })
})

function onSubmit(token) {
    document.getElementById("recaptcha").submit();
}
