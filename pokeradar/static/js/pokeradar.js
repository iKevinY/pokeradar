// https://en.wikipedia.org/wiki/Null_Island
var latitude = "0";
var longitude = "0";


function reloadNearby() {
  $.ajax({
    url: "/nearby",

    success: function(data) {
      $("#alert").fadeOut(500, function() {
        $("#feed").html(data);
        PkSpr.process_dom();
        $("#feed").fadeIn(500);
      });
    },

    error: function() {
      $("#alert").html("Failed to refresh nearby Pokémon.");
      $("#alert").attr("class", "alert alert-danger");
      $("#alert").fadeIn(250);
    }
  });
}


$("#login-modal").on("shown.bs.modal", function() {
  // Prompt user for location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
    });
  }

  // Focus the username field
  $(this).find("[autofocus]").focus();
});


$("#login-form").submit(function(e) {
  e.preventDefault();

  $("#login-alert").html("Logging in&hellip;");
  $("#login-alert").attr("class", "alert alert-info");
  $("#login-alert").show();

  var loginData = $(this).serializeArray();
  loginData.push({name: "latitude", value: latitude});
  loginData.push({name: "longitude", value: longitude});

  $.ajax({
    url: "/login",
    type: "POST",
    data: loginData,
    success: function(data) {
      // Begin locating nearby Pokémon immediately
      reloadNearby();
      setInterval(reloadNearby, 5000);

      $("#login-alert").html("Success!");
      $("#login-alert").attr("class", "alert alert-success");
      $("#login-alert").show().delay(1000).queue(function() {
        $("#login-modal").modal("toggle");

        $("#alert").html("Locating nearby Pokémon&hellip;");
        $("#alert").attr("class", "alert alert-info");
        $("#alert").fadeIn(500);
      });
    },

    error: function(data) {
      $("#login-alert").html(data["responseText"]);
      $("#login-alert").attr("class", "alert alert-danger");
    }
  });
});


$(window).load(function() {
  $.ajax({
    url: "/logged-in",

    statusCode: {
      200: function() {
        // Already logged in, so skip showing login modal
        reloadNearby();
        setInterval(reloadNearby, 5000);
      },

      401: function() {
        $("#login-modal").modal("show");
      }
    }
  });
});
