from flask import Flask
import cbordScraper

app = Flask(__name__)


@app.route('/')
def getInformation():

    username = ''
    password = ''

    return cbordScraper.obtain_info(username, password)


