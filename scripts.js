let currentPage = 1;
const itemsPerPage = 5;

// Function to calculate remaining days
function calculateRemainingDays(expiryDate) {
  if (expiryDate === "ASAP") {
    return "ASAP";
  } else {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const currentDate = new Date();
    const endDate = new Date(expiryDate);
    const remainingDays = Math.round((endDate - currentDate) / oneDay);
    return remainingDays > 0 ? remainingDays : "Expired";
  }
}

// Function to display job listings
function displayJobs(jobs, page = 1) {
  const jobListings = document.getElementById("jobListings");
  jobListings.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedJobs = jobs.slice(start, end);

  paginatedJobs.forEach((job, index) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("jobItem");
    const remainingDays = calculateRemainingDays(job.expiryDate);
    if (remainingDays !== "Expired") {
      jobItem.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Skills:</strong> ${job.Skills}</p>
        <p><strong><span style="color:red; animation: blink 1s infinite;">Expires in ${remainingDays} days</span></strong></p>
        <a href="${job.Apply}" target="_blank" class="applyBtn">Apply</a>
      `;
      jobListings.appendChild(jobItem);
    }
  });

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = end >= jobs.length;
}

// CSS for blinking animation
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(styles);

// Define job data with expiry dates
const jobData = [
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" 
  },
];

// Display initial job listings
displayJobs(jobData, currentPage);

// Pagination functionality
document.getElementById("prevBtn").addEventListener("click", function() {
  if (currentPage > 1) {
    currentPage--;
    displayJobs(jobData, currentPage);
  }
});

document.getElementById("nextBtn").addEventListener("click", function() {
  const maxPage = Math.ceil(jobData.length / itemsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    displayJobs(jobData, currentPage);
  }
});

// Dummy search function (replace with actual search functionality)
document.getElementById("searchBtn").addEventListener("click", function() {
  const searchInput = document.getElementById("searchInput").value;
  const filteredJobs = jobData.filter(job =>
    job.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  currentPage = 1; // Reset to first page on search
  displayJobs(filteredJobs, currentPage);
});
