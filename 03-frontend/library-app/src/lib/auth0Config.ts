export const auth0Config = {
 clientId: 'dcYQ9l8DWzOBn71K9X7ZfvxN1NrMmCwU',
 issuer: "dev-y3ls8dijo45i6stm.eu.auth0.com",
 audience: "http://localhost:8080",
 redirectUri: window.location.origin + '/login/callback',
 scope: 'openid profile email',
}