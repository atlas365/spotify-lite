import './Account.css';

import React from 'react';

const Account = ({ account }) => {

  if (!account) {
    return null;
  }
  return (
    <div className="horizontal">
      <img className="ui tiny circular image" src={account.images[0].url} alt="Profile Pic"></img>
      <div className="ui list info">
        <div className="item">
          <i className="user icon"></i>
          <div className="content">
            {account.display_name}
          </div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            {account.email}
          </div>
        </div>
        <div className="item">
          <i className="marker icon"></i>
          <div className="content">
            {account.country}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;