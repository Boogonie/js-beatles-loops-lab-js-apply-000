function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    var x = musicians[i] + " plays " + instruments[i];
    band[i] = x;
  }
  return band;
}

function johnLennonFacts(facts) {
  while (i < facts.length) {
    var x = facts[i] + "!!!";
    i++;
  }
  return x;
}
