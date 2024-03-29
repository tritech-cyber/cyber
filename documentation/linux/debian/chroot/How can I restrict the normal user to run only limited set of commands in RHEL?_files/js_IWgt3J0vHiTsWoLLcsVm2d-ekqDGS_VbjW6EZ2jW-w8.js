chrometwo_require(['jquery', 'session', 'drupal-admin-drawer'], function($, session, drawer) {
    $(document).ready(function () {
        if ('cirrus' in Drupal.settings) {
            if ('nodeId' in Drupal.settings.cirrus && Drupal.settings.cirrus.nodeId.length > 0 && (window.location.pathname.indexOf("/edit") == -1)) {
                function fetch_drawer_data(session) {
                    if(session.isInternal()) {
                        $.ajax('/api/drawers/'+Drupal.settings.cirrus.nodeId).done(drawer.init);
                    }
                }
                session.onInit(fetch_drawer_data);
            }
        }
    });
});
;
/*
 * Used to hide and show the comment submit buttons.
 */

//This is temporary and will be replaced.
chrometwo_require(['jquery', 'moment'], function($, moment) {

    $(document).ready(function () {
        initMomentDates();

        Drupal.behaviors.updateMomentJSDates = {
        attach: function(context,settings) {
          initMomentDates();
        }
        };
        Drupal.attachBehaviors('.moment_date');
    });

    window.initMomentDates = initMomentDates;
    function initMomentDates() {
      var momentDates = $('.moment_date');
      if (momentDates.length > 0){
        defineMomentTranslations();

        function getCookie(name) {
            var re = new RegExp(name + "=([^;]+)");
            var value = re.exec(document.cookie);
            return (value != null) ? unescape(value[1]) : null;
        }

        var locale = getCookie('rh_locale');
        if (locale == '' || locale == 'undefined') {
          locale = 'en';
        }
        // Check if on MT page.
        var mt_path = window.location.pathname;
        if (mt_path.match(/mt/)) {
            // The page is on a MT. Force the MT language.
            var url_parts = mt_path.split('/');
            locale = url_parts[2];
        }

        moment.lang(locale);
        momentDates.each(function() {
          var date_string = $(this).text();
          var momentDate = moment(date_string, "YYYY-MM-DDTHH:mm:ssZ");

          if (momentDate.isValid()){
            var date = new Date(date_string);

            var now = new Date();

            var date_text = '';

            //call setHours to take the time out of the comparison
            if(date.setHours(0,0,0,0) == now.setHours(0,0,0,0)) {
              //Date equals today's date
              date_text = momentDate.fromNow();
            }
            else {
              date_text = momentDate.zone(date_string).calendar();
            }

            var full_text = momentDate.format(momentDate.lang().calendar('sameElse', momentDate));
            var isDiscussion = $('article.discussion .latest-post-anchor');
            if (isDiscussion.length > 0) {
                $(this).prop('title', 'Jump to latest post');
            }
            else {
                $(this).prop('title', full_text);
            }
            $(this).text(date_text);
          }
        });
      }
    }

    window.defineMomentTranslations = defineMomentTranslations;
    function defineMomentTranslations(){
      moment.lang('ja', {
          relativeTime : {
              future: '%s に',
              past:   '%s 前に',
              s:  '秒',
              m:  '1 分',
              mm: '%d 分',
              h:  '1 時間',
              hh: '%d 時間',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[昨日の時刻:]HH:mm',
              sameDay : '[本日の時刻:]HH:mm',
              nextDay : '[明日の時刻:]HH:mm',
              lastWeek : 'dddd [時刻:]HH:mm',
              nextWeek : 'dddd [時刻:]HH:mm',
              sameElse : 'YYYY[年]MMMMD[日]Ah[時]mm[分に]'
          },
          weekdays : [
              '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'
          ],
          months : [
              '1月', '2月', '3月', '4月', '5月', '6月', '7月',
              '8月', '9月', '10月', '11月', '12月'
          ],
          meridiem : function (hour, minute, isLowercase) {
              if (hour < 12) {
                  return "午 前";
              } else {
                  return "午 後";
              }
          }
      });

      moment.lang('de', {
          relativeTime : {
              future: 'In %s',
              past:   'Vor %s',
              s:  'Sekunden',
              m:  'eine Minute',
              mm: '%d Minuten',
              h:  'eine Stunde',
              hh: '%d Stunden',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Gestern um] HH:mm',
              sameDay : '[Heute um] HH:mm',
              nextDay : '[Morgen um] HH:mm',
              lastWeek : 'dddd [um] HH:mm',
              nextWeek : 'dddd [um] HH:mm',
              sameElse : 'D. MMMM YYYY [um] HH:mm'
          },
          weekdays : [
              'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
          ],
          months : [
              'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
              'August', 'September', 'Oktober', 'November', 'Dezember'
          ]
      });

      moment.lang('es', {
          relativeTime : {
              future: 'en %s',
              past:   'hace %s',
              s:  'segundos',
              m:  'un minuto',
              mm: '%d minutos',
              h:  'una hora',
              hh: '%d horas',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Ayer a las] HH:mm',
              sameDay : '[Hoy a las] HH:mm',
              nextDay : '[Mañana a las] HH:mm',
              lastWeek : 'dddd [a las] HH:mm',
              nextWeek : 'dddd [a las] HH:mm',
              sameElse : 'D [de] MMMM [de] YYYY [a las] HH:mm'
          },
          weekdays : [
              'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
          ],
          months : [
              'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
              'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
          ]
      });

      moment.lang('fr', {
          relativeTime : {
              future: 'dans %s',
              past:   '%s auparavant',
              s:  'secondes',
              m:  'une minute',
              mm: '%d minutes',
              h:  'une heure',
              hh: '%d heures',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Hier à] HH:mm',
              sameDay : '[Aujourd\'hui à] HH:mm',
              nextDay : '[Demain à] HH:mm',
              lastWeek : 'dddd [à] HH:mm',
              nextWeek : 'dddd [à] HH:mm',
              sameElse : 'D MMMM YYYY [à] HH[h]mm'
          },
          weekdays : [
              'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
          ],
          months : [
              'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
              'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
          ]
      });

      moment.lang('it', {
          relativeTime : {
              future: 'tra %s',
              past:   '%s fa',
              s:  'secondi',
              m:  'un minuto',
              mm: '%d minuti',
              h:  'un\'ora',
              hh: '%d ore',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Ieri alle] HH:mm',
              sameDay : '[Oggi alle] HH:mm',
              nextDay : '[Domani alle] HH:mm',
              lastWeek : 'dddd [alle] HH:mm',
              nextWeek : 'dddd [alle] HH:mm',
              sameElse : 'D MMMM YYYY [alle] HH:mm'
          },
          weekdays : [
              'Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'
          ],
          months : [
              'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio',
              'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
          ]
      });

      moment.lang('pt', {
          relativeTime : {
              future: 'em %s',
              past:   'em %s',
              s:  'segundos',
              m:  'um minuto',
              mm: '%d minutos',
              h:  'uma hora',
              hh: '%d horas',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Ontem às] HH:mm',
              sameDay : '[Hoje às] HH:mm',
              nextDay : '[Amanhã às] HH:mm',
              lastWeek : 'dddd [às] HH:mm',
              nextWeek : 'dddd [às] HH:mm',
              sameElse : 'D [de] MMMM [de] YYYY [às] HH:mm'
          },
          weekdays : [
              'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
          ],
          months : [
              'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
              'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
          ]
      });

      moment.lang('ko', {
          relativeTime : {
              future: '%s 후',
              past:   '%s 전',
              s:  '초',
              m:  '1분',
              mm: '%d분',
              h:  '1시간',
              hh: '%d시간',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : 'HH[시] mm[분] [어제]',
              sameDay : 'HH[시] mm[분] [오늘]',
              nextDay : 'HH[시] mm[분] [내일]',
              lastWeek : 'HH[시] mm[분] dddd',
              nextWeek : 'HH[시] mm[분] dddd',
              sameElse : 'HH[시] mm[분] YYYY[년] MMMM D[일]'
          },
          weekdays : [
              '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
          ],
          months : [
              '1월', '2월', '3월', '4월', '5월', '6월', '7월',
              '8월', '9월', '10월', '11월', '12월'
          ]
      });

      moment.lang('zh_CN', {
          relativeTime : {
              future: '%s',
              past:   '%s 前',
              s:  '秒',
              m:  '1 分钟',
              mm: '%d 分钟',
              h:  '1 小时',
              hh: '%d 小时',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[昨天]HH:mm',
              sameDay : '[今天] LT',
              nextDay : '[明天] LT',
              lastWeek : 'dddd [在] LT',
              nextWeek : 'dddd [在] LT',
              sameElse : 'YYYY[年]MMMMD[日]HH:mm'
          },
          weekdays : [
              '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'
          ],
          months : [
              '一月', '二月', '三月', '四月', '五月', '六月', '七月',
              '八月', '九月', '十月', '十一月', '十二月'
          ]
      });

      moment.lang('en', {
          relativeTime : {
              future: 'in %s',
              past:   '%s ago',
              s:  'seconds',
              m:  'a minute',
              mm: '%d minutes',
              h:  'an hour',
              hh: '%d hours',
              d:  'a day',
              dd: '%d days',
              M:  'a month',
              MM: '%d months',
              y:  'a year',
              yy: '%d years'
          },
          calendar : {
              lastDay : '[Yesterday at] LT',
              sameDay : '[Today at] LT',
              nextDay : '[Tomorrow at] LT',
              lastWeek : 'dddd [at] LT',
              nextWeek : 'dddd [at] LT',
              sameElse : 'MMMM D YYYY [at] h:mm A'
          },
          weekdays : [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ],
          months : [
              'January', 'February', 'March', 'April', 'May', 'June', 'July',
              'August', 'September', 'October', 'November', 'December'
          ]
      });
    }
});
;
