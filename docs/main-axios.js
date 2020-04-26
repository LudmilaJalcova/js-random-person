const liElementName1 = document.getElementById('name')
const liElementLastName1 = document.getElementById('lastName')
const liElementLocation1 = document.getElementById('location')
const liElementPhone1 = document.getElementById('phone')
const liElementEmail1 = document.getElementById('email')
const imgOfPerson1 = document.getElementById('imgOfPerson')
const btnGeneratePerson1 = document.getElementById('btnGeneratePerson-axios')

const getPerson1 = async () => {
	try {
		const { data } = await axios('https://randomuser.me/api')

		// console.log(data.results[0].email)
		let img = `<img src="${data.results[0].picture.large}" alt="person" style="width:450px; height: 350px">`
		imgOfPerson1.innerHTML = img
		let name = `<li style="margin: 10px"><i  style="color: blue; margin-right:15px" class="fas fa-user"></i>Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px; ">${data.results[0].name.first}</span></li>`
		liElementName1.innerHTML = name
		let lastName = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-user"></i>Last Name : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].name.last}</span></li>`
		liElementLastName1.innerHTML = lastName
		let location = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-search-location"></i>Location : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].location.city}</span></li>`
		liElementLocation1.innerHTML = location
		let phone = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-phone"></i>Phone : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].phone}</span></li>`
		liElementPhone1.innerHTML = phone
		let email = `<li style="margin: 10px"><i style="color: blue; margin-right:15px" class="fas fa-envelope"></i>Email : <span style="background-color: grey; border-radius: 5px; color: white; padding:2px 5px">${data.results[0].email}</span></li>`
		liElementEmail1.innerHTML = email
	} catch (err) {
		console.log(err)
	}
}

btnGeneratePerson1.addEventListener('click', getPerson1)
