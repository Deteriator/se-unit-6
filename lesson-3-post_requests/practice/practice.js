const createAUser = (first_name, jobTitle) => {
	if (typeof first_name != 'string' || typeof jobTitle != 'string') {
		throw new Error(
			'Please make sure both paramiters are in string format and try again!'
		);
	}

	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: {
			name: first_name,
			job: jobTitle
		}
	})
		.then(response => {
			if (response.status >= 400) {
				console.log(
					`${response.status} was returned. The user was not created, try again please.`
				);
			} else {
				console.log(`The user named __${first_name}__ was created as a __${jobTitle}__!`);
			}
		})
		.catch(err => {
			console.error(`New User could not be created: ${err}`);
		});
};

createAUser('John','Spagetti Instructor')


const registerEmail = (uEmail, uPassword) => {
	if (typeof uEmail != 'string' || typeof uPassword != 'string') {
		throw new Error(
			'Please make sure both paramiters are in string format and try again!'
		);
	}


	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: {
			email: uEmail,
			password: uPassword
		}
	})
		.then(response => {
			if (response.status >= 400) {
				console.log(
					`${response.status} was returned. The email was not registered, try again please.`
				);
			} else {
				console.log(`The __${uEmail}__ was registered!`);
			}
		})
		.catch(err => {
			console.error(`The email c could not be registered: ${err}`);
		});
};

registerEmail('John','Spagetti Instructor')