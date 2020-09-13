module.exports = () => profile => {

    return profile.name?.givenName ?? profile.displayName;

};
