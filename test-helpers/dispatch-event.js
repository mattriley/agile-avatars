module.exports = ({ window }) => (eventName, target) => {
    
    target.dispatchEvent(new window.Event(eventName));

};
