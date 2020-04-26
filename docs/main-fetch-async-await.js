const getFetchAsyncAwaitTryCatch = async () => {
	try {
		const res = await fetch('https://randomuser.me/api')
		const data = await res.json()
		// console.log(data.results[0].email)
		document.getElementById(
			'imgOfPerson'
		).innerHTML = `<img src="${data.results[0].picture.large}" alt="person" style="width:450px; height: 350px">`
		document.getElementById(
			'name'
		).innerHTML = `<li style="margin: 10px"><i  style="color: blue; margin-right:15px" class="fas fa-user"></i>Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px; ">${data.results[0].name.first}</span></li>`
		document.getElementById(
			'lastName'
		).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-user"></i>Last Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].name.last}</span></li>`
		document.getElementById(
			'location'
		).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-search-location"></i>Location : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].location.city}</span></li>`
		document.getElementById(
			'phone'
		).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-phone"></i>Phone : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].phone}</span></li>`
		document.getElementById(
			'email'
		).innerHTML = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-envelope"></i>Email : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].email}</span></li>`
	} catch (err) {
		console.log(err)
	}
}

document
	.getElementById('btnGeneratePerson-fetch-async-await')
	.addEventListener('click', getFetchAsyncAwaitTryCatch)
