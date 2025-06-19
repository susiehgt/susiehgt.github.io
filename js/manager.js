function loadSection(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) {
    console.warn(`Element with ID '${targetId}' not found.`);
    return;
  }

  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then((data) => {
      target.innerHTML = data;
    })
    .catch((error) => {
      console.error(`Error loading ${filePath}:`, error);
      target.innerHTML = `<p style="color:red;">Failed to load ${filePath}</p>`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  htmlPath = "../html/";
  loadSection("summary", htmlPath + "summary.html");
  loadSection("skills", htmlPath + "skills.html");
  loadSection("experience", htmlPath + "experience.html");
  loadSection("education", htmlPath + "education.html");
  loadSection("projects", htmlPath + "projects.html");
});
