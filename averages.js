const findAverages = (numbArr, dp) => {
  let median, mode, mean, range = 0
  let length = numbArr.length

  // Range
  let max = Math.max(...numbArr) 
  let min = Math.min(...numbArr)
  range = (max - min).toFixed(dp)

  // Mean
  let sum = numbArr.reduce((a, b) => a + b, 0)
  mean = (sum/length).toFixed(dp)

  // Median
  let sorted = numbArr.sort((a, b) => a > b ? 1 : -1);
  if (length % 2 !== 0) {
    median = sorted[(length+1)/2]
  } else {
    median = (sorted[length/2] + sorted[length/2+1]) / 2 
  }

  // Mode
  let frequency = {}; 
  let maxFreq = 0; 
  let modes = [];

  for (let i in numbArr) {
    frequency[numbArr[i]] = (frequency[numbArr[i]] || 0) + 1

    if (frequency[numbArr[i]] > maxFreq) { 
      maxFreq = frequency[numbArr[i]];
    }
  }

  for (let k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    }
    mode = modes
  }

  console.log(
    'The range is: ' + range + "\n" +
    'The mean is: ' + mean + "\n" +
    'The median is: ' + median + "\n" +
    'The mode(s) is: '+ mode
  )
  return[range, mean, median, mode]
}

findAverages([119,75,5,6,84,56,41,10,42,1,2,34,42,25,92,71,0,4,30,90], 2)
// =>
// The range is: 184.00
// The mean is: 54.65
// The median is: 63.5
// The mode(s) is: 10

