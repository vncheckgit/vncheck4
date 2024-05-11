(function () {
    var dynamicLoading = {
        css: function (path) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        },
        js: function (path, callback, onFailed) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = path;
            script.type = 'text/javascript';
            script.async = false
            script.onload = script.onreadystatechange = function () {
                callback && callback()
            };
            if (onFailed && typeof (onFailed) == "function") {
                script.onerror = onFailed;
            }
            head.appendChild(script);
        },
        type: 'template',
        time: '1713944774'
    }

    dynamicLoading.js('./static-fliphtml5-com/resourceFiles/html5_templates/js/deString.js?1713944774');
    dynamicLoading.js('./static-fliphtml5-com/resourceFiles/html5_templates/js/jquery-3.5.1.min.js')
    dynamicLoading.css('./static-fliphtml5-com/resourceFiles/html5_templates/template/Popular/style/style.css?1713944774')
    dynamicLoading.js('patch/fliphtml5/book.min.js?1713944774')

    var time = new Date().getTime()
    var pageEditorJs = './files/pageEditor.js?' + time;
    var editorTextSvgConfigJs = './files/textSvgConfig.js?' + time;
    var indexEditorAppCss = './static-fliphtml5-com/resourceFiles/yzReader/templates/Slide/css/app.css';
    var indexEditorChunkVendorsCss = './static-fliphtml5-com/resourceFiles/yzReader/templates/Slide/css/chunk-vendors.css';
    var indexEditorAppJs = './static-fliphtml5-com/resourceFiles/yzReader/templates/Slide/js/app.js';
    var indexEditorChunkVendorsJs = './static-fliphtml5-com/resourceFiles/yzReader/templates/Slide/js/chunk-vendors.js';

    var loadPageEditorJs = true;
    if(typeof htmlConfig != 'undefined' && typeof htmlConfig['fileExist'] != 'undefined' && typeof htmlConfig['fileExist']['pageEditor'] != 'undefined') {
        loadPageEditorJs = htmlConfig['fileExist']['pageEditor'] == 1 ? true : false;
    }
    if(loadPageEditorJs) {
        dynamicLoading.js(pageEditorJs, function () {
            window.readerConfigLoaded = true;
            if (window.readerConfig &&
                window.readerConfig.pages.length > 0
            ) {
                dynamicLoading.css(indexEditorAppCss)
                dynamicLoading.css(indexEditorChunkVendorsCss)
                dynamicLoading.js(editorTextSvgConfigJs)
                dynamicLoading.js(indexEditorAppJs)
                dynamicLoading.js(indexEditorChunkVendorsJs)
            }
        }, function () {
            window.readerConfigLoaded = true;
        })
    } else {
        window.readerConfigLoaded = true;
    }

    if (window.htmlConfig && window.htmlConfig.pageEditor) window.pageEditor = window.htmlConfig.pageEditor;
    window.pageEditorUrl = './static-fliphtml5-com/resourceFiles/html5_templates/js/pageItems.min.js?1713944774';
    if (window.pageEditor &&
        ((!pageEditor.pageAnnos && pageEditor.length > 0) ||
            (pageEditor.pageAnnos && pageEditor.pageAnnos.length > 0))) {
        dynamicLoading.js(pageEditorUrl)
    }
    window.pageEditorUrl = null;

    window.pageSliderUrl = './static-fliphtml5-com/resourceFiles/js/flipHtml5.hiSlider2.min.js';
    window.pageSliderCssUrl = './static-fliphtml5-com/resourceFiles/css/hiSlider2.min.css';
    if (window.sliderJS &&
        window.sliderJS.length > 0) {
        dynamicLoading.js(pageSliderUrl)
        dynamicLoading.css(pageSliderCssUrl)
    }
    window.pageSliderUrl = null;


    // window.pageSliderUrl = './static-fliphtml5-com/resourceFiles/html5_templates/js/LoadSlider.js?1713944774';
    // if (window.sliderJS &&
    //     window.sliderJS.length > 0) {
    //     dynamicLoading.js(pageSliderUrl)
    // }
    // window.pageSliderUrl = null;

    dynamicLoading.js('./static-fliphtml5-com/resourceFiles/html5_templates/template/Popular/javascript/main.min.js?1713944774')

    var loadPlugin = true;
    if(typeof htmlConfig != 'undefined' && typeof htmlConfig['fileExist'] != 'undefined' && typeof htmlConfig['fileExist']['plugin'] != 'undefined') {
        loadPlugin = htmlConfig['fileExist']['plugin'] == 1 ? true : false;
    }
    var interval = window.setInterval(function () {
        if (!window.bookConfig) return;

        window.clearInterval(interval);
        dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/encryption/encryption.min.js?1713944774')
        if(loadPlugin) {
            dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/plugin.js?1713944774')
        }
        dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/statistic.js?1713944774')
        dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/writeLog.js?1713944774')
        dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/visitinfo.js?1713944774')
        dynamicLoading.js('./static-fliphtml5-com/resourceFiles/js/FlipBookPlugins.min.js')
    }, 100);
})();