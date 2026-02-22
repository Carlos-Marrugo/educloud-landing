import { execSync } from 'child_process';

try {
  const result = execSync('cd /vercel/share/v0-project && git pull origin main --no-rebase', { encoding: 'utf-8' });
  console.log(result);
} catch (error) {
  console.error('Pull failed:', error.message);
  console.log(error.stdout);
  console.log(error.stderr);
}
