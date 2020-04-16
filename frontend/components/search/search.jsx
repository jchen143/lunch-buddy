import React from 'react'

const burough_bounds = {
    staten: {
        southWest: { lat: 40.54037531046392, lng: -74.17594920654297 }, northEast: { lat: 40.61860182069848, lng: -74.1244507934570}},
    manhattan: {
        southWest: { lat: 40.744094586153906, lng: -73.99694920654295 }, northEast: { lat: 40.822082520306346, lng: -73.94545079345701 }
    }, 
    queens: {
        southWest: { lat: 40.689162375293066, lng: -73.82064920654295 },
        northEast: { lat: 40.7672147377142, lng: -73.76915079345702 }
    },
    brooklyn: {
        southWest: { lat: 40.63913307056648, lng: -73.96994920654298 },
        northEast: { lat: 40.717244048476594, lng: -73.91845079345704 }
    }, 
    bronx: {
        southWest: { lat: 40.80583082947849, lng: -73.89054920654297 },
        northEast: { lat: 40.88374626972414, lng: -73.83905079345703 }
    }
}

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSelect = this.onSelect.bind(this); 
        this.state = {query: ''}; 
    }

    onSelect(e){
        e.preventDefault(); 
        this.props.updateFilter("bounds", burough_bounds[e.currentTarget.value])
    }

    handleChange(key){
    
        return e => this.setState({[key]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault(); 
        //debugger
        this.props.searchRestaurants(this.state, this.props.bounds); 
        this.setState({query: ''}); 
       // debugger


    }
    render(){


        return(
            <>
                {/* <select className="search-select" onChange={this.onSelect}>
                    <option value="" disabled selected>Select your neighborhood</option>
                    <option value="manhattan">Manhattan</option>
                    <option value="bronx">Bronx</option>
                    <option value="brooklyn">Brooklyn</option>
                    <option value="queens">Queens</option>
                    <option value="staten">Staten Island</option>
                </select> */}

            <form className="restaurant-lunch-search" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange('query')} placeholder="Search by restaurant or meal"/>
                <button><img src={window.search}/></button> 
            </form>

            </>
        )
    }
}

export default Search 