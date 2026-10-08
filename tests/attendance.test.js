const test = require('node:test');
const assert = require('node:assert/strict');
const { summarizeAttendance, setAttendance, filterRoster } = require('../app/attendance.js');

const roster = [
  { id: 's1', name: 'Asha Rao', roll: 'DS01', email: 'asha@example.edu' },
  { id: 's2', name: 'Kabir Shah', roll: 'DS02', email: 'kabir@example.edu' },
  { id: 's3', name: 'Mira Das', roll: 'DS03', email: 'mira@example.edu' }
];

test('summary counts present, late, absent, and unmarked students', () => {
  assert.deepEqual(summarizeAttendance(roster, { s1: 'present', s2: 'late', s3: 'absent' }), {
    total: 3, present: 1, late: 1, absent: 1, unmarked: 0
  });
});

test('unknown or missing saved status is treated as unmarked', () => {
  assert.deepEqual(summarizeAttendance(roster, { s1: 'invalid' }), {
    total: 3, present: 0, late: 0, absent: 0, unmarked: 3
  });
});

test('status changes return a new records object and can be cleared', () => {
  const original = { s1: 'absent' };
  const changed = setAttendance(original, 's1', 'late');
  assert.deepEqual(changed, { s1: 'late' });
  assert.deepEqual(original, { s1: 'absent' });
  assert.deepEqual(setAttendance(changed, 's1', 'unmarked'), {});
});

test('invalid status and missing student ID are rejected', () => {
  assert.throws(() => setAttendance({}, 's1', 'excused'), /Unsupported attendance status/);
  assert.throws(() => setAttendance({}, '', 'present'), /student ID is required/);
});

test('search and status filter can be combined', () => {
  const records = { s1: 'present', s2: 'late', s3: 'present' };
  assert.deepEqual(filterRoster(roster, records, 'DS0', 'present').map((student) => student.id), ['s1', 's3']);
  assert.deepEqual(filterRoster(roster, records, 'kabir', 'late').map((student) => student.id), ['s2']);
});
