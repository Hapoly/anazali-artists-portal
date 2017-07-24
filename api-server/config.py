from pymongo import MongoClient
from bson import ObjectId
import json
import sys

sys.path.append('controllers')
from controllers import *

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