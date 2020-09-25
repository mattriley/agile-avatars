module.exports = () => (profile, defaultName) => {

    return profile.name?.givenName ?? profile.displayName ?? defaultName;

};
