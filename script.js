//your JS code here. If required.
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	const age = document.getelementById("age")
	const name = document.getelementById("name")
	if(!name || !age){
		alert("Please enter valid details")
	}
	else{
		new Promise((resolve, reject) => {
			setTimeOut(() => {
				if(parseInt(age)>18){
					resolve(`Welcome, ${name}. You can Vote`)
				} 
				else{
					reject(`Oh sorry ${name}. You aren't old enough`)
				}
			})
		})
		.then((message) => alert(message))
	}
})