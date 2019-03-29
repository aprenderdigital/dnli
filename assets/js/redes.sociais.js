//Verifica se já curtiu a página
  FB.init({
    appId  : 'APPID',
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
  });
 
FB.api({ method: 'fql.query', query: 'SELECT uid FROM page_fan WHERE uid=UID AND page_id=PAGEID' },
    function(result) {
        if (result.length){ 
            document.getElementById("textoCurtir").innerHTML = "Já curtiu";
        } 
 
        else { 
            document.getElementById("textoCurtir").innerHTML = "Ainda não curtiu";
        }
    })

