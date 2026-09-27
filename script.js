const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Please complete all required fields correctly.";
      form.reportValidity();
      return;
    }

    status.textContent = "Thank you! Your message has been validated successfully. Connect a backend or form service to receive submissions.";
    form.reset();
  });
}
