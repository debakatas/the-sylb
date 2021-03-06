import glob from 'glob';
import fs from 'fs';

const options = {
    cwd: `${__dirname}/src/scenes`, //Folder path
};

glob('**/*.png', options, (err, files) => {
    fs.writeFileSync(
        'src/imgs.js',
        files
            .map(
                (f, index) =>
                    `export { default as img${
                        index + 1
                    } } from './scenes/${f}';`
            )
            .join('\n')
    );
});
