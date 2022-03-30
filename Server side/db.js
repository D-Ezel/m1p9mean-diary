//const mongoose = require('mongoose');
import config from './config.js'

const { db: { cluster, username, pwd, dbname } } = config;
const connectionString = `mongodb+srv://${username}:${pwd}@${cluster}/${dbname}?retryWrites=true&w=majority`;

export default connectionString;