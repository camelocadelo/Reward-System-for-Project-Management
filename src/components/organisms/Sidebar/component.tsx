/* TODO: onHover, onClick, on that page, icons color change to black*/

import React, { FC } from 'react';
import './index.scss';
import { pages } from './consts';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo.png';
import LogoutIcon from 'assets/images/logoutIcon.svg';

/* TODO: functionality of logout: redirect to login page, delete token*/
const onLogout = () => {
  console.log('Log out icon clicked');
};

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <hr
          style={{ border: '1px solid black', width: '100%', opacity: '0.2' }}
          className="sidebar-horizontal-line"
        />
        {pages.map((p, i) => (
          <Link key={i} to={p.href}>
            <div className="sidebar-item">
              <img
                src={p.icon}
                alt={p.title}
                style={p.title === 'Marketplace' ? { opacity: '0.25' } : { opacity: '1.0' }}
              />
            </div>
          </Link>
        ))}
      </div>
      <div>
        <img
          src={LogoutIcon}
          alt="Logout"
          onClick={onLogout}
          width="20px"
          height="26px"
          style={{ opacity: '0.45' }}
        />
      </div>
    </div>
  );
};
