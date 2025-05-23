export interface LoginPayload {
  username: string;
  password: string;
  rememberMe: boolean;
  trigger: boolean;
}

export interface LoginResponse {
  id_token: string;
  tenant_id: string;
}
