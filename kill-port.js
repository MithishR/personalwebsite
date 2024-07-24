const { exec } = require('child_process');

const PORT = process.env.PORT || 3000; 

exec(`lsof -i :${PORT}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error fetching process using port ${PORT}:`, err);
    return;
  }

  const lines = stdout.split('\n');
  const pid = lines[1]?.split(/\s+/)[1];

  if (pid) {
    exec(`kill -9 ${pid}`, (killErr, killStdout, killStderr) => {
      if (killErr) {
        console.error(`Error killing process ${pid}:`, killErr);
      } else {
        console.log(`Process ${pid} using port ${PORT} killed successfully.`);
      }
    });
  }
});
