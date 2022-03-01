const header = document.getElementById('header')
const title = document.getElementById('title')
const user = {
    firstName: "Khaled",
    Last: "Amro",
    dob:"5/6/2003"
}

header.innerHTML = `
<h1>welcome Mr.${user.firstName} ${user.Last}</h1>

<h2>your birth date in our DataBase is ${user.dob}</h2>
` 

const renderUser = function (firstName,Last){
    header.innerHTML = `
    <h1>Welcome Mr.${firstName} ${Last}</h1>
    `

}
