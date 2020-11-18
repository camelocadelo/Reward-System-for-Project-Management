/*TODO: add types props (ProjectPageType.IProps) */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from 'store/user/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';

function ProjectPage(props: any) {
  const { userInfoData, onGetUserInfo } = props;

  useEffect(() => {
    onGetUserInfo();
  }, []);

  console.log('the userinfo data: ', userInfoData);

  return (
    <MainTemplate>
      <div>
        {userInfoData && userInfoData.last_name}
        <span> Project page </span>
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfoData: state.userReducer.userInfo.data,
  };
};

const mapDispatchToProps = {
  onGetUserInfo: userActions.getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
