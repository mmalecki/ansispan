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

  Object.keys(ansispan.backgroundColors).forEach(function (ansi) {
    var span = '<span style="background-color: ' + ansispan.backgroundColors[ansi] + '">';

    //
    // `\043[Xm` == `\043[0;Xm` sets background color to `X`.
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
  str = str.replace(/\033\[1m/g, '<b>').replace(/\033\[22m/g, '</b>');

  //
  // `\033[3m` enables italics font, `\033[23m` disables it
  //
  str = str.replace(/\033\[3m/g, '<i>').replace(/\033\[23m/g, '</i>');

  str = str.replace(/\033\[m/g, '</span>');
  str = str.replace(/\033\[0m/g, '</span>');
  return str.replace(/\033\[39m/g, '</span>');
};

ansispan.foregroundColors = {
  '30': 'black',
  '31': 'red',
  '32': 'green',
  '33': 'yellow',
  '34': 'blue',
  '35': 'purple',
  '36': 'cyan',
  '37': 'white'
};

ansispan.backgroundColors = {
  '40': 'black',
  '41': 'red',
  '42': 'green',
  '43': 'yellow',
  '44': 'blue',
  '45': 'purple',
  '46': 'cyan',
  '47': 'white'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ansispan;
}

