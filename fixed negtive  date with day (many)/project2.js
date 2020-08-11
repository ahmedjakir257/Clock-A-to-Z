let countdown = document.querySelector('.countdown');
// Set Launch Date (ms)
let launchDate = new Date('aug 20, 2020 13:00:00').getTime();
name(countdown, launchDate)

let countdown1 = document.querySelector('.countdown1');
// Set Launch Date (ms)
let launchDate1 = new Date('aug 25, 2020 13:00:00').getTime();
name(countdown1, launchDate1)
let countdown2 = document.querySelector('.countdown2');
// Set Launch Date (ms)
let launchDate2 = new Date('aug 25, 2020 13:00:00').getTime();
name(countdown2, launchDate2)


// Update every second
function name(countdown, launchDate) {
    const intvl = setInterval(() => {
        // Get todays date and time (ms)
        const now = new Date().getTime();
      
        // Distance from now and the launch date (ms)
        const distance = launchDate - now;
      
        // Time calculation
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display result
        countdown.innerHTML = `
        <div>${days}<span>Days</span></div> 
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
        `;
      
        // If launch date is reached
        if (distance < 0) {
          // Stop countdown
          clearInterval(intvl);
          // Style and output text
          countdown.style.color = '#17a2b8';
          countdown.innerHTML = 'Launched!';
        }
      }, 1000);
    
}