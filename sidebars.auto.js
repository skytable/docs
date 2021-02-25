
module.exports = {
  docs: [
    "index",
    {
        "type": "category",
        "label": "Actions",
        "items": [
            "Actions/overview",
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
    "persistence",
    "config-files",
    "config-cmd",
    "snapshots",
    "benchmarking",
    "building-from-source",
    {
        "type" : "category",
        "label" : "Protocol",
        "items" : [
            "Protocol/terrapipe",
            "Protocol/data-types",
            "Protocol/response-codes"
        ]
    }
]
};
