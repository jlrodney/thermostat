"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.maxTemperature = 25;
  this.maxPSMOn = 25;
  this.maxPSMOff = 32;
  this.temperature = 20;
  this.powerSave = true;
}
Thermostat.prototype.increaseTemperature = function () {
  if (this.temperature < this.maxTemperature) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature > this.MINIMUM_TEMPERATURE ) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.turnPowerSaveOff = function () {
  this.powerSave = false;
  this.maxTemperature = this.maxPSMOff;
};

Thermostat.prototype.turnPowerSaveOn = function () {
  this.maxTemperature = this.maxPSMOn;
  if (this.temperature > this.maxPSMOn){
    this.temperature = this.maxPSMOn};
  this.powerSave = true;

};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature >= 25 ) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};
