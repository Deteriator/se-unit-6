/**
 * EXERCISE 1:
 * Read this analogous conversation related to Promises.
 * Aftwerwards, explain the parts of his analogy to describe
 * how asynchronous calls and promises work.
 *
 * 		Raul: Hey Mx. Promise! Can you run to the store down the street
 * 		and get me itemA for this dish we are cooking tonight?
 *
 * 		Mx. Promise: Sure thing!
 *
 * 		Raul: While you are doing that, I will prepare itemB.
 * 		But make sure you let me know whether you could find itemA.
 *
 *		Mx. Promise: What if you are not at home when I am back?
 *
 *		Raul: In that case, send me a text message saying you are
 *		back and have the item for me.
 * 		If you don’t find it, call me back immediately.
 *
 * 		Mx. Promise: Sounds good! See you in a bit.
 */

const response1 = `
    Write youre response here.
 `;

/**
 * For exercises 2-5, use the `Random User Generator API` and
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
 * Exercise 2:
 *
 * Create a function called `logUsers` to log all information for
 * 500 users. Ensure that you only log the `results` from the
 * response object.
 */

const logUsers = (number = 10) => {
	const getUsers = fetch(`https://randomuser.me/api/?results=${number}`);

	return getUsers
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data.results;
		});
};
/**
 * Exercise 3:
 *
 * Create a function called `listTenNames` and then invoke it.
 * This function needs to
 * 1. log the first names of 10 random users.
 * 2. number each of the names from 1-10.
 */

const listTenNames = null; //Replace null with your solution code to exercise 3

/**
 * Exercise 4:
 * Create a function called `createPhoneBook` and invoke it.
 * This function needs to:
 * 1. get phone numbers for 25 users.
 * 2. and print each users name next to their phone number in a list
 * that shows up in the browser.
 * 3. *optional*: also print the names and phone numbers to the console.
 *
 */

async function createPhotoAlbum () {
		try {
		    const response = await fetch('https://randomuser.me/api/?results=25');
		    const json = await response.json()
		    const paintTable = await json.results.map(user =>{
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
              ${paintTable}
            </tbody>
            </table>
            `;
		    }

        }catch (err) {
    console.log('fetch failed', err);
  }

createPhotoAlbum()


async function createPhotoAlbum () {
		try {
		    const response = await fetch('https://randomuser.me/api/?results=25');
		    console.log(await response.text());
		  }
		catch{

		}
};


const logAJoke = () => {

		const getAJoke = fetch(
			'https://sv443.net/jokeapi/v2/joke/Programming?type=twopart'
		);
		return getAJoke
			.then(response => {
				return response.json();
			})
			.then(joke =>{
				console.log(`Setup: ${joke.setup}\nDelivery: ${joke.delivery}`);
	});
}


/**
 * Exercise 7:
 * Create a function called `showApiInfo`.
 *
 * This function needs to:
 * 1) use the /info endpoint to get information on about the joke API
 * 2)  within the body of the browser, show the info portion of the response object
 *
 */
const showApiInfo = null; //Replace null with your solution code to exercise 7

/**
 * EXERCISE 8:
 * Which manner of handling promises appears to be more advantageous:
 * .then() or async/await? Briefly explain.
 */

const response8 = `
	Write your response here
 `;
