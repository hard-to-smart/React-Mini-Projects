const shade =(min, max)=> Math.floor(Math.random() * (max - min)) + min
export default function getRandomColor(){
    return `rgb(${shade(0,255)}, ${shade(0,255)}, ${shade(0,255)})`
}