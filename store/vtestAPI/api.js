import axios from "axios";
const vtestAPI = axios.create({
  baseURL: "https://vtest1-9.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_v1_home_list(payload) {
  return vtestAPI.get(`/api/v1/home/`);
}

function api_v1_home_create(payload) {
  return vtestAPI.post(`/api/v1/home/`, payload.data);
}

function api_v1_user_list(payload) {
  return vtestAPI.get(`/api/v1/user/`);
}

function api_v1_user_create(payload) {
  return vtestAPI.post(`/api/v1/user/`, payload.data);
}

function api_v1_login_create(payload) {
  return vtestAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return vtestAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return vtestAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return vtestAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return vtestAPI.patch(`/rest-auth/user/`, payload.data);
}

function api_docs_schema_retrieve(payload) {
  return vtestAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_meetupss_list(payload) {
  return vtestAPI.get(`/api/v1/meetupss/`);
}

function api_v1_meetupss_create(payload) {
  return vtestAPI.post(`/api/v1/meetupss/`, payload.data);
}

function rest_auth_login_create(payload) {
  return vtestAPI.post(`/rest-auth/login/`, payload.data);
}

function api_v1_home_retrieve(payload) {
  return vtestAPI.get(`/api/v1/home/${payload.id}/`);
}

function api_v1_home_update(payload) {
  return vtestAPI.put(`/api/v1/home/${payload.id}/`, payload.data);
}

function api_v1_home_partial_update(payload) {
  return vtestAPI.patch(`/api/v1/home/${payload.id}/`, payload.data);
}

function api_v1_home_destroy(payload) {
  return vtestAPI.delete(`/api/v1/home/${payload.id}/`);
}

function api_v1_main_menu_list(payload) {
  return vtestAPI.get(`/api/v1/main_menu/`);
}

function api_v1_main_menu_create(payload) {
  return vtestAPI.post(`/api/v1/main_menu/`, payload.data);
}

function api_v1_user_retrieve(payload) {
  return vtestAPI.get(`/api/v1/user/${payload.id}/`);
}

function api_v1_user_update(payload) {
  return vtestAPI.put(`/api/v1/user/${payload.id}/`, payload.data);
}

function api_v1_user_partial_update(payload) {
  return vtestAPI.patch(`/api/v1/user/${payload.id}/`, payload.data);
}

function api_v1_user_destroy(payload) {
  return vtestAPI.delete(`/api/v1/user/${payload.id}/`);
}

function rest_auth_logout_retrieve(payload) {
  return vtestAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return vtestAPI.post(`/rest-auth/logout/`);
}

function api_v1_meetupss_retrieve(payload) {
  return vtestAPI.get(`/api/v1/meetupss/${payload.id}/`);
}

function api_v1_meetupss_update(payload) {
  return vtestAPI.put(`/api/v1/meetupss/${payload.id}/`, payload.data);
}

function api_v1_meetupss_partial_update(payload) {
  return vtestAPI.patch(`/api/v1/meetupss/${payload.id}/`, payload.data);
}

function api_v1_meetupss_destroy(payload) {
  return vtestAPI.delete(`/api/v1/meetupss/${payload.id}/`);
}

function api_v1_main_menu_retrieve(payload) {
  return vtestAPI.get(`/api/v1/main_menu/${payload.id}/`);
}

function api_v1_main_menu_update(payload) {
  return vtestAPI.put(`/api/v1/main_menu/${payload.id}/`, payload.data);
}

function api_v1_main_menu_partial_update(payload) {
  return vtestAPI.patch(`/api/v1/main_menu/${payload.id}/`, payload.data);
}

function api_v1_main_menu_destroy(payload) {
  return vtestAPI.delete(`/api/v1/main_menu/${payload.id}/`);
}

function rest_auth_registration_create(payload) {
  return vtestAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return vtestAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_change_create(payload) {
  return vtestAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return vtestAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return vtestAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

export const apiService = {
  api_v1_home_list,
  api_v1_home_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_meetupss_list,
  api_v1_meetupss_create,
  rest_auth_login_create,
  api_v1_home_retrieve,
  api_v1_home_update,
  api_v1_home_partial_update,
  api_v1_home_destroy,
  api_v1_main_menu_list,
  api_v1_main_menu_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_meetupss_retrieve,
  api_v1_meetupss_update,
  api_v1_meetupss_partial_update,
  api_v1_meetupss_destroy,
  api_v1_main_menu_retrieve,
  api_v1_main_menu_update,
  api_v1_main_menu_partial_update,
  api_v1_main_menu_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
};