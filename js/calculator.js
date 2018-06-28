(function ($) {
  $(document).ready(function () {
    var submit = $('#submit')
    var age = $('#age');

    function ageList() {
      var ageOptions = "";
      var i = 12;
      do {
        ageOptions += "<option>" + i + "</option>";
        i++;
      }
      while (i < 121);

      // Dit is een andere manier van bovenstaande loop schrijven.
      // for(var i = 12; i < 121; i++) {
      //   ageOptions += "<option>" + i + "</option>";
      // }

      $(age).html(ageOptions);
    }
    ageList()

    function calculate() {
      var gender = $('#gender').val();
      var weight = $('#weight');
      var length = $('#length');
      var workIntensity = $('#workIntensity');

      console.log(age);
    }

    $(submit).on('click', function (e) {
      e.preventDefault();
      calculate()
    });
  })
})(jQuery);