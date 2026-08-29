const output = document.querySelector('#output');

const totalTime1 = new Date().getSeconds().toFixed(2);
const delayTime1 = 1000, delayTime2 = 2000, delayTime3 = 3000;
const Promise1 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let trow = document.createElement('tr');
      let tdata1 = document.createElement('td');
      let tdata2 = document.createElement('td');
      tdata1.textContent = 'Promise 2';
      tdata2.textContent = 2;
      trow.appendChild(tdata1);
      trow.appendChild(tdata2);
      output.appendChild(trow);
      console.log("this is first promise")
      resolve(delayTime2);
    },delayTime2);
  })
}
const Promise2 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      output.firstElementChild.remove();
      let trow = document.createElement('tr');
      let tdata1 = document.createElement('td');
      let tdata2 = document.createElement('td');
      tdata1.textContent = 'Promise 1';
      tdata2.textContent = 1;
      trow.appendChild(tdata1);
      trow.appendChild(tdata2);
      output.appendChild(trow);
      console.log("this is second promise")
      resolve(delayTime1)
    },delayTime1);
  })
}
const Promise3 = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let trow = document.createElement('tr');
      let tdata1 = document.createElement('td');
      let tdata2 = document.createElement('td');
      tdata1.textContent = 'Promise 3';
    tdata2.textContent = 3;
      trow.appendChild(tdata1);
      trow.appendChild(tdata2);
      output.appendChild(trow);
      console.log("this is third promise")
      resolve(delayTime3)
    },delayTime3);
  })
}

let start = new Date().getSeconds().toFixed(2);
Promise.all([Promise1(),Promise2(),Promise3()]).then((data)=>{
  console.log(data, new Date())
  let end = new Date().getSeconds().toFixed(2);
  let totalSeconds = end-start;
  let trow = document.createElement('tr');
  let tdata1 = document.createElement('td');
  let tdata2 = document.createElement('td');
  tdata1.textContent = 'Total';
  tdata2.textContent = totalSeconds.toFixed(2);
  trow.appendChild(tdata1);
  trow.appendChild(tdata2);
  output.appendChild(trow);

})
