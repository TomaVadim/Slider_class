export function importCss(directory) {
    try {
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = directory.toString();
        head.append(link);
    }
    catch(err) {
        console.log(`${err.name}\n${err.message}`);
    }
}