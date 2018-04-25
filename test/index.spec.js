
describe('the random number guess game', function(){
    var app;

    beforeEach(function(){
        app = application();
    });

    it('compares numbers', function(){
        expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
        expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
        expect(app.compareNumbers(10, 10)).toEqual(app.win());
    });
    it('validates that input numbers are correct', function(){
        expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
    });

    it('generates a random number', function(){
         expect(app.getRandom()).toBeGreaterThanOrEqual(1);
         expect(app.getRandom()).toBeLessThanOrEqual(100);
    });
});
