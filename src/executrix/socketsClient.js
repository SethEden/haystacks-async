/**
 * @file socketsClient.js
 * @module socketsClient
 * @description Creates a socket client to connect and send messages through the server to other processes 
 * @requires @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @NOTE: Original author Karl-Edward FP Jean-Mehu
 * @date 2025-01-02 - Originally 2023/12/29
 * @copyright Copyright © 2025-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
// External imports
import { Socket } from 'net';
import process from 'process'
import { promisify } from 'util';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// framework.executrix.loggers.
// eslint-disable-next-line no-unused-vars
const namespacePrefix =  wrd.cframework + bas.cDot + wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

// Host and port to which the socket
// connection will be listening to
const SOCKET = {
  host: '127.0.0.1',
  port: 3000
}

// Get current development mode
const isDevMode =
  !process.env[sys.cNODE_ENV] ||
  process.env[sys.cNODE_ENV].toLowerCase() !== wrd.cproduction;
const messageDelimiter = bas.cHash.repeat(2) + wrd.cEND + bas.cHash.repeat(2); // ##END##
const chunkDelimiter = bas.cPipe + bas.cTilde + bas.cPipe; // |~|
const maxMessageLength = 840;

/**
 * @name socketsClient
 * @description Creates a socket client instance and handles communication to the server 
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
export default async function socketsClient() {
  try {
    const socket = Socket({});
    const writeAsync = promisify(socket.write.bind(socket));

    // Keep connection live
    socket.setKeepAlive(true);

    // Connect to server
    let isConnected = false;

    // Connections has been refused or connection is in use.
    let connectionRefusedOrInUse = false;

    if (isConnected == false) {
      socket.connect(SOCKET.port, SOCKET.host);
      socket.setNoDelay(true);  // Disable Nagle's algorithm to avoid packet batching
      isConnected = true;
    }

    // Error handler
    socket.on(wrd.cerror, (error) => {
      if (error.code === gen.cECONNREFUSED || error.code === gen.cEADDRINUSE){
        connectionRefusedOrInUse = true;
        // Server is offline! Connection is already in use or has been denied.
        // console.log(bas.cCarriageReturn + bas.cNewLine + msg.csocketsClientServerOffline + bas.cCarriageReturn + bas.cNewLine);
      }else{
        console.log(bas.cCarriageReturn + bas.cNewLine + msg.cErrorOnClient + error.message);
      }
    });

    // Handle connection being closed
    socket.on(wrd.cclose, async () => {
      // Connection closed!
      if (!connectionRefusedOrInUse) console.log(msg.cConnectionClosed);
    });

    // Handles actions to take when the server establishes a connection
    // Client connection established!
    socket.on(wrd.cconnect, async () => console.log(msg.cClientConnectionEstablished));

    // Handle receiving data
    socket.on(wrd.cdata, async (chunk) => {
      // console.log(`Received data, ${JSON.parse(chunk)}`);
    });

    /**
     * Sends data through to the socket server.
     * Parses and sends test result as well.
     * @param { string } message - Message to be logged.
     */
    socket.send = async (message) => {
      if (isConnected) {
        // Create timestamp
        const timestamp = await ruleBroker.processRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
        let broadcastMessage = JSON.stringify({ message: `${message}`, timestamp }) + messageDelimiter;
        
        // Write data to socket
        await writeAsync(broadcastMessage, async (error) => {

          // Assuming app is called locally / directly. Display only debug logs on failed
          // stream writes
          if (error) {
            if (error.code === gen.ERR_STREAM_DESTROYED) {
              console.log(bas.cCarriageReturn + bas.cNewLine + msg.cConnectionClosedFailedSendingChunk + broadcastMessage +
                bas.cCarriageReturn + bas.cNewLine);
            } else {
              console.log(namespacePrefix + wrd.csend + bas.cSpace + wrd.cchunk + bas.cColon + bas.cSpace + broadcastMessage +
                bas.cCarriageReturn + bas.cNewLine);
              console.log(namespacePrefix + wrd.csend + bas.cSpace + wrd.cerror + bas.cColon + bas.cSpace + error.message +
                bas.cCarriageReturn + bas.cNewLine);
            }
          } // End-if (error)
        });

        // Parse broadcastMessage for and return test results
        const REGEX = /((TestResultsLog)\s:\s(Test_\w+)\s:)\s(\w)+/g;

        const validResponses = [wrd.cPass, wrd.cFail, wrd.cWarning];
        const matchResult = broadcastMessage.match(REGEX);

        if  (matchResult) {
          // Testing for match
          console.log(msg.cTestingForMatch + matchResult[0]);
          const testResultsMatch = matchResult[0].split(':').map(v => v.trim())[2];

          if (!testResultsMatch) {
            console.log({testResultsMatch});
            return;
          }

          console.log({ testResultsMatch });
          const testResult = validResponses.includes(( testResultsMatch || "").toLowerCase()) ? testResultsMatch[2] : wrd.cFail

          await writeAsync(JSON.stringify({ testResult }));
        }
      } else {
        return;
      }
     };

    // Return connection status
    socket.isConnected = async () => {
      await new Promise(resolve => {
        resolve(isConnected);
      });
    };

    // Closes the connection with the server
    socket.close = async () => {
      isConnected = false;
      await promisify(socket.end.bind(socket))();
      // await promisify(socket.exit.bind(socket))();
      await promisify(socket.destroy.bind(socket))();
    };

    return socket;
  } catch (error) {
    if (error.code === gen.cECONNREFUSED || error.code === gen.cEADDRINUSE){
      // Socket server offline!
      console.log(bas.cCarriageReturn + bas.cNewLine + msg.cSocketServerOffline + bas.cCarriageReturn + bas.cNewLine);
    } else {
      // Socket client failed:
      console.log(bas.cCarriageReturn + bas.cNewLine + msg.cSocketClientFailed + error.message);
    }
  }
}
