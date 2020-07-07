
export const getUserDetails = (state, userId) => {
    let userDetails = state.find(userObj => userObj.id == userId)
    return userDetails;
}
