from pymongo import MongoClient
from bson import ObjectId
import json
import sys

sys.path.append('controllers')
from controllers import *
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads'
URL = 'http://94.23.171.142:5000'

ALLOWED_EXTENSIONS = set(['jpg', 'jpeg'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
# db auth
username = input("mongoDB username: ")
password = input("mongoDB password: ")

print("connecting to mongodb")
client = MongoClient('mongodb://{0}:{1}@127.0.0.1'.format(username, password))
print("connected  to mongodb")

db = client.artists


# json encoder
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)