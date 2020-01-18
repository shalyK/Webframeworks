import React, { Component } from 'react';

// function Clock() {
//     const [time, setTime] = useState(new Date())
//     const Tick= () => {
//         setTime(new Date());
//     }
//     useEffect(() =>{
//         setInterval(Tick,1000)
//     })
//     return (
//         < h1 > {time.toLocaleTimeString()}</h1>

//     )
// }

class Clock extends Component {
    state = {
        time: new Date()
    }
    tick = () => {
        this.setState({ time: new Date() })
    }
    componentDidMount = () => {
        setInterval(this.tick, 1000)
    }

    render() {
        return (
            <h1 > {this.state.time.toLocaleTimeString()}</h1 >

        )
    }

}
export default Clock