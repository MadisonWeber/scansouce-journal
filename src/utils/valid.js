
const valid = (name, username, password, bio) => {
    let fieldsFilled = [name, username,password, bio].every(field => field.length > 1)
    if(!fieldsFilled) return 'all fields must be filled'
    if(password.length < 6) return 'your password must be 6 characters minimum'

    return
}   

export default valid
