const STATUSES = new Set(['present', 'late', 'absent']);

function normalizeStatus(status) {
  return STATUSES.has(status) ? status : 'unmarked';
}

function summarizeAttendance(roster, records) {
  const summary = { total: roster.length, present: 0, late: 0, absent: 0, unmarked: 0 };
  for (const student of roster) {
    const status = normalizeStatus(records[student.id]);
    summary[status] += 1;
  }
  return summary;
}

function setAttendance(records, studentId, status) {
  if (!studentId) throw new Error('A student ID is required.');
  const next = { ...records };
  if (status === 'unmarked') delete next[studentId];
  else if (STATUSES.has(status)) next[studentId] = status;
  else throw new Error(`Unsupported attendance status: ${status}`);
  return next;
}

function filterRoster(roster, records, query = '', statusFilter = 'all') {
  const normalizedQuery = query.trim().toLowerCase();
  return roster.filter((student) => {
    const status = normalizeStatus(records[student.id]);
    const matchesQuery = !normalizedQuery || `${student.name} ${student.roll}`.toLowerCase().includes(normalizedQuery);
    const matchesStatus = statusFilter === 'all' || status === statusFilter;
    return matchesQuery && matchesStatus;
  });
}

const attendanceCore = { summarizeAttendance, setAttendance, filterRoster, normalizeStatus };
if (typeof module !== 'undefined') module.exports = attendanceCore;
if (typeof window !== 'undefined') window.AttendanceCore = attendanceCore;
