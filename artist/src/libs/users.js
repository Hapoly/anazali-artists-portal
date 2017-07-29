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
module.exports = {
	getNewSignUpRequests,
	getLastAcceptedUsers
}