!function() {
    var decanoa = {
        /**
         * VARIABLES
        */
        step: 1,

        /**
         * INIT
        */
        init: function() {
            decanoa.config();
            decanoa.events();
        },

        events: function() {
            $('.page').delegate('.js-next-step', 'click', decanoa.onNextStep);
            $('.tickets, .boat').delegate('a', 'click', decanoa.onSelectItem);
        },

        config: function() {
            decanoa.shuffleBusy();
        },

        shuffleBusy: function() {
            var seats = $('.seat'), seat, random;

            for (var i = 0; i < 2; i++) {
                random = Math.floor(Math.random() * seats.length),
                seat   = $(seats.get(random));

                seat.find('a').addClass('busy').end()
                    .find('.status').html('ocupado');
            }
        },

        /**
         * EVENTOS
        */
        onNextStep: function() {
            $('.page.active').removeClass('active');
            $('.page[data-step=' + (++decanoa.step) + ']').addClass('active');
        },

        onSelectItem: function() {
            var link = $(this).closest('a');

            if (!link.hasClass('busy')) {
                $('.selected', '.page.active').removeClass('selected');
    
                $(this).closest('a').addClass('selected').end()
                       .closest('.page').addClass('ready').focus();
            }
        }
    }

    /**
     * INIT
    */
    $(document).ready(decanoa.init);
} ();