import React from 'react'

class ReservationIndex extends React.Component{
    constructor(props){
        super(props)

        //let today = new Date(); 
        let today = new Date(); 
        let yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        let two_days = new Date(yesterday);
        two_days.setDate(two_days.getDate() - 1 );

        let three_days = new Date(two_days);
        three_days.setDate(three_days.getDate() - 1);

        let four_days = new Date(three_days);
        four_days.setDate(four_days.getDate() - 1); 

        this.week = [four_days, three_days, two_days, yesterday, today];
        //array of days (5 days prior. go through for each reservation, 
        //if the created_at matches up set a variable to the li. Otherwise it's the default sorry we missed you)   
        this.today = new Date();

        this.handleTheClick = this.handleTheClick.bind(this); 
        
    }
    //get today's date. 
   handleTheClick(e){
       e.preventDefault(); 
       this.props.cancelReservation(this.currentResId)
   }
    componentDidMount(){
    
        this.props.fetchReservations(); 
        
    
    }

    render(){
        let that = this; 
        let dayLis = this.week.map( day => {
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let default_li = (
                <li className="no-lunch-res-li">
                    <div className="current-res-title">{days[day.getDay()]}'s Lunch!</div>
                    <div className='sorry-message'>
                        <img className='miss-you-image' src={window.white_logo}/>
                        <p className='missin-you'>We missed you at lunch today!</p>
                    </div>
                </li>
            )

            if (day.getFullYear() === this.today.getFullYear() && day.getMonth() === this.today.getMonth() && day.getDate() === this.today.getDate()) {
                //debugger
                default_li = (
                    <li className="no-lunch-res-li">
                        <div className="current-res-title">{days[day.getDay()]}'s Lunch!</div>
                        <div>Let's go to lunch, bud!</div>
                    </li>

                )
            }
            
            Object.values(this.props.reservations).forEach(reservation => {
                this.currentResId = reservation.id;
                //debugger
               let res_date = new Date(reservation.created_at);
               if(day.getFullYear() === res_date.getFullYear() && day.getMonth() === res_date.getMonth() && day.getDate() === res_date.getDate()){
                    let lunch = reservation.lunch; 
                    let restaurant = reservation.restaurant; 
                   let day_of_reservation = days[res_date.getDay()]; 

                   let cancel = null;
                    debugger
                   if (res_date.getFullYear() === this.today.getFullYear() && res_date.getDay() === this.today.getDay() && res_date.getMonth() === this.today.getMonth()) {
                       debugger
                       cancel = <p className="cancel-what" onClick={that.handleTheClick}>Cancel</p>
                   } else {
                       cancel = <p className="cancel-what">Hope you enjoyed!</p>
                   }
                   default_li = (<li className="current-res-li">
                       <div className="current-res-title">{day_of_reservation}'s Lunch!</div>

                       <div className="res-info" style={{ backgroundImage: `url(${lunch.photoUrl})` }}>
                           <div></div>
                           <div></div>
                           <div></div>
                           <div>
                                <p className="res-lunch-name">{lunch.name}</p>
                                <p className="res-restaurant-name">{restaurant.name}</p>
                                <p className="res-restaurant-address">{restaurant.address}</p>
                           </div>
                           {cancel}
                       </div>
                       
                   </li>


                   )

               }


            })


            return default_li 

        })


        
        return(
            <>
                <ul className="current-res-toolbar">
                    {/* {reservationsLis} */}
                    {dayLis}
                </ul>
            </>
        )
    }
}

export default ReservationIndex 