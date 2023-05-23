const cards = document.querySelectorAll(".carta")

cards.forEach(card => {
    card.animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(3px)" },
        { transform: "translateY(3px)" },
        { transform: "translateY(0px)" },
    ], {
        duration: 2000
    })
})

setInterval(() => {
    cards.forEach(card => {
        card.animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(3px)" },
            { transform: "translateY(3px)" },
            { transform: "translateY(0px)" },
        ], {
            duration: 2000
        })
    })
}, 2000)

