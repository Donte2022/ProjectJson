

async function compAddress() {

    const ipOutbound = await fetch("http://ip.jsontest.com/");
    const ipPend = await ipOutbound.json();
    const userIpDisplay = document.getElementById("timeKeeper");

    if (ipOutbound.ok === false) {
        return userIpDisplay.innerHTML = "Ip address error.";

    } else {

        return userIpDisplay.innerHTML = ipPend["ip"];

    }
}

//Refresh IP every second
setInterval (compAddress, 1000);


async function clock() {

    const askfortime = await fetch("http://date.jsontest.com");
    const timeHack = await askfortime.json();
    const clockDisplay = document.getElementById("clockOutput");

    if (askfortime.ok === false) {
        return clockDisplay.innerHTML = "Time data not currently online.";

    } else {

        return clockDisplay.innerHTML = timeHack["time"] + " " + timeHack["date"];

    }

}

//Refresh Time and Date every second
setInterval( clock, 1000);


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
        return httpMessages.innerHTML = "Access to obtain HTTP headers were denied";

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
    //Validation Information Fields
    const userDataDisplay = document.getElementById("TxtChkOutput");
    const userDataDisplay2 = document.getElementById("TxtChkOutput2");
    const userDataDisplay3 = document.getElementById("TxtChkOutput3");
    const userDataDisplay4 = document.getElementById("TxtChkOutput4");
    const userDataDisplay5 = document.getElementById("TxtChkOutput5");
    //Error Messages
    const userDataError = document.getElementById("error_info");
    const userDataError2 = document.getElementById("error2_info");
    const userDataError3 = document.getElementById("error3_info");
    const userDataError4 = document.getElementById("error4_info");



    if (valPending.ok === false) {
                console.log(valPending)
                //Error Messages Output locations
               userDataError.innerHTML = dataRep["error_info"]
               userDataError2.innerHTML = dataRep["error_info"]
               userDataError3.innerHTML = dataRep["object_or_array"]
        return userDataError4.innerHTML = dataRep["validate"];

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




