from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin
import json
import os
# configuration file
from config import *

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

@app.route("/")
@cross_origin()
def index():
    return "this is api server version (1.0.0)"

# auth : login and register apis
@app.route("/register", methods=['POST'])
@cross_origin()
def register():
    profile = request.files['profile']
    scan = request.files['scan']
    user_info = request.form['info']

    if not allowed_file(profile.filename) or not allowed_file(scan.filename):
        return json.dumps({
            'result' : 'failed',
            'errors' : [501]
            })
    # weak. need to fix (debug)
    profile_filename = secure_filename(profile.filename)
    profile.save(os.path.join(app.config['UPLOAD_FOLDER'], profile_filename))
    scan_filename = secure_filename(scan.filename)
    scan.save(os.path.join(app.config['UPLOAD_FOLDER'], scan_filename))

    
    if user_info == None:
        return '-Error'

    user_info = json.loads(user_info)
    return JSONEncoder().encode(auth.register(user_info, {
            'id_card' : scan_filename,
            'profile' : profile_filename
        },db))

@app.route("/login", methods=['POST'])
@cross_origin()
def login():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(auth.login(request.json, db))

@app.route("/check-auth", methods=['POST'])
@cross_origin()
def check_auth():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(auth.check_auth(request.json, db))

# user management routes
@app.route("/profile", methods=['POST'])
@cross_origin()
def get_profule():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(users.get_user_profile(request.json, db))

@app.route("/users", methods=['POST'])
@cross_origin()
def users_list():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(users.get_users_list(request.json, db))

@app.route("/user-new", methods=['POST'])
@cross_origin()
def new_user():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(users.create_new_user(request.json, db))

@app.route("/user-edit", methods=['POST'])
@cross_origin()
def edit_user():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(users.edit_user(request.json, db))

@app.route("/user-remove", methods=['POST'])
@cross_origin()
def remove_user():
    if request.json == None:
        return '-Error'
    return JSONEncoder().encode(users.remove_user(request.json, db))

# debug apis
@app.route("/reset", methods=['POST'])
@cross_origin()
def reset():
    return JSONEncoder().encode(auth.reset(request.json, db))


@app.route('/test-output', methods=['GET', 'POST'])
@cross_origin()
def test_output():
    content = request.json
    return JSONEncoder().encode(content)

@app.route('/image/<image_name>', methods=['GET', 'POST'])
@cross_origin()
def image(image_name):
    # this is a bug :) just spoiling!
    return send_file('{1}/{0}'.format(image_name, UPLOAD_FOLDER), mimetype='image/gif')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
