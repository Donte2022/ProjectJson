
//Request IP address
async function compAddress() {

    const ipOutbound = await fetch("http://ip.jsontest.com/");
    const ipPend = await ipOutbound.json();
    const userIpDisplay = document.getElementById("timeKeeper");
    //Chk data property for true or false
    if (ipOutbound.ok === false) {
        return userIpDisplay.innerHTML = "Ip address error.";

    } else {

        return userIpDisplay.innerHTML = ipPend["ip"];

    }
}

//Refresh IP every second
setInterval (compAddress, 1000);

async function timeTravel() {

    const ReqForTime = await fetch("http://date.jsontest.com");
    const TimePend = await ReqForTime.json();
    const TimeData = document.getElementById("gtmOnline");
    const timeError = document.getElementById("gtmError");


    if (ReqForTime.ok === false) {
        return timeError.innerHTML = "Error, time is offline.";


    } else {
        return TimeData.innerHTML = TimePend.time + " " + TimePend.date;
    }
}
//Refresh GTM time every second
setInterval(timeTravel, 1000);


//Function for Current Time
function displayDate() {
        document.getElementById("localTimeOutput").innerHTML = Date();
}

//Function to Refresh Local Time and Date every second
setInterval( displayDate, 1000);


//Function to get user HTTP info
async function getHTTP() {

    const httpOut = await fetch("http://headers.jsontest.com/");
    const httprReply = await httpOut.json();
    const httpMessages10 = document.getElementById("httpReply");
    //const httpMessagesError = document.getElementById("httpErrorDisplay")

    if (httpOut.ok === false) {
        httpMessages.innerHTML = "";
        return httpMessages.innerHTML = "Access to obtain HTTP headers were denied";

    } else {

        {
            let httpData = Object.entries(httprReply);
            //Clear data field for loop
            httpMessages10.innerHTML = "";
            return httpMessages10.innerHTML += httpData;
        }

    }

}

//Refresh User HTTP data every second
setInterval(getHTTP, 1000)


//Function for user input validation
async function valUser() {

    const valPending = await fetch(`http://validate.jsontest.com/?json=${TxtChk.value}`);
    const dataRep = await valPending.json();
    //Validation Information Fields
    const userDataDisplay = document.getElementById("NewDataRep");
    //Error Messages
    const userDataError = document.getElementById("error_info");


    if (dataRep["validate"] === false) {

                //Error Messages Output locations
                let errorMessage = Object.entries(dataRep);
                //Clear Successful Validation Messages
                userDataDisplay.innerHTML = "";
                return userDataError.innerHTML = errorMessage;

    } else {

                //Validation Data Reply
                let NewDataRep = Object.entries(dataRep);
                //Clear Error Messages
                userDataError.innerHTML = "";
                return userDataDisplay.innerHTML = NewDataRep;
    }
}

//Function for MD5 information
async function userInfo() {

    const userMd5Text = document.getElementById("MD5txtInput");
    const mD5sent = await fetch(`http://md5.jsontest.com/?text=${userMd5Text.value}`);
    const md5return = await mD5sent.json();
    const md5messages = document.getElementById("Md5Output");
    const md5messages2 = document.getElementById("Md5Output2");

                //MD5 reject error message
    if (mD5sent.ok === false) {
               md5messages2.innerHTML = "We could not locate the original resource you requested";

                //Empty original error message
    } else if (md5return["original"] === "") {

                   //Clear prior successful return message
                   md5messages.innerHTML = "";
            return md5messages2.innerHTML = "Add values in MD5 Field";

                 //MD5 Data fields
    } else {

                let Md5data = Object.entries(md5return);
               //Clear Prior Error Message
               md5messages2.innerHTML = "";
        return md5messages.innerHTML = Md5data;
    }
}




