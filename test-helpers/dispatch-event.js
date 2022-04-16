export default ({ window }) => (eventName, target) => {

    target.dispatchEvent(new window.Event(eventName));

};
