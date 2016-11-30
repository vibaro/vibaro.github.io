!function() {

    var page = {

        init: function() {
            page.menu.init();
            page.scroll.init();
        },

        menu: {
            init: function() {
                page.menu.events();
            },

            events: function() {
                $('.menu-root').delegate('.link', 'click', page.menu._onTabChanged);
            },

            _onTabChanged: function(e) {
                var el = $(this);

                if (!el) return;

                el = el.closest('li');

                $('li.active', '.menu-root').removeClass('active');

                if (el) {
                    el.addClass('active');
                    page.menu._active = el;
                }
            }
        },


        scroll: {
            init: function() {
                smoothScroll.init({
                    selector: '.link',
                    easing: 'easeInOutCubic'
                });
            }
        }

    };

    page.init();

} ();