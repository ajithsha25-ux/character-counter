
const textarea = document.getElementById("message")
const counter = document.getElementById("counter")
const warning = document.getElementById("warning")

const maxChars = 200

textarea.addEventListener("input", function(){

let length = textarea.value.length

if(length > maxChars){

textarea.value = textarea.value.substring(0,maxChars)
length = maxChars
warning.textContent = "Maximum character limit reached."

}else{

warning.textContent = ""

}

counter.textContent = length + " / " + maxChars + " characters"

})