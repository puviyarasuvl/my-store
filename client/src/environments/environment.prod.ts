import auth from '../../auth_config.json';

let domain = auth.domain;
let clientId = auth.clientId;
let audience = auth.audience;
let serverUrl = auth.serverUrl;

export const environment = {
    production: true,
    auth: {
        domain,
        clientId,
        redirectUri: window.location.origin,
        audience,
    },
    dev: {
        serverUrl,
    },
};
