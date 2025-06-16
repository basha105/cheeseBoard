const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: "postgresql://postgres:cYwFAHZHmzjWXftUmCznwFVVXAieqGZP@switchyard.proxy.rlwy.net:49387/railway",
    ssl: {
        rejectUnauthorized: false
    }
});