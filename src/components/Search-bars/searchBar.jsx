import { Component } from "react";
import "./searchBar.css"


class SearchBar extends Component{
    render(){
        return(
            <input 
            // eslint-disable-next-line no-template-curly-in-string
            className = {`search-box ${this.props.className}`}
            type='Search' 
            placeholder= {this.props.placeHolder}
            onChange = {this.props.onChangeHandler} />
        )
    }
}

export default SearchBar;