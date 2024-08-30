var mothlysalary = prompt("ask user its montly salary")
var mothlyexpanse = prompt("ask user its montly expense")

var calcsavings = mothlysalary - mothlyexpanse

// alert('your monthly salary is Rs.' +calcsavings)

Swal.fire({
    title: 'your saving',
    text: 'your monthly salary is Rs.' +calcsavings,
    icon: 'info',
    confirmButtonText: 'Cool'
  })