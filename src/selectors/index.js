
export const getUserDetails = (state, userId) => {
    console.log('state', state)
    console.log('userId', userId)
    let userDetails = state.find(userObj => userObj.id == userId)
    return userDetails
}
