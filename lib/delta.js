exports.linear = function (progress) {
  return progress;
}

exports.easeInQuad = function (progress) {
  return progress * progress;
}

exports.easeOutQuad = function (progress) {
  return -progress * (progress - 2);
}
