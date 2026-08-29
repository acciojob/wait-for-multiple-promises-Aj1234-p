function randomDelayTime(time) {
  let delayTime = [...time];
  for (let i = delayTime.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [delayTime[i], delayTime[j]] = [delayTime[j], delayTime[i]];
  }
  return delayTime;
}

let Time = [1, 2, 3];
let delayTime = randomDelayTime(Time);
console.log(delayTime);

const makeDelayedPromise = (s) => {
	let ms = s*1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(s), ms);
  });
};

let start = Date.now();

Promise.all(delayTime.map(makeDelayedPromise)).then((data) => {
  console.log(data);
  let end = Date.now();
  let totalSeconds = (end - start) / 1000;

  // Only touch the DOM if it exists (i.e., running in a browser)
  if (typeof document !== 'undefined') {
    let output = document.querySelector('#output');
    if (output.firstElementChild) output.firstElementChild.remove();

    for (let i = 0; i < data.length; i++) {
      let trow = document.createElement('tr');
      let tdata1 = document.createElement('td');
      let tdata2 = document.createElement('td');
      tdata1.textContent = `Promise ${i + 1}`;
      tdata2.textContent = data[i] ;
      trow.appendChild(tdata1);
      trow.appendChild(tdata2);
      output.appendChild(trow);
    }

    let trow = document.createElement('tr');
    let tdata1 = document.createElement('td');
    let tdata2 = document.createElement('td');
    tdata1.textContent = 'Total';
    tdata2.textContent = totalSeconds.toFixed(3);
    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    output.appendChild(trow)
  } else {
    // Fallback for non-browser/platform environment
    data.forEach((d, i) => console.log(`Promise ${i + 1}: ${d / 1000}s`));
    console.log(`Total: ${totalSeconds.toFixed(3)}s`);
  }
});