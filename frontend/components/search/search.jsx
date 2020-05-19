import React from 'react'
import LunchMap from '../map/lunch_map'

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
        this.buttonCheat = this.buttonCheat.bind(this); 
        this.state = {query: ''}; 
    }

    buttonCheat(e){
        e.preventDefault(); 
        
    }
    onSelect(e){
        
        if(e.currentTarget.value !== ""){
            this.props.updateUser({location: e.currentTarget.value}).then(() => this.props.history.push("/")) 
        }
        

    }

    

    handleChange(key){
    
        return e => this.setState({[key]: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.searchRestaurants(this.state, this.props.bounds); 
        this.setState({query: ''}); 
       


    }
    render(){

    
        return(
            <>
                <div className="select-wrapper">
                <select className="search-select" id="searchSelector"onChange={this.onSelect} value={this.props.user[this.props.current_user_id].location ? this.props.user[this.props.current_user_id].location : ""}>
                    
                    <option value="">Select your neighborhood</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Staten Island">Staten Island</option>
                    
                </select>
                    <button onClick={this.buttonCheat}><img src={window.dropdown} alt="" /></button>
                </div>

            <form className="restaurant-lunch-search" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange('query')} placeholder="Search: (eg. burger, The Diner, sushi)"/>
                <button><img src={window.search}/></button> 
            </form>
            <div></div>
            </>
        )
    }
}

export default Search 