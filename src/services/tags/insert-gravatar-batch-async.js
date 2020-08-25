module.exports = ({ services, config, sentry }) => async (emails, fallback) => {
    
    try {
        services.gravatar.status.to.working();
        const insert = email => services.tags.insertGravatarAsync(email, fallback);
        await Promise.all(emails.map(insert));
        services.gravatar.status.to.ready();
        services.settings.clearModal();
    } catch (err) {
        sentry.captureException(err);
        services.gravatar.status.to.error(config.gravatar.errorMessage);
    }

};
