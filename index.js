const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = 500
const height = 500



const colorsA = [
    ["rgb(9, 1, 47)",
    "rgb(4, 4, 73)",
    "rgb(0, 7, 100)",
    "rgb(12, 44, 138)",
    "rgb(24, 82, 177)",
    "rgb(57, 125, 209)",
    "rgb(134, 181, 229)",
    "rgb(211, 236, 248)",
    "rgb(241, 233, 191)",
    "rgb(248, 201, 95)",
    "rgb(255, 170, 0)",
    "rgb(204, 128, 0)",
    "rgb(153, 87, 0)",
    "rgb(106, 52, 3)",
    "rgb(66, 30, 15)",
    "rgb(25, 7, 26)",],

    ["rgb(0, 255, 209)",
    "rgb(49, 198, 212)",
    "rgb(255, 255, 0)",
    "rgb(255, 30, 30)"],

    ["rgb(33, 146, 255)",
    "rgb(56, 229, 77)",
    "rgb(156, 255, 46)",
    "rgb(253, 255, 0)"],

    ["rgb(36, 55, 99)",
    "rgb(255, 110, 49)",
    "rgb(255, 235, 183)",
    "rgb(173, 142, 112)"],

    ["rgb(255, 89, 123)",
    "rgb(255, 142, 158)",
    "rgb(249, 181, 208)",
    "rgb(238, 238, 238)"],

    ["rgb(0, 56, 101)",
    "rgb(239, 91, 12)",
    "rgb(212, 246, 204)",
    "rgb(60, 207, 78)"],

    ["rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"],
]
let pointer = 0
let colors = colorsA[pointer%colorsA.length]
run()

console.log("done")

const butt = document.getElementById('but')

butt.addEventListener('click',()=>{
    alert('wait this may take a while.do not spam click!!')
    pointer+=1
    colors = colorsA[pointer%colorsA.length]
    run()
})


function run(){
    for(let x = 0;x< width;x++){
        for(let y = 0;y< width;y++){
            plotInset(x,y)
        }
    }
}

function plotInset(x,y){

    const [cr,ci] = sTc(x,y)
    

    let zr = 0
    let zi = 0

    let l = 0
    let m = 0


    for(let k = 0; k < 1000; k++){
        const _zr = zr*zr - zi*zi + cr
        const _zi = 2*zr*zi + ci
        zr = _zr
        zi = _zi
        const dist = Math.sqrt(zr*zr + zi*zi)
        if(dist>2){
            ctx.fillStyle = colors[k%colors.length]//`rgb(${(255/1000+10)*k}, 0,0)`//colors[k%colors.length]'
            point(x,y,1)
            return
        }
    }

    ctx.fillStyle = 'black'
    point(x,y,1)

}

function point(x,y,r=5){
    ctx.beginPath()
    ctx.arc(x,y,r,0,Math.PI*2)
    ctx.fill()
}

function line(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}

function sTc(x,y){
    const r = -2 + x/125
    const i = 2 - y/125
    return [r,i]
}

function cTs(r,i){
    const x = (r+2)*125
    const y = (2-i)*125
    return [x,y]
}


