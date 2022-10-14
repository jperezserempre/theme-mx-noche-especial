(function ($, Drupal) {
  var ABAgeGate = {
    month: 12,
    day: 31,
    year: 1900,
    Minyear: 1919,
    limitAge: drupalSettings.ageGate.agegate_age_limit,
    redirect: drupalSettings.ageGate.agegate_redirect,
    ageUser: null,
    validateUrl: false,
    ageGateskipUrls: drupalSettings.ageGate.agegate_skipUrls,
    triggerAgegateValid: function() {
      var detail = 'agegateValid';
      try {
        // For modern browsers except IE:
        var event = new CustomEvent('agegateValid', {detail:detail});
      }
      catch(err) {
        // If IE 11 (or 10 or 9...?) do it this way:
        // Create the event.
        var event = document.createEvent('Event');
        // Define that the event name is 'build'.
        event.initEvent('agegateValid', true, true);
        event.detail = detail;
      }
      document.dispatchEvent(event);
    }
  };
  Drupal.behaviors.ABOTP = {
    attach: function () {
      const $btnAgeGate = $('a.agegate__btn');
      $btnAgeGate.hide();

      $("input#focus").focus();

      $("body").once("agegate").each(function () {

        $(document).ready(function(){
          if($("#agv2").length){
            $(".footer__load").html($("nav #footer__paco").html());
          }
        });

        let skipUrls = ABAgeGate.ageGateskipUrls.split('\n');
        for (url in skipUrls) {
          if (window.location.pathname == skipUrls[url].trim()) {
            ABAgeGate.validateUrl = true;
            break;
          } else {
            ABAgeGate.validateUrl = false;
          }
        }
        if (localStorage.getItem("ageGateValidate") || ABAgeGate.validateUrl) {
          setCookieTapit();
          $('#agv2').remove();
        } else {
          $("body").addClass("agegate-visible");
          $('#agv2').removeClass('d-none');
          $('#agv2').css('display', 'block');
          $("#focus").focus();
        }
        $(".age_gate_yes").click(function (event) {
          event.preventDefault();
          localStorage.setItem("ageGateValidate", ABAgeGate.ageUser);
          $("body").removeClass("agegate-visible");
          $('#agv2').remove();
          ABAgeGate.triggerAgegateValid();
        });
        $(".age_gate_no").click(function (event) {
          event.preventDefault();
          window.location.replace(ABAgeGate.redirect);
        });
        $('.agv2__input').val('');
        $('.agv2__input').on('input', function () {
          this.value = this.value.replace(/[^0-9]/g, '');
        });
        const $yeartGroup = $('[data-type="input-year"]');
        const $monthGroup = $('[data-type="input-month"]');
        const $dayGroup = $('[data-type="input-day"]');

        $btnAgeGate.on('click', function () {
          setCookieTapit();
          $("body").removeClass("agegate-visible");
          $("#agv2").remove();

          dataLayer.push({
            'event': 'GAEvent',
            'event_category': 'Age Gate',
            'event_action': 'Interaction',
            'event_label': 'Send',
            'interaction':'False',
            'component_name': 'Entrar',
            'element_text': 'Entrar_Noche_Especial',
          });
          // location.reload();
          //history.go(0);
        });

        $yeartGroup.attr('maxlength', 1);
        $monthGroup.attr('maxlength', 1);
        $dayGroup.attr('maxlength', 1);

        //validate Age day
        $dayGroup.on('keyup', function (e) {
          $('a.agegate__btn').hide();
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = $("input[data-element=" + $(this).data('previous') + "]");
            if (prev.length) {
              $(prev).select();
            }
          } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = $("input[data-element=" + $(this).data('next') + "]");
            if (next.length) {
              $(next).select();
            }
          }
          if ($(this).attr('data-element') === "day-02" && $(this).val() !== "") {
            var d = new Date();
            if ($('[data-element="day-01"]').val() != "" && $('[data-element="day-02"]').val() != "") {
              let daysInMonth = moment(ABAgeGate.year + '-' + ABAgeGate.month, "YYYY-MM").daysInMonth();
              ABAgeGate.ageUser = validateAge(ABAgeGate.day + '.' + ABAgeGate.month + '.' + ABAgeGate.year);
              if (parseFloat(ABAgeGate.ageUser) < parseInt(ABAgeGate.limitAge) || parseInt(ABAgeGate.day) > 31) {
                //window.location.replace(ABAgeGate.redirect);
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
              } else if (ABAgeGate.month > 0 && ABAgeGate.day > daysInMonth) {
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
              }
            } else {
              $('.error-year').remove();
              $('#age-gate-01 .form-age__content').append('<div class="error-year">No deben quedar campos en blanco</div>');
            }
          }
          checkAge();
        });

        //validate Age Month
        $monthGroup.on('keyup', function (e) {
          $('a.agegate__btn').hide();
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = $("input[data-element=" + $(this).data('previous') + "]");
            if (prev.length) {
              $(prev).select();
            }
          } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = $("input[data-element=" + $(this).data('next') + "]");
            if (next.length) {
              $(next).select();
            }
          }
          if ($(this).attr('data-element') === "month-02" && $(this).val() !== "") {
            var d = new Date();
            var limitAge = (parseInt(ABAgeGate.limitAge) + 0.01);
            if ($('[data-element="month-01"]').val() != "" && $('[data-element="month-02"]').val() != "") {
              let daysInMonth = moment(ABAgeGate.year + '-' + ABAgeGate.month, "YYYY-MM").daysInMonth();
              ABAgeGate.ageUser = validateAge(ABAgeGate.day + '.' + ABAgeGate.month + '.' + ABAgeGate.year);
              if (parseFloat(ABAgeGate.ageUser) < limitAge || ABAgeGate.month > 12) {
                //window.location.replace(ABAgeGate.redirect);
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
              } else if (ABAgeGate.month > 0 && ABAgeGate.day > daysInMonth) {
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
              }
            } else {
              $('.error-year').remove();
              $('#age-gate-01 .form-age__content').append('<div class="error-year">No deben quedar campos en blanco</div>');
            }
          }
          checkAge();
        });

        //Validate Age Year
        $yeartGroup.on('keyup', function (e) {
          $('a.agegate__btn').hide();
          $('.error-year').remove();
          if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = $("input[data-element=" + $(this).data('previous') + "]");
            if (prev.length) {
              $(prev).select();
            }
          } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = $("input[data-element=" + $(this).data('next') + "]");
            if (next.length) {
              $(next).select();
            }
          }
          if ($(this).attr('data-element') === "year-04" && $(this).val() !== "") {
            if ($('[data-element="year-01"]').val() !== "" && $('[data-element="year-02"]').val() !== "" && $('[data-element="year-03"]').val() !== "" && $('[data-element="year-04"]').val() !== "") {
              ABAgeGate.ageUser = validateAge(ABAgeGate.day + '.' + ABAgeGate.month + '.' + ABAgeGate.year);
              let year = $('[data-element="year-01"]').val() + $('[data-element="year-02"]').val() + $('[data-element="year-03"]').val() + $('[data-element="year-04"]').val();
              if (year.length === 4 && year < ABAgeGate.Minyear) {
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">El año mínimo debe ser de 1919</div>');
              }
              else if (parseInt(ABAgeGate.year) >= new Date().getFullYear()) {
                $('.error-year').remove();
                $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
              }
              else if (parseFloat(ABAgeGate.ageUser) < parseInt(ABAgeGate.limitAge)) {
                let empty_day = $('[data-element="day-01"]').val() === "" || $('[data-element="day-02"]').val() === '';
                let empty_month = $('[data-element="month-01"]').val() === "" || $('[data-element="month-02"]').val() === "";
                if (empty_day || empty_month) {
                  $('.error-year').remove();
                  $('#age-gate-01 .form-age__content').append('<div class="error-year">Fecha inválida</div>');
                } else {
                  window.location.replace(ABAgeGate.redirect);
                }
              }
            } else {
              $('#age-gate-01 .form-age__content').append('<div class="error-year">No deben quedar campos en blanco</div>');
            }
          }
          checkAge();
        });

        function checkAge() {
          let day = $('[data-element="day-01"]').val() + $('[data-element="day-02"]').val();
          let month = $('[data-element="month-01"]').val() + $('[data-element="month-02"]').val();
          let year = $('[data-element="year-01"]').val() + $('[data-element="year-02"]').val() + $('[data-element="year-03"]').val() + $('[data-element="year-04"]').val();
          let ageUser = 17;
          if (day.length === 2 && month.length === 2 && year.length === 4) {
            ageUser = validateAge(day + '.' + month + '.' + year);
            if (parseFloat(ageUser) >= 18) {
              $btnAgeGate.show();
            } else {

              dataLayer.push({
                'event': 'GAEvent',
                'event_category': 'Age Gate',
                'event_action': 'Interaction',
                'event_label': 'No',
                'interaction':'False',
                'component_name': 'Entrar',
                'element_text': 'Entrar_Noche_Especial'
              });

              window.location.replace(ABAgeGate.redirect);
            }
          }
        }

        function validateAge(date) {
          var birthday = moment(date, "DD.MM.YYYY")
          age = moment.duration(moment().diff(birthday)).asYears();
          return age;
        }
        function setCookieTapit() {
          //Cookies.set("STYXKEY_anonymousUserBirthDate", "1", { path: '/', domain: 'cervezapoker.com' });
          var domain_url = window.location.host;
          var domain_name = domain_url.replace("www.","");
          Cookies.set("STYXKEY_anonymousUserBirthDate", "1", { path: '/', domain: domain_name });
        }
        $('[data-element="ageValidate"]').click(function (e) {
          e.preventDefault();
          if ($('[data-element="day-01"]').val() !== ""
            && $('[data-element="day-02"]').val() !== ""
            && $('[data-element="month-01"]').val() !== ""
            && $('[data-element="month-02"]').val() !== ""
            && $('[data-element="year-01"]').val() !== ""
            && $('[data-element="year-02"]').val() !== ""
            && $('[data-element="year-03"]').val() !== ""
            && $('[data-element="year-04"]').val() !== ""
            && parseFloat(ABAgeGate.ageUser) > parseInt(ABAgeGate.limitAge)) {
            console.log('checkbokx = ' + $('.checkbox__control').val());
            setCookieTapit();
            console.log('after set cookie tapit');
            localStorage.setItem("ageGateValidate", ABAgeGate.ageUser);
            console.log('after set item');
            ABAgeGate.triggerAgegateValid();
            console.log('after trigger agegate valid');
          } else {
            $('#age-gate-01 .form-age__content').append('<div class="error-year">No deben quedar campos en blanco</div>');
          }
        });
      });
    },
  };
})(jQuery, Drupal);


/*jQuery(document).ready(function() {
    const agegateVisible = jQuery("body.agegate-visible");
    if (agegateVisible) {
        const Originalfooter = agegateVisible.find("footer.site-footer ").clone();
        //agregar vertical center class
        jQuery(".agegate-visible #agv2 #age-gate-01, .agegate-visible #agv2 #age-gate-02, .agegate-visible #agv2 #age-gate-03")
            .append(Originalfooter);
    }
});*/
