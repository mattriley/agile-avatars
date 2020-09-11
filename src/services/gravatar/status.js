const STATUS = {
    ready: 'ready',
    working: 'working',
    error: 'error'
};

module.exports = ({ stores }) => {

    const is = Object.keys(STATUS).reduce((acc, status) => {
        const func = () => stores.settings.getState('gravatar').status === status;
        return Object.assign(acc, { [status]: func });
    }, {});

    const to = {
        ready: () => {
            const { freetext } = stores.settings.getState('gravatar');
            stores.settings.setState('gravatar', {
                status: STATUS.ready,
                freetext: is.error() ? freetext : '',
                errorMessage: ''
            });
        },
        working: () => {
            stores.settings.setState('gravatar', { status: STATUS.working });
        },
        error: errorMessage => {
            stores.settings.setState('gravatar', { status: STATUS.error, errorMessage });
        }
    };
   
    return { is, to };

};
