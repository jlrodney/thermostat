$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp + '\xB0C');
  $.getJSON("http://localhost:4567/time.json", function(data){
  $('#current-time').text(data.time);
  })
})


$('#current-city').change(function() {
var city = $('#current-city').val();
$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp + '\xB0C')
})
})
  $('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSaveOn();
    $('#power-saving-status').text('On')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSaveOff();
    $('#power-saving-status').text('Off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + '\xB0C');
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
