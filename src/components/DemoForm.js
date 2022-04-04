import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            comment: '',
            language: 'vue'
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea value={this.state.comment} id="comment" onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default DemoForm
