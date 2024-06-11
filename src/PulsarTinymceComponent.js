'use strict';

class PulsarTinymceComponent {

    constructor ($html) {
        this.$html = $html;

        const fs = require('fs'),
              tinymce = require('tinymce/tinymce');

        /* Default icons are required. After that, import custom icons if applicable */
        require('tinymce/icons/default');

        /* Required TinyMCE components */
        require('tinymce/themes/silver');
        require('tinymce/models/dom');

        /* Import a skin (can be a custom skin instead of the default) */
        require('../skins/ui/pulsar/skin.css');

        /* Import plugins - include the relevant plugin in the 'plugins' option. */
        require('tinymce/plugins/advlist');
        require('tinymce/plugins/code');
        require('tinymce/plugins/codesample');
        require('tinymce/plugins/emoticons');
        require('tinymce/plugins/emoticons/js/emojis');
        require('tinymce/plugins/link');
        require('tinymce/plugins/lists');
        require('tinymce/plugins/table');
        require('tinymce/plugins/directionality');
        require('tinymce/plugins/wordcount');
        require('tinymce/plugins/insertdatetime');
        require('tinymce/plugins/anchor');
        require('tinymce/plugins/searchreplace');
        require('tinymce/plugins/charmap');

        /* content UI CSS is required */
        this.contentUiSkinCss = fs.readFileSync('node_modules/tinymce/skins/ui/oxide/content.css', { encoding: 'UTF-8' });

        /* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
        this.contentCss = fs.readFileSync('node_modules/tinymce/skins/content/default/content.css', { encoding: 'UTF-8' });
    }

    init () {
        if (typeof this.$html === 'undefined' || !this.$html.length) {
            throw new Error('$html must be passed to PulsarTinymceComponent');
        }

        /* Initialize TinyMCE */
        tinymce.init({
            selector: 'textarea.js-tinymce',
            /* All plugins need to be imported and added to the plugins option. */
            plugins: 'advlist code codesample emoticons link lists table directionality wordcount insertdatetime anchor searchreplace charmap',
            removed_menuitems: 'print',
            toolbar: 'bold italic | bullist numlist | link emoticons | directionality ltr rtl | wordcount | insertdatetime | anchor | indent outdent',
            advlist_bullet_styles: 'square,circle,disc',
            advlist_number_styles: 'lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman',
            directionality_default: 'ltr rtl',
            insertdatetime_dateformat: '%d-%m-%Y',
            promotion: false,
            skin: false,
            content_css: false,
            content_style: this.contentUiSkinCss.toString() + '\n' + this.contentCss.toString(),
        });
    }

}

module.exports = PulsarTinymceComponent;
