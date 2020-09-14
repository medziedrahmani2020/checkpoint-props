import React from 'react'

const Profile = (props) => {
    
    return (
        <div>
           {props.a[1].fname}
           {props.fn}
           <img src={props.a[0].src} alt='men'></img>
        </div>

    )
}

export default Profile
