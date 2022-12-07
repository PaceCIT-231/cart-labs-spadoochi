let formFields = new URLSearchParams(window.location.search)

document.querySelector("body").innerHTML = `Thank you for your purchase
${formFields.get("name")}`
