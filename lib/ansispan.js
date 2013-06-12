var ansispan = function (str) {
  Object.keys(ansispan.foregroundColors).forEach(function (ansi) {
    var span = '<span style="color: ' + ansispan.foregroundColors[ansi] + '">';

    //
    // `\033[Xm` == `\033[0;Xm` sets foreground color to `X`.
    //

    str = str.replace(
      new RegExp('\033\\[' + ansi + 'm', 'g'),
      span
    ).replace(
      new RegExp('\033\\[0;' + ansi + 'm', 'g'),
      span
    );
  });
  //
  // `\033[1m` enables bold font, `\033[22m` disables it
  //
  str = str.replace(/\033\[1m/g, '<span style="font-weight:bold;">').replace(/\033\[22m/g, '</span>');

  //
  // `\033[3m` enables italics font, `\033[23m` disables it
  //
  str = str.replace(/\033\[3m/g, '<span style="font-style:italic;">').replace(/\033\[23m/g, '</span>');

  str = str.replace(/\033\[m/g, '</span>');
  str = str.replace(/\033\[0m/g, '</span>'); // also closes bold and italics
  return str.replace(/\033\[39m/g, '</span>');
};

ansispan.foregroundColors = {
  '30': 'black',
  '31': 'red',
  '32': 'green',
  '33': 'yellow',
  '35': 'purple',
  '36': 'cyan',
  '37': 'white'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ansispan;
}

