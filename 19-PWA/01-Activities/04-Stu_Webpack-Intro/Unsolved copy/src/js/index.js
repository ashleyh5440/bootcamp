// TODO: Add a comment explaining role of the index.js file and import statements
//index.js is the entry point for webpack

import { boxClick } from './box'; //import = require
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
