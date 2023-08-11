const jokepara = document.getElementById("jokepara");
fetch("https://icanhazdadjoke.com/slack")
    .then((resp) => {
        resp.json()
        .then((data)=>{
            jokepara.innerText = data.attachments[0].text;
            console.log(data.attachments[0].text);
        })
    })
    .catch((err) => {
        jokepara.innerText = "Error";
    });