// header.html load
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-load').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

  // Sidebar load

fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-load').innerHTML = data;

    // sidebar가 로드된 이후에 .menu-link 선택 가능
    const menu = document.querySelectorAll(".menu-link");

    for (let i = 0; i < menu.length; i++) {
      menu[i].addEventListener("click", function () {
        menu.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    }

    // 또는 현재 URL 기준 active 적용
    const current = window.location.pathname.split("/").pop();
    menu.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });
