$(document).ready(function(){
    
    var topics = ["Obama","Donald Trump","Oprah","Steph Curry","Tom Cruise","Arnold Schwarzenegger", "Jackie Chan", "Bruce Lee", "Your mom"];

    //generate buttons
for(i=0;i<topics.length;i++){
    var btn = $("<button>");
    btn.attr("id",topics[i]);
    btn.addClass("topic-button")
    btn.val(topics[i]);
    btn.text(topics[i]);
    $("#topic-button").append(btn);
}
    
    //fill buttons with stuff
    $(".topic-button").on("click", function() {

      var topic = $(this).attr("id");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(queryURL);
          console.log(response);
          var results = response.data;
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var topicDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var topicImg = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            topicImg.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            topicDiv.append(p);
            topicDiv.append(topicImg);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#topics").prepend(topicDiv);
          }
        });
    });
    
})


