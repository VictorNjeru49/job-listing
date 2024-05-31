document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('job-listings');
            data.forEach(job => {
                const jobCard = document.createElement('div');
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
        })
        .catch(error => console.error('Error fetching job listings:', error));
});
