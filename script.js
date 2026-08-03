const programs = [
  { name: "Data Science Foundations", status: "Active" },
  { name: "Full-Stack Web Development", status: "Active" },
  { name: "UI/UX Design Bootcamp", status: "Upcoming" },
  { name: "Cloud Architecture", status: "Completed" },
  { name: "Mobile App Development", status: "Active" }
];

function showPrograms(list) {
  const container = document.getElementById("programsList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div style="background:white; padding:16px; border-radius:10px; margin-bottom:10px; box-shadow:0 2px 6px rgba(0,0,0,0.1); display:flex; justify-content:space-between;">
        <span>${p.name}</span>
        <span style="color:green; font-weight:bold;">${p.status}</span>
      </div>`;
  });
}
showPrograms(programs);
document.getElementById("searchBox").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  showPrograms(programs.filter(p => p.name.toLowerCase().includes(query)));
});

const resources = [
  { title: "Slides.pdf", week: 1, type: "PDF" },
  { title: "Intro recording", week: 1, type: "MP4" },
  { title: "Workshop.pptx", week: 2, type: "PPT" },
  { title: "Reading list.docx", week: 2, type: "DOC" },
  { title: "Assignment brief.pdf", week: 3, type: "PDF" }
];
const weeks = [...new Set(resources.map(r => r.week))];
const resContainer = document.getElementById("resourcesList");
weeks.forEach(week => {
  resContainer.innerHTML += `<h3 style="color:#555; margin-top:20px;">Week ${week}</h3>`;
  resources.filter(r => r.week === week).forEach(item => {
    resContainer.innerHTML += `
      <div style="background:white; padding:14px; border-radius:10px; margin-bottom:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); display:flex; justify-content:space-between;">
        <span>${item.title}</span><span style="color:#888;">${item.type}</span>
      </div>`;
  });
});

const events = [
  { title: "Guest Speaker: AI Ethics", date: "2026-08-15" },
  { title: "Career Fair 2026", date: "2026-08-22" },
  { title: "Resume Workshop", date: "2026-07-28" },
  { title: "Alumni Networking Night", date: "2026-09-05" }
];
const today = new Date();
const upcoming = events.filter(e => new Date(e.date) >= today).sort((a,b) => new Date(a.date) - new Date(b.date));
const evContainer = document.getElementById("eventsList");
upcoming.forEach(e => {
  const formattedDate = new Date(e.date).toLocaleDateString("en-US", { month:"short", day:"numeric", year:"numeric" });
  evContainer.innerHTML += `
    <div style="background:white; padding:14px; border-radius:10px; margin-bottom:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); display:flex; justify-content:space-between;">
      <span>${e.title}</span><span style="color:#0F6E56; font-weight:bold;">${formattedDate}</span>
    </div>`;
});

const certificates = [
  { student: "Ali Raza", program: "Data Science Foundations" },
  { student: "Ali Raza", program: "Full-Stack Web Development" }
];
const certContainer = document.getElementById("certificatesList");
certificates.forEach(c => {
  certContainer.innerHTML += `
    <div style="background:white; padding:16px; border-radius:10px; margin-bottom:10px; box-shadow:0 2px 6px rgba(0,0,0,0.1); display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-weight:bold;">${c.program}</div>
        <div style="color:#888; font-size:13px;">${c.student}</div>
      </div>
      <div>
        <button style="background:#21295C; color:white; border:none; padding:8px 14px; border-radius:6px; margin-right:6px; cursor:pointer;">Download</button>
        <button style="background:#0A66C2; color:white; border:none; padding:8px 14px; border-radius:6px; cursor:pointer;">Share on LinkedIn</button>
      </div>
    </div>`;
});

const mentors = [
  { name: "Sara Khalid", role: "Lead Instructor", hours: "Mon-Wed, 3-5 PM" },
  { name: "Bilal Ahmed", role: "Mentor - Web Dev", hours: "Tue-Thu, 4-6 PM" }
];
const mentorContainer = document.getElementById("mentorsList");
mentors.forEach(m => {
  mentorContainer.innerHTML += `
    <div style="background:white; padding:16px; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.1); width:220px;">
      <div style="width:50px; height:50px; border-radius:50%; background:#D85A30; color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:18px;">
        ${m.name.charAt(0)}
      </div>
      <div style="margin-top:10px; font-weight:bold;">${m.name}</div>
      <div style="color:#888; font-size:13px;">${m.role}</div>
      <div style="color:#0F6E56; font-size:12px; margin-top:6px;">${m.hours}</div>
    </div>`;
});

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
}
showPage('dashboard');