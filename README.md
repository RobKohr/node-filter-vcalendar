# node-filter-vcalendar

Creates an express node.js webserver that when you hit the root path, it will fetch a vcal url that is set in the config, and then filter out all events that match specified keywords.

This was created for my son's school calendar that was full of too many repeating events that were not important, and were crowding out events that were important.

You can run this locally at http://127.0.0.1:3333 if you just want to use it with a local app. If you want google calender to be able to import it, you will need to host it somewhere.

Licensed under MIT License
