(function ($) {
    var $html = $('html');

    pulsarTinymceComponent = new pulsar.PulsarTinymceComponent($html);

    $(function () {
        pulsarTinymceComponent.init();
    })
}(jQuery));