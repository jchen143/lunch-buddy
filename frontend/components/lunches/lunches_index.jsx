import React from 'react';


class LunchesIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let lunches = this.props.lunches.map( bench => {
            return <li key={bench.id}>{bench.name}</li>
        })
        
        return(
            <ul>
                {lunches}
            </ul>

        )
    }
}

export default LunchesIndex