// assume we are sending http req to this url to log.
let url = 'http:/mylogger.io/log';

// before logging
function log(message) {
    // send an http request.
    console.log(message);
}


module.exports = {
    log
}

