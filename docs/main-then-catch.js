const getFetchThenCatch = () => {
	fetch('https://randomuser.me/api')
		.then(res => res.json())
		.then(data => {
			const results = data.results[0]
			// const name = results.name
			// const picture = results.picture
			// const location = results.location
			// const phone = results.phone
			// const email = results.email
			// to iste pomocou deštruktra
			const { picture, name, location, phone, email } = results
			// tieto dve funkcie su importnute z kniznice pomocou array napr.
			// toto sa nachadza v subore kniznica.js
			// const functionA = () => console.log('a')
			// const functionB = () => console.log('b')
			// const array = [functionA, functionB]
			// export default array
			// ------
			// const array = require('cesta k suboru kniznica.js')
			// const [functionA, FunctionB] = array // destruktorom som si vytiahol dve funkcie z pola
			// functionA()
			// FunctionB()
			document.getElementById(
				'imgOfPerson'
			).innerHTML = `<img src="${picture.large}" alt="person" style="width:128px; height: 128px">`
			document.getElementById(
				'name'
			).innerHTML = `<li style="margin: 10px"><i  style="color: blue; margin-right:15px" class="fas fa-user"></i>Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px; ">${name.first}</span></li>`
			document.getElementById(
				'lastName'
			).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-user"></i>Last Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${name.last}</span></li>`
			document.getElementById(
				'location'
			).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-search-location"></i>Location : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${location.city}</span></li>`
			document.getElementById(
				'phone'
			).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-phone"></i>Phone : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${phone}</span></li>`
			document.getElementById(
				'email'
			).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-envelope"></i>Email : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${email}</span></li>`
		})
		.catch(err => console.log(err))
}

document
	.getElementById('btnGeneratePerson-then-catch')
	.addEventListener('click', getFetchThenCatch)
