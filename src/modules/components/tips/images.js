export default ({ el }) => () => {

    return el('div', {
        title: 'Images',
        innerHTML: `
            <p>
                Have you ever joined a new team and struggled to remember everyone's names?
                You're not alone! Profile <mark>photos are the most effective</mark> way to identify people.
                Cartoon characters may be cute, but unless your team never changes, they're unhelpful.
            </p>            
            <p>            
                For a better looking result, <mark>make sure your images are square</mark> in shape.
            </p>`
    });

};
