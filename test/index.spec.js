describe('the random number guess game', function(){
  beforeEach(function(){
      document.getElementById('result').innerHTML = '';
  });

  it('reads from the GUI and sets the result', function(){
      start();
      expect(document.getElementById('result').innerHTML).toEqual("");
      document.getElementById('randNumberInput').value = 100;

      document.getElementById('compare-numbers-button').click();

      expect(document.getElementById('result').innerHTML).not.toEqual("");
  });

  it('generates a random number', function(){
     expect(getRandom()).toBeGreaterThanOrEqual(1);
     expect(getRandom()).toBeLessThanOrEqual(100);
  });

  it('compares number introduced by the user with a random', function(){
      document.getElementById('randNumberInput').value = 20;

      compareNumbers(40);

      expect(document.getElementById('result').innerHTML)
          .toEqual(bigger());
  });
  
  it('should send message error when input is empty', function(){
    document.getElementById('randNumberInput').innerHTML = '';
    expect(document.getElementById('error').innerHTML).toEqual("Error, introduce un número");

  });

});
