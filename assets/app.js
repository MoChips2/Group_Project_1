
var LATI = 0;
var LONG = 0;

var cuisineInput2 = "";
var cuisineInput1 = "";
var timeInput = "";
var allergyInput = "";

$(document).ready(function(){
    $("#InOutPage").hide();
    $("#MealTypePage1").hide();
    $("#MealTypePage2").hide();
    $("#CuisinePage1").hide();
    $("#CuisinePage2").hide();
    $("#PricePage").hide();
    $("#TimePage").hide();
    $("#AllergyPage").hide();
    $("#LocationPage").hide();

    $("#getStarted").on("click", function() {
        $("#startPage").hide();
        $("#InOutPage").show();
    });

        $("#DineInButton").on("click", function() {
            $("#InOutPage").hide();
            $("#MealTypePage1").show();
        });

            $("#BreakfastButton1").on("click", function() {
                $("#MealTypePage1").hide();
                $("#TimePage").show();
                cuisineInput1 = "breakfast"
                console.log(cuisineInput1);
            }); 

                $("#U30Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-30";
                    console.log(timeInput);
                    getRecipes();
                }); 

                $("#U60Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-60";
                    console.log(timeInput);
                    getRecipes();
                }); 

                $("#U90Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-90";
                    console.log(timeInput);
                    getRecipes();
                }); 

                $("#NoLimitButton").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-1000";
                    console.log(timeInput);
                    getRecipes();
                }); 

            $("#DinnerButton1").on("click", function() {
                $("#MealTypePage1").hide();
                $("#CuisinePage1").show();
            }); 

                $("#AmericanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "American Dinner"
                }); 

                $("#ChineseButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "Chinese Dinner"
                }); 

                $("#MexicanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "Mexican Dinner"
                }); 

                $("#ItalianButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "Italian Dinner"
                }); 

                $("#IndianButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "Indian Dinner"
                }); 

                $("#MediterraneanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    cuisineInput1 = "Mediterranean Dinner"
                }); 

                    $("#U30Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#resultsPage").show();
                        timeInput = "0-30";
                        getRecipes();
                    }); 

                    $("#U60Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#resultsPage").show();
                        timeInput = "0-60";
                        getRecipes();
                    }); 

                    $("#U90Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#resultsPage").show();
                        timeInput = "0-90";
                        getRecipes();
                    }); 

                    $("#NoLimitButton").on("click", function() {
                        $("#TimePage").hide();
                        $("#resultsPage").show();
                        timeInput = "0-1000";
                        getRecipes();
                    }); 

            $("#DessertButton1").on("click", function() {
                $("#MealTypePage1").hide();
                $("#TimePage").show();
                cuisineInput1 = "Dessert";
            }); 

                $("#U30Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-30";
                    getRecipes();
                }); 

                $("#U60Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-60";
                    getRecipes();
                }); 

                $("#U90Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-90";
                    getRecipes();
                }); 

                $("#NoLimitButton").on("click", function() {
                    $("#TimePage").hide();
                    $("#resultsPage").show();
                    timeInput = "0-1000";
                    getRecipes();
                }); 

        $("#EatOutButton").on("click", function() {
            $("#InOutPage").hide();
            $("#MealTypePage2").show();
        });

            $("#BreakfastButton2").on("click", function() {
                $("#MealTypePage2").hide();
                $("#LocationPage").show();
                cuisineInput2 = "breakfast";
            }); 

                    $("#LocationSubmitButton").on("click", function() {
                        $("#LocationPage").hide();
                        //$("#").show(); results page
                        // add parameters from entries of the form to api
                    }); 

            $("#DinnerButton2").on("click", function() {
                $("#MealTypePage2").hide();
                $("#CuisinePage2").show();
            });   

                $("#AmericanButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = 'american';
                }); 

                $("#ChineseButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = 'chinese';
                }); 

                $("#MexicanButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = 'mexican';
                }); 

                $("#ItalianButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = 'italian';
                }); 

                $("#IndianButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = 'indian';
                }); 

                $("#MediterraneanButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#LocationPage").show();
                    cuisineInput2 = "Mediterranean";
                }); 

                        $("#LocationSubmitButton").on("click", function() {
                            $("#LocationPage").hide();
                            //$("#").show(); results page
                            // add parameters from entries of the form to api
                        }); 

            $("#DessertButton2").on("click", function() {
                $("#MealTypePage2").hide();
                $("#LocationPage").show();
                cuisineInput2 = "Dessert";
            }); 

                    $("#LocationSubmitButton").on("click", function() {
                        $("#LocationPage").hide();
                        //$("#").show(); results page
                        // add parameters from entries of the form to api
                    }); 
});
//zip convert to LAT LNG coordinates
function getLatLng(){
    var convertUrl = "https://maps.googleapis.com/maps/api/geocode/json"

    convertUrl += '?' + $.param({
        'address' : locationInput,
        'key' : 'AIzaSyDNrl5Q5pMMYeQdFRM_QI3GkEvfNS0l6f4',
    })
        $.ajax({
          url: convertUrl,
          method: "GET"
        }).then(function(response) {
            console.log(response);
            lat = response.results[0].geometry.location.lat
            lng = response.results[0].geometry.location.lng
            console.log(lat)
            console.log(lng)
        })
}
//recipe API
function getRecipes(){
    var recipeUrl = "https://api.edamam.com/search"

    recipeUrl += '?' + $.param({
        'app_id' : '488cc2c7',
        'app_key' : '4106fa5be713020ac3aa4ed940f8a53b',
        'q' : cuisineInput1,
        'time' : timeInput,
    })
        $.ajax({
        url: recipeUrl,
        method: "GET"
        }).then(function(response) {
            var results = response.data;
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var newRecipe = $("<tr>").append(
                    $("<td>").text(results.hits[i].recipe.image),
                    $("<td>").text(results.hits[i].recipe.label),
                    $("<td>").text(results.hits[i].recipe.shareAs),
                );
                
                $("#resultsTable > tbody").append(newRecipe);
            }
        });
}

//Map API
var map;
var infowindow;

function initMap() {
var mapMarker = {lat: LATI, lng: LONG};
console.log(mapMarker)
map = new google.maps.Map(document.getElementById('map'), {
    center: mapMarker,
    zoom: 15
});

infowindow = new google.maps.InfoWindow();
var service = new google.maps.places.PlacesService(map);
service.nearbySearch({
    location: mapMarker,
    radius: 16000,
    type: ['restaurant'],
    keyword: cuisineInput2,
}, callback);
}

function callback(results, status) {
if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
    createMarker(results[i]);
    }
}
}

function createMarker(place) {
var placeLoc = place.geometry.location;
var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
});

google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
});
}
