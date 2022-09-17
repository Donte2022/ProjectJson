

async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    const Ufo = document.getElementById("IpMan");

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal.value)
        return null;

    } else {
        console.log(WoWsignal.ip)
        return Ufo.innerHTML = WoWsignal.ip;
    }

}


async function timeTravel() {

    const foresight = await fetch("http://date.jsontest.com");
    const SpaceWarp = await foresight.json();
    const Interdimensional = document.getElementById("hardtime");

    if (foresight.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(foresight.value)
        return null;

    } else {
        console.log(SpaceWarp)
        //Convert to local time
        return Interdimensional.innerHTML = SpaceWarp.time + " " +SpaceWarp.date;
    }

}


async function roswell() {

    const area51 = await fetch("http://headers.jsontest.com/");
    const flyingSaucer = await area51.json();
    const Uap = document.getElementById("HpHitters");

    if (area51.ok === false) {
        console.log("No UFO just balloon debris!")
        console.log(area51.value)
        return null;

    } else {
        console.log(flyingSaucer)
        return Uap.innerHTML = flyingSaucer;
    }

}


async function reverseEngineer() {

    const bobLazar = await fetch("http://validate.jsontest.com/?json=[JSON-code-to-validate]");
    const EtTech = await bobLazar.json();
    const element115 = document.getElementById("TxtChkoutput");

    if (bobLazar.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(bobLazar.value)
        return null;

    } else {
        console.log(EtTech)
        return element115.innerHTML = EtTech;
    }

}


async function mD5data() {

    const mD5sent = await fetch("http://md5.jsontest.com/?text=[text to MD5]");
    const md5return = await mD5sent.json();
    const md5userInput = document.getElementById("md5Output");

    if (mD5sent.ok === false) {
        console.log("MD5 is offline!")
        console.log(mD5sent.value)
        return null;

    } else {
        console.log(md5return)
        return md5userInput.innerHTML = md5return;
    }

}

