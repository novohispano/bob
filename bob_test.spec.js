var Bob = require('./bob');

describe('Bob', function () {
  var bob = new Bob();

  it('states something', function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');

    expect(result).toEqual('Whatever.');
  });

  it('states something else', function() {
    var result = bob.hey('I\'m to fancy.');

    expect(result).toEqual('Whatever.');
  });

  it('shouts', function() {
    var result = bob.hey('WATCH OUT!');

    expect(result).toEqual('Woah, chill out!');
  });

  it('shouts numbers', function() {
    var result = bob.hey('1, 2, 3 GO!');

    expect(result).toEqual('Woah, chill out!');
  });

  it('asks a question', function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');

    expect(result).toEqual('Sure.');
  });

  it('asks another question', function() {
    var result = bob.hey('Do you like JavaScript?');

    expect(result).toEqual('Sure.');
  });

  it('is quiet', function () {
    var result = bob.hey('');

    expect(result).toEqual('Fine. Be that way!');
  });

  it('is quiet longer', function () {
    var result = bob.hey('   ');

    expect(result).toEqual('Fine. Be that way!');
  });

  it('knows he is a teenager', function() {
    var result = bob.isTeenager();

    expect(result).toBe(true);
  })

  it('knows he is not an adult', function() {
    var result = bob.isAdult();

    expect(result).toBe(false);
  })
});
