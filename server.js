const express = require('express');
const qs = require('qs');
const ical = require('ical-generator');

const PORT = 3000;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

app.get("/calendar", (req, res) => {
  const calendar = ical({ name: 'invite' });

  const { summary, description, location, url } = req.query;
  const start = new Date(req.query.start);
  const end = new Date(req.query.end);

  calendar.createEvent({
    start,
    end,
    summary,
    description,
    location,
    url,
  });

  return calendar.serve(res);
});