from bson import ObjectId
import hashlib
import time

def register(data, db):
    errors = []

    user_informations = {}
    if 'first_name' not in data:
        errors.append(101)
    if data['first_name'] == '':
        errors.append(101)

    if 'last_name' not in data:
        errors.append(102)
    if data['last_name'] == '':
        errors.append(102)

    if 'password' not in data:
        errors.append(103)
    if data['password'] == '':
        errors.append(103)

    if 'email' not in data:
        errors.append(104)
    else:
        if data['email'] == '':
            errors.append(104)

        # check if email exits
        users = db['users'].find({'email': data['email']})
        for user in users:
            errors.append(105)
            return {
                'results' : 'failed',
                'errors' : errors
            }
        
    if 'father_name' not in data:
        errors.append(107)
    if data['father_name'] == '':
        errors.append(107)

    if 'nickname' not in data:
        errors.append(108)
    if data['nickname'] == '':
        errors.append(108)


    
    if len(errors) > 0:
        return {
                'results' : 'failed',
                'errors' : errors
            }
    else:
        db['users'].insert({
            "first_name" : data['first_name'],
            "last_name" : data['last_name'],
            "password" : hashlib.sha256(bytes(data['password'], encoding='utf-8')).hexdigest(),
            "email" : data['email'],
            "info" : {
                "father_name" : data['father_name'],
                "nickname" : data['nickname']
            }
        })

        user_informations = db['users'].find_one({'email' : data['email']})
        user_informations['_id'] = str(user_informations['_id'])
        return {
                'result' : 'sucess',
                'info' : user_informations
            }

def login(data, db):
    hashed_password = hashlib.sha256(bytes(data['password'], encoding='utf-8')).hexdigest()
    
    user = db['users'].find_one({
        'email' : data['email'],
        'password' : hashed_password
    })

    token_string = hashlib.sha256(bytes('{0}:{1}'.format(data['email'], data['password'])
        , encoding='utf-8')).hexdigest()
    if user != None:
        db['users'].update({'email' : data['email']},
            {'$set' : {
                'token' : {
                    'token_string' : token_string,
                    'expire' : time.time() + (3600 * 24)
                }
            }})
        user = db['users'].find_one({
            'email' : data['email'],
            'password' : hashed_password
        })
        
        return {
            'result' : 'success',
            'user' : user
        }
    else:
        return {
            'result' : 'failed'
        }

def check_auth(data, db):
    token_string = data['token_string']
    user = db['users'].find_one({'token.token_string' : token_string})
    expire_time = float(user['token']['expire'])
    current_time = time.time()

    if current_time < expire_time:
        db['users'].update({'token.token_string' : token_string},
            {'$set' : {
                'token' : {
                    'token_string' : token_string,
                    'expire' : current_time + (3600 * 24)
                }
            }})
        user = db['users'].find_one({'token.token_string' : token_string})
        
        return {
            'result' : 'success',
            'user' : user
        }
    else:
        return {
            'result' : 'failed'
        }

def reset(data, db):
    for table in data['tables']:
        db[table].remove({})
    return {
        'result' : 'done'
        }