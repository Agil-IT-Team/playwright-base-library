import { stdout } from 'node:process';
import fs from 'node:fs';

/**
 * Setup console and file logging
 * @param {boolean} demoMode If the app will run in demo mode
 * @param {string} loggingFolderPath Where log files will be stored
 */
export default function setup(demoMode, loggingFolderPath) {
  console.log('Setup console logging...');

  console.log = ((...args) => {
    const demoLabel = demoMode ? 'DEMO: ' : '';
    const timestamp = new Date().toISOString();
    const formattedArgs = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg);
    const originalMsgToLog = `${timestamp} - ${demoLabel}${formattedArgs.join(' ')}\n`;
    let consoleMsgToLog = originalMsgToLog;
    if (demoMode) {
      consoleMsgToLog = '\x1b[32m' + originalMsgToLog + '\x1b[0m'
    }
    stdout.write(consoleMsgToLog);
    writeToLogFile(originalMsgToLog, loggingFolderPath);
  });

  console.log('Setup console logging...DONE');
}

const writeToLogFile = (content, loggingFolderPath) => {
  const isoDate = new Date().toISOString().substring(0, 10);
  const logFilePath = loggingFolderPath + `${isoDate}-logs.log`;

  fs.writeFile(logFilePath, content, { flag: 'a+' }, err => {
    if (err) {
      console.error('Error while writing log file: ', err);
    }
  });
};