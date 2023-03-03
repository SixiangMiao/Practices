import React, {Component} from 'react';

class App extends Component {
    state = {
        data: [],
        input: "",
        maxId: 0,
    }

    async componentDidMount() {
        const res = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
        this.setState({
            data: res.slice(0, 5),
            maxId: 5
        })
    }

    delete = (id) => {
        const data = this.state.data.filter((item) => item.id !== id)
        this.setState({data: data})
    }

    add = () => {
        this.state.data.push({
            title: this.state.input,
            id: this.state.maxId + 1
        })
        this.setState({input: "", maxId: this.state.maxId + 1})
    }

    onChangeInput = (e) => {
        this.setState({input: e.target.value})
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeInput} value={this.state.input}/>
                <button onClick={this.add}>add</button>
                <ul>
                    {this.state.data.map((item, i) => (
                        <li key={i}>
                            {item.title}
                            <button onClick={() => this.delete(item.id)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;