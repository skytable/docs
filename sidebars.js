module.exports = {
  docs: [
    "index",
    "installation",
    "using-the-repl",
    "system-overview",
    {
      type: 'category',
      label: 'BlueQL',
      items: [
        "blueql",
        "blueql+ddl",
        "blueql+dml",
        "blueql+dcl",
      ],
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'BlueQL',
        description: 'In this section we take a look at the syntax and structure of BlueQL, how it is different from SQL, and \
        then proceed to understand different queries. We go from DDL queries which enables you to create spaces and models \
        to DML queries like INSERT and SELECT that enable you to do perform CRUD operations on the database and finally \
        take a look at DCL that enables you to control the access of data and perform administrative tasks. \
        We recommend that you carefully read through this section to get a strong understanding of BlueQL and how it \
        is different.',
      },
    },
    {
      type: 'category',
      label: 'Mangement',
      items: [
        "system+configuration",
        "system+administration",
      ],
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'System Management',
        description: 'Learn how to configure Skytable for your needs and perform administrative tasks. We take a look at \
        the different modes of configuration (CLI, ENV, configuration files), settings, access control, managing the root account and global management.',
      }
    },
    "resources",
    "libraries",
    "migration",
    "benchmarking",
    "deployment",
    "limits",
  ]
};
