const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// Apply for leave
router.post('/apply', authMiddleware, async (req, res) => {
  const { fromDate, toDate, reason } = req.body;
  const leave = new Leave({
    userId: req.userId,
    fromDate,
    toDate,
    reason
  });
  await leave.save();
  res.json({ message: 'Leave application submitted' });
});

// View user's leaves
router.get('/my', authMiddleware, async (req, res) => {
  const leaves = await Leave.find({ userId: req.userId });
  res.json(leaves);
});

// Admin: view all leave applications
router.get('/all', authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  if (user.role !== 'Admin') return res.status(403).json({ message: 'Access denied' });

  const allLeaves = await Leave.find().populate('userId', 'name email');
  res.json(allLeaves);
});

// Admin: approve/reject leave
router.put('/:id/:decision', authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  if (user.role !== 'Admin') return res.status(403).json({ message: 'Access denied' });

  const { id, decision } = req.params;
  if (!['approve', 'reject'].includes(decision)) {
    return res.status(400).json({ message: 'Invalid decision' });
  }

  const status = decision === 'approve' ? 'Approved' : 'Rejected';
  await Leave.findByIdAndUpdate(id, { status });
  res.json({ message: `Leave ${status}` });
});

module.exports = router;