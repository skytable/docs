---
id: ssl
title: SSL/TLS configuration
---
Skytable lets you secure connections with TLS/SSL. This feature is built into Sky with OpenSSL and doesn't require you to have OpenSSL installed. You can enable SSL by using the [configuration file](#with-config-files) or by using [command-line arguments](#with-command-line-arguments).

### Step 1: Create a self-signed certificate and private key

This is outside the scope of this document, but you can read [this guide on Stackoverflow](https://stackoverflow.com/a/10176685) to get a brief idea of creating one.

### Step 2: Add this to your configuration and launch

#### With config files
Add the following block:
```toml
# This key is *OPTIONAL*
[ssl]
key = "/path/to/keyfile.pem"
chain = "/path/to/chain.pem"
port = 2004 # optional
only = true # optional to enable SSL-only requests
```
The above block is self-explanatory; you just have to add the paths to the private key and certificate files and add the port (if required) and set the server to `only` accept secure connections.

#### With command-line arguments

Simply start `skyd` with:
```shell
skyd -z cert.pem -k key.pem
```
:::tip Tip
You can pass the `--sslonly` flag to force the server to only accept secure connections, disabling the non-SSL interface. When this flag is not passed, and other SSL options are given &mdash; the server listens to both SSL and non-SSL requests
:::