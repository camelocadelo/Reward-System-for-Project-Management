/* TODO: onHover, onClick, on that page, icons color change to black*/

import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import './index.scss';
import { pages, adminPages } from './consts';
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
    localStorage.removeItem('access_token');
    // window.location.href = '';
    history.push('/');
  };

  const handleCancelModal = () => {
    setIsLogoutModal(false);
  };

  const isAdmin = localStorage.getItem('is_admin');
  // console.log('is admin from sidebar: ', isAdmin);

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
          {isAdmin === 'true'
            ? adminPages.map((p, i) => (
                <Link key={i} to={p.href}>
                  <div className="sidebar-item">
                    <img
                      src={p.icon}
                      alt={p.title}
                      // width={20}
                      // height={20}
                      style={
                        p.title === 'Cart' || p.title === 'Marketplace'
                          ? {
                              opacity: '0.25',
                              // height: '20px',
                              // width: '20px',
                              // border: '2px solid grey',
                            }
                          : { opacity: '1.0' }
                      }
                    />
                  </div>
                </Link>
              ))
            : pages.map((p, i) => (
                <Link key={i} to={p.href}>
                  <div className="sidebar-item">
                    <img
                      src={p.icon}
                      alt={p.title}
                      width={25}
                      height={25}
                      style={
                        p.title === 'Cart' || p.title === 'Marketplace'
                          ? {
                              opacity: '0.25',
                              // height: '20px',
                              // width: '20px',
                              // border: '2px solid grey',
                            }
                          : { opacity: '1.0' }
                      }
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
