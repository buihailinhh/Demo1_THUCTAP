// $(document).ready(function(){
//     $('#toggle').click(function(){
//         $('.header__bottom-menu ul').slideToggle();
//         alert("hello Bui hai linh")

//     });
// })

// Lấy phần tử toggleButton và các icon từ DOM
var toggleButton = document.getElementById('toggle');
var barsIcon = document.getElementById('bars-icon');
var xIcon = document.getElementById('x-icon');

// Lấy phần tử navbar từ DOM
var navbar = document.querySelector('.navbar');

// Thêm sự kiện click cho toggleButton
toggleButton.addEventListener('click', function() {
  // Kiểm tra nếu navbar đang hiển thị, thì ẩn đi và đổi icon
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    barsIcon.style.display = 'inline';
    xIcon.style.display = 'none';
  } else {
    // Ngược lại, hiển thị và đổi icon
    navbar.style.display = 'block';
    barsIcon.style.display = 'none';
    xIcon.style.display = 'inline';
  }
});
document.getElementById('toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});



// hieu ung slider
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// let currentIndex = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//   });
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// }

// // Gọi hàm nextSlide sau mỗi khoảng thời gian (ví dụ sau 3 giây)
// setInterval(nextSlide, 5000);

// // Hiển thị slide đầu tiên khi tải trang
// showSlide(currentIndex);









  
