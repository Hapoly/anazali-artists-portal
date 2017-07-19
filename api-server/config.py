from pymongo import MongoClient

import sys
sys.path.append('controllers')
import auth

# db auth
username = "mr-exception"
password = "reza1996"

print("connecting to mongodb")
client = MongoClient('mongodb://{0}:{1}@127.0.0.1'.format(username, password))
print("connected  to mongodb")

db = client.artists