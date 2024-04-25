const teamMembers = document.getElementById("team-members");
const originalTeamMembersValue = 200;
const completeProjects = document.getElementById("complete-projects");
const originalCompleteProjectsValue = 345;
const filesDownloaded = document.getElementById("files-downloaded");
const originalFilesDownloadedValue = 1800;
const linesOfCode = document.getElementById("lines-of-code");
const originalLinesOfCodeValue = 1200;

let teamMembersCurrentValue = originalTeamMembersValue;
let completeProjectsCurrentValue = originalCompleteProjectsValue;
let filesDownloadedCurrentValue = originalFilesDownloadedValue;
let linesOfCodeCurrentValue = originalLinesOfCodeValue;

setInterval(() => {
  teamMembersCurrentValue++;
  if (teamMembersCurrentValue > originalTeamMembersValue + 2000) {
    teamMembersCurrentValue = originalTeamMembersValue;
    teamMembers.style.opacity = 0;
    setTimeout(() => {
      teamMembers.textContent = teamMembersCurrentValue;
      teamMembers.style.opacity = 1;
    }, 100);
  }
  teamMembers.textContent = teamMembersCurrentValue;

  completeProjectsCurrentValue++;
  if (completeProjectsCurrentValue > originalCompleteProjectsValue + 2000) {
    completeProjectsCurrentValue = originalCompleteProjectsValue;
    completeProjects.style.opacity = 0;
    setTimeout(() => {
      completeProjects.textContent = completeProjectsCurrentValue;
      completeProjects.style.opacity = 1;
    }, 100);
  }
  completeProjects.textContent = completeProjectsCurrentValue;

  filesDownloadedCurrentValue++;
  if (filesDownloadedCurrentValue > originalFilesDownloadedValue + 2000) {
    filesDownloadedCurrentValue = originalFilesDownloadedValue;
    filesDownloaded.style.opacity = 0;
    setTimeout(() => {
      filesDownloaded.textContent = filesDownloadedCurrentValue;
      filesDownloaded.style.opacity = 1;
    }, 100);
  }
  filesDownloaded.textContent = filesDownloadedCurrentValue;

  linesOfCodeCurrentValue++;
  if (linesOfCodeCurrentValue > originalLinesOfCodeValue + 2000) {
    linesOfCodeCurrentValue = originalLinesOfCodeValue;
    linesOfCode.style.opacity = 0;
    setTimeout(() => {
      linesOfCode.textContent = linesOfCodeCurrentValue;
      linesOfCode.style.opacity = 1;
    }, 100);
  }
  linesOfCode.textContent = linesOfCodeCurrentValue;
}, 0.3);