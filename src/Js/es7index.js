function sleep(duration) {
    return new Promise(function(resolve) {
      setTimeout(()=> { resolve(0) }, duration);
    })
}
  
async function delayedMessage(message, delay) {
    let remainingTime = await sleep(delay)
    console.log(message, `(remaining time: ${remainingTime})`)
}
  
delayedMessage("World", 400).then(()=>{ console.log('done') })
delayedMessage("Hello", 200)