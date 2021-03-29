# Skytable Documentation
Source for the documentation site for Skytable. You can [read the docs here](https://skytable.github.io/docs).

## Contributing
Fork, make changes and submit a PR!

### Making changes to the `docs/Actions` folder
The `Actions` folder contains the documentation for the actions that Skytable supports. However, by no means should you modify them _here_.
You should instead update [this file](https://github.com/skytable/skytable/blob/next/actions.jsonc). The documentation for the actions or the _actiondoc_ as we call it is built automatically from this file by using the `docbuilder` (our custom tool for generating documentation).

## License
The documentation is licensed under the [CC-BY-SA-4.0](./LICENSE-CC) license while the `docbuilder` is licensed under the [GPL-3.0](./LICENSE-GPL3) license.