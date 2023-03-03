// MVC Pattern
//Model view Controller

const Api = (() => {
    const gotolist = async () => {
        return await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
        // return fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
    }

    // return [
    //     {name: "JR", age: 30},
    //     {name: "David", age: 40},
    //     {name: "Patrick", age: 50},
    // ]
    // fetch('url')
    return {gotolist}
})()


// const deleteLi = (i) => {
//     const self = document.getElementById(`li-${i}`)
//     const parent = self.parentElement;
//     parent.removeChild(self);
//     return i
// }

const view = (() => {

    const domSelector = {
        task_container: document.querySelector("#task_container"),
        addBtn: document.querySelector("#add"),
        inputForm: document.querySelector("#input"), // deleteBtn: document.querySelector("")
    }


    const createTemp = (dataArr) => {
        let temp = ""
        for (let i in dataArr) {
            // temp += `<li id="li-${i}">${dataArr[i].name} <button onclick="deleteLi(${i})">x</button></li>`
            temp += `<li id="li-${i}">${dataArr[i].title} <button id="de-${dataArr[i].id}">x</button></li>`
        }
        return temp
    }

    const render = (ele, template) => {
        ele.innerHTML = template
    }
    return {
        domSelector, createTemp, render
    }
})()

const Model = ((api, view) => {
    const {domSelector, createTemp, render} = view
    // const task_container = domSelector.task_container
    const {gotolist} = api

    class State {
        constructor() {
            this._dataList = []
        }

        get dataList() {
            return this._dataList
        }

        set dataList(newList) {
            this._dataList = newList
            render(domSelector.task_container, createTemp(this._dataList))
        }

    }

    // const state = new State(data)
    // state.dataList = [...state.dataList,{
    //     name:"dsf",age:40
    // }]


    // render(task_container, createTemp(data))
    return {
        gotolist, State
    }

})(Api, view)

// var state = new State(Api)

const Controller = ((view, model) => {
    let length = 5;
    const {domSelector, createTemp, render} = view
    const {gotolist, State} = model
    const state = new State()


    // const addbtn = () => {
    //     // state.dataList = [document.getElementById(),...state.dataList]
    //     if (domSelector.inputForm.value.length !== 0) {
    //         state.dataList = [{name: domSelector.inputForm.value}, ...state.dataList]
    //         domSelector.inputForm.value = ''
    //     } else {
    //         alert("You should input valid name")
    //     }
    // }


    // state.dataList = [...state.dataList,{
    //     name:"dsf",age:40
    // }]
    domSelector.addBtn.addEventListener('click', () => {
        // console.log("clicked")
        // data.push(domSelector.inputForm.value)
        if (domSelector.inputForm.value.length !== 0) {
            state.dataList = [...state.dataList, {title: domSelector.inputForm.value, id: ++length}]

            domSelector.inputForm.value = ''
        } else {
            alert("You should input valid name")
        }

    })

    domSelector.task_container.addEventListener('click', (event) => {

        const bools = []
        for (let item of state.dataList) {
            bools.push("de-" + item.id === event.target.id)
        }

        console.log(bools)

        let newList = []

        for (let i in state.dataList) {
            if (!bools[i]) {
                newList.push(state.dataList[i])
            }
        }
        state.dataList = newList
        // render(domSelector.task_container, createTemp(this._dataList))
        // const res = state.dataList.filter((item) => {
        //     // console.log(item)
        //     console.log(event.target.id, "===", "de-"+item.id, "de-"+item.id !== event.target.id)
        //
        //     return "de-"+item.id !== event.target.id
        //
        //     // return true
        // })
    })
    const bootstrap = async () => {
        const res = await gotolist()
        state.dataList = res.slice(0,length)
        // console.log(res)
        //  = res
        // gotolist().then((res) => {
        //     console.log(res)
        //     state.dataList = res
        // })


    }


    return {bootstrap}
})(view, Model)
Controller.bootstrap()