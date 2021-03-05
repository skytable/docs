---
id: data-types
title: Data Types
---

This table lists all data types supported by Skytable and their corresponding
type symbols ( `tsymbol` s) and additional information.

|Type symbol (tsymbol)|Type|Additional notes|
|--|--|--|
|+|String|the next line is a string|
|!|Response Code|the next line is a response code|
|$|JSON|the next line is a `JSON` value|
|-|smallint|An integer in the range: [0, 255]|
|_|smallint signed|An integer in the range: [-128, 127]|
|:|int|An integer in the range: [0, 4,294,967,295]|
|;|int signed|An integer in the range: [-2,147,483,647, 2,147,483,647]|
|%|float|A 32-bit floating point value|
|?|binary|the next line contains binary data (often called a blob)|


Do keep the matching for this symbol _non-exhaustive_ since we might add more types in future revisions of the protocol.