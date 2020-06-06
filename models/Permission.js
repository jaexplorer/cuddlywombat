const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
  permission: {
    type: String,
    enum: ['Chef', 'Staff', 'Admin', 'Owner'],
    default: 'Staff',
  },
});

module.exports = mongoose.model('Permission', PermissionSchema);
