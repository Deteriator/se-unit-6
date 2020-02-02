/**
 * For exercises 1-4, use the `Random User Generator API` and
 * write your solutions using .then() syntax.
 *
 * TIPS:
 * 1) Read the documentation for the  `Random user API`:
 * https://randomuser.me/documentation.
 *
 * 2) Drag the `get-requests.html` file to a Google Chrome browser tab.
 * Open up the developer console.
 *
 * 3) Keep your browsers and console tiddy by commenting out all code
 * except for the solution to the exercise that you are currently
 * working on.
 *
 */

/**
 * Exercise: 1
 *
 * Create a function called `logUsers` to log all information for
 * 500 users. Ensure that you only log the `results` from the
 * response object.
 */

const logUsers = () => {
	const getUsers = fetch('https://randomuser.me/api/?results=500');

	getUsers
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log('Here are the users:', data.results);
		});
};

logUsers();

/**
 * Exercise: 2
 *
 * Create a function called `listTenNames` and then invoke it.
 * This function needs to
 * 1. log the first names of 10 random users.
 * 2. number each of the names from 1-10.
 */

const listTenNames = () => {
	const getUsers = fetch('https://randomuser.me/api/?results=10');

	getUsers
		.then(response => {
			return response.json();
		})
		.then(data => {
			const {
				results
			} = data; /** <-- a developer could also use: const results = data.results. But this solution makes use of the `destructuring assignment`. Find more details on MDN.*/
			results.forEach((user, index) => {
				console.log(`Here is user ${index + 1}, ${user.name.first}`);
			});
		});
};

listTenNames();

/**
 * Exercise: 3
 * Create a function called `createPhoneBook` and invoke it.
 * This function needs to:
 * 1. get phone numbers for 25 users.
 * 2. and print each users name next to their phone number in a list
 * that shows up in the browser.
 * 3. *optional*: also print the names and phone numbers to the console.
 *
 */

const createPhoneBook = () => {
	const getUsers = fetch('https://randomuser.me/api/?results=25');
	const main = document.getElementById('main');

	getUsers
		.then(response => {
			return response.json();
		})
		.then(data => {
			const { results } = data;

			const phoneNumbers = results
				.map(user => `<li>${user.name.first}: ${user.phone}</li>`)
				.join('\n');

			main.innerHTML = `
				<h2>User Phone Numbers:</h2>
				<ul>${phoneNumbers}</ul>
			`;
		});
};

createPhoneBook();

/**
 * Exercise 4:
 *
 * Create a function called `createPhotoAlbum` and invoke it.
 *
 * This function needs to:
 * 1) get 10 users who all identify as the same gender and same nationality
 * 2) display a simple html table with the users' names and photos
 * 3) give the table a title and ensure both rows have a label.
 *
 * You may choose the size of the photo to display. Styling the table is optional.
 *
 * NOTE: The random user api allows for parameters to be combined
 * using this format: `randomuser.me/api/?parameter1=value1&parameter2=value2`.
 * See the `Pagination` portion of the documentation to see an example query
 * with multiple parameters
 */

const createPhotoAlbum = () => {
	const getFrenchFolks = fetch(
		'https://randomuser.me/api/?results=10&gender=female&nat=fr'
	);
	const main = document.getElementById('main');

	getFrenchFolks
		.then(response => {
			return response.json();
		})
		.then(data => {
			const { results } = data;

			/**
			 * NOTE on below use of the join() method:
			 * Use .join() at the end of the .map() function, which returns an array.
			 * When you're adding photoTable.map(user) to the existing innerHTML string,
			 * HTML converts the array into a string, which includes the commas
			 * between each index. Using a .join('') call at the end everything
			 * will join the array elements back into a string.
			 */
			const photoTable = results
				.map(user => {
					const firstName = user.name.first;
					const photoUrl = user.picture.medium;
					return `
                    <tr>
                        <td>${firstName}</td>
                        <td>
                            <img src=${photoUrl} alt=${firstName}>
                        </td>
                    </tr>
                `;
				})
				.join('');

			main.innerHTML = `
            <h2>Photo Album</h2>
            <table style="width:100%">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Photo</th>
              </tr>
              ${photoTable}
            </tbody>
            </table>
            `;
		});
};

createPhotoAlbum();

/**
 * For exercises 5-6, use the `Joke API` and
 * write your solutions using the async/await syntax
 *
 * TIPS:
 * 1) Read the documentation for the  `Joke API`:
 * https://sv443.net/jokeapi/v2#endpoints.
 *
 */

/**
 * Exercise 5:
 * Create a function called `logAJoke`.
 *
 * This function needs to:
 * 1) get 1 joke that is about programming and is in a two-part format.
 * 2) log the setup and delivery of the joke on separate lines
 */

const logAJoke = async () => {
	const getAJoke = await fetch(
		'https://sv443.net/jokeapi/v2/joke/Programming?type=twopart'
	);
	const joke = await getAJoke.json();
	console.log(`Setup: ${joke.setup}\nDelivery: ${joke.delivery}`);
};
logAJoke();

/**
 * Exercise 6:
 * Create a function called `showApiInfo`.
 *
 * This function needs to:
 * 1) use the /info endpoint to get information on about the joke API
 * 2)  within the body of the browser, show the info portion of the response object
 *
 */

const main = document.getElementById('main');

const showApiInfo = async () => {
	const getApiInfo = await fetch('https://sv443.net/jokeapi/v2/info');
	const data = await getApiInfo.json();
	main.innerHTML = data.info;
};
showApiInfo();
