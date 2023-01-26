const EventEmitter = require('events');

// assume we are sending http req to this url to log.
let url = 'http:/mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // send http
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id:1, url:"http://"});
    }
}

module.exports = Logger;

