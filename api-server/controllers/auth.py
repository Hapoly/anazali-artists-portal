from bson.objectid import ObjectId
import hashlib
import time
import user_model

def register(data, pictures, db):
    
    data['info']['pictures'] = pictures
    data['type'] = 'REG'

    validate_result = user_model.validate(data, db)
    if validate_result['result']:
        old_user_with_same_email = db['users'].find_one({'email' : data['email']})
        if old_user_with_same_email not None:
            return {
                'result' : 'success',
                'errors' : [105]
            }
        
        data['status'] = {
            "code": 0,
            "title": "درخواست داده شده برای ثبت نام"
        }
        
        user_id = db['users'].insert(data)
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