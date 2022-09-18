

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
    const httpMessages = document.getElementById("Origin");
    const httpMessages2 = document.getElementById("X-Cloud-Trace-Context");
    const httpMessages3 = document.getElementById("Accept");
    const httpMessages4 = document.getElementById("traceparent");
    const httpMessages5 = document.getElementById("User-Agent");

    if (httpOut.ok === false) {
        console.log("No UFO just balloon debris!")
        console.log(httpOut["value"])
        return httpMessages.innerHTML = "HTTP error";

    } else {
        console.log(httprReply)

        httpMessages.innerHTML = httprReply["Origin"]
        httpMessages2.innerHTML = httprReply["X-Cloud-Trace-Context"]
        httpMessages3.innerHTML = httprReply["Accept"]
        httpMessages4.innerHTML = httprReply["traceparent"]
        return httpMessages5.innerHTML = httprReply["User-Agent"];
        }

}

async function valUser() {

    const valPending = await fetch("http://validate.jsontest.com/?json=[JSON-code-to-validate]");
    console.log(valPending)
    const dataRep = await valPending.json();
    const userDataDisplay = document.getElementById("TxtChkOutput");
    const userDataDisplay2 = document.getElementById("TxtChkOutput2");
    const userDataDisplay3 = document.getElementById("TxtChkOutput3");
    const userDataDisplay4 = document.getElementById("TxtChkOutput4");
    const userDataDisplay5 = document.getElementById("TxtChkOutput5");
    //const userIDText = document.getElementById("TxtChk");
    //console.log(userIDText)

    if (valPending.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(valPending)
        //element115.innerHTML = EtTech[error_info] + " " + EtTech[error_info] + " " + EtTech["object_or_array] + " " + EtTech["validate"];
        return userDataDisplay.innerHTML = dataRep["error-info"] + " " + dataRep["error"] + " " + dataRep["object_or_array"] + " " + dataRep["validate"];

    } else {
        console.log(dataRep)
               userDataDisplay.innerHTML = dataRep["size"]
               userDataDisplay2.innerHTML = dataRep["parse_time_nanoseconds"]
               userDataDisplay3.innerHTML = dataRep["object_or_array"]
               userDataDisplay4.innerHTML = dataRep["validate"]
        return userDataDisplay5.innerHTML = dataRep["empty"];
    }
}


async function userInfo() {

    const userMd5Text = document.getElementById("MD5txtInput");
    const mD5sent = await fetch(`http://md5.jsontest.com/?text=${userMd5Text.value}`);
    const md5return = await mD5sent.json();
    const md5messages = document.getElementById("Md5Output");
    const md5messages2 = document.getElementById("Md5Output2");


        //MD5 reject error message
    if (mD5sent.ok === false) {
               md5messages.innerHTML = "We could not locate the original resource you requested";
        return md5messages2.innerHTML = "We could not locate the md5 resource you requested";

        //Empty original error message
    } else if (md5return["original"] === "") {
               md5messages.innerHTML = "Field return empty";
        return md5messages2.innerHTML = md5return["md5"];

        //MD5 Data fields
    } else {
               md5messages.innerHTML = md5return["original"];
        return md5messages2.innerHTML = md5return["md5"];
    }
}




