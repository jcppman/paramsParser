module.exports = function (inRules) {

  var rules = inRules;

  return (function (inStr) {
  
    var params;

    for (var i=0; i<rules.length; i++) {

      var rule = rules[i];
      var reg = rule.reg;
      var getter = rules.getter;
      var result;

      if (typeof getter !== 'function') {

        throw new Error('INVALID_RULE * err -> getter should be a function');
      
      }

      if (reg) {

        var regResult = inStr.match(reg);
        result = getter(regResult);
      
      } else {

        result = getter(inStr);
      
      }

      if (result) {
      
        return result;

      }

    }

    throw new Error('PARAMS_PARSER * err -> NO_MATCH_RULE * input -> ' + inStr);

  });

};
