const request = require('request');
const config = require('./config.json');
const express = require('express');
const app = express();
const port = config.port;

const sendFilteredCalendar = (req, expressRes) => {
  request(config.url, { json: false }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    let out = '';
    body.split('BEGIN:VEVENT').forEach((event, index) => {
      if (index === 0) {
        out += event;
        return;
      }
      let toFilter = false;
      config.filterTerms.forEach(term => {
        if (event.includes(term)) {
          toFilter = true;
        }
      });
      if (!toFilter) {
        out += 'BEGIN:VEVENT' + event;
      }
    });
    if (!out.includes('END:VCALENDAR')) {
      out += '\nEND:VCALENDAR\n';
    }
    expressRes.send(out);
  });
};

app.get('/', sendFilteredCalendar);

app.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}/`));
