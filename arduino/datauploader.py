import serial
import json
import os
import random
##from twilio.rest import Client
import time
import requests
from pymongo import MongoClient
from pprint import pprint
import basichrv


with open('credentials.json', 'r') as f:
    creds = json.load(f)

mongostr = creds["mongostr"]
client = MongoClient(mongostr)

db = client["chapped"]

count = 0
emgs = []
semg = 0
tmps = []
stmp = 0
gsrs = []
sgsr = 0
rr = []
flag1 = False

def resetvalues():
    global count, rr, emgs, semg, temps, stmp, gsrs, sgsr, flag1
    count = 0
    emgs = []
    semg = 0
    tmps = []
    stmp = 0
    gsrs = []
    sgsr = 0
    rr = []
    flag1 = False

def getreading(portname, baud):


    ##ser = serial.Serial('COM24', 115200)

    ser = serial.Serial(portname, baud)

    print ("connected to: " + ser.portstr)
    reading = {}
    ts1 = 0
    ts2 = 0

    while True:
        line = ser.readline()
        #print("read a line")
        line = line.decode('utf8')
        ##line = line [2:13]
        # line = line.replace(" ", "")
        line=line.rstrip()
        print(line)

        global count, rr, emgs, semg, temps, stmp, gsrs, sgsr
        global flag1

        if "##" in line and "$$" in line:
            # complete line read
            line = line.replace("##","")
            line = line.replace("$$","")

            words = line.split(",")
            #print (words[0])
            # reading["pm1"] = words[0].split(":")[1]

            print(words[1])
            if int(words[1]) != 0:
                if not flag1:
                    flag1 = True
                    rr.append(int(words[1]))
                    count = count + 1
            else:
                flag1 = False


            emgs.append(words[2])
            semg = semg + int(words[2])

            tmps.append(words[3])
            stmp = stmp + int(words[3])

            gsrs.append(words[4])
            sgsr = sgsr + int(words[4])

            # count = count + 1
            print(f"count: {count}")

            if count >= 50:
                print(rr)
                tdf, oc = basichrv.gethrv(rr)

                reading['ectopic'] = oc
                reading['hrstd'] = tdf['std_hr']
                reading['hr'] = tdf['mean_hr']
                reading['hrv'] = tdf['sdnn']

                reading['emg'] = int(semg/len(emgs))
                reading['tmp'] = float(stmp/len(tmps))/100.0
                reading['gsr'] = int(sgsr/len(gsrs))

                ts = str(int(time.time()))
                reading["ts"] = ts

                reading["uid"] = "8"

                return reading


            # reading["ecg"] = words[0]

            # reading["rr"] = words[1]
            # reading["emg"] = words[2]
            # # reading["nc0-5"] = words[4].split(":")[1]
            # # reading["tps"] = words[9].split(":")[1]
            # reading["tmp"] = words[3]
            # reading["gsr"] = words[4]
            # # reading["voc"] = words[12].split(":")[1]

            # return reading




def insertdata(r, db):
    payload = {}



    payload ["deviceid"] = "d1"
    payload ["userid"] = r['uid']
    payload ["time"] = r['ts']
    payload ["ectopic"] = r['ectopic']
    payload ["hrstd"] = r['hrstd']
    payload ["hr"] = r['hr']
    payload ["hrv"] = r['hrv']
    payload ["emg"] = r['emg']
    payload ["tmp"] = r['tmp']
    payload ["gsr"] = r['gsr']
    # payload ["ectopic"] = r['ectopic']


    print ("payload ready")
    print (payload)

    result=db.testdata.insert_one(payload)
    time.sleep(20)
    #result=db.rawdata.insert_one(payload)


while True:

    r = getreading('COM3', 115200)



    print (r)

    insertdata(r, db)
    resetvalues()



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





