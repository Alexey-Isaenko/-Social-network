import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleIsFollowingProgress,  getUsers
} from "../../redux/users-reducer";
import User from "./User";
import Preloader from "../common/Preloader.js";
import {compose} from "redux";
import {
    getCurrentPage,
     getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    requestUsers
} from "../../redux/user-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <User totalUserCount={this.props.totalUserCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: state.usersPage.currentPage,
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(

    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers}),
    )(UsersContainer);

