describe("Receipt", function() {
  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
  });

  it("should have a total of 0 at start", function() {
    expect(receipt.total()).toEqual(0);
  });

});
