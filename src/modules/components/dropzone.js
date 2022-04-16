export default ({ elements, services }) => () => {

    return elements.dropzone()
        .addEventListener('drop', e => {
            services.tags.insertFileBatchAsync(e.dataTransfer.files);
        });

};

