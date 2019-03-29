//Verifica se já curtiu a página
  FB.init({
    appId  : '1882232665401443',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
  });
 
  var user_id = response.session.uid;

FB.api({ method: 'fql.query', query: 
         'SELECT uid FROM page_fan WHERE uid='+user_id+' AND page_id=1707310592820237' },
    function(result) {
        if (result.length){ 
            document.getElementById("textoCurtir").innerHTML = "Já curtiu";
        } 
 
        else { 
            document.getElementById("textoCurtir").innerHTML = "Ainda não curtiu";
        }
    })

