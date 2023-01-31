const path = require('path');

// mainModule is deprecated
// module.exports = path.dirname(process.mainModule.filename);

// this essentially defines the path of the file that
// the app was spun on.  the root directory.
module.exports = path.dirname(require.main.filename);
