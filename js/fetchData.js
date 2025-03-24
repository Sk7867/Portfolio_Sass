function fetchData() {
  console.log("fetching data...");
  fetch("https://sk7867.github.io/static-backend/portfolio-data.json")
    .then((response) => response.json())
    .then((data) => processData(data));
}

let processData = (data) => {
  // console.log(data);
  handleJobsData(data);
  handleProjectsData(data.projects);
};

let handleJobsData = (data) => {
  const jobListElement = document.getElementById("job-list");
  data.workExp.forEach((job) => {
    const jobElement = createJobDom(job);
    jobListElement.appendChild(jobElement);
  });
};

let handleProjectsData = (projects) => {
  const projectListElement = document.getElementById("project-list");
  projects.forEach((project) => {
    const projectElement = createProjectDom(project);
    projectListElement.appendChild(projectElement);
  });
};

let createJobDom = (job) => {
  const jobElement = document.createElement("div");
  jobElement.className = "jobs_job";

  const jobTitleElement = document.createElement("h2");
  jobTitleElement.className = "text_secondary";
  jobTitleElement.textContent = job.duration;
  jobElement.appendChild(jobTitleElement);

  const jobCompanyElement = document.createElement("h3");
  jobCompanyElement.textContent = job.companyName;
  jobElement.appendChild(jobCompanyElement);

  const jobPositionElement = document.createElement("h6");
  jobPositionElement.textContent = job.position;
  jobElement.appendChild(jobPositionElement);

  const jobDescriptionElement = document.createElement("p");
  jobDescriptionElement.textContent = job.description;
  jobElement.appendChild(jobDescriptionElement);

  return jobElement;
};

let createProjectDom = (project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "projects_item";

  const projectImageElement = document.createElement("img");
  projectImageElement.src = project.image;
  projectImageElement.alt = project.title;
  projectElement.appendChild(projectImageElement);

  let projectButtonsElement = document.createElement("div");
  projectButtonsElement.className = "projects_btns";

  project.links.forEach((link) => {
    const projectPreviewLinkElement = document.createElement("a");
    projectPreviewLinkElement.href = link.previewLink;
    projectPreviewLinkElement.target = "_blank";
    projectPreviewLinkElement.className = "projects_btn";

    switch (link.name) {
      case "Preview":
        let projectPreviewIconElement = document.createElement("i");
        projectPreviewIconElement.className = "fas fa-eye";
        projectPreviewLinkElement.appendChild(projectPreviewIconElement);
        projectPreviewLinkElement.appendChild(
          document.createTextNode(" Preview")
        );
        break;

      case "Github":
        let projectGithubIconElement = document.createElement("i");
        projectGithubIconElement.className = "fab fa-github";
        projectPreviewLinkElement.appendChild(projectGithubIconElement);
        projectPreviewLinkElement.appendChild(
          document.createTextNode(" Github")
        );
        break;

      default:
        let projectDefaultIconElement = document.createElement("i");
        projectDefaultIconElement.className = "fas fa-eye";
        projectPreviewLinkElement.appendChild(projectDefaultIconElement);
        projectPreviewLinkElement.appendChild(
          document.createTextNode(" Default")
        );
        break;
    }
    projectButtonsElement.appendChild(projectPreviewLinkElement);
  });

  projectElement.appendChild(projectButtonsElement);

  return projectElement;
};

fetchData(); // fetching data...
