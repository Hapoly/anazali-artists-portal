from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

# configuration file
from config import *

app = Flask(__name__)
CORS(app)

@app.route("/")
@cross_origin()
def index():
    return "this is api server version (1.0.0)"

# auth : login and register apis
@app.route("/register", methods=['POST'])
@cross_origin()
def register():
    return json.dumps(auth.register(request.json, db))

@app.route("/login", methods=['POST'])
def login():
    return json.dumps(auth.login(request.json, db))

@app.route("/reset", methods=['POST'])
def reset():
    return json.dumps(auth.reset(request.json, db))

@app.route('/test-output', methods=['GET', 'POST'])
def test_output():
    content = request.json
    return json.dumps(content)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
