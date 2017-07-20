from bson import ObjectId
import hashlib

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