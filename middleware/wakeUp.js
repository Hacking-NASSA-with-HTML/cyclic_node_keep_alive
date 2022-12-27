import fetch from 'node-fetch';

export const wakeUp = (req, res) => {
    setInterval(async () => {
        try {
            const response = await fetch('https://render-back-end-nikky-pedia.onrender.com/')
            // const body = await response.text();
            console.log(response.ok)
            console.log(response.status)
            // console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, 3000)
    // res.send("Hello World!, I am a cool server on Cyclic!!!")
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!, I am a cool server on Cyclic!!!')
}

export default wakeUp
