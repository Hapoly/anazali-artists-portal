const React = require('react');
const getNewSignUpRequests = (component, email, password) => {
	var list =  [
		{
			firstName : 'عباس',
			lastName : 'احمدی',
			id	: '435'
		},{
			firstName : 'زهرا',
			lastName : 'ماسوله',
			id	: '475'
		},
	];
	var results = [];
    for(var i =0; i<list.length; i++){
      var req = list[i];
      console.log("test");
      results.push(<tr>
                <td style={{textAlign : "right"}}>{req.firstName}</td>
                <td style={{textAlign : "right"}}>{req.lastName}</td>
                <td>
                <a href="!#"><i className="small material-icons">info_outline</i></a>
                </td>
                <td>
                <button className="btn btn-success btn-sm">تایید</button> <button className="btn btn-danger btn-sm">رد</button>
                </td>
                </tr>
        );
	}
	component.setState({
		signupRequests : results
	});
}

const getLastAcceptedUsers = (email, password, on_response) => {
	var list = [
		{
			firstName : 'امیر',
			lastName : 'یگانه',
			id : '4321',
			fields : [
				{
					id : '48343',
					title : 'جوشکاری'
				}
			]
		}
	]
}

const getAllUsers = (email, password, offset, limit, filters, on_success, on_failed) => {
	var data = JSON.stringify({
		"email": email,
		"password": password,
		"offset": offset,
		"limit": limit,
		"filter": filters
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
			var res = JSON.parse(this.responseText);
			console.log(res);
			if(res.result === 'success')
				on_success(res.users);
			else if(res.result === 'failed')
				on_failed();
		}
	});

	xhr.open("POST", "http://94.23.171.142:5000/users");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}
module.exports = {
	getNewSignUpRequests,
	getLastAcceptedUsers,
	getAllUsers,
}