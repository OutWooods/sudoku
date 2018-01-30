function Cell() {
  let _Value = 0;
  let _Options = [];

  return {
    value: function() { return _Value },
    solved: function() { return (_Value == 0) ? false : true  },
    candidates: function(list) {
      _Options = list;
      if (list.length == 1) {_Value = list[0]};
    },
    options: function() {return _Options}
  }
}
