# Calendar Maker

The deployed link should take a query string like this:
```js
// http://localhost:5000/calendar?start=2023-02-28T20%3A01%3A49.289Z&end=2023-02-28T20%3A01%3A49.289Z&summary=Deployed%20Medical%20Booking&description=Eye%20appointment%21&location=Mayo%20Medical&url=https%3A%2F%2Fcompanywebsite.com
```

Parsed into an object looks like:
```js
const qs = require('qs');

const obj = {
  start: new Date(),
  end: new Date(),
  summary: "Deployed Medical Booking",
  description: "Eye appointment!",
  location: "Mayo Medical",
  url: "https://companywebsite.com",
};

console.log("http://localhost:5000/calendar?" + qs.stringify(obj));
```

## Steps:
Deploy in an AWS EC2 Instance & use the IP as the localhost