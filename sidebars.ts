module.exports = {
  docs: [
    "index",
    "installation",
    "using-the-repl",
    "architecture",
    {
      type: 'category',
      label: 'BlueQL',
      items: [
        "blueql/overview",
        "blueql/ddl",
        "blueql/dml",
        "blueql/dcl",
      ],
      collapsed: false,
      link: {
        type: 'doc',
        id: 'blueql/index'
      }
    },
    {
      type: 'category',
      label: 'System Management',
      items: [
        "system/configuration",
        "system/administration",
      ],
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'System Management',
        description: 'Learn how to configure Skytable for your needs and perform administrative tasks. We take a look at \
        the different modes of configuration (CLI, ENV, configuration files), settings, access control, managing the root account and global management.',
      }
    },
    "libraries",
    {
      type: 'category',
      label: 'Resources',
      items: [
        "resources/overview",
        "resources/migration",
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        "protocol/overview",
        "protocol/networking",
        "protocol/errors"
      ],
    },
    "benchmarking",
    "deployment",
    "limits",
  ]
};
