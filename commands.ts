import execa from 'execa';
import yargs, { parse, help } from 'yargs';
import { config } from 'dotenv';

config({ path: '.env.dev' });

yargs
  .command({
    command: 'dev',
    describe: 'Run local dev server in Koa, starts the db',
    handler: () => {
      try {
        execa('pkill', ['-f', 'node']);
        const nodemon = execa('nodemon');
      
        nodemon?.stdout?.pipe(process.stdout);
        nodemon?.stderr?.pipe(process.stderr);
      } catch (error) {
        throw error;
      }
    }
  })
  .command({
    command: 'knex',
    describe: 'Knex migration tool',
    handler: () => {
      execa('./node_modules/knex/bin/cli.js');
    }
  });

help();
parse();
