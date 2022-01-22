/******************************************************************************
Thanks to:
https://github.com/sparkfun/AD8232_Heart_Rate_Monitor
******************************************************************************/
#include <OneWire.h> 
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
#define ECG_LOH 10
#define ECG_LOL 11
#define ECG_A A0

#define TEMP_UPDATE 1000

unsigned long start_millis = 0;
unsigned long current_millis = 0;
float temp_reading = 0;
int ecg_reading = 0;

OneWire oneWire(ONE_WIRE_BUS); 
DallasTemperature sensors(&oneWire);

void setup() {
  // initialize the serial communication:
  Serial.begin(115200);
  pinMode(10, INPUT); // Setup for leads off detection LO +
  pinMode(11, INPUT); // Setup for leads off detection LO -
  sensors.begin(); // start temperature sensing library

  start_millis = millis();
}

void loop() {
  current_millis = millis();
  
  // process ECG data
  if ((digitalRead(ECG_LOH) == 1)||(digitalRead(ECG_LOL) == 1)) {
    //Serial.println(0, DEC);
    ecg_reading = 0;
  }
  else {
    //Serial.println(analogRead(ECG_A), DEC);
    ecg_reading = analogRead(ECG_A);
  }

  if (current_millis - start_millis >= TEMP_UPDATE) {
    sensors.requestTemperatures();
    temp_reading = sensors.getTempCByIndex(0);
    start_millis = current_millis;
  }

  Serial.print("#");
  Serial.print(ecg_reading, DEC);
  Serial.print(":");
  Serial.print(int(100*temp_reading), DEC);
  Serial.println("$");

  delay(1);
}
