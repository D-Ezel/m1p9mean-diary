//const mongoose = require('mongoose');
import config from './config.js'

const { db: { host, username, pwd, name } } = config;
const connectionString = `mongodb+srv://${username}:${pwd}@${host}`;

export {connectionString, name};