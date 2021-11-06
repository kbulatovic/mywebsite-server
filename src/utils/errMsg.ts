import { bgRed, redBright } from 'chalk';

export default function errMsg(err: Error): void {
  console.error(redBright(err.name));
  console.error('-----------------');
  console.error(bgRed(err.message));
}
