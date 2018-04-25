
describe('the random number guess game', function(){
    var app, randomize, randomNumber;

    beforeEach(function(){
        randomNumber = 10;
        randomize = function(){ return randomNumber };
        app = getApplication(randomize);
    });

    it('compares numbers', function(){
        expect(app.compareNumbers(10, 20)).toEqual(app.smaller());
        expect(app.compareNumbers(20, 10)).toEqual(app.bigger());
        expect(app.compareNumbers(10, 10)).toEqual(app.win());
    });
    it('validates that input numbers are correct', function(){
        expect(app.compareNumbers(10, 'abcd')).toEqual(app.error());
    });

    it('works in integration with the UI', function(){
        app.start(randomNumber);
        simulateThatUserIntroducesValue(20);

        doClick();

        expect(readResult()).toEqual(app.smaller());
    });

    function simulateThatUserIntroducesValue(val) {
        document.getElementById('randNumberInput').value = val;
    }
    function doClick() {
        document.getElementById("compare-numbers-button").click();
    }
    function readResult() {
        return document.getElementById('result').innerHTML;
    }
});

