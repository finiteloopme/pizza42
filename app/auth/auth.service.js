(function () {

  'use strict';

  angular
    .module('app')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout'];

  function authService($state, angularAuth0, $timeout) {

    function login() {
      angularAuth0.authorize();
    }
    
    function handleAuthentication() {
      angularAuth0.parseHash(function(err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          setSession(authResult);
          $state.go('home');
        } else if (err) {
          $timeout(function() {
            $state.go('home');
          });
          console.log(err);
          alert('Error: ' + err.error + '. Check the console for further details.');
        }
      });
    }

    function setSession(authResult) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);

      localStorage.setItem('emailVerified', false);
      // Check if the user email is verified
      angularAuth0.client.userInfo(authResult.accessToken, function(err, user) {
        if (err) {
          return console.log(err);
        }
        else{          
          console.log (JSON.parse(user.email_verified));
          localStorage.setItem('emailVerified', user.email_verified);
        }
      });
    }
    
    function logout() {
      // Remove tokens and expiry time from localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      localStorage.removeItem('emailVerified');
      $state.go('home');
    }
    
    function isAuthenticated() {
      // Check whether the current time is past the 
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    // Verify if the user profile has a _verified_ email
    function isEmailVerified() {
      
        return JSON.parse(localStorage.getItem('emailVerified'))==true;
    }

    return {
      login: login,
      handleAuthentication: handleAuthentication,
      logout: logout,
      isAuthenticated: isAuthenticated,
      isEmailVerified: isEmailVerified
    }
  }
})();
