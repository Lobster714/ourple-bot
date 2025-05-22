const fs = require('fs');
const path = require('path');

module.exports = (data = Object) => {
    fs.writeFile(
        path.join(__dirname, '..', '..', 'data.json'),
        JSON.stringify(data, null, 4),
        (err) => {
            if (err) {
                console.error(`Error: ${err}`);
            }
        }
    )
};