exports.defineAutoTests = function () {
    describe('(ACPAnalytics.extensionVersion)', function () {
        it('should exist', function () {
            expect(ACPAnalytics.extensionVersion).toBeDefined();
        });
        it('should be a function', function () {
            expect(typeof ACPAnalytics.extensionVersion === "function").toBe(true);
        });
        it('check if the result is a string', function (done) {
            ACPAnalytics.extensionVersion(function(result) {
                expect(typeof result === "string").toBe(true);
                done();
            }, function() {});
        });
    });

    describe('(ACPAnalytics.setVisitorIdentifier)', function () {
        beforeEach(function(){
          spyOn(console, 'log');
        })

        it('should print log to console', function(){
          ACPAnalytics.setVisitorIdentifier(null, function(){}, function(){})
          expect(console.log).toHaveBeenCalled();
        })
    });
};