(function() { 
    console.log("Made by Javelin Web Designs")

    var url = "https://discord.com/api/webhooks/1245652265398960148/ZI5OthBW4Hu7PjWZt4-2vw5vgaU-EGOagF9t75J0RRMZcq5mdG0etofdPzQv34o__Zoc"
    var button = document.getElementById("send-request")

    function sendRequest(language, links, experience) {
        const message = {
            embeds: [
                {
                    title: "Application for " + language,
                    description: links.concat("\nExperience: ", experience)
                }
            ]
        }

        const xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
        xhr.setRequestHeader("Content-Type", "application/json")

        const payload = JSON.stringify(message)
        xhr.send(payload)
    }

    if (button) {
        button.addEventListener('click', (event) => {
            event.preventDefault()

            const title = document.querySelector(".input-box-language").value
            const links = document.querySelector(".input-box-description").value
            const experience = document.querySelector(".input-box-years").value
            const user = document.querySelector(".input-box-user").value
    
            sendRequest(title, "Links: ".concat(links), experience.concat("\nUser: ", user))
        })
    }
})()