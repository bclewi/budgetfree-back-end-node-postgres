/*
======================================================
Transaction API router
======================================================
*/

// Module dependencies
const express = require('express');
const asyncHandler = require('express-async-handler');

// Controller dependencies
const authController = require('../controllers/auth');
const permController = require('../controllers/permission');
const controller = require('../controllers/transaction');

const router = express.Router();

router.get('/',
  authController.requireAuth,
  asyncHandler(permController.getPerms),
  asyncHandler(controller.getTransactions)
);

module.exports = router;