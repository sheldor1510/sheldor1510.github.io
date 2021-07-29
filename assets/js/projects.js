window.onload = () => {
    fetch('/assets/data/projects.json')
    .then(async(res) => {
        to_append = ''
        const { projects } = await res.json()
        for (const key in projects) {
            year_to_append = ''
            year_to_append += `<p id="year">${key}</p>`
            year_to_append += `<div class="projects">`
            projects[key].forEach(p => {
                year_to_append += 
                `<div class="project-card">
                    <img src="${p.image}">
                    <h2>${p.title}</h2>
                    <p class="about">${p.description}</p>
                    <div id="links">
                        <a href="${p.website}" target="_blank">website</a><a href="${p.source}" target="_blank">source</a>
                    </div>
                </div>`
            })
            year_to_append += `</div>`
            to_append = year_to_append + to_append
        }
        document.getElementById('main').innerHTML += to_append
    })
    .catch(e => { console.log(e) })
}