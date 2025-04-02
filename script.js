//your JS code here. If required.
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	const age = document.getElementById("age").value.trim()
	const name = document.getElementById("name").value.trim()
	if(!name || !age){
		alert("Please enter valid details")
	}
	else{
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if(parseInt(age)>18){
					resolve(`Welcome, ${name}. You can vote.`)
				} 
				else{
					reject(`Oh sorry ${name}. You aren't old enough.`)
				}
			},4000)
		})
		.then((message) => alert(message))
	}
})