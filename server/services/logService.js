const Log = require("../models/Log");

// Function to create an audit log
async function createLog(actionType, itemType, itemId, userId, description) {
	try {
		const log = new Log({
			actionType,
			itemType,
			itemId,
			userId,
			description,
		});
		await log.save();
		console.log(`Audit log created for action: ${actionType}`);
	} catch (err) {
		console.error("Error creating audit log:", err);
	}
}

module.exports = { createLog };
