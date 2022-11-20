const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

export function getToken():Token {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
}

export function saveToken(token: Token): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

export function dropToken():void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}
