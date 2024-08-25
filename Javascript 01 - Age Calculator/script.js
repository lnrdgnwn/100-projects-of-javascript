const tSubmit = document.getElementById('tSubmit');

tSubmit.addEventListener('click', function () {
    const d1 = parseInt(document.getElementById('date').value);
    const m1 = parseInt(document.getElementById('month').value);
    const y1 = parseInt(document.getElementById('year').value);

    const date = new Date();
    const d2 = date.getDate();
    const m2 = 1 + date.getMonth();
    const y2 = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    if (d < 0) {
        m -= 1;
        d += month[m2 - 1];
    }

    if (m < 0) {
        y -= 1;
        m += 12;
    }

    document.getElementById('age').innerHTML = " Your Age is " + y + " Years " + m + " Months " + d + " Days";
});