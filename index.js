





async function ETphoneHome() {

    const SetiSignal = await fetch("https://www.jsontest.com/");
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

