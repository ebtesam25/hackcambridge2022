import serial
import json
import os
import random
##from twilio.rest import Client
import time
import requests
from pymongo import MongoClient
from pprint import pprint


# with open('credentials.json', 'r') as f:
#     creds = json.load(f)

# mongostr = creds["mongostr"]
# client = MongoClient(mongostr)

# db = client["chapped"]

def getreading(portname, baud):


    ##ser = serial.Serial('COM24', 115200)

    ser = serial.Serial(portname, baud)

    print ("connected to: " + ser.portstr)
    reading = {}
    ts1 = 0
    ts2 = 0

    while True:
        line = ser.readline()
        print("read a line")
        line = line.decode('utf8')
        ##line = line [2:13]
        # line = line.replace(" ", "")
        line=line.rstrip()
        print(line)
        

        if "##" in line and "$$" in line:
            # complete line read
            line = line.replace("##","")
            line = line.replace("$$","")

            words = line.split(",")
            print (words[0])
            # reading["pm1"] = words[0].split(":")[1]
            reading["ecg"] = words[0]
            
            reading["rr"] = words[1]
            reading["emg"] = words[2]
            # reading["nc0-5"] = words[4].split(":")[1]
            # reading["tps"] = words[9].split(":")[1]
            reading["tmp"] = words[3]
            reading["gsr"] = words[4]
            # reading["voc"] = words[12].split(":")[1]
            ts = str(int(time.time()))
            reading["ts"] = ts

            reading["pid"] = "07"

            return reading
    
            
            

        
while True:
        
    r = getreading('COM3', 115200)

    print (r)
        
        
# # [nfc, bpm] = getreading('/dev/ttyACM0', 115200)
# i = 0
# while True:
#     time.sleep(2)
#     i +=1
#     reading = getreading('COM3', 115200)
#     col = db.readings
#     print(reading)
#     col.insert_one(reading)
#     print(i)




# payload = {}

# payload ["deviceid"] = "d1"
# payload ["timeout"] = str(ts1)
# payload ["timein"] = str(ts2)
# payload ["duration"] = str(diff)


# print ("payload ready")
# print (payload)

# result=db.readings.insert_one(payload)
