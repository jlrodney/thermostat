"use strict";

describe('Thermostat',function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ('starts with a temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('increaseTemperature',function(){
    it('increases temperature by 1', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    })

    it('increases temperature by 5', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.temperature).toEqual(25);
    })

    it('cannnot go past 32 if power save is off', function(){
      thermostat.turnPowerSaveOff();
      for (var i = 0; i < 20; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature).toEqual(32);
    });

    it('cannnot go past 25 if power save is on', function(){
      thermostat.turnPowerSaveOn();
      for (var i = 0; i < 10; i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature).toEqual(25);
    });
  })

  describe('decreaseTemperature',function(){
    it('decreases temperature by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    })

    it('decreases temperature by 5', function(){
      for (var i = 0; i < 5; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toEqual(15);
    })
    it('temperature does not go below 10', function(){
      for (var i = 0; i < 20; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });

  it('has the power saving mode as true by default',function(){
    expect(thermostat.powerSave).toEqual(true);
  });

  it('starts with max temperatura of 25', function(){
    expect(thermostat.maxTemperature).toEqual(25);
  });

  describe('turnPowerSaveOff',function(){
    it('turns power save to false',function(){
      thermostat.turnPowerSaveOff();
      expect(thermostat.powerSave).toEqual(false);
    });
    it('turns max temperature to 32',function(){
      thermostat.turnPowerSaveOff();
      expect(thermostat.maxTemperature).toEqual(32);
    });
  });

  describe('turnPowerSaveOn',function(){
    it('turns power save to true',function(){
      thermostat.turnPowerSaveOn();
      expect(thermostat.powerSave).toEqual(true);
    });
    it('turns max temperature to 25',function(){
      thermostat.turnPowerSaveOn();
      expect(thermostat.maxTemperature).toEqual(25);
    });
  });

  describe('resetTemperature', function(){
    it('resets temperature back to 20',function(){
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20)
    })
    it('resets temperature back to 20',function(){
      thermostat.decreaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20)
    })
    it('resets temperature back to 20',function(){
      for (var i = 0; i < 10; i++) {
        thermostat.decreaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('energyUsage',function(){
    it('returns low usage when temperature is under 18', function () {
      for (var i = 0; i < 10; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('low usage')
    })

    it('returns high usage when temperature is over 25', function () {
      thermostat.turnPowerSaveOff();
      for (var i = 0; i < 10; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('high usage')
    })

    it('returns medium usage when temperature is 18 to 25', function () {
      expect(thermostat.energyUsage()).toEqual('medium usage')
    })
  })
})
