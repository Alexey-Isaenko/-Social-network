import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
           {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.fullName}</div>
            <ProfileStatus status={"Hello my frind"}/>

        </div>
    )
}

export default ProfileInfo;