let output = document.querySelector('#output');
const delayTime1 = 1000, delayTime2 = 2000, delayTime3 = 3000;
const Promise1 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime2);
    },delayTime2);
  })
}
const Promise2 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime1);
    },delayTime1);
  })
}
const Promise3 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(delayTime3);
    },delayTime3);
  })
}

let start = Date.now();
Promise.all([Promise1(),Promise2(),Promise3()]).then((data)=>{
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

