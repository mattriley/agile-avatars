const STATUS = {
    ready: 'ready',
    working: 'working',
    error: 'error'
};

export default ({ stores }) => {

    const is = Object.keys(STATUS).reduce((acc, status) => {
        const func = () => stores.settings.find('gravatar').status === status;
        return Object.assign(acc, { [status]: func });
    }, {});

    const to = {
        ready: () => {
            const { freetext } = stores.settings.find('gravatar');
            stores.settings.update('gravatar', {
                status: STATUS.ready,
                freetext: is.error() ? freetext : '',
                errorMessage: ''
            });
        },
        working: () => {
            stores.settings.update('gravatar', { status: STATUS.working });
        },
        error: errorMessage => {
            stores.settings.update('gravatar', { status: STATUS.error, errorMessage });
        }
    };

    return { is, to };

};
