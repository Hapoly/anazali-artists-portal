from flask import Flask, request
import json

# configuration file
from config import *

app = Flask(__name__)

@app.route("/")
def index():
    return "this is api server version (1.0.0)"

# auth : login and register apis
@app.route("/register", methods=['POST'])
def register():
    return json.dumps(auth.register(request.json, db))

@app.route("/login", methods=['POST'])
def login():
    return "this is athe login method"


@app.route('/test-output', methods=['GET', 'POST'])
def test_output():
    content = request.json
    return json.dumps(content)

if __name__ == "__main__":
    app.run(host='0.0.0.0')