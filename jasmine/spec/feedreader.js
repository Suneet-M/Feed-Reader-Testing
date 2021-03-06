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

    /* A test suite for Initial Entries */
    describe('Initial Entries', function () {
        /* To ensure when the loadFeed function is called, and
         * completes its work, there is at least a single .entry
         * element within the .feed container.
         */
        beforeEach(function (done) {
            // callback passed to wait for this function before continuing to spec.
            loadFeed(0, () => done());
        });

        it('are loaded successfully', function (done) {
            // fetching an array of all entries and checking its length.
            expect(document.querySelector('.entry').length).not.toBe(0);
            done();
        });
    });

    /* A test suite for New Feed Selection */
    describe('New Feed Selection', function () {
        /* To ensure when a new feed is loaded by the loadFeed
         * function, the content actually changes.
         */
        let feedContentBefore,
            feedContentAfter;

        beforeAll(function (done) {
            // call to first feed in the allFeeds.
            loadFeed(0, () => {
                // store initial feed content
                feedContentBefore = document.querySelector('.feed').textContent;
            });
            // call to second feed in the allFeeds.
            loadFeed(1, () => {
                // store new feed content
                feedContentAfter = document.querySelector('.feed').textContent;
                done();
            });
        });

        it('is working correctly', function (done) {
            expect(feedContentBefore).not.toBe(feedContentAfter);
            done();
        });

        // to re-initialize the application for usage.
        afterAll(() => init());
    });
}());
