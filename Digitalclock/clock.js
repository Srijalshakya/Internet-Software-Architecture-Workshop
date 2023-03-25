function digitalClock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours < 12 ? 'AM' : 'PM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
    document.getElementById('clock').innerHTML = time;
  }
  
  setInterval(digitalClock, 1000);
  