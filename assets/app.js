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
                
            }); 

                $("#U30Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    // add time parameter to recipe
                }); 

                $("#U60Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    //add parameter
                }); 

                $("#U90Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    //add parameter
                }); 

                $("#NoLimitButton").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                }); 

                    $("#GlutenButton").on("click", function() {
                        // add parameter to API
                        // css property change background color
                    });
                    $("#NutButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#DairyButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#ShellfishButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#noAllergyButton").on("click", function() {
                        // css property
                    });

                        $("#AllergyButton").on("click", function() {
                            $("#AllergyPage").hide();
                            // $("#").show(); results
                        }); 

            $("#DinnerButton1").on("click", function() {
                $("#MealTypePage1").hide();
                $("#CuisinePage1").show();
            }); 

                $("#AmericanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter 
                }); 

                $("#ChineseButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter
                }); 

                $("#MexicanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter
                }); 

                $("#ItalianButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter
                }); 

                $("#IndianButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter
                }); 

                $("#MediterraneanButton1").on("click", function() {
                    $("#CuisinePage1").hide();
                    $("#TimePage").show();
                    // add parameter
                }); 

                    $("#U30Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#AllergyPage").show();
                        // add parameter
                    }); 

                    $("#U60Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#AllergyPage").show();
                        // add parameter
                    }); 

                    $("#U90Button").on("click", function() {
                        $("#TimePage").hide();
                        $("#AllergyPage").show();
                        // add parameter
                    }); 

                    $("#NoLimitButton").on("click", function() {
                        $("#TimePage").hide();
                        $("#AllergyPage").show();
                    }); 

                        $("#GlutenButton").on("click", function() {
                            // add parameter to API
                            // css property change background color
                        });
                        $("#NutButton").on("click", function() {
                            // add parameter to API
                        });
                        $("#DairyButton").on("click", function() {
                            // add parameter to API
                        });
                        $("#ShellfishButton").on("click", function() {
                            // add parameter to API
                        });
                        $("#noAllergyButton").on("click", function() {
                            // css property
                        });

                            $("#AllergyButton").on("click", function() {
                                $("#AllergyPage").hide();
                                // $("#").show(); results
                            }); 


            $("#DessertButton1").on("click", function() {
                $("#MealTypePage1").hide();
                $("#TimePage").show();
            }); 

                $("#U30Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    // add parameter
                }); 

                $("#U60Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    // add parameter
                }); 

                $("#U90Button").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                    // add parameter
                }); 

                $("#NoLimitButton").on("click", function() {
                    $("#TimePage").hide();
                    $("#AllergyPage").show();
                }); 

                    $("#GlutenButton").on("click", function() {
                        // add parameter to API
                        // css property change background color
                    });
                    $("#NutButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#DairyButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#ShellfishButton").on("click", function() {
                        // add parameter to API
                    });
                    $("#noAllergyButton").on("click", function() {
                        // css property
                    });

                        $("#AllergyButton").on("click", function() {
                            $("#AllergyPage").hide();
                            // $("#").show(); results call ajax function
                        }); 


        $("#EatOutButton").on("click", function() {
            $("#InOutPage").hide();
            $("#MealTypePage2").show();
        });

            $("#BreakfastButton2").on("click", function() {
                $("#MealTypePage2").hide();
                $("#PricePage").show();
                // add breakfast parameter to google API
            }); 
                $("#Price1").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price2").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price3").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price4").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
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
                    $("#PricePage").show();
                    // add parameter 
                }); 

                $("#ChineseButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#PricePage").show();
                    // add parameter
                }); 

                $("#MexicanButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#PricePage").show();
                    // add parameter
                }); 

                $("#ItalianButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#PricePage").show();
                    // add parameter
                }); 

                $("#IndianButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#PricePage").show();
                    // add parameter
                }); 

                $("#MediterraneanButton2").on("click", function() {
                    $("#CuisinePage2").hide();
                    $("#PricePage").show();
                    // add parameter
                }); 

                    $("#Price1").on("click", function() {
                        $("#PricePage").hide();
                        $("#LocationPage").show();
                        // add parameter
                    }); 

                    $("#Price2").on("click", function() {
                        $("#PricePage").hide();
                        $("#LocationPage").show();
                        // add parameter
                    }); 

                    $("#Price3").on("click", function() {
                        $("#PricePage").hide();
                        $("#LocationPage").show();
                        // add parameter
                    }); 

                    $("#Price4").on("click", function() {
                        $("#PricePage").hide();
                        $("#LocationPage").show();
                        // add parameter
                    }); 

                        $("#LocationSubmitButton").on("click", function() {
                            $("#LocationPage").hide();
                            //$("#").show(); results page
                            // add parameters from entries of the form to api
                        }); 

            $("#DessertButton2").on("click", function() {
                $("#MealTypePage2").hide();
                $("#PricePage").show();
                // add breakfast parameter to google API
            }); 

                $("#Price1").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price2").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price3").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                $("#Price4").on("click", function() {
                    $("#PricePage").hide();
                    $("#LocationPage").show();
                    // add parameter
                }); 

                    $("#LocationSubmitButton").on("click", function() {
                        $("#LocationPage").hide();
                        //$("#").show(); results page
                        // add parameters from entries of the form to api
                    }); 
});

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
            var lat = response.results[0].geometry.location.lat
            var lng = response.results[0].geometry.location.lng
            console.log(lat)
            console.log(lng)
        }).then(function(){
            var cuisineInput2 = "";
            var restaurantUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/output"
            restaurantUrl += '?' + $.param({
                'location' : lat , lng,
                'radius' : '16000',
                'keyword' : cuisineInput2,
                'key' : 'AIzaSyDNrl5Q5pMMYeQdFRM_QI3GkEvfNS0l6f4',
            })
            $.ajax({
                url: restaurantUrl,
                method: "GET"
                }).then(function(response) {
                    console.log(response);
                });

        })
}

function getRecipes(){
    var cuisineInput1 = "";
    var timeInput = "";
    var allergyInput = "";
    var recipeUrl = "https://api.edamam.com/search"

    recipeUrl += '?' + $.param({
        'app_id' : '488cc2c7',
        'app_key' : '4106fa5be713020ac3aa4ed940f8a53b',
        'q' : cuisineInput1,
        'time' : timeInput,
        'health' : allergyInput,
    })
        $.ajax({
        url: recipeUrl,
        method: "GET"
        }).then(function(response) {
            console.log(response);
        });
}