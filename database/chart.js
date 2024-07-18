const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ahmed Aly', 'Aya Elsayed', 'Mina Adel', 'Sarah Reda', 'Mohamed Elsayed'],
      datasets: [{
        label: 'transactions',
        data: [3000, 1850, 1550, 750,3375],
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