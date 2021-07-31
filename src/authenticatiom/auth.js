import {createAuthProvider} from 'react-token-auth';
import BackUrl from "../BackUrl";


export const [useAuth, authFetch, login, logout] =
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch(BackUrl+'refresh', {
            method: 'POST',
            body: token.access_token
        })
        .then(r => r.json())
    });