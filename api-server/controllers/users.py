import utility
from bson.objectid import ObjectId
import hashlib

import user_model
'''
{
  "email" : "darbandi1996@gmail.com",
  "password" : "1996",
  "profile_id" : "5971e380ef2afe1887eae12f"
}
'''
def get_user_profile(data, db):
    if ('email' not in data) or ('password' not in data):
        return {
            "result" : "failed",
            "error" : 109
        }
    permission = utility.get_permissoin_code(data['email'], data['password'], db)

    if permission == None:
        return {
            "result" : "failed",
            "error" : 109
        }
    else:
        if 'profile_id' not in data:
            return {
                "result" : "failed",
                "error" : 201
            }
        user = db['users'].find_one({'_id' : ObjectId(data['profile_id'])})
        if permission == "ADMIN":
            # user type is admin
            if user == None:
                return {
                    "result" : "failed",
                    "error" : 110
                }
            else:
                return {
                    "result" : "success",
                    "user" : user
                }
        else:
            # user type is regular
            if user['email'] == data['email']:
                return {
                    "result" : "success",
                    "user" : user
                }
            else:
                return {
                    "result" : "success",
                    "error" : 111
                }
'''
{
    "email" : "darbandi1996@gmail.com",
    "password" : "1996",
    "offset" : 0,
    "limit" : 10,
    "filter" : {
        "email" : "",
        "first_name" : "",
        "last_name" : "",
        "nickname" : ""
    }
}
'''
def get_users_list(data, db):

    if ('email' not in data) or ('password' not in data):
        return {
            "result" : "failed",
            "error" : 109
        }

    if ('offset' not in data) or ('limit' not in data) or ('filter' not in data):
        return {
            "result" : "failed",
            "error" : 202
        }

    if ('email' not in data['filter']) or ('first_name' not in data['filter']) or ('last_name' not in data['filter']) or ('nickname' not in data['filter']):
        return {
            "result" : "failed",
            "error" : 202
        }
    permission = utility.get_permissoin_code(data['email'], data['password'], db)

    if permission == None:
        return {
            "result" : "failed",
            "error" : 109
        }
    else:
        users = db['users'].find({
            'email'         : {'$regex' : data['filter']['email']},
            'first_name'    : {'$regex' : data['filter']['first_name']},
            'last_name'     : {'$regex' : data['filter']['last_name']},
            'info.nickname'      : {'$regex' : data['filter']['nickname']},

        }).limit(data['limit']).skip(data['offset'])
        
        if permission == "ADMIN":
            user_list = []
            
            for user in users:
                user_list.append(user)
            return {
                "result" : "success",
                "users" : user_list
            }
        else:
            # user type is regular
            return {
                "result" : "success",
                "error" : 111
            }
    
def create_new_user(data, db):
    if ('email' not in data) or ('password' not in data):
        return {
            "result" : "failed",
            "error" : 109
        }

    if ('user' not in data):
        return {
            "result" : "failed",
            "error" : 202
        }

    permission = utility.get_permissoin_code(data['email'], data['password'], db)

    if permission == None:
        return {
            "result" : "failed",
            "error" : 109
        }
    else:
        validate_result = user_model.validate(data['user'], db)
        if validate_result['result']:
            data['user']['status'] = {
                'code' : 0,
                'title' : 'pending'
            }
            user_id = db['users'].insert(data['user'])
            user_information = db['users'].find_one({'_id' : ObjectId(user_id)})
            return {
                'result' : 'success',
                'user' : user_information
            }
        else:
            return {
                'result' : 'failed',
                'errors' : validate_result['errors']
            }