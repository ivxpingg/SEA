/**
 * 判断浏览器类型
 * @author sgj(https://github.com/ivxpingg)
**/

/**
 * 获取浏览器类型
 * @return {Object}
 */
const browserType = function () {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return  {
        isOpera: isOpera,
        isFirefox: isFirefox,
        isSafari: isSafari,
        isIE: isIE,
        isEdge: isEdge,
        isChrome: isChrome,
        isBlink: isBlink
    }
}

export default browserType;