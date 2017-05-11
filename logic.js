           $(document).ready(function() {

               $('#searchBtn').click(function() {
                   var searchTerm = $('#search').val();


                   var queryURL = "https://en.wikipedia.org/w/api.php?action=query&limit=6&srsearch=" + searchTerm + "'%20artist&srlimit=5&format=json&callback=?";
console.log(queryURL);
                   // "https://en.wikipedia.org/w/api.php?action=query&titles=" + searchTerm + "&prop=images&imlimit=6&format=json&callback=?";

                   //"https://en.wikipedia.org/w/api.php?action=query&format=jsonlist=search&srsearch=" + searchTerm;

                   //    'http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=' + searchTerm + 'limit=6&srwhat=title&callback=?'


                   $.ajax({
                       method: "GET",
                       url: queryURL,
                       asyn: false,
                       data: {
                           action: 'query',
                           format: 'json',
                           list: 'search',
                           //srwhat: 'title',
                           srsearch: searchTerm,


                       },
                       dataType: "json",


                       // Function to be called if the request succeeds
                       success: function(data) {
                           console.log(data);

                           var resultsArray = [
                               data.query.search[0].title,
                               data.query.search[0].snippet,
                               data.query.search[1].title,
                               data.query.search[1].snippet,
                               data.query.search[2].title,
                               data.query.search[2].snippet,
                               data.query.search[3].title,
                               data.query.search[3].snippet,
                               data.query.search[4].title,
                               data.query.search[4].snippet
                           ];
                           console.log(resultsArray);

                           //apppend results to page

                           //
  $('#results').empty();
                           $('#results').append("<p>Results for <b>" + searchTerm + "</b></p>");
                           $.each(data.query.search, function(i,item){
                                       $('#results').append(
                                                "<div><a href='http://en.wikipedia.org/wiki/" + item.title + "'>" + item.title+ "</a>"
                                                +"<br>"
                                                + item.snippet
                                                +"<br>"
                                                +"<br>"
                                                + "</div>"


                            );
                                 //     $("#results").append(
                                 //
                                 //     + item.title + "</a><br>"
                                 //      + item.snippet + "<br><br></div>");
                                     });


                       }
                   });
               });
           });
