function p() {
    for (let i = 0; i < 6; i++) {
      q(i);
    }
    function q(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
  
  q();
  
  function q() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(() => {
          console.log(i)
      }, i*1000);
    }
  }
  