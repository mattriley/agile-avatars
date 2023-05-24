export default ({ services, constants }) => async (emails, fallback) => {

    try {
        services.gravatar.status.to.working();
        const insert = async email => {
            try {
                await services.tags.insertGravatarAsync(email, fallback);
            }
            catch (err) {
                // console.error(err);
                // todo: log
            }
        };
        await Promise.all(emails.map(insert));
        services.gravatar.status.to.ready();
        services.settings.clearModal();
    } catch (err) {
        services.gravatar.status.to.error(constants.gravatar.errorMessage);
        throw err; // probably for logging
    }

};
