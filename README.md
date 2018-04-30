# jupyterlab_formatblack

Formats cells using the `Black` uncompromising Python code formatter.
This is quite a hacky solution that relies on the `blackcellmagic` extension by csurfer.
It adds the command `Format cell with Black` which just
 1. adds the text `%%black` to the top of the cell, and
 2. runs the cell

You can add a keyboard shortcut by adding something like...

```json
{
  "black:format-cell": {
    "command": "black:format-cell",
    "keys": ["F"],
    "selector": ".jp-Notebook:focus"
  }
}
```

... to the keyboard shortcuts in jupyterlab settings.

## Prerequisites

* JupyterLab
* [BlackCellMagic](https://github.com/csurfer/blackcellmagic)

## Install

```bash
jupyter labextension install jupyterlab_formatblack
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

