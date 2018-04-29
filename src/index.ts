import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_formatblack extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_formatblack',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_formatblack is activated!');
  }
};

export default extension;
