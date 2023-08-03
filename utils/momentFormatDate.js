const moment = require('moment');

const allotedTime = (time) => {
    return moment(time).format('MMMM Do YYY, h:mm:ss a')
};

module.exports = allotedTime