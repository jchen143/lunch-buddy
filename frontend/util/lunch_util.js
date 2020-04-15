
export const fetchLunches = () => {
  
    return $.ajax({
        method: "GET",
        url: '/api/lunches'
    })

}