//setTimeout(,time) 지연시간 설절
//setInterval(,time) 지간 마다 방복
//padStert(num,"value") 앞쪽에 원하는 길이만큼 문자열 넣어줌

const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours}:${Minutes}:${Seconds}`
}

setInterval(getClock,1000);