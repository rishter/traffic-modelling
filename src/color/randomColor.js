// inspired by work done on the following blog post:
// https://www.kirupa.com/html5/generating_random_colors.htm

// using this as a mechanism to ensure subsequent calls to this function yield
// random colors of different enough hues. We don't want cars who look too
// similar to be next to one another on the screen.


const _getRandomColor = (h, s, l, a) => {
  let hue = getRandomNumber(h[0], h[1]);
  let saturation = getRandomNumber(s[0], s[1]);
  let lightness = getRandomNumber(l[0], l[1]);
  let alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;

  return {
    h: hue,
    s: saturation,
    l: lightness,
    a: alpha,
    hslaValue: getHSLAColor(hue, saturation, lightness, alpha)
  }
}

const getRandomNumber = (low, high) => {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

const getHSLAColor = (h, s, l, a) => {
  return `hsl(${h}, ${s}%, ${l}%, ${a})`;
}

const getRandomRed = () => {
  return _getRandomColor([0, 30], [90, 100], [30, 50], [1, 1]).hslaValue
}


const windows = [[50, 70], [230, 250], [70, 90], [210, 230], [90, 110], [190, 210],
                 [110, 130], [170, 190], [130, 150], [150, 170]]
let windowIndex = 0;

const __getRandomColor = () => {
  if (windowIndex === windows.length-1) {
    windowIndex = 0
  } else {
    windowIndex++
  }

  return _getRandomColor(windows[windowIndex], [90, 100], [30, 50], [1, 1]).hslaValue
}

const cols = ["#9E2B0E", "#1F4B99", "#A67908", "#1D7324"]
let colIndex =0
const getRandomColor = () => {
  // this is actually getNextColor but this is a last-minute change. Would refactor properly in production
  if (colIndex === cols.length-1) {
    colIndex = 0
  } else {
    colIndex++
  }
  return cols[colIndex]
}

export {
  getRandomRed,
  getRandomColor
}
