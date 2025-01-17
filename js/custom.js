// 수정 필요
// $(document).ready(function() {
//   $('.menu-link').click(function() {
//     $('.menu-link').removeClass('active');
//     $(this).addClass('active');
//   });
// });

$(document).ready(function() {
  /* ====== conslut.html ====== */
  // modal
  $('.counsel-button').click(function() {
    $('.modal').fadeIn()
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
    $(document).on('click', '.sidebar-item .menu-toggle', function() {
      $(this).next('.submenu').stop().slideToggle(300);
      $(this).toggleClass('active');
    });
    $('.sidebar-item .submenu').click(function(){
      $(this).stop().slideUp(300);
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

    /* ====== bfclass.html ====== */
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

    /* ====== class-timetable.html ====== */
    // class-timetable tab
    const buttons = document.querySelectorAll('.time-tab-button');
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