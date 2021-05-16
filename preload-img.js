import glob from 'glob';
import fs from 'fs';

const options = {
    cwd: `${__dirname}/src/scenes`, //Folder path
};

console.log(options.cwd);

glob('**/*.png', options, (err, files) => {
    fs.writeFileSync(
        'src/imgs.js',
        files
            .map(
                (f, index) =>
                    `
export { default as img${index} } from './scenes/${f}';
    `
            )
            .join('')
    );
});
