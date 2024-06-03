const mysql = require('mysql2/promise');

async function deleteAllRows() {
  try {
    // Create a connection pool to MySQL database
    const pool = mysql.createPool({
      host: '193.203.184.53',
      user: 'u114727550_artherv',
      password: 'Artherv@321',
      database: 'u114727550_artherv_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Tables to delete rows from
    const tables = ['sfg_destination','sfg_header','sfg_source' ];

    // Iterate over tables
    for (const table of tables) {
      // Delete all rows from the current table
      const query = `DELETE FROM ${table}`;
      const connection = await pool.getConnection();
      await connection.execute(query);
      connection.release();
      console.log(`Deleted all rows from ${table}`);
    }

    console.log('Deletion completed successfully.');
  } catch (error) {
    console.error('Error deleting rows:', error);
  }
}

deleteAllRows();
