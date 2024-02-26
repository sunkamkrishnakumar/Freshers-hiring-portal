// Updated job data with Apply URLs
const jobData = [
    { title: "Packaged App Development", company: "Accenture", location: "pan india", Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details" },
    { title: "TCS Internship", company: "TCS", location: "pan india", Apply: "https://www.tcs.com/contact-us/whats-on-your-mind/careers/internship" }
];

// Function to display job listings
function displayJobs(jobs) {
    const jobListings = document.getElementById("jobListings");
    jobListings.innerHTML = "";
    jobs.forEach(job => {
        const jobItem = document.createElement("div");
        jobItem.classList.add("jobItem");
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <a href="${job.Apply}" target="_blank" class="applyBtn">Apply</a>
        `;
        jobListings.appendChild(jobItem);
    });
}

// Display initial job listings
displayJobs(jobData);

// Dummy search function (replace with actual search functionality)
document.getElementById("searchBtn").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value;
    const filteredJobs = jobData.filter(job =>
        job.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    displayJobs(filteredJobs);
});
