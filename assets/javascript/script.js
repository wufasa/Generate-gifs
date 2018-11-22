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
    
    //fill buttons with gifs
    $(".topic-button").on("click", function() {

        var topic = $(this).attr("id");
        var limit = "&limit=10";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=LeymPQjvTQ3dy86pnKAcykGqL17rCV8g" + limit;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
              var topicDiv = $("<div>");
              var p = $("<p>").text("Rating: " + results[i].rating);
              var topicImg = $("<img>");
              topicImg.attr("src", results[i].images.fixed_height_still.url);
              topicImg.addClass("gif");
              topicImg.attr({
                  "data-state": "still",
                  still: results[i].images.fixed_height_still.url,
                  animate: results[i].images.fixed_height.url
                  
              })
              topicDiv.append(topicImg);
              topicDiv.append(p);
              $("#topics").prepend(topicDiv);
          }
        });
    });
    
    $(document).on("click",".gif",function() {
        var state = $(this).attr("data-state")
        if (state == "still"){
            $(this).attr("data-state","animate");
            var animate = $(this).attr("animate");
            $(this).attr("src",animate);
        }
        else{
            $(this).attr("data-state","still");
            var still = $(this).attr("still");
            $(this).attr("src",still);
        }
    })
    
})


