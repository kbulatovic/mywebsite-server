import { readdir } from 'fs/promises';
import Application from 'koa';

/**
 * Get current filename
 */
const thisFile = () => {
  const parts = __filename.split('/');
  return parts[parts.length - 1];
};

/**
 * Register all the routes in the current directory
 * Notice - all the files in the `./controllers` directory need
 * to have default export with app arg so the router can hook
 * up with koa middleware
 */
export async function registerApiEndpoints(app: Application): Promise<void> {
  try {
    const files = await readdir(__dirname);
    const callerFile = thisFile();

    files.forEach(async(file) => {
      if (file !== callerFile) {
        const fn = await import('./' + file);
        fn.default(app);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
