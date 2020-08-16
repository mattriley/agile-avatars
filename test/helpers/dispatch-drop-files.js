module.exports = ({ window }) => (target, files) => {

    const event = new window.Event('drop');
    Object.defineProperty(event, 'dataTransfer', { value: { files } });
    target.dispatchEvent(event); 
    
};