/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* To test that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* To ensure all feeds have a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* To ensure all feeds have a name defined
         * and that the name is not empty.
         */
        it('have names', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* A test suite for the side menu */
    describe('The menu', function() {
        const body = document.querySelector('body');

        /* To ensure the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
             expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* To ensure the menu changes visibility
         * when the menu icon is clicked.
         */
        it('changes visibility when the menu icon is clicked', function() {
            const menuIcon = document.querySelector('.menu-icon-link');
            // clicking on menu button, shows the menu
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).not.toBe(true);
            // clicking again, hides the menu
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
