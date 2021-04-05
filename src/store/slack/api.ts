import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');
const my_pk = localStorage.getItem('pk');

const bindSlackUrl = `${API_URL}/slack/bind_channel_platform`;
export const bindSlackChannel = (data: any) => API.stdApiPOST({ data, url: bindSlackUrl });
