setInterval(() => {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hr = 30*h + m/2;
    let mr = 6*m;
    let sr = 6*s;

    let hour = document.getElementById("hr");
    let minute = document.getElementById("min");
    let second = document.getElementById("sec");

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
}, 1000);