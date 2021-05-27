
module.exports = {
  docs: [
    "index",
    "getting-started",
    "actions-overview",
    "persistence",
    "config-files",
    "config-cmd",
    "clients",
    "snapshots",
    "ssl",
    "benchmarking",
    "building-from-source",
    {
        "type": "category",
        "label": "Actions",
        "items": [
            "actions/dbsize",
            "actions/del",
            "actions/exists",
            "actions/flushdb",
            "actions/get",
            "actions/heya",
            "actions/keylen",
            "actions/lskeys",
            "actions/mget",
            "actions/mksnap",
            "actions/mset",
            "actions/mupdate",
            "actions/sdel",
            "actions/set",
            "actions/sset",
            "actions/supdate",
            "actions/update",
            "actions/uset"
        ]
    },
    {
        "type" : "category",
        "label" : "Protocol",
        "items" : [
            "protocol/skyhash",
            "protocol/data-types",
            "protocol/response-codes",
            "protocol/errors"
        ]
    }
]
};
