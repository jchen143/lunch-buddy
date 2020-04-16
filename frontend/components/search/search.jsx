import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {query: ''}; 
    }

    handleChange(key){
        // handleChange(key){
        //     return e => this.setState({ [key]: e.currentTarget.value })
        // }
        //
        return e => this.setState({[key]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault(); 
       // debugger
        this.props.searchRestaurants(this.state, this.props.bounds); 
        this.setState({query: ''}); 
       // debugger


    }
    render(){


        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange('query')} placeholder="Search by restaurant or meal"/>
                <button>Submit</button> 
            </form>

            </>
        )
    }
}

export default Search 