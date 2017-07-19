curl -X POST \
  http://localhost:5042/register \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 5bc5a702-e039-c0e8-7cb2-369f19bd744b' \
  -d '{
    "first_name": "علیرضا",
    "last_name": "دربندی",
    "password": "1996",
    "email": "darbandi1996@gmail.com",
    "info": {
        "father_name": "#",
        "nickname": "#",
        "art_fields": [{
            "code": "#",
            "title": "#"
        }],
        "religion": {
            "code": "#",
            "title": "#"
        },
        "haebitate_status": {
            "length": "years",
            "place": {
                "code": "#",
                "title": "#"
            },
            "phone": "#",
            "cellphone": "#",
            "address": "#"
        },
        "educations": [{
            "degree": {
                "code": "#",
                "title": "#"
            },
            "field": {
                "code": "#",
                "titile": "#"
            }
        }],
        "birth": {
            "date": {
                "year": "#",
                "month": "#",
                "day": "#"
            },
            "place": "#"
        },
        "pictures": {
            "id_card": "image_id",
            "profile": "image_id"
        }
    },
    "token": {
        "created": "stamp",
        "expire": "stamp",
        "value": "#"
    },
    "status": {
        "code": "#",
        "title": "#"
    }
}'