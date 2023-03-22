export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_CLIENT_ID as string,
      // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      authority:
        // 'https://login.microsoftonline.com/79ff95bb-ef11-45af-9ee2-cf91a680e018',
        'https://login.microsoftonline.com/57b17027-df02-450f-8b31-c368de144c50',
      redirectUri: process.env.REACT_APP_REDIRECT_URL,
    },
    cache: {
      cacheLocation: 'sessionStorage', // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  }
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
    scopes: ['User.Read', 'email', 'profile', 'openid', 'offline_access'],
  }
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
    tenantId: process.env.REACT_APP_TENANT_ID,
    graphBaseUrl: 'https://graph.microsoft.com/v1.0',
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
    graphUsersEndpoint: `https://graph.microsoft.com/v1.0/groups/${process.env.REACT_APP_PMT_USERS}/members`,
  }
  