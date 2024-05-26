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
function displayJobs(jobs) {
  const jobListings = document.getElementById("jobListings");
  jobListings.innerHTML = "";
  jobs.forEach((job, index) => {
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
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  // Additional jobs with similar details
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },{ 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
  { 
    title: "Packaged App Development", 
    company: "Accenture", 
    Skills: "Full Stack Development and J2EE, Testing Tools, .Net, Knowledge in Salesforce", 
    location: "pan india", 
    Apply: "https://indiacampus.accenture.com/myzone/accenture/1/jobs/25377/job-details",
    expiryDate: "ASAP" // Add an expiry date for Accenture job
  },
];

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
