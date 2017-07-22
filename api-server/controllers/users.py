import utility
from bson.objectid import ObjectId
import hashlib

'''
{
  "email" : "darbandi1996@gmail.com",
  "password" : "1996",
  "profile_id" : "5971e380ef2afe1887eae12f"
}
'''
def get_user_profile(data, db):
    permission = utility.get_permissoin_code(data['email'], data['password'], db)

    if permission == None:
        return {
            "result" : "failed",
            "error" : 109
        }
    else:
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