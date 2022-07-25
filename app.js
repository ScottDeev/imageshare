
document.getElementById('share').addEventListener('click', async () => {
    const files = document.querySelector('img')
    console.log(files);
    if (!navigator.canShare()) {
        console.log('cant share');
    }

    if (navigator.canShare( {files} )) {
        try {
        await navigator.share({
            files,
            title: 'Images',
            text: 'Beautiful images'
        })
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("cannot work");
    }
})
