findAverages = (numbArr, dp) => {
  let median, mode, modal, range = 0
  let length = numbArr.length

  // Range
  let max = Math.max(...numbArr) 
  let min = Math.min(...numbArr)
  range = (max - min).toFixed(dp)

  // Mean
  let sum = numbArr.reduce((a, b) => a + b, 0)
  median = (sum/length).toFixed(dp)

  // Median
  let sorted = numbArr.sort((a, b) => a > b ? 1 : -1);
  if (length % 2 !== 0) {
    modal = sorted[(length+1)/2]
  } else {
    modal = (sorted[length/2] + sorted[length/2+1]) / 2 
  }

  // Modal
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
    'The median is: ' + median + "\n" +
    'The modal is: ' + modal + "\n" +
    'The mode(s) is: '+ mode
  )
}

findAverages([1,1,4,4,7,12,-3,92,70], 2)
// => 
// The range is: 95.00
// The median is: 20.89
// The modal is: 7
// The mode(s) is: 1,4
