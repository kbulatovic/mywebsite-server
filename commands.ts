import execa from 'execa';
import { command, parse } from 'yargs';
import { config } from 'dotenv';

config({ path: '.env' });

command({
  command: 'dev',
  describe: 'Run local dev server in Koa, starts the db',
  handler: () => {
    execa('pkill', ['-f', 'node']);
    execa('nodemon').stdout.pipe(process.stdout);
  }
});

parse();
