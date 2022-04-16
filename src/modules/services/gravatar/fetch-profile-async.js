export default ({ core, io }) => async email => {

    if (!email) return {};
    const url = core.gravatar.buildProfileUrl(email);
    const response = await io.fetch(url);
    if (response.status === 404) return {};
    if (!response.ok) throw new Error(`Unexpected Gravatar response status ${response.status}.`);
    const data = await response.json();
    const [profile] = data.entry;
    return profile;

};
