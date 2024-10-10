document.addEventListener('DOMContentLoaded', function () {
    const form1 = document.getElementById('form-1');
    const form2 = document.getElementById('form-2');
    const form3 = document.getElementById('form-3');
    const next1 = document.getElementById('next-1');
    const next2 = document.getElementById('next-2');
    const back1 = document.getElementById('back-1');
    const back2 = document.getElementById('back-2');
    const submit = document.getElementById('submit');
    const progress = document.getElementById('progress');

    form2.style.display = 'none';
    form3.style.display = 'none';

    next1.addEventListener('click', () => {
        form1.style.display = 'none';
        form2.style.display = 'block';
        progress.style.width = '66%';
    });

    next2.addEventListener('click', () => {
        form2.style.display = 'none';
        form3.style.display = 'block';
        progress.style.width = '100%';
    });

    back1.addEventListener('click', () => {
        form2.style.display = 'none';
        form1.style.display = 'block';
        progress.style.width = '33%';
    });

    back2.addEventListener('click', () => {
        form3.style.display = 'none';
        form2.style.display = 'block';
        progress.style.width = '66%';
    });

    submit.addEventListener('click', () => {
        alert('Form submitted successfully!');
    });
});
