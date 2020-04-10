import React from 'react';


class LunchesIndex extends React.Component{
    constructor(props){
        super(props)
    
    }
    
    componentDidMount(){
        this.props.fetchLunches()
        this.props.fetchRestaurants({ southWest: { lat: 40.767971, lng: -73.981991 }, northEast: { lat: 40.799565, lng: -73.935342 } }); 
    }

    render(){
      
        let lunches = this.props.lunches.map(lunch => {
            if (Object.keys(this.props.restaurants).includes(lunch.restaurant_id)){
                return <li key={lunch.id}>{lunch.name} {lunch.description}</li>
            }
        })
       
        
        return(
            <ul>
                {lunches}
            </ul>

        )
    }
}

export default LunchesIndex