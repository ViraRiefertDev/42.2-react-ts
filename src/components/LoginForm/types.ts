export interface LoginFormValue{
  user_name:string,
  user_email:string,
  user_password:string
}

export enum LOGIN_FORM_NAMES {
  USER_NAME = 'user_name',
  EMAIL = 'user_email',
  PASSWORD = 'user_password'
}