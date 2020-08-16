module.exports = ({ el }) => () => {

    return el('div', 'multiples', {
        title: 'Multiples',
        innerHTML: `
            <p>
                Only needing a single avatar per team member may be a sign that user stories are well defined,
                and that team members can take stories to completion without context switching.
                It also makes it easier to gauge who is focused on what and can serve as a natural WIP limit for the
                team.
                See <a target="_blank" href="https://en.wikipedia.org/wiki/INVEST_(mnemonic)">INVEST</a> for
                characteristics of good quality user stories.
            </p>

            <p>
                If multiples are really needed, consider one <mark>active</mark>, and one or more <mark>passive</mark>
                avatars for each team member.
                The active avatar indicates what a team member is focused on, while
                the passive avatar may be used to indicate the team member is across an activity which has
                become blocked, dependent on another team, or otherwise only requires ad hoc attention.
            </p>
            
            <img src='img/tips/active-passive.png' />
        `
    });
    
};
