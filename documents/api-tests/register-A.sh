curl -X POST \
  http://localhost:5000/test-output \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: f1238c37-a56b-4319-81d3-18a6ce97a86c' \
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