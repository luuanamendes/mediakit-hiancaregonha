
(function () {
    var btn = document.getElementById('mnav-btn');
    var list = document.getElementById('mnav-list');
    function set(open) {
        list.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(list.hidden); });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('click', function (e) { if (!list.hidden && !e.target.closest('.nav')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !list.hidden) { set(false); btn.focus(); } });
})();
