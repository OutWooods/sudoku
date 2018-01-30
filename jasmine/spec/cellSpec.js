describe("Cell", function() {
    var cell;

  beforeEach(function() {
    cell = new Cell;
  });

  it("should start with a 0 value", function() {
    expect(cell.value()).toEqual(0);
  });

  it("should start as unsolved", function() {
    expect(cell.solved()).toBe(false)
  });

  it("should be solved if you give it one candidate", function() {
    cell.candidates([1]);
    expect(cell.solved()).toBe(true)
  })

  it("should change its value to a lone candidate", function() {
    cell.candidates([1]);
    expect(cell.value()).toEqual(1);
  })

  it("should store candidates if there are more than 1", function() {
    cell.candidates([1, 2]);
    expect(cell.options()).toEqual([1,2]);
  })

});
