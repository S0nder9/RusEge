function toggleSpoiler() {
  var spoilerContent = this.nextElementSibling;
  spoilerContent.classList.toggle("show");
}

var spoilerTitles = document.querySelectorAll(".spoiler-title");
for (var i = 0; i < spoilerTitles.length; i++) {
  spoilerTitles[i].addEventListener("click", toggleSpoiler);
}


window.addEventListener("scroll", function() {
  var sidebar = document.getElementsByClassName("sidebar")[0];
  var windowHeight = window.innerHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollBottom = scrollTop + windowHeight;

  var sidebarHeight = sidebar.offsetHeight;

  // Если положение прокрутки достигает или превышает конец страницы, добавляем класс hide-sidebar
  if (scrollBottom >= documentHeight) {
    sidebar.classList.add("hide-sidebar");
  } else {
    sidebar.classList.remove("hide-sidebar");
  }
});

window.addEventListener('scroll', function() {
  var element = document.querySelector('.bx.bx-menu.bx-md');
  var windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

  if (windowRelativeBottom < document.documentElement.clientHeight) {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
});

var button = document.querySelector('.up__button');

button.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Перед показом кнопки скрываем ее
button.style.opacity = '0';

window.addEventListener('scroll', function() {
  // Получаем текущую позицию прокрутки страницы
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  // Устанавливаем пороговое значение, когда кнопка должна появиться
  var threshold = 200;

  if (scrollTop > threshold) {
    button.style.opacity = '1';
    button.style.visibility = 'visible';
  } else {
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
  }
});