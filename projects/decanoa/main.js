!function() {
    var decanoa = {
        /**
         * VARIABLES
        */
        step: 1,

        /**
         * CONFIG
        */
        init: function() {
            decanoa.events();
        },

        events: function() {
            $('.page').delegate('.js-next-step', 'click', decanoa.onNextStep);
            $('.tickets, .boat').delegate('a', 'click', decanoa.onSelectItem);
        },

        /**
         * EVENTOS
        */
        onNextStep: function() {
            $('.page.active').removeClass('active');
            $('.page[data-step=' + (++decanoa.step) + ']').addClass('active');
        },

        onSelectItem: function() {
            $('.selected', '.page.active').removeClass('selected');

            $(this).closest('a').addClass('selected').end()
                   .closest('.page').addClass('ready').focus();
        }
    }

    /**
     * INIT
    */
    $(document).ready(decanoa.init);
} ();