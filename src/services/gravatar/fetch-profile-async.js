module.exports = ({ core, io }) => async (email, defaultProfile) => {

    if (!email) return defaultProfile;
    const url = core.gravatar.buildProfileUrl(email);
    const response = await io.fetch(url);
    if (response.status === 404) return defaultProfile;
    if (!response.ok) throw new Error(`Unexpected Gravatar response status ${response.status}.`);
    const data = await response.json();
    const [profile] = data.entry;
    return profile;
    
};
