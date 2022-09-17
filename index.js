

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

/*
async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    const Ufo = document.getElementById("IpMan");
    const Uap = document.getElementById("HpHitters");
    const Interdimensional = document.getElementById("hardtime");

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal.value)
        return null;

    } else {
        console.log(WoWsignal.ip)
        return Ufo.innerHTML = WoWsignal.ip;
    }

}

async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    const Ufo = document.getElementById("IpMan");
    const Uap = document.getElementById("HpHitters");
    const Interdimensional = document.getElementById("hardtime");

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal.value)
        return null;

    } else {
        console.log(WoWsignal.ip)
        return Ufo.innerHTML = WoWsignal.ip;
    }

}

async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    const Ufo = document.getElementById("IpMan");
    const Uap = document.getElementById("HpHitters");
    const Interdimensional = document.getElementById("hardtime");

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal.value)
        return null;

    } else {
        console.log(WoWsignal.ip)
        return Ufo.innerHTML = WoWsignal.ip;
    }

}

 */