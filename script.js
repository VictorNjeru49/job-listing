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
            const jobCard = document.createElement('a');
            jobCard.href = `job.html?id=${job.id}`;
            jobCard.classList.add('job-card');
            
            jobCard.innerHTML = `
                <div class="job-header">
                    <img src="${job.logo}" alt="${job.company}">
                    <div class="job-info">
                        <h3>${job.position}</h3>
                        ${job.new ? '<span class="new">NEW!</span>' : ''}
                        ${job.featured ? '<span class="featured">FEATURED</span>' : ''}
                    </div>
                </div>
                <div class="job-details">
                    <span>${job.postedAt}</span>
                    <span>${job.contract}</span>
                    <span>${job.location}</span>
                </div>
                <div class="tags">
                    <span>${job.role}</span>
                    <span>${job.level}</span>
                    ${job.languages.map(lang => `<span>${lang}</span>`).join('')}
                    ${job.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            `;
            
            container.appendChild(jobCard);
        });
    }
});
