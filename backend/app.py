from flask import Flask, request
from flask_cors import CORS
import cbordScraper

app = Flask(__name__)

@app.route('/', methods = ['GET','POST'])
def getInformation():
    # if request.data and request.method == 'POST':
    #     data = request.get_json()
    #     username = data["username"]
    #     password = data["password"]
    username = "msierzega"
    password = "puFFins2()@w473r"
    return cbordScraper.obtain_info(username, password)
    # else: return "Failed" 

cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response



if __name__ == "__main__":
    app.run()
