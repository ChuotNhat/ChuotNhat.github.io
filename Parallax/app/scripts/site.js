// window.site = {};
// (function ($, site) {

//   "use strict";

//   $(function () {
//     site.viewportWidth = (function () {
//       if (window.Modernizr.touch) {
//         return function () {
//           return $(window).width();
//         };
//       } else {
//         if (navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i)) {
//           return function () {
//             return document.documentElement.clientWidth;
//           };
//         } else {
//           return function () {
//             return window.innerWidth || document.documentElement.clientWidth;
//           };
//         }
//       }
//     })();

//     site.isDesktop = (function () {
//       return function () {
//         if (site.viewportWidth() < 992) {
//           return false;
//         }
//         return true;
//       }
//     })();

//     site.isMobile = (function () {
//       return function () {
//         if (site.viewportWidth() < 768) {
//           return true;
//         }
//         return false;
//       }
//     })();

//     site.isTablet = (function () {
//       return function () {
//         if (!site.isMobile() && !site.isDesktop()) {
//           return true;
//         }
//         return false;
//       }
//     })();

//     site.isMobileDevice = (function () {
//       return function () {
//         if (site.viewportWidth() < 992) {
//           return true;
//         }
//         return false;
//       }
//     })();
//     if(site.isMobileDevice()) {
//       $('[data-scrollbar]').perfectScrollbar('destroy');
//     } else {
//       $('[data-scrollbar]').perfectScrollbar();
//     }
//     site.callAjax = function (url, type, dataType, dataSend, callBackFunc) {
//       $.ajax({
//         url: url,
//         type: type,
//         dataType: dataType,
//         data: dataSend
//       })
//         .done(function (data) {
//           callBackFunc(data);
//         })
//         .fail(function (xhr, status, error) {
//           // console.log(xhr, status, error);
//         })
//         .always(function () {
//           // console.log('complete');
//         });
//     };

//     var dateFormat = 'DD/MM/YYYY';

//     var registerMenu = $('header .btn-register');

//     if ($('header').data('is-logged')) {
//       registerMenu.hide();
//     } else {
//       var curUrl = window.location.pathname,
//         registerUrl = registerMenu.attr('href');

//       if (curUrl === registerUrl) {
//         registerMenu.addClass('active');
//       }
//       $('header .account-info-menu').hide();
//     }

//     $('input[type="date"], input[type="time"]').on('change', function () {
//       var self = $(this);
//       if (self.val() !== '') {
//         self.addClass('input-blur');
//       } else {
//         self.removeClass('input-blur');
//       }
//     });
//     $('[data-color-picker]').each(function () {
//       var self = $(this),
//         inputEl = $('[data-color-name=' + self.data('color-item') + ']'),
//         colorPicker = new EightBitColorPicker({ el: self.get(0) });

//       if (inputEl.val() !== '') {
//         var hexColor = inputEl.val(),
//           palette = colorPicker.getCurrentPalette(),
//           corlorNumber;
//         //Fix duplicated #400000
//         if (hexColor === '#400000') {
//           corlorNumber = 1;
//         } else {
//           corlorNumber = $.inArray(hexColor, palette);
//         }
//         colorPicker.updateColor(corlorNumber);
//       } else {
//         $(inputEl).val(colorPicker.getHexColor());
//       }


//       $(window).on('resize', function () {
//         colorPicker.hide();
//       });

//       colorPicker.addEventListener('colorChange', function (e) {
//         $(inputEl).val(e.detail.picker.getHexColor());
//       })
//     });

//     $('select').on('changeSelect', function () {
//       var self = $(this);

//       if (self.attr('disabled')) {
//         self.parents('.custom-select').addClass('disabled-select');
//       } else {
//         self.parents('.custom-select').removeClass('disabled-select');
//       }
//     });

//     $('.select-control').selectBox({ menuSpeed: 'fast', menuTransition: 'fade', mobile: true });

//     $(window).on('resize', function () {
//       $('.select-control').selectBox('destroy');
//       $('.select-control').selectBox({ menuSpeed: 'fast', menuTransition: 'fade', mobile: true });

//       if(site.isMobileDevice()) {
//         $('[data-scrollbar]').perfectScrollbar('destroy');
//       } else {
//         $('[data-scrollbar]').perfectScrollbar();
//       }
//     });

//     $('[data-uploaded-files-group] [data-remove-file]').on('click', function (e) {
//       e.preventDefault();

//       var self = $(this),
//         fileGroup = self.parents('[data-uploaded-files-group]'),
//         fileName = self.siblings('.file-name').text();

