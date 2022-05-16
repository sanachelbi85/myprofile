import React from 'react';
import photo from './photo.jpg';
import "../../App.css";

function ProfilePhoto() {
  return (
    <>
    <div>
      <h1><b>My profile</b></h1>
    </div>
    <br></br>
      <img src={photo} alt="photo1" />
   
    </>
  )
}

export default ProfilePhoto