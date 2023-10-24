let url = "https://randomuser.me/api/"
let output = document.querySelector( ".person" )

async function generateUser()
{
    await fetch( url )
        .then( res => res.json() )
        .then( res =>
        {
            result = res.results[0]
            //profile
            let profile = result.picture
            let { large } = profile
            // Name
            let name = result.name
            let { title, first, last } = name
            // location
            let location = result.location
            let { city } = location
            // email
            let email = result.email
            // phone
            let phone = result.phone

            output.innerHTML = `<div class="person-data">
            <img src="${ large }" alt="Profile"  />

            <h5>First Name:<span>${ first }</span> </h5>
            <h5>Last Name:<span>${ last }</span> </h5>
            <h5>Location :<span>${ city }</span> </h5>
            <h5>Phone :<span>${ phone }</span> </h5>
            <h5> Email :<span>${ email }</span> </h5>
            <button onclick="generateUser()">Generate User</button>
        </div>`


        } )




}