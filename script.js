document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successBox = document.getElementById('basari-mesaji');
    const emailInput = document.getElementById('email');
    const mesajInput = document.getElementById('mesaj');
    const emailError = document.getElementById('email-error');
    const mesajError = document.getElementById('mesaj-error');

    const clear = (input, error) => {
        error.classList.add('hidden');
        input.style.borderColor = '#eee';
        input.classList.remove('error-shake');
    };

    emailInput.addEventListener('input', () => clear(emailInput, emailError));
    mesajInput.addEventListener('input', () => clear(mesajInput, mesajError));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('error-shake');
            isValid = false;
        }

        if (mesajInput.value.trim() === "") {
            mesajError.classList.remove('hidden');
            mesajInput.classList.add('error-shake');
            isValid = false;
        }

        if (isValid) {
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                successBox.classList.remove('hidden');
                successBox.classList.add('fade-in');
            }, 400);
        }
    });
});