import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_darkforest extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_darkforest:plugin',
  description: 'A JupyterLab dark theme with forest colors',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_darkforest is activated!');
    const style = 'jupyterlab_darkforest/index.css';

    manager.register({
      name: 'Dark Forest',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
