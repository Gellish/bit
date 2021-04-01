import { GeneratorContext, ComponentTemplate } from '@teambit/generator';
import { indexFile } from './files/index';
import { aspectFile } from './files/aspect-file';
import { mainRuntime } from './files/main-runtime';

export const aspectTemplate: ComponentTemplate = {
  name: 'aspect',
  description: 'extend Bit capabilities',
  generateFiles: (context: GeneratorContext) => {
    return [
      {
        relativePath: 'index.ts',
        content: indexFile(context),
        isMain: true,
      },
      {
        relativePath: `${context.name}.aspect.ts`,
        content: aspectFile(context),
      },
      {
        relativePath: `${context.name}.main.runtime.ts`,
        content: mainRuntime(context),
      },
    ];
  },
};
