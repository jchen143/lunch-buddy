import React from 'react'; 

class Lunches extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>Eat Up Homies!</h1>
                <button onClick={this.props.logout}>logout</button>
            </>
        )
    }
}

export default Lunches