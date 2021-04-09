export const requestUsers = (state) => {
    return state.usersPage.user;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
};
/*export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};*/
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
