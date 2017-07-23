def validate_temp_user(user, db, temp = False):
    errors = []
    if temp:
        if '_id' not in user:
            errors.append(401) # user does not have id

    if 'first_name' not in user:
        errors.append(402) # user does not have first name
    if 'last_name' not in user:
        errors.append(403) # user does not have last name
    if 'password' not in user:
        errors.append(404) # user does not have password
    if 'email' not in user:
        errors.append(405) # user does not have email
    
    if 'type' not in user:
        errors.append(406) # user does not have type
    
    if 'status' not in user:
        errors.append(407) # user does not have any status
    else:
        if 'code' not in user['status']:
            errors.append(408) # user does not have any code
        if 'title' not in user['status']:
            errors.append(409) # user does not have any title
    
    if 'info' not in user:
        errors.append(410) # user does not have any info
    else:
        if 'father_name' not in user['info']:
            errors.append(411)
        if 'nickname' not in user['info']:
            errors.append(412)
        if 'art_fields' not in user['info']:
            errors.append(413)
        else:
            if len(user['info']['art_fields']) < 0:
                errors.append(412)
            else:
                for art_field in user['info']['art_field']:
                    if 'code' not in art_field:
                        errors.append(413)
                    if 'title' not in art_field:
                        errors.append(414)
        if 'relogion' not in user['info']:
            errors.append(415)
        else:
            if 'code' not in user['info']['religion']:
                errors.append(416)
            if 'title' not in user['info']['religion']:
                errors.append(417)
        if 'habitate_status' not in user['info']:
            errors.append(418)
        else:
            if 'length' not in user['info']['habitate_status']:
                errors.append(418)
            if 'phone' not in user['info']['habitate_status']:
                errors.append(419)
            if 'cellphone' not in user['info']['habitate_status']:
                errors.append(420)
            if 'address' not in user['info']['habitate_status']:
                errors.append(421)
            if 'place' not in user['info']['habitate_status']:
                errors.append(422)
            else:
                if 'code' not in user['info']['habitate_status']['place']:
                    errors.append(423)
                if 'title' not in user['info']['habitate_status']['place']:
                    errors.append(424)

        if 'educations' not in user['info']:
            errors.append(425)
        else:
            for education in user['info']['educations']:
                if 'degree' not in education:
                    errors.append(426)
                else:
                    if 'code' not in education['degree']:
                        errors.append(427)
                    if 'title' not in education['degree']:
                        errors.append(428)
                if 'field' not in education:
                    errors.append(429)
                else:
                    if 'code' not in education['degree']:
                        errors.append(430)
                    if 'title' not in education['degree']:
                        errors.append(431)
        if 'birth' not in user['info']:
            errors.append(432)
        else:
            if 'date' not in user['info']['birth']:
                errors.append(433)
            else:
                if 'date' not in user['info']['birth']['date']:
                    errors.append(434)
                if 'month' not in user['info']['birth']['date']:
                    errors.append(435)
                if 'day' not in user['info']['birth']['date']:
                    errors.append(436)

            if 'plcae' not in user['info']['birth']:
                errors.append(437)
        
        if 'pictures' not in user['info']:
            errors.append(438)
        else:
            if 'id_card' not in user['info']['picture']:
                errors.append(439)
            if 'profile' not in user['info']['picture']:
                errors.append(440)