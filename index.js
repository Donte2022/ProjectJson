



/*

async function ETphoneHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    console.log(WoWsignal)
    //const ETprobe = await SetiSignal();
    //console.log(GetAhSignal);
    // Alien ignored your call
    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        return null;
    }

    return await SetiSignal.json();

}

ETphoneHome();

  //const WoWsignal = await SetiSignal.json();
   // console.log(json)
  //  return WoWsignal;

*/


async function ETcallHome() {

    const SetiSignal = await fetch("http://ip.jsontest.com/");
    const WoWsignal = await SetiSignal.json();
    console.log("btton not works")
    console.log(WoWsignal)
    const Ufo = document.getElementById("IpMan")
    const Uap = document.getElementById("HpHitters")

    if (SetiSignal.ok === false) {
        console.log("cosmic signals undetected!")
        console.log(SetiSignal.value)
        return null;

    } else {
        return Ufo.innerHTML = WoWsignal.ip;
    }

}

