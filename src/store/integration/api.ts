import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

/*  TODO: add the correct endpoint */
const sendGithubCodeUrl = `${API_URL}/github/code`;
export const sendGithubCode = (data: any, token: any) =>
  API.stdApiPOST({
    url: sendGithubCodeUrl,
    token: token,
    data,
  });

const bindTelegramProfileUrl = `${API_URL}/tg/bind_profile_platform`;
export const bindTelegramProfile = (data: any, token: any) =>
  API.apiFormData({
    url: bindTelegramProfileUrl,
    token: token,
    formData: true,
    data,
  });

const bindSlackProfileUrl = `${API_URL}/slack/bind_profile_platform`;
export const bindSlackProfile = (data: any, token: any) =>
  API.apiFormData({
    url: bindSlackProfileUrl,
    token: token,
    formData: true,
    data,
  });

const bindTelegramChatUrl = `${API_URL}/tg/bind_group_platform`;
export const bindTelegramProject = (data: any, id: any) =>
  API.apiFormData({
    url: `${bindTelegramChatUrl}/${id}`,
    token: access_token,
    formData: true,
    data,
  });

const bindSlackChatUrl = `${API_URL}/slack/bind_channel_platform`;
export const bindSlackProject = (data: any, arg2: any) =>
  API.apiFormData({
    url: `${bindSlackChatUrl}/${arg2}`,
    token: access_token,
    formData: true,
    data,
  });

const unbindSlackProfileUrl = `${API_URL}/slack/bind_profile_platform`;
export const unbindSlackProfile = (token: any) =>
  API.stdApiDELETE({ url: unbindSlackProfileUrl, token: token });

const unbindTelegramProfileUrl = `${API_URL}/tg/bind_profile_platform`;
export const unbindTelegramProfile = (token: any) =>
  API.stdApiDELETE({ url: unbindTelegramProfileUrl, token: token });

const bindRepoToProjectUrl = `${API_URL}/github/connect_to_repo`;
export const bindRepoToProject = (data: any) =>
  API.stdApiPOST({
    url: `${bindRepoToProjectUrl}/${data.id}`,
    token: access_token,
    data: {
      repo: data.repo,
    },
  });

const unbindTelegramChatUrl = `${API_URL}/tg/bind_group_platform`;
export const unbindTelegramProject = (id: any) =>
  API.stdApiDELETE({ url: `${unbindTelegramChatUrl}/${id}`, token: access_token });

const unbindSlackChatUrl = `${API_URL}/slack/bind_channel_platform`;
export const unbindSlackProject = (id: any) =>
  API.stdApiDELETE({ url: `${unbindSlackChatUrl}/${id}`, token: access_token });

const unbindGitProfileUrl = `${API_URL}/github/unbind_github_account`;
export const unbindGitProfile = (token: any) =>
  API.stdApiDELETE({ url: unbindGitProfileUrl, token: token });

const unbindGitProjectUrl = `${API_URL}/github/remove_webhook`;
export const unbindGitProject = (id: any) =>
  API.stdApiDELETE({ url: `${unbindGitProjectUrl}/${id}`, token: access_token });

const sendGitTokenUrl = `${API_URL}/github/personal_acces_token`;
export const sendGitToken = (data: any, token: any) =>
  API.stdApiPOST({
    url: sendGitTokenUrl,
    token: token,
    data,
  });
