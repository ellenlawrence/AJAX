"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

$('#fortune-text').text(evt);

}


function getFortune() {
  
  $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


