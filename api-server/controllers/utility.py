import hashlib

def get_permissoin_code(email, password, db):

    user = db['users'].find_one({
        'email' : email,
        'password' : hashlib.sha256(bytes(password, encoding='utf-8')).hexdigest(),
    })

    if user == None:
        return None
    else:
        return user['type']