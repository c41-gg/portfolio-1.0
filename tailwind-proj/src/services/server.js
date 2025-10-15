const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');

const execAsync = promisify(exec);
const app = express();

// Configuration
const PROTON_DRIVE_PATH = 'protondrive:portfolio';
const CACHE_DIR = path.join(__dirname, 'cache');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const METADATA_CACHE_FILE = path.join(CACHE_DIR, 'metadata.json');
const METADATA_CACHE_DURATION = 60 * 60 * 1000; // 1 hour

app.use(cors());
app.use(express.json());

fs.mkdir(CACHE_DIR, { recursive: true }).catch(console.error);