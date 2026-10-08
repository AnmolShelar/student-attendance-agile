// Keep the demo usable when opened directly from a local folder and the browser
// blocks one of the companion JavaScript files.
const fallbackCore = {
  summarizeAttendance(roster, records) {
    const counts = { total: roster.length, present: 0, late: 0, absent: 0, unmarked: 0 };
    roster.forEach((student) => {
      const status = ['present', 'late', 'absent'].includes(records[student.id]) ? records[student.id] : 'unmarked';
      counts[status] += 1;
    });
    return counts;
  },
  setAttendance(records, id, status) {
    const next = { ...records };
    if (status === 'unmarked') delete next[id]; else next[id] = status;
    return next;
  },
  filterRoster(roster, records, query, status) {
    const q = query.trim().toLowerCase();
    return roster.filter((student) => (!q || `${student.name} ${student.roll}`.toLowerCase().includes(q)) && (status === 'all' || (records[student.id] || 'unmarked') === status));
  }
};
const { summarizeAttendance, setAttendance, filterRoster } = window.AttendanceCore || fallbackCore;
const roster = [
  { id: 'demo01', name: 'Anmol', roll: 'DEMO-01', color: '#e8f0ff', ink: '#4772c4' },
  { id: 'demo02', name: 'Patrick', roll: 'DEMO-02', color: '#fcebf0', ink: '#bc5d79' },
  { id: 'demo03', name: 'Harvey', roll: 'DEMO-03', color: '#eaf7ef', ink: '#458863' }
];
const STORE_KEY = 'attendance-demo-v1';
const $ = (selector) => document.querySelector(selector);
const today = new Date().toISOString().slice(0, 10);
let selectedDate = today;
let store = readStore();

function readStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function recordsFor(date = selectedDate) { return store[date] || {}; }
function saveStore() {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
  $('#save-status').textContent = 'Saved just now in this browser';
  window.setTimeout(() => { $('#save-status').textContent = 'Changes save automatically in this browser'; }, 1800);
}
function initials(name) { return name.split(' ').map((part) => part[0]).slice(0, 2).join(''); }
function renderStats() {
  const counts = summarizeAttendance(roster, recordsFor());
  $('#total-count').textContent = counts.total;
  $('#present-count').textContent = counts.present;
  $('#late-count').textContent = counts.late;
  $('#absent-count').textContent = counts.absent;
  $('#roster-size').textContent = counts.total;
  $('#session-label').textContent = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(`${selectedDate}T12:00:00`));
}
function renderRoster() {
  const filtered = filterRoster(roster, recordsFor(), $('#search').value, $('#status-filter').value);
  const records = recordsFor();
  $('#student-list').innerHTML = filtered.map((student) => {
    const current = records[student.id] || 'unmarked';
    const controls = [['present', 'Present'], ['late', 'Late'], ['absent', 'Absent']].map(([status, label]) =>
      `<button class="status-button" data-status="${status}" data-student="${student.id}" aria-pressed="${current === status}" aria-label="Mark ${student.name} ${label.toLowerCase()}">${label}</button>`).join('');
    return `<tr><td><div class="student"><span class="student-avatar" style="background:${student.color};color:${student.ink}">${initials(student.name)}</span><span class="student-name">${student.name}</span></div></td><td class="roll">${student.roll}</td><td><div class="status-group">${controls}</div></td></tr>`;
  }).join('');
  $('#empty-state').hidden = filtered.length > 0;
}
function render() { renderStats(); renderRoster(); }
$('#session-date').value = selectedDate;
$('#session-date').addEventListener('change', (event) => { selectedDate = event.target.value || today; render(); });
$('#search').addEventListener('input', renderRoster);
$('#status-filter').addEventListener('change', renderRoster);
$('#student-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-student]');
  if (!button) return;
  store[selectedDate] = setAttendance(recordsFor(), button.dataset.student, button.dataset.status);
  saveStore(); render();
});
$('#mark-all').addEventListener('click', () => {
  store[selectedDate] = Object.fromEntries(roster.map((student) => [student.id, 'present']));
  saveStore(); render();
});
$('#reset-data').addEventListener('click', () => {
  if (!window.confirm('Clear all saved demo attendance from this browser?')) return;
  store = {}; localStorage.removeItem(STORE_KEY); render();
  $('#save-status').textContent = 'Demo data cleared';
});
render();
