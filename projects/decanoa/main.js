!function() {
    var decanoa = {
        /**
         * VARIAVEIS
        */
        step: 1,

        /**
         * INIT
        */
        init: function() {
            decanoa.events();
        },

        events: function() {
            $('.page').delegate('.js-next-step', 'click', decanoa.onNextStep);
            $('.tickets, .boat').delegate('a', 'click', decanoa.onSelectItem);
            $('select').change(decanoa.onSelected)
        },

        /**
         * METODOS
        */
        printInfo: function() {
            var ticket = $('.selected', '.tickets');

            $('.info').find('.js-ticket').html(ticket.find('.title').html()).end()
                      .find('.js-time').html(ticket.find('.time').html()).end()
                      .find('.js-price').html(ticket.find('.price').html()).end()
                      .find('.js-day').html($('#date').val()).end()
                      .find('.js-seat').html( $('.selected span small', '.boat').html()).end();

            setTimeout(() => {
                if ($('.step-4').hasClass('active')) {
                        $('.js-confirm').attr('aria-label', decanoa.getResume()).show().focus();
                    }
            }, 100)
        },

        getResume: function(info) {
            return `Viagem: ${$('.js-ticket', info).text().trim()}; Duração: ${$('.js-time', info).text().trim()}; Dia: ${$('.js-day', info).text().trim()}; Assento: ${$('.js-seat', info).text().trim()}; Valor: ${$('.js-price span', info).text().trim()} reais. Clique para confirmar.`;
        },

        /**
         * EVENTOS
        */
        onNextStep: function() {
            $('.page.active').removeClass('active');
            $('.page[data-step=' + (++decanoa.step) + ']').addClass('active').find('.auto-focus').focus();
            decanoa.printInfo();
        },

        onSelectItem: function() {
            var link = $(this).closest('a'),
                page = $(this).closest('.page');

            if (!link.hasClass('busy')) {
                $('.selected', '.page.active').removeClass('selected');

                $(this).closest('a').addClass('selected');
                page.addClass('ready');
                decanoa.onSelected();
            }
        },

        onSelected: function() {
            $('.js-next-step', '.page.ready').focus();
        }
    }

    $(document).ready(decanoa.init);
} ();