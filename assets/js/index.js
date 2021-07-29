window.onload = () => {
    fetch('/assets/data/projects.json')
    .then(async(res) => {
        to_append = ''
        const { projects } = await res.json()
        const projectsForLatestYear = projects[Object.keys(projects)[Object.keys(projects).length-1]]
        projectsForLatestYear.forEach(p => {
            if(projectsForLatestYear.indexOf(p) < 2) {
                to_append += 
                `<div class="project">
                <h2>${p.title}</h2>
                <p class="about">${p.description}</p>
                <div id="links">
                    <a href="${p.website}" target="_blank">website</a><a href="${p.source}" target="_blank">source</a>
                </div>
                </div>`
            }
        })
        document.getElementById('projects').innerHTML += to_append
        console.log(to_append)
    })
    .catch(e => { console.log(e) })
}