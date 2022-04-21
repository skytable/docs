module.exports = {
  docs: [
    "index",
    "getting-started",
    "actions-overview",
    "containers",
    "ddl",
    "examples",
    "all-actions",
    {
      "type": "category",
      "label": "Configuration",
      "items": [
        "config",
        "config-files",
        "config-env",
        "config-cmd",
        "auth",
        "persistence",
        "snapshots",
        "ssl"
      ]
    },
    "clients",
    "perf-guide",
    "benchmarking",
    "deployment-notes",
    "building-from-source",
    {
      "type": "category",
      "label": "Actions",
      "items": [
        //AUTOBEGIN
        "actions/auth",
        "actions/dbsize",
        "actions/del",
        "actions/exists",
        "actions/flushdb",
        "actions/get",
        "actions/heya",
        "actions/keylen",
        "actions/lget",
        "actions/lmod",
        "actions/lset",
        "actions/lskeys",
        "actions/mget",
        "actions/mksnap",
        "actions/mpop",
        "actions/mset",
        "actions/mupdate",
        "actions/pop",
        "actions/sdel",
        "actions/set",
        "actions/sset",
        "actions/supdate",
        "actions/sys",
        "actions/update",
        "actions/uset",
        "actions/whereami",

        //AUTOEND
      ]
    },
    {
      "type": "category",
      "label": "Protocol",
      "items": [
        "protocol/skyhash",
        "protocol/data-types",
        "protocol/response-codes",
        "protocol/errors",
        {
          "type": "category",
          "label": "Deprecated",
          "items": [
            "protocol/deprecated/skyhash-1.0",
            "protocol/deprecated/data-types",
            "protocol/deprecated/errors",
            "protocol/deprecated/response-codes"
          ]
        },
      ]
    }
  ],
};