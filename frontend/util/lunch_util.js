
export const fetchLunches = () => {
  
    return $.ajax({
        method: "GET",
        url: '/api/lunches'
    })

}

export const searchLunches = (search) => {
    return $.ajax({
        method: "GET", 
        url: '/api/lunches',
        data: {search}
    })
}