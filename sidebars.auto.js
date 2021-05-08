
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
            "Actions/dbsize",
            "Actions/del",
            "Actions/exists",
            "Actions/flushdb",
            "Actions/get",
            "Actions/heya",
            "Actions/keylen",
            "Actions/mget",
            "Actions/mksnap",
            "Actions/mset",
            "Actions/mupdate",
            "Actions/sdel",
            "Actions/set",
            "Actions/sset",
            "Actions/supdate",
            "Actions/update",
            "Actions/uset"
        ]
    },
    {
        "type" : "category",
        "label" : "Protocol",
        "items" : [
            "Protocol/terrapipe",
            "Protocol/data-types",
            "Protocol/response-codes",
            "Protocol/errors"
        ]
    }
]
};
