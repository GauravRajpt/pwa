

function swDev() {
  const SwUrl= `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(SwUrl).then((resp)=>{
    console.warn("resp", resp);
  })
}

export default swDev;