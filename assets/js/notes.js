window.onload = () => {
    fetch('/assets/data/notes.json')
    .then(async(res) => {
        to_append = ''
        const { notes } = await res.json()
        notes.forEach(n => {
            to_append += 
            `<div class="note">
                <p>${n.date}</p><a href="/notes/${n.file_name}"><p class="title">${n.title}</p></a>
            </div>`
        })
        document.getElementById('notes').innerHTML += to_append
    })
    .catch(e => { console.log(e) })
}