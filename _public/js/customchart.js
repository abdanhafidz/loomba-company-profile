var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart-2').getContext('2d');
var ctx3 = document.getElementById('myChart-3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Minggu Ke-1', 'Minggu Ke-2', 'Minggu Ke-3', 'Minggu Ke-4', 'Minggu Ke-5', 'Minggu Ke-6'],
        datasets: [{
            label: '# jumlah pendaftar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#c5edff',
                'rgba(54, 162, 235, 0.2)',
                '#88aaef73',
                'rgba(75, 192, 192, 0.2)',
                '#7cf0ff66',
                '#57b5ff9c'
            ],
            borderColor: [
                '#56cbff',
                'rgba(54, 162, 235, 1)',
                '#528bfb',
                'rgba(75, 192, 192, 1)',
                '#64edfffa',
                '#088cf59c'
            ],
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


var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Desain Web', 'Competitive Programming', 'Desain Poster', 'Fotografi', 'Video Animasi'],
        datasets: [{
            label: '# jumlah pendaftar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#c5edff',
                'rgba(54, 162, 235, 0.2)',
                '#88aaef73',
                'rgba(75, 192, 192, 0.2)',
                '#7cf0ff66',
                '#57b5ff9c'
            ],
            borderColor: [
                '#56cbff',
                'rgba(54, 162, 235, 1)',
                '#528bfb',
                'rgba(75, 192, 192, 1)',
                '#64edfffa',
                '#088cf59c'
            ],
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

var myChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['10000', '5000', '50000', '70000', '150000'],
        datasets: [{
            label: 'Nominal',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a'
            ],
            borderColor: [
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a',
                '#f33f9a'
            ],
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