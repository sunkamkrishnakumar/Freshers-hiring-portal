// Dummy job data (replace with actual data from backend)
const jobData = [
  { title: "Packaged App Development", company: "Accenture", location: "pan india", Apply: "" }
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
          <button class="applyBtn">Apply</button>
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

// Dummy apply function (replace with actual apply functionality)
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("applyBtn")) {
    // Here you can implement the logic for applying to the job
    alert("Apply button clicked!");
  }
});
