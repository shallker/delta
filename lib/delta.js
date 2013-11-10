exports.linear = function (t) {
  return t;
}

exports.easeInQuad = function (t) {
  return t*t;
}

exports.easeOutQuad = function (t) {
  return t*(2-t);
}

exports.easeInOutQuad = function (t) {
  return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}

exports.easeInCubic = function (t) {
  return t*t*t;
}

exports.easeOutCubic = function (t) {
  return (--t)*t*t+1;
}

exports.easeInOutCubic = function (t) {
  return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
}

exports.easeInQuart = function (t) {
  return t*t*t*t;
}

exports.easeOutQuart = function (t) {
  return 1-(--t)*t*t*t;
}

exports.easeInOutQuart = function (t) {
  return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
}

exports.easeInQuint = function (t) {
  return t*t*t*t*t;
}

exports.easeOutQuint = function (t) {
  return 1+(--t)*t*t*t*t;
}

exports.easeInOutQuint = function (t) {
  return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
}
