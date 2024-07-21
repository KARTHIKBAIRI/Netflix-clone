

$(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
      // Hide all content sections
      $('.content').css('max-height', '0');
      
      // Toggle the selected content section
      var content = $(this).siblings('.content');
      content.css('max-height', this.checked ? content[0].scrollHeight + 'px' : '0');
    });
  });