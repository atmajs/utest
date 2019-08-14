let _compo;

export function notify (state) {
    if (_compo == null) {
        _compo = ($('.utest-server-status') as any).compo();
    }
    _compo.scope.status = state;
};
