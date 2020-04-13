import React from 'react'

class ReservationError extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.closeModal(); 
    }


    render(){
       // debugger
        return (<> 
            <div onClick={this.handleClick}>Daily Limit Modal</div>
        
        </>)
    }
}

export default ReservationError