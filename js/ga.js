(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-87028407-1', 'auto');
ga('send', 'pageview');
ga('send', 'event', 'btn', 'click');
ga('require', 'linkid', 'linkid.js');

function bga(str) {
    console.log('str:' + str)
    ga('send', 'event', 'button', 'click', str);
}

function ega(str) {
    ga('send', 'event', 'category', 'action', str);
}