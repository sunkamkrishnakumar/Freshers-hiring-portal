// Updated job data with Apply URLs
const jobData = [
    { title: "Packaged App Development", company: "Accenture",Skills: "Full Stack Dvelopment and J2EE,Testing Tools,.Net,Knowledge in Salesforce", location: "pan india", Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details" },
    { title: "TCS Internship", company: "TCS", location: "pan india",Skills: "HTML,CSS,js,Python,java or C++,DSA", Apply: "https://www.tcs.com/contact-us/whats-on-your-mind/careers/internship" },
    { title: "Web Developer - Fresher", company: "", Skills: "HTML, CSS, JavaScript, WordPress", Apply: "https://lnkd.in/e3JF-pgG" },
    { title: "Python Developer - Fresher", company: "", Skills: "Python, SQL, Database", Apply: "https://lnkd.in/eTVEAvWq" },
    { title: "Full Stack Developer - Fresher", company: "", Skills: "", Apply: "https://lnkd.in/erbe-A87" },
    { title: "Frontend Developer Internship", company: "", Skills: "", Apply: "https://lnkd.in/en35dpVu" },
    { title: "Java Developer - Fresher", company: "", Skills: "Java, OOP Concepts, Database", Apply: "https://lnkd.in/esd5QUsF" },
    { title: "MERN Developer Internship - Fresher", company: "", Skills: "", Apply: "https://lnkd.in/eDDCQCXZ" }
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
            <p><strong>Skills:</strong> ${job.Skills}</p>
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
