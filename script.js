async function generateIdea() {
    const result = document.getElementById("result")
    const setup = document.getElementById("activity")
    const punchline = document.getElementById("type")
    const screenshoot = document.getElementById("screenshoot")

    const url = "https://official-joke-api.appspot.com/random_joke";
    const respone = await fetch(url);
    const api = await respone.json();

    setup.textContent = api.setup
    punchline.textContent = api.punchline

    setup.style.display = "block"
    punchline.style.display = "block"

    let count = 0;


    screenshoot.addEventListener("click", function() {
        // if(count) return window.location.reload();
        count && location.reload();

        html2canvas(result).then(callback => {
            screenshoot.setAttribute("href", callback.toDataURL("image/png"));
            screenshoot.textContent = "📥"
            count = 1;
        });
    });
};



