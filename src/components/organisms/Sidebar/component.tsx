/* TODO: onHover, onClick, on that page, icons color change to black*/

import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import './index.scss';
import { pages } from './consts';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/Logo.png';
import LogoutIcon from 'assets/images/logoutIcon.svg';
import LogOutModal from 'components/molecules/LogOutModal/component';

export const Sidebar: FC = () => {
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const history = useHistory();
  /* TODO: functionality of logout: redirect to login page, delete token*/
  const onLogout = () => {
    setIsLogoutModal(true);
  };

  const handleModalOk = () => {
    setIsLogoutModal(false);
    history.push('/');
  };

  const handleCancelModal = () => {
    setIsLogoutModal(false);
  };

  return (
    <>
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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src={LogoutIcon}
            alt="Logout"
            onClick={onLogout}
            width="20px"
            height="26px"
            style={{ opacity: '0.45', cursor: 'pointer' }}
          />
        </div>
      </div>
      {isLogoutModal && (
        <LogOutModal onClickCancel={handleCancelModal} onClickModalOk={handleModalOk} />
      )}
    </>
  );
};
