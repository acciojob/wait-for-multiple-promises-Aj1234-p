function randomDelayTime(time){
  let delayTime = [...time];
  for(let i=delayTime.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [delayTime[i],delayTime[j]] = [delayTime[j],delayTime[i]];
  }
  return delayTime;
}

let output = document.querySelector('#output');
let Time = [1000,2000,3000];
let delayTime = randomDelayTime(Time);
console.log(delayTime);
const Promise1 = (delayTime)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime[0]);
    },delayTime[0]);
  })
}
const Promise2 = (delayTime)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime[1]);
    },delayTime[1]);
  })
}
const Promise3 = (delayTime)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime[2]);
    },delayTime[2]);
  })
}

let start = Date.now();
Promise.all([Promise1(delayTime),Promise2(delayTime),Promise3(delayTime)]).then((data)=>{
  console.log(data);
  output.firstElementChild.remove();
   let end = Date.now();
   let totalSeconds = (end-start)/1000;
  for(let i=0;i<data.length;i++){
    let trow = document.createElement('tr');
    let tdata1 = document.createElement('td');
    let tdata2 = document.createElement('td');
    tdata1.textContent = `Promise ${i+1}`
    tdata2.textContent = data[i]/1000;
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
  output.appendChild(trow);
})
