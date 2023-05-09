
const deg = 6;
//Boston
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');
// London
const hrL = document.querySelector('#hrL');
const scL = document.querySelector('#scL');
// Moscow
const hrM = document.querySelector('#hrM');
const scM = document.querySelector('#scM');
// Date
const date = document.querySelector('.date');
const dateL = document.querySelector('.dateL');
const dateM = document.querySelector('.dateM');


// function getDate() {
//     let date = new Date();
//     let options = {
//         weekday: 'short',
//         month: 'long',
//         day: 'numeric'
//     };

//     return date.toLocaleDateString('en-US', { timeZone: 'America/New_York' }, options);

// }

// Local date and time (Boston)


function getTimeBoston(){
    let day = new Date();
    let options = { timeZone: 'America/New_York' };
    let timeStr = day.toLocaleString('en-US', options);
    let weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'America/New_York' }).format(day);
    
    return `<center>${weekday}<br><br> ${timeStr}`;
} 

setInterval(() => {
    let bostonTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
        bostonTime = new Date(bostonTime);

    let hh = bostonTime.getHours() * 30;
    let mm = bostonTime.getMinutes() * deg;
    let ss = bostonTime.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

    // dateL.innerHTML = getDateLondon();
    document.querySelector('.bostonDigital').innerHTML = getTimeBoston();
}, 1000);



// function getTime() {
//     let day = new Date();
//     let hh = day.getHours();
//     let mm = day.getMinutes();
//     let ss = day.getSeconds();
//     return `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;
// }


// London date and time 

function getTimeLondon(){
    let day = new Date();
    let options = { timeZone: 'Europe/London' };
    let timeStr = day.toLocaleString('en-US', options);
    let weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'Europe/London' }).format(day);
    
    return `<center>${weekday}<br><br> ${timeStr}`;
} 

setInterval(() => {
    let londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
        londonTime = new Date(londonTime);

    let hhL = londonTime.getHours() * 30;
    let mmL = londonTime.getMinutes() * deg;
    let ssL = londonTime.getSeconds() * deg;

    hrL.style.transform = `rotateZ(${(hhL) + (mmL / 12)}deg)`;
    mnL.style.transform = `rotateZ(${(mmL)}deg)`;
    scL.style.transform = `rotateZ(${(ssL)}deg)`;

    // dateL.innerHTML = getDateLondon();
    document.querySelector('.londonDigital').innerHTML = getTimeLondon();
}, 1000);




// function getDateLondon() {
//     let dateL = new Date();
//     let options = {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric'
//     };

//     return dateL.toLocaleDateString("en-US", { timeZone: "Europe/London" }, options);
// }

// Get London time in digital format

// function getTimeLondon() {
//     let londonTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
//     londonTime = new Date(londonTime);

//     let hhL = londonTime.getHours();
//     let mmL = londonTime.getMinutes();
//     let ssL = londonTime.getSeconds();

//     return `${hhL < 10 ? '0' + hhL : hhL}:${mmL < 10 ? '0' + mmL : mmL}:${ssL < 10 ? '0' + ssL : ssL}`;
// }


// Moscow date and time

function getTimeMoscow(){
    let day = new Date();
    let options = { timeZone: 'Europe/Moscow', hour12: false };
    let timeStr = day.toLocaleString('en-US', options);
    
    return timeStr;
} 
setInterval(() => {
    let moscowTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});

    let hhM = new Date(moscowTime).getHours() * 30;
    let mmM = new Date(moscowTime).getMinutes() * deg;
    let ssM = new Date(moscowTime).getSeconds() * deg;

    hrM.style.transform = `rotateZ(${(hhM) + (mmM / 12)}deg)`;
    mnM.style.transform = `rotateZ(${(mmM)}deg)`;
    scM.style.transform = `rotateZ(${(ssM)}deg)`;

    let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let dayOfWeek = new Date(moscowTime).getDay();

    document.querySelector('.moscowDigital').innerHTML = `<center>${daysOfWeek[dayOfWeek]}<br><br>${getTimeMoscow()}`;
}, 1000);
    // dateM.innerHTML = getDateMoscow();
//     document.querySelector('.moscowDigital').innerHTML = getTimeMoscow();
// }, 1000); 

// function getDateMoscow() {
//     let dateM = new Date();
//     let options = {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric'
//     };
//     return dateM.toLocaleDateString("ru-RU", {timeZone: "Europe/Moscow"}, options);
// }


// function getDateMoscow() {
//     let dateM = new Date();
//     let options = {
//         weekday: 'short',
//         month: 'short',
//         day: 'numeric'
//     };

//     return dateM.toLocaleDateString("en-US", {timeZone: "Europe/Moscow"}, options);
// }

// Get Moscow time in digital format


// function getTimeMoscow() {
//     let moscowTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" });
//         moscowTime = new Date(moscowTime);

//     let dayM = new Date();
//     let hhM = moscowTime.getHours();
//     let mmM = moscowTime.getMinutes();
//     let ssM = moscowTime.getSeconds();

//     return `${hhM < 10 ? '0' + hhM : hhM}:${mmM < 10 ? '0' + mmM : mmM}:${ssM < 10 ? '0' + ssM : ssM}`;
// }

