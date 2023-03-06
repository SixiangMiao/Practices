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
    const snakemap = {}
    let gameover = false
    let snakeallow = 0
    // let time = 30;
    domSelector.time.innerHTML = "0"
    for (let i = 1; i <= 12; i ++){
        map[i] = 0
        snakemap[i] = 0
    }
    const generateRandom = (remain) =>{
        let ran = Math.floor(Math.random() * 12) + 1;
        while(map[ran] > 0 && snakemap[ran] > 0){
            ran = Math.floor(Math.random() * 12) + 1;
        }
        return ran;

    }
    // console.log(map)
    const produce = () =>{
        const interval = setInterval(() => {

            domSelector.time.innerHTML = (domSelector.time.innerHTML - 1).toString() /*Get the time left*/
            if (domSelector.time.innerHTML > 0){
                if (remain > 0){
                    const ran = generateRandom(remain)
                    // console.log("dishu" + ran, "--58")

                    // console.log(map)
                    if(map[ran] === 0){
                        map[ran] = 1;
                        remain --;
                    }
                    domSelector[`cir${ran}`].style.backgroundImage = "url(./mole.jpeg)"
                    domSelector[`cir${ran}`].style.backgroundSize = "cover"
                }
                if(snakeallow >= 2){
                    const snakeran = Math.floor(Math.random() * 12) + 1;
                    // console.log("she" + snakeran)
                    domSelector[`cir${snakeran}`].style.backgroundImage = "url(./mine.jpeg)"
                    domSelector[`cir${snakeran}`].style.backgroundSize = "cover"
                    snakemap[snakeran] ++;
                    if(map[snakeran] > 0){
                        console.log("chuangle")
                        map[snakeran] = 0;
                        remain ++;
                    }
                    snakeallow = 0
                }
                else{
                    snakeallow++
                }
            }else if(gameover === false){
                alert(`You have got ${domSelector.score.innerHTML}`)
                remain = 3
                for (let i = 1; i <= 12; i++){
                    map[i] = 0
                    snakemap[i] = 0
                }
                clearInterval(interval)
                // gameover = true
            }else{
                remain = 3
                for (let i = 1; i <= 12; i++){
                    map[i] = 0
                    snakemap[i] = 0
                }
                alert(`Game over \nYou have got ${domSelector.score.innerHTML}`)
                clearInterval(interval)
                // clearInterval(snake())
            }
            // console.log(snakeran)


            for (let i = 1; i <= 12; i ++){
                if(map[i] > 3) {
                    domSelector[`cir${i}`].style.backgroundImage = "none"
                    map[i] = 0;
                    remain ++;
                }
                if (map[i] > 0){
                    map[i] ++;
                }
                if (snakemap[i] > 1){
                    domSelector[`cir${i}`].style.backgroundImage = "none"
                    snakemap[i] = 0
                }
                if(snakemap[i] > 0){
                    snakemap[i] ++;
                }
            }
            console.log("shengyu" + remain)

        },1000)
        return interval
    }
    domSelector.container.addEventListener('click',(event)=>{
        if(snakemap[[event.target.id.slice(3)]] > 0){
            // clearInterval(snake())
            clearInterval(produce())
            // clearTimeout(startgame())
            domSelector.time.innerHTML = "1";
            gameover = true
            for(let i = 1;  i <= 12; i ++){
                domSelector[`cir${i}`].style.backgroundImage = "url(./mine.jpeg)"
                domSelector[`cir${i}`].style.backgroundSize = "cover"
                map[i] = 0
                snakemap[i] = 0
                remain = 3
            }
        }
        if(map[event.target.id.slice(3)] > 0){
            domSelector[event.target.id].style.backgroundImage = "none"
            map[event.target.id.slice(3)] = 0;
            domSelector.score.innerHTML = (parseInt(domSelector.score.innerHTML) + 1).toString()
            // console.log(domSelector.score)
            remain ++;
        }
        // console.log(event.target.id.slice(3))
    })
    domSelector.start.addEventListener('click',() =>{
        if (parseInt(domSelector.time.innerHTML) <= 0){
            domSelector.time.innerHTML = "30";
            for (let i = 1; i <= 12; i ++){
                map[i] = 0
                domSelector[`cir${i}`].style.backgroundImage = "none"
                snakemap[i] = 0
            }
            gameover = false
            remain = 3
            domSelector.score.innerHTML = "0"
            let interval = produce();
            // let createSnake = snake();
            const startgame = setTimeout(()=>{
                clearInterval(interval)
                // clearInterval(createSnake)
            },31000)
        }
        else{
            alert("Game in process")
        }
    })
    return 1
})(View,Model)