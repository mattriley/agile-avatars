export default ({ window }) => $tagImage => {

    return new Promise(resolve => {
        const intervalId = setInterval(() => {
            const style = window.getComputedStyle($tagImage);
            if (style.backgroundImage) {
                resolve(style.backgroundImage);
                clearInterval(intervalId);
            }
        }, 10);
    });

};
