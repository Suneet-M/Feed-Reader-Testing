# Project Overview
In this project I was given a web-based application that reads RSS feeds provided to it. It fetches 10 feeds from the RSS channels and appends it to the feed area one by one. The feed channel list is found in the side menu. Clicking any channel will fetch feeds from their website and display in the feed container. To change or add channels available to us, a new object has to be added in the allFeeds array which would contain URL and name for the new channel.

The application can be used by clicking [here](https://suneet-m.github.io/Feed-Reader-Testing/).

## Dependencies
The application uses
- [normalize.css](git.io/normalize) to normalize all styling.
- [icomoon font](https://icomoon.io) for the menu icon.
- [handlebars](https://handlebarsjs.com/) for templates.
- [jQuery](https://jquery.com/)
- [jasmine v3.3.0](https://jasmine.github.io/) for testing.

## Testing 
The task was to write several testing suites and tests for the application using jasmine v3.3.0. On launching the application, Jasmine tests the following:
- RSS feeds array is defined and isn't empty.
- All feeds have URLs and names.
- The side menu is hidden by default.
- Menu button works correctly.
- The application successfully loads feeds when launched.
- The content in the feed container changes when feed channel is changed from the side menu.