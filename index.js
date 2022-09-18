

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


async function getHTTP() {

    const httpOut = await fetch("http://headers.jsontest.com/");
    const httprReply = await httpOut.json();
    const httpMessages = document.getElementById("httpDisplay");

    if (httpOut.ok === false) {
        console.log("No UFO just balloon debris!")
        console.log(httpOut["value"])
        return httpMessages.innerHTML = "HTTP error";

    } else {

        console.log(httprReply)
        return httpMessages.innerHTML = httprReply["Origin"] + " " + httprReply["X-Cloud-Trace-Context"]
           + " " + httprReply["Accept"] + " " + httprReply["traceparent"]
           + " " + httprReply["User-Agent"];
        }

}

async function valUser() {

    const valPending = await fetch("http://validate.jsontest.com/?json=[JSON-code-to-validate]");
    console.log(valPending)
    const dataRep = await valPending.json();
    const userDataDisplay = document.getElementById("TxtChkoutput");
    //const userIDText = document.getElementById("TxtChk");
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
    const mD5sent = await fetch(`http://md5.jsontest.com/?text=${userMd5Text.value}`);

    const md5return = await mD5sent.json();
    const md5messages = document.getElementById("Md5Output");
    const md5messages2 = document.getElementById("Md5Output2");


    if (mD5sent.ok === false) {
        console.log(md5return.value)
        md5messages.innerHTML = "Original data error";
        return md5messages2.innerHTML = "MD5 data error";
    } else if (md5return["original"] === "") {
        return md5messages.innerHTML = "Field return empty";
    } else if (md5return["md5"] === "") {
        console.log(md5return["md5"])
        return md5messages2.innerHTML = "MD5 Field return empty";
    } else {
        console.log(md5return.value)
        //Clear Error Fields
        md5messages.innerHTML = md5return[""];
        // md5messages2.innerHTML = md5return[""];
        md5messages.innerHTML = md5return["original"];
        return md5messages2.innerHTML = md5return["md5"];
    }
}