//       $.magnificPopup.open({
//         items: {
//           src: '[data-popup-file-delete]',
//           type: 'inline'
//         },
//         mainClass: 'confirm-popup',
//         callbacks: {
//           beforeOpen: function () {
//             $('[data-close-popup]').off('click').on('click', function () {
//               if ($(this).data('value')) {
//                 $.ajax({
//                   url: self.data('remove-api'),
//                   data: { id: self.data('file-id') } || {},
//                   dataType: 'json',
//                   method: self.data('method'),
//                   success: function (response) {
//                     if (response.success) {
//                       self.parents('.item').remove();
//                       $.magnificPopup.close();
//                     }
//                   }
//                 });
//               } else {
//                 $.magnificPopup.close();
//               }
//             });
//           },
//           open: function () {
//             $.magnificPopup.instance.container.find('.file-name').text(fileName);
//           }
//         }
//       });
//     })
//   });

//   var succTimeout;
//   clearTimeout(succTimeout);
//   succTimeout = setTimeout(function() {
//     $('.notify:not(.hidden)').fadeOut(500, function() {
//       $(this).removeAttr('style').addClass('hidden');
//     });
//   }, 2500);

//   function getQueryParams(qs) {
//     qs = qs.split('+').join(' ');
//     var params = {},
//       tokens,
//       re = /[?&]?([^=]+)=([^&]*)/g;

//     while (tokens = re.exec(qs)) {
//       params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
//     }

//     return params;
//   }

//   // var groupBookingBtn = $('.btn-group-booking');

//   // if (groupBookingBtn.length > 0) {
//   //   var activeBtnClass = 'btn-active',
//   //     searchParam = getQueryParams(window.location.search).search,
//   //     tabActive = searchParam && searchParam.trim(),
//   //     activeEl = groupBookingBtn.find('#' + tabActive);

//   //   activeEl.length > 0 && activeEl.trigger('click');
//   // }

//   if (window.location.href.indexOf('?query') > -1 ) {
//     $('html, body').animate({
//         scrollTop:$('.manager-search').offset().top
//     }, 1000);
//   }

//   $.widget( 'custom.iconselectmenu', $.ui.selectmenu, {
//     _renderButtonItem: function( item) {
//       var buttonItem = $( '<span>', {
//         'class': 'ui-selectmenu-text'
//       });
//       this._setText( buttonItem, item.label );
//       this.button.addClass('thumbnail-select-button');
//       return buttonItem;
//     },
//     _renderItem: function( ul, item ) {
//       var li = $( '<li>' ),
//         wrapper = $( '<div>', { text: item.label } );

//       if ( item.disabled ) {
//         li.addClass( 'ui-state-disabled' );
//       }

//       $( '<span>', {
//         style: item.element.attr( 'data-style' ),
//         'class': 'ui-icon ' + item.element.attr( 'data-class' )
//       })
//         .appendTo( wrapper );

//       return li.append( wrapper ).appendTo( ul );
//     }
//   });
//   site.toggleContent = function() {
//     $('.expand-text').each(function () {
//       if (this.textContent.length < 23) {
//         $(this).addClass('full-width').siblings('label').hide();
//       }
//     });
//   };
//   if ($('[data-search-table]').length <= 0) {
//     site.toggleContent();
//   }
//   //Fixed notification bar while scroll
//   var notiBar = $('.navbar__noti');
//   if (notiBar.length) {
//     var index = notiBar.parent().offset().top + notiBar.height();
//     $(window).bind('scroll', function() {
//       if ($(this).scrollTop() > index){
//         notiBar.addClass('fixed');
//       }
//       else {
//         index = notiBar.parent().offset().top;
//         notiBar.removeClass('fixed');
//       }
//     });
//   }
//   //Toggle email group on cost center
//   $('[data-btn-email]').on('click', function() {
//     $(this).toggleClass('active').next().toggleClass('hidden');
//   });
//   //Show Receipt Info on paid billing
//   $('[data-billing-status]').on('change', function() {
//     var self = $(this);
//     var receiptInfo = self.parents('.custom-select').next();
//     if (self.val() === self.find('option').last().val() && receiptInfo.hasClass('hidden')) {
//       receiptInfo.removeClass('hidden');
//     }
//     else {
//       receiptInfo.addClass('hidden');
//     }
//   });
//   $('form').on('submit', function () {
//     setTimeout(function () {
//       var topErrorField = $('.parsley-errors-list').not('.hidden').has('.parsley-required').eq(0).offset();
//       $('html, body').animate({
//         scrollTop: topErrorField ? topErrorField.top - $('.navbar__noti').height() - $('.parsley-errors-list').parents('.custom-input').outerHeight(true) : 0
//       });
//     });
//   });

// }(window.jQuery, window.site));
