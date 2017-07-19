from pymongo import MongoClient

import sys
sys.path.append('controllers')
import auth

print("connecting to mongodb")
client = MongoClient('mongodb://127.0.0.1')
print("connected  to mongodb")

db = client.artists