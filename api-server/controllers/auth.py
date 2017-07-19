def register(data, db):
    errors = []

    user_informations = {}
    if 'first_name' not in data:
        errors.append(101)
    
    if 'last_name' not in data:
        errors.append(102)

    if 'password' not in data:
        errors.append(103)

    if 'email' not in data:
        errors.append(104)
    else:
        users = db['users'].find({'email': data['email']})
        for user in users:
            print('test')
        print('untest')
    
    if len(errors) > 0:
        return {
                'results' : 'failed',
                'errors' : errors
            }
    else:
        return {
                'result' : 'sucess',
                'info' : user_informations
            }