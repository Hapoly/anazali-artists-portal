def validate(user, db, temp = False):
    errors = []
    if temp:
        if '_id' not in user: # error
            errors.append(401) 

    if 'first_name' not in user: # error
        errors.append(402) 
    if 'last_name' not in user: # error
        errors.append(403) 
    if 'password' not in user: # error
        errors.append(404) 
    if 'email' not in user: # error
        errors.append(405) 
    
    if 'type' not in user: # error
        errors.append(406) 
    
    if 'info' not in user:
        errors.append(410) 
    else:
        if 'father_name' not in user['info']: # error
            errors.append(411)
        if 'nickname' not in user['info']: # error
            errors.append(412)
        if 'art_fields' not in user['info']: # error
            errors.append(413)
        else:
            if len(user['info']['art_fields']) < 0:
                errors.append(413)
            else:
                for art_field in user['info']['art_fields']: # error
                    if 'code' not in art_field:
                        errors.append(463)
                    if 'title' not in art_field:
                        errors.append(414)
        if 'religion' not in user['info']: # error
            errors.append(415)
        else:
            if 'code' not in user['info']['religion']: # error
                errors.append(416)
            if 'title' not in user['info']['religion']: # error
                errors.append(417)
        if 'habitate_status' not in user['info']: # error
            errors.append(418)
        else:
            if 'length' not in user['info']['habitate_status']: # error
                errors.append(418)
            if 'phone' not in user['info']['habitate_status']: # error
                errors.append(419)
            if 'cellphone' not in user['info']['habitate_status']: # error
                errors.append(420)
            if 'address' not in user['info']['habitate_status']: # error
                errors.append(421)
            if 'place' not in user['info']['habitate_status']: # error
                errors.append(422)
            else:
                if 'code' not in user['info']['habitate_status']['place']: # error
                    errors.append(423)
                if 'title' not in user['info']['habitate_status']['place']: # error
                    errors.append(424)

        if 'educations' not in user['info']: # error
            errors.append(425)
        else:
            for education in user['info']['educations']: # error
                if 'degree' not in education:
                    errors.append(426)
                else:
                    if 'code' not in education['degree']: # error
                        errors.append(427)
                    if 'title' not in education['degree']: # error
                        errors.append(428)
                if 'field' not in education:
                    errors.append(429)
                else:
                    if 'code' not in education['degree']: # error
                        errors.append(430)
                    if 'title' not in education['degree']: # error
                        errors.append(431)
        if 'birth' not in user['info']: # error
            errors.append(432)
        else:
            if 'date' not in user['info']['birth']: # error
                errors.append(433)
            else:
                if 'year' not in user['info']['birth']['date']: # error
                    errors.append(434)
                if 'month' not in user['info']['birth']['date']: # error
                    errors.append(435)
                if 'day' not in user['info']['birth']['date']: # error
                    errors.append(436)

            if 'place' not in user['info']['birth']: # error
                errors.append(437)
        
        if 'pictures' not in user['info']: # error
            errors.append(438)
        else:
            if 'id_card' not in user['info']['pictures']: # error
                errors.append(439)
            if 'profile' not in user['info']['pictures']: # error
                errors.append(440)

    return {
            'result' : len(errors) == 0,
            'errors' : errors
        }