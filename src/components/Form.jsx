import React, { useEffect, useState } from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            description: "",
            duration: "",
            tags: []

        };
        this.handleNameChange = this.handleInputChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }


    handleSumbit(event) {
        event.preventDefault();
        this.createCertificate();
    }

    async createCertificate() {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                price: this.state.price,
                description: this.state.description,
                name: this.state.name,
                duration: this.state.duration,
                tags: this.state.tags.split(" ")
            }
            )
        };
        console.log(postData)
        const response = await fetch('http://localhost:8080/giftCertificates', postData);
        console.log(response.json());
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input name={"name"} placeholder="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)} />
                <input name={"price"} placeholder="price" value={this.state.price} onChange={(e) => this.handleInputChange(e)} />
                <input name={"description"} placeholder="description" value={this.state.description} onChange={(e) => this.handleInputChange(e)} />
                <input name={"duration"} placeholder="duration" value={this.state.duration} onChange={(e) => this.handleInputChange(e)} />
                <input name={"tags"} placeholder="tags" value={this.state.tags} onChange={(e) => this.handleInputChange(e)} />
                <input type="submit" />
            </form>
        )
    }

}

export default Form;