import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.numRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    handleClick = () => {
        console.log(`${this.inputRef.current.value} - ${this.numRef.current.value}`)
    }

    render() {
        return (
        <div>
            <input type="text" ref={this.inputRef} />
            <input type="number" ref={this.numRef} />
            <button onClick={this.handleClick}>Click</button>
        </div>
        )
    }
}

export default RefsDemo
