module.exports = ({ io }) => () => {

    return '#' + ('00000' + ((io.random() * (1 << 24)) | 0).toString(16)).slice(-6);
    
};

/* FOOTNOTES

- Based on: http://disq.us/p/d0itcl
- Used to assign a color when a new role is added.

*/
