import os
import pymongo
import json
import random
# import psycopg2
import hashlib
import time
from trycourier import Courier

from hashlib import sha256



def sendmessage(text, receiver):


    receiver = os.environ.get('COURIERTEST')

    client = Courier(auth_token=os.environ.get('COURIERAPI'))

    resp = client.send(
        event="courier-quickstart",
        recipient=receiver,
        data={
        "message": text
        }
    )

    print(resp['messageId'])



def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()

    
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["chapped"]


    retjson = {}

    action = request_json['action']



    if action == "gettestdata":
        col = db.testdata

        gsrs = []
        hrs = []
        hrvs = []
        ectopic = []
        hrstds = []
        emgs = []
        tmps = []


        for x in col.find():
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['gsr']
            gsrs.append(dat)

            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hr']
            hrs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrv']
            hrvs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['ectopic']
            ectopic.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['emg']
            emgs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrstd']
            hrstds.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['tmp']
            tmps.append(dat)
            
            # readings.append(x)
        
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "data"
        retjson['temperature'] = tmps
        retjson['HeartRateSTDeviation'] = hrstds
        retjson['ElectroMyoGram'] = emgs
        retjson['ectopic'] = ectopic
        retjson['HeartRateVariability'] = hrvs
        retjson['HeartRate'] = hrs
        retjson['GalvanicSkinResponse'] = gsrs
        
        
        

        return json.dumps(retjson)



    if action == "getrawdata":
        col = db.rawdata

        gsrs = []
        hrs = []
        hrvs = []
        ectopic = []
        hrstds = []
        emgs = []
        tmps = []


        for x in col.find():
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['gsr']
            gsrs.append(dat)

            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hr']
            hrs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrv']
            hrvs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['ectopic']
            ectopic.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['emg']
            emgs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrstd']
            hrstds.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['tmp']
            tmps.append(dat)
            
            # readings.append(x)
        
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "data"
        retjson['temperature'] = tmps
        retjson['HeartRateSTDeviation'] = hrstds
        retjson['ElectroMyoGram'] = emgs
        retjson['ectopic'] = ectopic
        retjson['HeartRateVariability'] = hrvs
        retjson['HeartRate'] = hrs
        retjson['GalvanicSkinResponse'] = gsrs
        
        
        

        return json.dumps(retjson)




    if action == "register" :
        maxid = 1
        col = db.users
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        payload["age"] = request_json['age']
        payload["gender"] = request_json['gender']
        payload["weight"] = request_json['weight']
        payload["height"] = request_json['height']
        payload["phone"] = request_json['phone']
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['userid'] = id

        return json.dumps(retjson)






    if action == "login":
        col = db.users
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                userid = x['id']
                name = x['name']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['userid'] = userid
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['userid'] = "-1"

        return json.dumps(retjson)


    if action == "addmeme":
        maxid = 1
        col = db.memes
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['userid']
        payload["url"] = request_json['url']
        payload["text"] = request_json['text']
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)



    if action == "getrandommeme":
        col = db.memes

        maxid = 0
        for x in col.find():
            maxid = int(x["id"])
        
        index = random.randint(1, maxid)

        for x in col.find():
            if x['id'] == str(index):
                sid = x['id']
                url = x['url']
                userid = x['userid']
                retjson = {}

                # retjson['dish'] = userid
                retjson['url'] = url
                retjson['id'] = sid
                retjson['userid'] = userid

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)    

    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
