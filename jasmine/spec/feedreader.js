$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('has a url for each feed', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


         it('has a name for each feed', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });


    describe('The menu', function() {

         it('is hidden by default', function() {
            var slidingMenu = $('.slide-menu');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

          it('changes visibility when menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    describe('Initial Entries', function(){

         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('should have an entry in the feed container', function(){
            expect($('.feed .entry').length).not.toBe(0);
         });


    });

    describe('New Feed Selection', function(){

        var currentFeedIndex = 0;
        var firstFeedElementHeadline;

        beforeEach(function(done){
            loadFeed(currentFeedIndex, function(){
                currentFeedIndex += 1;
                done();
            });
         });

         it('should have a headline in the first element', function(done){
            firstFeedElementHeadline = $('article.entry').first().find('h2').text();
            expect(firstFeedElementHeadline.length).not.toBe(0);
            done();
         });

         it('should have a different headline in the first element', function(){
            var secondFeedElementHeadline = $('article.entry').first().find('h2').text();
            expect(firstFeedElementHeadline).not.toBe(secondFeedElementHeadline);
         });
    });

}());
