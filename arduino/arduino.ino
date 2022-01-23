/******************************************************************************
Thanks to:
https://github.com/sparkfun/AD8232_Heart_Rate_Monitor
******************************************************************************/
#include <OneWire.h> 
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
#define ECG_LOH 10
#define ECG_LOL 11
#define ECG_A A3
#define GSR_A A1
#define EMG_A A2

#define DELAY 10
#define TEMP_UPDATE 10000

unsigned long start_millis = 0;
unsigned long current_millis = 0;
float temp_reading = 0;
int ecg_reading = 0;
int gsr_reading = 0;
int emg_reading = 0;
float EMA_a = 0.1;
int EMA_GSR = 0;
int EMA_EMG = 0;
int rr_interval = 0;
int rr_value = 0;

OneWire oneWire(ONE_WIRE_BUS); 
DallasTemperature sensors(&oneWire);

void setup() {
  // initialize the serial communication:
  Serial.begin(115200);
  pinMode(10, INPUT); // Setup for leads off detection LO +
  pinMode(11, INPUT); // Setup for leads off detection LO -
  sensors.begin(); // start temperature sensing library
  EMA_GSR = analogRead(GSR_A);  //set EMA S for t=1
  EMA_EMG = analogRead(EMG_A);
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

  // get RR value
  if (ecg_reading > 460) {
    rr_value = rr_value - rr_interval;
    rr_interval = rr_value;
  } else {
    rr_value++;
  }

  // get EMG value
  emg_reading = analogRead(EMG_A);
  EMA_EMG = (EMA_a*emg_reading) + ((1-EMA_a)*EMA_EMG);    //run the EMA
  
  // process temperature probe
  if (current_millis - start_millis >= TEMP_UPDATE) {
    sensors.requestTemperatures();
    temp_reading = sensors.getTempCByIndex(0);
    start_millis = current_millis;
  }

  // process GSR sensor
  gsr_reading = analogRead(GSR_A);
  EMA_GSR = (EMA_a*gsr_reading) + ((1-EMA_a)*EMA_GSR);    //run the EMA


  Serial.print("##");
  Serial.print(ecg_reading, DEC);
  Serial.print(",");
  Serial.print(rr_interval*DELAY, DEC);
  Serial.print(",");
  Serial.print(EMA_EMG, DEC);
  Serial.print(",");
  Serial.print(int(100*temp_reading), DEC);
  Serial.print(",");
  Serial.print(EMA_GSR, DEC);
  Serial.print(",");
  Serial.println("$$");

  delay(DELAY);
}
