
export const fetchLunches = (bounds) => {
    return $.ajax({
        method: "GET",
        url: '/api/lunches',
        data: { bounds }
    })

}