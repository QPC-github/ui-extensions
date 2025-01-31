import * as fs from 'fs';
import {resolve, extname} from 'path';

import type {Packages} from '../../types';

export interface Example {
  filename: string;
  extension: string;
  content: string;
}

export function findExamplesFor({
  name,
  packages,
  subPath,
}: {
  name: string;
  packages: Packages;
  subPath: string;
}): Map<string, Example> {
  const examples = new Map();

  Object.keys(packages).forEach((packageName) => {
    const packagePath = packages[packageName];
    const componentExamplesFolder = resolve(
      `${packagePath}/src${subPath}/${name}/examples`,
    );

    if (fs.existsSync(componentExamplesFolder)) {
      fs.readdirSync(componentExamplesFolder).forEach((file) => {
        examples.set(packageName, {
          filename: file,
          extension: extname(file).split('.').pop(),
          content: fs.readFileSync(
            `${componentExamplesFolder}/${file}`,
            'utf8',
          ),
        });
      });
    }
  });

  return examples;
}

export function renderExamplesFor(examples: Map<string, Example>): string {
  if (examples.size === 0) {
    return '';
  }
  let markdown = '';

  markdown += `{% codeblock %}\n\n`;

  examples.forEach((example, key) => {
    markdown += renderExample({example, key});
  });

  markdown += '{% endcodeblock %}\n\n';

  return markdown;
}

export function renderExample({
  example,
  key,
}: {
  example: Example;
  key: string;
}): string {
  return [
    // ```js?title: "title"
    `\`\`\`${example.extension}?title: "${key}"`,
    '{% raw %}',
    `${example.content}`,
    '{% endraw %}',
    '```',
    '\n',
  ].join('\n');
}
