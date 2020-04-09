import React from 'react'; 
import Nav from '../nav_bar/nav_bar_container'

class Lunches extends React.Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchLunches({ southWest: { lat: 40.767971, lng: -73.981991 }, northEast: { lat: 40.799565, lng: -73.935342 } })
    }

    render(){
        debugger
        let lunchesLi = this.props.lunches.map(lunch => {

            return (<li>
                {lunch.name}
                {lunch.restaurant_id}
            </li>)
        })
        return(

            <>
                <div className="lunches-home">
                    <div className="header-container">
                        <Nav/>
                    </div>

                    <br></br>
                    <div className="content">
                        <h1>Eat Up Homies!</h1>
                        <ul>
                            {lunchesLi}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Lunches