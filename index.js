

async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    const Ufo = document.getElementById("IpMan");

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal["value"])
        return Ufo.innerHTML = "Ip address error.";

    } else {
        console.log(WoWsignal.ip)
        return Ufo.innerHTML = WoWsignal["ip"];
    }

}


async function timeTravel() {

    const foresight = await fetch("http://date.jsontest.com");
    const SpaceWarp = await foresight.json();
    const Interdimensional = document.getElementById("hardtime");

    if (foresight.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(foresight["value"])
        return Interdimensional.innerHTML = "Time data not currently online.";

    } else {

        return Interdimensional.innerHTML = SpaceWarp["time"] + " " + SpaceWarp["date"];
    }

}

/*
async function roswell() {

    const area51 = await fetch("http://headers.jsontest.com/");
    const flyingSaucer = await area51.json();
    const Uap = document.getElementById("HpHitters");

    if (area51.ok === false) {
        console.log("No UFO just balloon debris!")
        console.log(area51["value"])
        return Uap.innerHTML = "HTTP error";

    } else {

        console.log(flyingSaucer)
         const httpUnwrap =
            flyingSaucer["Origin"] + " " + flyingSaucer["X-Cloud-Trace-Context"]
            + " " + flyingSaucer["Accept"] + " " + flyingSaucer["traceparent"]
            + " " + flyingSaucer["User-Agent"];


        //const httpList = roswell();
        for (const n of roswell) {
            const httpwrap = httpUnwrap.innerHTML += <div class="title"></div>;
            return httpwrap;
        }

}


 */

async function reverseEngineer() {

    const userIDText = document.getElementById("TxtChk");
    const bobLazar = await fetch("http://validate.jsontest.com/?json=[JSON-code-to-validate1${userIDText}`]");
    const EtTech = await bobLazar.json();
    const element115 = document.getElementById("TxtChkoutput");

    if (bobLazar.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(bobLazar)
        //element115.innerHTML = EtTech[error_info] + " " + EtTech[error_info] + " " + EtTech["object_or_array] + " " + EtTech["validate"];
        return element115.innerHTML = "Validation error";

    } else {
        console.log(EtTech)
        return element115.innerHTML = EtTech["size"] + " " + EtTech["parse_time_nanoseconds"] + " " + EtTech["object_or_array"] + " " + EtTech["validate"] + " " + EtTech["empty"];
    }

}


async function mD5data() {

    const userMd5Text = document.getElementById("MD5txt");
    const mD5sent = await fetch("http://md5.jsontest.com/?text=[text to MD5]`${userMd5Text.value}`");
    const md5return = await mD5sent.json();
    const md5messages = document.getElementById("md5Output");

    if (mD5sent.ok === false) {
        console.log("MD5 is offline!")
        console.log(md5return)
        return md5messages.innerHTML = "MD5 data error";

    } else {
        console.log(md5return)
        return md5messages.innerHTML = md5return["original"] + " " + md5return["md5"];
    }

}

