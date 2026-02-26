import { disconnectDatabase, databaseType } from "./utils/database.js";
// const database = require("./utils/database")

import {getDataFromApi} from './utils/api.js'

getDataFromApi()
disconnectDatabase()
