// header.html load
// fetch('header.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('header-load').innerHTML = data;
//   })
//   .catch(error => console.error('Error loading header:', error));

 // Sidebar load
fetch('sidebar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('sidebar-load').innerHTML = data;

  // [0] submenu 링크 (menu-link) 클릭 시 파란색 표시
  const menu = document.querySelectorAll(".menu-link");
  menu.forEach(link => {
    link.addEventListener("click", function () {
      menu.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // [0-2] 현재 페이지와 일치하는 메뉴 (active)
  const current = window.location.pathname.split("/").pop();
  menu.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // [1] menu-toggle 클릭 시 서브메뉴 열기 + 기억하기 (사라지지 않게 유지)
  const toggles = document.querySelectorAll(".menu-toggle");
  const submenus = document.querySelectorAll(".submenu");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
      }

      const target = this.dataset.target;
      localStorage.setItem("activeMenu", target); // 기억

      // 기존 메뉴 상태 초기화
      toggles.forEach(el => el.classList.remove("active"));
      submenus.forEach(el => el.classList.remove("active"));

      // 현재 메뉴 열기
      this.classList.add("active");
      const submenu = document.querySelector(`.submenu[data-menu="${target}"]`);
      if (submenu) submenu.classList.add("active");

      // sidebar-right 열기 (만약 오른쪽 사용 시)
      document.querySelector(".sidebar-right")?.classList.remove("collapsed");
    });
  });

  // [1-2] 페이지 로드 시 기억된 메뉴 자동 열기
  const savedTarget = localStorage.getItem("activeMenu");
  if (savedTarget) {
    const savedToggle = document.querySelector(`.menu-toggle[data-target="${savedTarget}"]`);
    const savedSubmenu = document.querySelector(`.submenu[data-menu="${savedTarget}"]`);
    if (savedToggle && savedSubmenu) {
      savedToggle.classList.add("active");
      savedSubmenu.classList.add("active");
    }
  }

  // [2] sidebar-right 접기 버튼 (있는 경우만)
  const closeBtn = document.querySelector(".sidebar-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      document.querySelector(".sidebar-right")?.classList.toggle("collapsed");
    });
  }
});
