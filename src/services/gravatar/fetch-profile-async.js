module.exports = ({ core, io }) => async email => {

    const url = core.gravatar.buildProfileUrl(email);
    const response = await io.fetch(url);
    if (!response.ok) return {};
    const data = await response.json();
    const [profile] = data.entry;
    return profile;
    
};
