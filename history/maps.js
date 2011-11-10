

function get_maps(tabs){


              //get the google maps visits
              var maplist=[];
              for(var i in tabs){
               if(tabs[i].url.match(/^https?:\/\/maps\.google\./)){
                   var parsed=parseUri(tabs[i].url);
                   var q=parsed.queryKey.q;
                   q=decodeURI(q);
                   q=q.replace(/\+/g,' ');
                   var zoom=parsed.queryKey.z;
                   var image='http://maps.googleapis.com/maps/api/staticmap?center='+q+'&zoom='+zoom+'&size=200x200&maptype=roadmap&sensor=false'
                   maplist.push({url:tabs[i].url, image:image, q:q});
               }
              }
              
       var template_html = new EJS({url: './templates/maps_template.ejs'}).render({tabs:maplist});
       $('#maps_template').html(template_html);   
	     





}
