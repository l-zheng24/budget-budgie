from flask import Flask, request
from flask_cors import CORS, cross_origin
import cbordScraper
import json

app = Flask(__name__)

@cross_origin
@app.route('/', methods = ['GET','POST'])
def getInformation():
    data = json.loads(request.get_data())
    username = data["username"]
    password = data["password"]
    return cbordScraper.obtain_info(username, password)

cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}})

@cross_origin
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response



if __name__ == "__main__":
    app.run()