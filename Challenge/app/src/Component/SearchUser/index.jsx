import React, { Component } from "react";
import axios from "axios";
import "./search.css";

export default class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          
        };
      }
    onSearchChange = (e) => {
        this.setState({
          search: e.target.value,
        });
      };
      onSubmitSearchUser = (e) => {
        e.preventDefault();
        this.onFetchUser(this.state.search);
      };
    //   async componentDidMount() {
    //     try {
    //       const repro = await axios.get(
    //         ``
    //       );
    
    //       this.setState({
    //         example: repro.data.results,
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
  render() {
    
    return (
      <div className="SearchNet">
        <div className="search">
          <form onSubmit={this.props.onSubmitSearchUser}>
            <input
              type="text"
              placeholder="example.com"
              value={this.search}
              className="Tvinput"
              onChange={this.onSearchChange}
            />
            <button type="submit" className="btn_sub">
            <i class="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
