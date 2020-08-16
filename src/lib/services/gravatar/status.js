const STATUS = {
    ready: 'ready',
    working: 'working',
    error: 'error'
};

module.exports = ({ settings }) => {

    const is = Object.keys(STATUS).reduce((acc, status) => {
        const func = () => settings.gravatar.getState().status === status;
        return Object.assign(acc, { [status]: func });
    }, {});

    const to = {
        ready: () => {
            const { freetext } = settings.gravatar.getState();
            settings.gravatar.setState({
                status: STATUS.ready,
                freetext: is.error() ? freetext : '',
                errorMessage: ''
            });
        },
        working: () => {
            settings.gravatar.setState({ status: STATUS.working });
        },
        error: errorMessage => {
            settings.gravatar.setState({ status: STATUS.error, errorMessage });
        }
    };
   
    return { is, to };

};
