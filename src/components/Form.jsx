import React from "react";
import configData from "../config/config.json";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      duration: "",
      tags: [],
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        price: this.state.price,
        description: this.state.description,
        name: this.state.name,
        duration: this.state.duration,
        tags: this.state.tags.split(" "),
      }),
    };
    const response = await fetch(configData.API_URL, postData);
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, price, description, duration, tags } = this.state;
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          name={"name"}
          placeholder="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <input
          name={"price"}
          placeholder="price"
          value={price}
          onChange={this.handleInputChange}
        />
        <input
          name={"description"}
          placeholder="description"
          value={description}
          onChange={this.handleInputChange}
        />
        <input
          name={"duration"}
          placeholder="duration"
          value={duration}
          onChange={this.handleInputChange}
        />
        <input
          name={"tags"}
          placeholder="tags"
          value={tags}
          onChange={this.handleInputChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
