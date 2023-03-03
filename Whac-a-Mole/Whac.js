const View = (() => {
    const domSelector = {
        container: document.querySelector(".container"),
        cir1: document.querySelector("#cir1"),
        cir2: document.querySelector("#cir2"),
        cir3: document.querySelector("#cir3"),
        cir4: document.querySelector("#cir4"),
        cir5: document.querySelector("#cir5"),
        cir6: document.querySelector("#cir6"),
        cir7: document.querySelector("#cir7"),
        cir8: document.querySelector("#cir8"),
        cir9: document.querySelector("#cir9"),
        cir10: document.querySelector("#cir10"),
        cir11: document.querySelector("#cir11"),
        cir12: document.querySelector("#cir12"),
        score: document.querySelector("#score"),
        time: document.querySelector("#time"),
        start: document.querySelector("#start")
    }
    return {
        domSelector
    }
})()

const Model = (() => {

})()

const Controller = ((view, model) => {
    const {domSelector} = view
    const map = {}
    let remain = 3;
    // let time = 30;
    domSelector.time.innerHTML = "0"
    for (let i = 1; i <= 12; i ++){
        map[i] = 0
    }
    const generateRandom = (remain) =>{
        let ran = Math.floor(Math.random() * 12) + 1;
        while(map[ran]){
            ran = Math.floor(Math.random() * 12) + 1;
        }
        return ran;

    }
    // console.log(map)
    const produce = () =>{
        const interval = setInterval(() => {

            domSelector.time.innerHTML = (domSelector.time.innerHTML - 1).toString()
            if (domSelector.time.innerHTML > 0){
                if (remain > 0){
                    const ran = generateRandom(remain)
                    // console.log(ran)
                    map[ran] = 1;
                    remain --;
                    domSelector[`cir${ran}`].style.backgroundImage = "url(./mole.jpeg)"
                    domSelector[`cir${ran}`].style.backgroundSize = "cover"
                }
            }else {
                alert(`You have got ${domSelector.score.innerHTML}`)
                for (let i = 1; i <= 12; i++){
                    map[i] = 0
                    domSelector[`cir${i}`].style.backgroundImage = "none"
                }
                clearInterval(interval)
            }
            console.log(map)

            for (let i in map){
                if(map[i] > 3) {
                    domSelector[`cir${i}`].style.backgroundImage = "none"
                    map[i] = 0;
                    remain ++;
                }
                if (map[i] > 0){
                    map[i] ++
                }
            }
        },1000)
        return interval
    }
    domSelector.container.addEventListener('click',(event)=>{
        if(map[event.target.id.slice(3)]){
            domSelector[event.target.id].style.backgroundImage = "none"
            map[event.target.id.slice(3)] = 0;
            domSelector.score.innerHTML = (parseInt(domSelector.score.innerHTML) + 1).toString()
            console.log(domSelector.score)
            remain ++;
        }
        // console.log(event.target.id.slice(3))
    })
    domSelector.start.addEventListener('click',() =>{
        if (parseInt(domSelector.time.innerHTML) === 0){
            domSelector.time.innerHTML = "30";
            for (let i = 1; i <= 12; i ++){
                map[i] = 0
            }
            remain = 3
            domSelector.score.innerHTML = "0"
            let interval = produce();
            setTimeout(()=>{
                clearInterval(interval)
            },31000)
        }
        else{
            alert("Game in process")
        }


    })
    // setTimeout()
    return 1
})(View,Model)