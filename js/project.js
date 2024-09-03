document.addEventListener('DOMContentLoaded', function () {
  // Simulated real-time data
  setInterval(function () {
      document.getElementById('moistureValue').innerText = getRandomValue(20, 80) + '%';
      document.getElementById('temperatureValue').innerText = getRandomValue(15, 30) + '°C';
      document.getElementById('pHValue').innerText = getRandomValue(5, 8).toFixed(2);
  }, 3000);

  // Simulated historical data chart
  const ctx = document.getElementById('historicalChart').getContext('2d');
  const historicalChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
          datasets: [{
              label: 'Moisture (%)',
              data: [60, 55, 65, 70, 50],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Simulated user settings
  const dateRangeInput = document.getElementById('dateRange');
  dateRangeInput.addEventListener('change', function () {
      alert('Date range selected: ' + dateRangeInput.value);
  });

  function getRandomValue(min, max) {
      return Math.random() * (max - min) + min;
  }
});
