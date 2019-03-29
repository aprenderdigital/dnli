//Verifica se já curtiu a página
FB.init({
    appId  : '1882232665401443',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
});

/*FB.ui({
    method: 'share',
    href: 'https://developers.facebook.com/docs/'
  }, function(response){});

  FB.api('/me', {fields: 'last_name'}, function(response) {
    console.log(response);
  });
var user_id = 0;
  
 /* FB.getLoginStatus(function(response) {
    console.log("FB.getLoginStatus");
    console.log(response.user_id);
    window.user_id = response.authResponse.user_id;
    console.log();

    FB.api({ method: 'fql.query', query: 
    'SELECT uid FROM page_fan WHERE uid='+user_id+' AND page_id=1707310592820237' },
    function(result) {
        console.log('SELECT uid FROM page_fan WHERE uid='+user_id+' AND page_id=1707310592820237');
        if (result.length){ 
            document.getElementById("textoCurtir").innerHTML = "Já curtiu";
        } 
       else { 
        document.getElementById("textoCurtir").innerHTML = "Ainda não curtiu";
        }
    })
  });*/


