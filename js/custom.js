// Sidebar load
const menu = document.querySelectorAll(".menu-link");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    menu.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
}

$(document).ready(function() {
  /* ====== conslut.html ====== */
  // modal
  $('.counsel-button, #student-tbody tr').click(function() {
    $('.student-modal').fadeIn()
  });
  $('.btn-close').click(function() {
    $('.modal').fadeOut();
  });
  $('.modal').click(function(event) {
    if ($(event.target).is('.modal')) {
      $('.modal').fadeOut();
    }
  });
  
  /* ====== manage-teacher.html ====== */
  // delete modal
  $('.check-delete').click(function() {
    $('.delete-modal').fadeIn();
  });
    // add manager modal
    $('.add-manager').click(function() {
      $('.manager-modal').fadeIn();
    });
    
    /* ====== book-result.html ====== */
    // book-result modal
    $('.book-result-btn').click(function() {
      $('.book-result-modal').fadeIn();
    });
    
    /* ====== manage-sms.html ====== */
    // word-modify modal
    $('#word-modify').click(function() {
      $('.sms-modal').fadeIn();
    });
    // point-charge modal
    $('#check-point').click(function() {
      $('.point-modal').fadeIn();
    });
    
    /* ====== sidebar.html ====== */
    // side bar menu toggle
    // $(document).on('click', '.sidebar-item .menu-toggle', function() {
    //   $(this).next('.submenu').stop().slideToggle(300);
    //   $(this).toggleClass('active');
    // });
    // $('.sidebar-item .submenu').click(function(){
    //   $(this).stop().slideUp(300);
    // });
      $(document).ready(function () {
        $(".menu-toggle").click(function() {
          // 왼쪽 메뉴 상태 초기화
          $(".menu-toggle").removeClass("active");
          $(".sidebar-right .submenu").removeClass("active");

          // 현재 메뉴 활성화
          $(this).addClass("active");
          const target = $(this).data("target");

          // 오른쪽 사이드바 열기 + 해당 submenu 표시
          $(".sidebar-right").removeClass("collapsed");
          $('.sidebar-right .submenu[data-menu="' + target + '"]').addClass("active");
        });

        $(".sidebar-close").click(function () {
          $(".sidebar-right").toggleClass("collapsed");
        });
      });

    // 모든 달력
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.calendar-open').forEach(btn => {
        btn.addEventListener('click', function () {
          const input = this.previousElementSibling;
          if (input && input.showPicker) {
            input.showPicker();
          }
        });
      });
    });
    

    /* ====== student-main.html ====== */
    // student-main tab
    const btns = document.querySelectorAll('.info-tab-btn a');
    const materials = document.querySelectorAll('.tab');
    
    btns.forEach(button => {
      button.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        materials.forEach(material => material.classList.remove('active'));
        const tabs = button.getAttribute('data-tab');
        document.getElementById(tabs).classList.add('active');
      });
    });

    $('.btn-gender').click(function() {
      $(this).closest('td').find('.btn-gender').removeClass('active');
      $(this).addClass('active');
    });

    $('.status-buttons .btn-status').click(function() {
      $('.reason-input').addClass('active');
    })
    // join
    $('.new-regist').click(function() {
      window.open(
        'join.html',
        'joinPopup',
        'width=auto,height=auto,scrollbars=yes,resizable=yes'
      );
    });
    // caleneder (년월)
    document.querySelectorAll('.month-today').forEach(header => {
      const input = header.querySelector('.hidden-date');
      const trigger = header.querySelector('.calendar-open');
      const display = header.querySelector('.current-month');
    
      // 초기값: 오늘 날짜의 연/월 표시
      const today = new Date();
      const initialText = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
      display.textContent = initialText;
    
      // 버튼 클릭 → 달력 열기
      trigger.addEventListener('click', e => {
        e.preventDefault();
        input.showPicker();
      });
    
      // 날짜 선택 시 → 연/월만 표시
      input.addEventListener('change', () => {
        const date = new Date(input.value);
        if (!isNaN(date)) {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          display.textContent = `${year}년 ${month}월`;
        }
      });
    });

    // calender2 (연월시분초)
    document.querySelectorAll('.icon-field.time-input.cal-adjust').forEach(picker => {
      const input = picker.querySelector('.datetime-input');
      const trigger = picker.querySelector('.calendar-btn');
      const display = picker.querySelector('.selected-datetime');
      
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        input.showPicker();
      });
      
      input.addEventListener('change', function () {
        const selected = this.value.replace('T', ' ');
        display.textContent = selected;
      });
    });
    
    // calender3 (연월시분)
    document.querySelectorAll('.day-picker').forEach(picker => {
      const input = picker.querySelector('.birth-input');
      const trigger = picker.querySelector('.birth-btn');
      const display = picker.querySelector('.day-display');
    
      display.textContent = "yyyy년 m월 d일";
    
      trigger.addEventListener('click', e => {
        e.preventDefault();
        input.showPicker();
      });
    
      // 선택 시 YYYY년 M월 D일 포맷으로 표시
      input.addEventListener('change', () => {
        const date = new Date(input.value);
        if (!isNaN(date)) {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          display.textContent = `${year}년 ${month}월 ${day}일`;
        }
      });
    });
    
    // active 파란색 변경
    document.querySelectorAll('.choose-group').forEach(group => {
      const buttons = group.querySelectorAll('.btn-choose');
      const hiddenInput = group.querySelector('input[type="hidden"]');
    
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // 1. 기존 active 모두 제거
          buttons.forEach(btn => btn.classList.remove('active'));
          // 2. 클릭한 버튼에 active 추가
          button.classList.add('active');
          // 3. hidden input 값 업데이트
          if (hiddenInput) {
            hiddenInput.value = button.dataset.value;
          }
        });
      });
    });
    


    /* ====== student-inout.html ====== */
    $('.icon-btn').on('click', function () {
      $(this).siblings('input[type="date"]')[0].showPicker();
    });
    // btn-inout modal
    $('#btn-inout').click(function() {
      $('.modal').fadeIn();
    });
    
    /* ====== bfclass.html ====== */
    // remarks modal
    $('.remarks').click(function() {
      $('.remarks-modal').fadeIn();
    });
    $('.class-guide').click(function() {
      $('.class-guide-modal').fadeIn();
    });
    // 시간 선택 시 표시되는 텍스트 업데이트
    $('.timepicker').on('input', function () {
      const timeValue = $(this).val(); // ex: "14:30"
      $(this).siblings('.display-time').text(timeValue || '--:--');
    });

    // class-guide modal
    $('.class-guide').click(function() {
      $('.calss-guide-modal').fadeIn();
    });
    // class-timetable tab
    const tabButtons = document.querySelectorAll('.class-before-after a');
    const tabContents = document.querySelectorAll('.ctab');

      tabButtons.forEach(button => {
      button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
    // 주차 버튼
    $('.week-btn').click(function () {
      $('.week-btn').removeClass('active');
      $(this).addClass('active');
    });
    // 클래스 버튼
    $('.class-btn').click(function () {
      $('.class-btn').removeClass('active');
      $(this).addClass('active');
    });
    // 컨설트 버튼
    $('.counsel-type button').click(function () {
      $('.counsel-type button').removeClass('active');
      $(this).addClass('active');
    });

    /* ====== class-timetable.html ====== */
    // class-timetable tab
    const buttons = document.querySelectorAll('.time-tab-btn');
    const contents = document.querySelectorAll('.time-tab-content');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        contents.forEach(content => content.classList.remove('active'));
        const tab = button.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
      });
    });

    // timetable information change -> schedule-btn modal
    $('.schedule-btn').click(function() {
      $('.time-change-modal').fadeIn();
    });

    // notice.html
    $('.notice-nums a').click(function() {
      $('.notice-nums a').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  
  /* ====== order.html ====== */
  // custom-spinner
  document.addEventListener('DOMContentLoaded', () => {
    // All spinner
    document.querySelectorAll('.custom-spinner').forEach((spinner) => {
      const inputField = spinner.querySelector('input[type="number"]');
      const incrementButton = spinner.querySelector('.spinner-buttons button:first-child');
      const decrementButton = spinner.querySelector('.spinner-buttons button:last-child');
  
      // Ensure that all elements exist
      if (inputField && incrementButton && decrementButton) {
        // Increase button event
        incrementButton.addEventListener('click', () => {
          inputField.stepUp();
        });
        // Decease button event
        decrementButton.addEventListener('click', () => {
          inputField.stepDown();
        });
      } else {
        console.error('Spinner 구성 요소를 찾을 수 없습니다.', spinner);
      }
    });
  });