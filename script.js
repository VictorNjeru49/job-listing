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
                <div class="heads">
                <div class="jobheader">
                    <img src="${job.logo}" alt="${job.company}">
                  </div>

                  <div class="sections">  
                    
                    <div class="rightupper">
                        <p>${job.company}</p>       
                        ${job.new ? '<span class="new">NEW!</span>' : ''}
                        ${job.featured ? '<span class="featured">FEATURED</span>' : ''}
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
                </div>
                
            `;
            
            container.appendChild(jobCard);
        });
    }

//     const filterButtons = document.querySelectorAll('.filter');
//     const clearButton = document.querySelector('.clear');

//     let allJobs = [];
// //     let filters = [];



// //     filterButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             console.log('filter');
// //             const filter = button.dataset.filter;
// //             if (filters.includes(filter)) {
// //                 filters = filters.filter(f => f !== filter);
// //                 button.classList.remove('active');
// //             } else {
// //                 filters.push(filter);
// //                 button.classList.add('active');
// //             }
// //             const filteredJobs = allJobs.filter(job => 
// //                 filters.every(filter => 
// //                     job.role === filter || 
// //                     job.level === filter || 
// //                     job.languages.includes(filter) || 
// //                     job.tools.includes(filter)
// //                 )
// //             );
// //             displayJobData(filteredJobs);
// //         });
// //     });

// //     clearButton.addEventListener('click', () => {
// //         filters = [];
// //         console.log('clear');
// //         filterButtons.forEach(button => button.classList.remove('active'));
// //         displayJobData(allJobs);
// //     });

    
// //     filterButtons.forEach(button => {
// //     button.addEventListener('change',(e)=>{
// //         const search = e.target.value;
// //         if(search === 'all'){
// //             displayJobData(allJobs);
// //         }else{
// //             const filteredJobs = allJobs.filter(job => job.role === search);
// //             displayJobData(filteredJobs);
// //         };
// //         displayJobData(filteredJobs);
// // });
// //     });



// // const filterButtons = document.querySelectorAll('.filter');
// //     const clearButton = document.querySelector('.clear');

    // let filters = [];

// //     filterButtons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             console.log('filter');
// //             const filter = button.dataset.filter;
// //             if (filters.includes(filter)) {
// //                 filters = filters.filter(f => f !== filter);
// //                 button.classList.remove('active');
// //             } else {
// //                 filters.push(filter);
// //                 button.classList.add('active');
// //             }
// //             const filteredJobs = allJobs.filter(job =>
// //                 filters.every(f =>
// //                     job.role === f ||
// //                     job.level === f ||
// //                     job.languages.includes(f) ||
// //                     job.tools.includes(f)
// //                 )
// //             );
// //             displayJobData(filteredJobs);
// //         });
// //     });

// //     clearButton.addEventListener('click', () => {
// //         console.log('clear');
// //         filters = [];
// //         filterButtons.forEach(button => button.classList.remove('active'));
// //         displayJobData(allJobs);
// //     });




// function filteroptions() {
//     filterContainer.innerHTML = '';
//     filters.forEach(filter => {
//         const filterElement = document.createElement('div');
//         filterElement.className = 'filter';
//         filterElement.textContent = filter;
//         filterElement.addEventListener('click', () => {
//             filters.delete(filter);
//             renderFilters();
//             fetch('./data.json')
//                 .then(response => response.json())
//                 .then(data => {
//                     renderJobs(data);
//                 });
//         });
//         filterContainer.appendChild(filterElement);
//     });
// }
// // filter listeners for filtering events
// function jobsviewed(jobs) {
//     document.addEventListener('click', (event) => {
//         if (event.target.classList.contains('language') ||
//             event.target.classList.contains('role') ||
//             event.target.classList.contains('level') ||
//             event.target.classList.contains('tool')) {
//             const filter = event.target.textContent;
//             filters.add(filter);
//             renderFilters();
//             renderJobs(jobs);
//         }
//     });
// }



// let allJobsData = [];
// let selectedFilters = [];


// const infoRightInner = document.createElement('div');
// infoRightInner.classList.add('infoRightInner');

// const rolesAndSkills = [job.role, job.level, ...job.languages, ...job.tools];
// rolesAndSkills.forEach(item => {
//     const button = document.createElement('button');
//     button.classList.add('button');
//     button.innerHTML = item;
//     button.addEventListener('click', () => addFilter(item));
//     infoRightInner.appendChild(button);
// });

// infoLeft.appendChild(infoLeftTop);
// infoLeft.appendChild(infoLeftMiddle);
// infoLeft.appendChild(infoLeftBottom);
// info.appendChild(infoLeft);
// jobListing.appendChild(image);
// jobListing.appendChild(info);
// jobListing.appendChild(infoRightInner);

// return jobListing;


// function addFilter(category) {
//     if (!selectedFilters.includes(category)) {
//         selectedFilters.push(category);
//         updateSearchInput();
//         filterJobs();
//     }
// }

// function updateSearchInput() {
//     const search = document.querySelector('.clear');
//     const clear= document.createElement('button');
//     clear.innerText = 'Clear'
//     search.innerHTML = ''; 
//     search.style.display='flex'
//     clear.addEventListener('click', () => {
//         selectedFilters = [];
//         updateSearchInput();
//         filterJobs();
//         search.style.display='none'
//     });
//     search.appendChild(clear);
//     selectedFilters.forEach(filter => {
//         const filterElement = document.createElement('p');
//         filterElement.innerText = filter;
//         search.appendChild(filterElement);
//     });
// }

// function filterJobs() {
//     const filteredJobs = allJobsData.filter(job => {
//         const rolesAndSkills = [job.role, job.level, ...job.languages, ...job.tools];
//         return selectedFilters.every(filter => rolesAndSkills.includes(filter));
//     });

//     const jobListingElement = document.getElementById('joblistings');
//     jobListingElement.innerHTML = '';

//     filteredJobs.forEach(job => {
//         const jobListing = generateJobListing(job);
//         jobListingElement.appendChild(jobListing);
//     });
// }

// window.addEventListener('DOMContentLoaded', async () => {
//     allJobsData = await importData();
//     if (allJobsData && allJobsData.length) {
//         allJobsData.forEach((job) => {
//             const jobListing = generateJobListing(job);
//             document.querySelector('#joblistings').appendChild(jobListing);
//         });
//     }});



//   const filterLevel = document.getElementById('filter-level');
//   const filterRole = document.getElementById('filter-role');
//   const filterLanguage = document.getElementById('filter-language');
//   const filterTool = document.getElementById('filter-tool');


// function populateFilters(jobs) {
//     const uniqueLevels = [...new Set(jobs.map(job => job.level))];
//     const uniqueRoles = [...new Set(jobs.map(job => job.role))];
//     const uniqueLanguages = [...new Set(jobs.flatMap(job => job.languages))];
//     const uniqueTools = [...new Set(jobs.flatMap(job => job.tools))];

//     populateSelect(filterLevel, uniqueLevels);
//     populateSelect(filterRole, uniqueRoles);
//     populateSelect(filterLanguage, uniqueLanguages);
//     populateSelect(filterTool, uniqueTools);
//   }

//   function populateSelect(select, options) {
//     options.forEach(option => {
//       const optionElement = document.createElement('option');
//       optionElement.value = option;
//       optionElement.textContent = option;
//       select.appendChild(optionElement);
//     });
//   }

//   function filterJobs() {
//     const jobCards = document.querySelectorAll('.jobcard');

//     jobCards.forEach(jobCard => {
//       const job = JSON.parse(jobCard.dataset.job);
//       const levelMatch = filterLevel.value === '' || job.level === filterLevel.value;
//       const roleMatch = filterRole.value === '' || job.role === filterRole.value;
//       const languageMatch = filterLanguage.value === '' || job.languages.includes(filterLanguage.value);
//       const toolMatch = filterTool.value === '' || job.tools.includes(filterTool.value);

//       jobCard.style.display = levelMatch && roleMatch && languageMatch && toolMatch ? 'block' : 'none';
//     });
//   }

//   filterLevel.addEventListener('change', filterJobs);
//   filterRole.addEventListener('change', filterJobs);
//   filterLanguage.addEventListener('change', filterJobs);
//   filterTool.addEventListener('change', filterJobs);








    const filterLevel = document.getElementById('filter-level');
  const filterRole = document.getElementById('filter-role');
  const filterLanguage = document.getElementById('filter-language');
  const filterTool = document.getElementById('filter-tool');
  const clearButton = document.querySelector('.clear button');


  function populateFilters(jobs) {
    const uniqueLevels = [...new Set(jobs.map(job => job.level))];
    const uniqueRoles = [...new Set(jobs.map(job => job.role))];
    const uniqueLanguages = [...new Set(jobs.flatMap(job => job.languages))];
    const uniqueTools = [...new Set(jobs.flatMap(job => job.tools))];

    populateSelect(filterLevel, uniqueLevels);
    populateSelect(filterRole, uniqueRoles);
    populateSelect(filterLanguage, uniqueLanguages);
    populateSelect(filterTool, uniqueTools);
  }

  function populateSelect(select, options) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });
  }

  function filterJobs() {
    const jobCards = document.querySelectorAll('.jobcard');

    jobCards.forEach(jobCard => {
      const job = JSON.parse(jobCard.dataset.jobCard);
      fetch('./data.json')
                .then(response => response.json())
                .then(data => {
                    renderJobs(job);
                });
      const levelMatch = filterLevel.value === '' || job.level === filterLevel.value;
      const roleMatch = filterRole.value === '' || job.role === filterRole.value;
      const languageMatch = filterLanguage.value === '' || job.languages.includes(filterLanguage.value);
      const toolMatch = filterTool.value === '' || job.tools.includes(filterTool.value);

      jobCard.style.display = levelMatch && roleMatch && languageMatch && toolMatch ? 'flex' : 'none';
    });
  }

  filterLevel.addEventListener('change', filterJobs);
  filterRole.addEventListener('change', filterJobs);
  filterLanguage.addEventListener('change', filterJobs);
  filterTool.addEventListener('change', filterJobs);

  clearButton.addEventListener('click', () => {
    filterLevel.value = '';
    filterRole.value = '';
    filterLanguage.value = '';
    filterTool.value = '';
    filterJobs();
  });




});
