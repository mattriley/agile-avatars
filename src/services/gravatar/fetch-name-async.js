module.exports = ({ core, io }) => async (email, defaultName) => {

    const url = core.gravatar.buildProfileUrl(email);
    const response = await io.fetch(url);
    if (!response.ok) return defaultName;
    const data = await response.json();
    const [profile] = data.entry;
    return profile.name?.givenName ?? profile.displayName ?? defaultName;
    
};
