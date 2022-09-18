

async function compAddress() {

    const ipOutbound = await fetch("http://ip.jsontest.com/");
    const ipPend = await ipOutbound.json();
    const userIpDisplay = document.getElementById("timeKeeper");

    if (ipOutbound.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(ipOutbound["value"])
        return userIpDisplay.innerHTML = "Ip address error.";

    } else {
        console.log(ipPend.ip)
        return userIpDisplay.innerHTML = ipPend["ip"];
    }

}


async function clock() {

    const askfortime = await fetch("http://date.jsontest.com");
    const timeHack = await askfortime.json();
    const clockDisplay = document.getElementById("clockOutput");

    if (askfortime.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(askfortime["value"])
        return clockDisplay.innerHTML = "Time data not currently online.";

    } else {

        return clockDisplay.innerHTML = timeHack["time"] + " " + timeHack["date"];
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

        return Uap.innerHTML = flyingSaucer.value



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
async function valUser() {

    const valPending = await fetch("http://validate.jsontest.com/?json=[JSON-code-to-validate]");
    console.log(valPending)
    const dataRep = await valPending.json();
    const userDataDisplay = document.getElementById("TxtChkoutput");
    const userIDText = document.getElementById("TxtChk");
    //console.log(userIDText)

    if (valPending.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(valPending)
        //element115.innerHTML = EtTech[error_info] + " " + EtTech[error_info] + " " + EtTech["object_or_array] + " " + EtTech["validate"];
        return userDataDisplay.innerHTML = dataRep["error-info"] + " " + dataRep["error"] + " " + dataRep["object_or_array"] + " " + dataRep["validate"];

    } else {
        console.log(dataRep)
        //console.log(userDataDisplay)
        return userDataDisplay.innerHTML = dataRep["size"] + " " + dataRep["parse_time_nanoseconds"] + " " + dataRep["object_or_array"] + " " + dataRep["validate"] + " " + dataRep["empty"];
    }

}


async function userInfo() {

    const userMd5Text = document.getElementById("MD5txt");
    console.log(userMd5Text)
    const mD5sent = await fetch("http://md5.jsontest.com/?text=[text to MD5]");
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

