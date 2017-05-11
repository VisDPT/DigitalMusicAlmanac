           $(document).ready(function() {
//On the click of the Search Button, input value is stored in the var searchTerm
               $('#searchBtn').click(function() {
                   var searchTerm = $('#search').val();

//query string wiht search parameters
                   var queryURL = "https://en.wikipedia.org/w/api.php?action=query&limit=5&srsearch=" + searchTerm + "'%20artist&srlimit=5&format=json&callback=?";
//actual ajax call

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




                           //empties old search results!
                           $('#results').empty();
                                //apppend results to page
                           $('#results').append("<p>Results for <b>" + searchTerm + "</b></p>");
                           $.each(data.query.search, function(i, item) {
                               $('#results').append(
                                   //Link opens in new tab! Woohoo!
                                   "<div><a target='_blank' href='http://en.wikipedia.org/wiki/" + item.title + "'>" + item.title + "</a>" +
                                   "<br>" +
                                   item.snippet +
                                   "<br>" +
                                   "<br>" +
                                   "</div>"
                               );

                           });

 $("#search").val(""); //clears text in search box
                       }
                   });
               });
           });
