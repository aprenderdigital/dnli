FB.init({
    appId  : '1882232665401443',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
});

function shareClick() {
  console.log("shareClick4");
  FB.ui({
      method: 'share',
      href: 'https://dnli.aprender.digital/'
  }, function(response){
       console.log(response);       
      }
    );
  return false;
}