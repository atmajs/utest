
export function location_pushSearch(path, win?) {
    win = win || window;

    var q = path.indexOf('?');
    if (q === -1) {
        trySetHash(path, win);
        return;
    }
    if (win.history == null || win.history.pushState == null)
        return;

    try {
        win.history.pushState({}, '', path.substring(q));
    } catch (error) { }
};

export function location_pushHistory(path, win) {
    win = win || window;

    if (win.history == null || win.history.pushState == null) {
        trySetHash(path, win);
        return;
    }

    var a;
    a = document.createElement('a');
    a.href = path;

    path = ''
        + win.top.location.protocol
        + '//'
        + win.top.location.host
        + a.pathname
        + a.search
        + a.hash
        ;

    try {
        win.history.pushState(null, null, path);
    } catch (error) { }
}

function trySetHash(url, win) {
    var index = url.indexOf('#');
    if (index === -1)
        return;
    win.location.hash = url.substring(index + 1);

}