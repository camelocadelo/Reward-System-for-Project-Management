import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

/*  TODO: add the correct endpoint */
const sendGithubCodeUrl = `${API_URL}/github/sendCode`;
export const sendGithubCode = (data: any) =>
  API.stdApiPOST({
    url: sendGithubCodeUrl,
    token: access_token,
    data,
  });

const bindTelegramProfileUrl = `${API_URL}/tg/bind_profile_platform`;
export const bindTelegramProfile = (data: any) =>
  API.apiFormData({
    url: bindTelegramProfileUrl,
    token: access_token,
    formData: true,
    data,
  });

const bindSlackProfileUrl = `${API_URL}/slack/bind_profile_platform`;
export const bindSlackProfile = (data: any) =>
  API.apiFormData({
    url: bindSlackProfileUrl,
    token: access_token,
    formData: true,
    data,
  });

const bindTelegramChatUrl = `${API_URL}/tg/bind_group_platform`;
export const bindTelegramProject = (data: any) =>
  API.apiFormData({
    url: `${bindTelegramChatUrl}/10`,
    token: access_token,
    formData: true,
    data,
  });

const bindSlackChatUrl = `${API_URL}/slack/bind_channel_platform`;
export const bindSlackProject = (data: any) =>
  API.apiFormData({
    url: `${bindSlackChatUrl}/10`,
    token: access_token,
    formData: true,
    data,
  });

const unbindSlackProfileUrl = `${API_URL}/slack/bind_profile_platform`;
export const unbindSlackProfile = () =>
  API.stdApiDELETE({ url: unbindSlackProfileUrl, token: access_token });

const unbindTelegramProfileUrl = `${API_URL}/tg/bind_profile_platform`;
export const unbindTelegramProfile = () =>
  API.stdApiDELETE({ url: unbindTelegramProfileUrl, token: access_token });
