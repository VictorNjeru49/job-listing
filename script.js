document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('joblistings');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayJobData(data);
        })
        .catch(error => {
            console.error('Cannot fetch:', error);
        });

    function displayJobData(jobs) {
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.href = `index.html?id=${job.id}`;
            jobCard.classList.add('jobcard');

            jobCard.innerHTML = `
            <div class="">
                <div class="jobheader">
                    <img src="${job.logo}" alt="${job.company}">
                    <div class="jobinfo">  
                    <div class="rightupper">
                        <p>${job.company}</p>       
                        ${job.new ? '<span class="new">NEW!</span>' : ''}
                        ${job.featured ? '<span class="featured">FEATURED</span>' : ''}
                        </div>
                       
                    </div>
                </div>
                <div class="tags">
                <div class="ones">
                    <h3>${job.position}</h3>
                </div>
                <div class="twos">
                    <span>${job.role}</span>
                    <span>${job.level}</span>
                    ${job.languages.map(lang => `<span>${lang}</span>`).join('')}
                    ${job.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
                </div>

                <div class="jobdetails">
                    <span>${job.postedAt}</span>
                    <span>${job.contract}</span>
                    <span>${job.location}</span>
                </div>
                
            `;
            
            container.appendChild(jobCard);
        });
    }

    const filterButtons = document.querySelectorAll('.filter');
    const clearButton = document.querySelector('.clear');

    let allJobs = [];
    let filters = [];



    filterButtons.forEach(jobs => {
        jobs.addEventListener('click', () => {
            console.log('filter');
            const filter = jobs.dataset.filter;
            if (filters.includes(filter)) {
                filters = filters.filter(f => f !== filter);
                jobs.classList.remove('active');
            } else {
                filters.push(filter);
                jobs.classList.add('active');
            }
            const filteredJobs = allJobs.filter(job => 
                filters.every(filter => 
                    job.role === filter || 
                    job.level === filter || 
                    job.languages.includes(filter) || 
                    job.tools.includes(filter)
                )
            );
            displayJobData(filteredJobs);
        });
    });

    clearButton.addEventListener('click', () => {
        filters = [];
        console.log('clear');
        filterButtons.forEach(button => button.classList.remove('active'));
        displayJobData(allJobs);
    });
});
