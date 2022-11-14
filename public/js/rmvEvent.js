const removeEvent = document.querySelector(".delete-event-button")

removeEvent.addEventListener("click", async event => {
    event.preventDefault();
    console.log("click click bish, another one in the basket")

    const res = await fetch("/api/events/", {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
        })
        if (res.ok) {
            location.reload();
        } else {
            alert("womp womp")
        }
});
