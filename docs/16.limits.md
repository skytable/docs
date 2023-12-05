---
id: limits
title: Limits
---

We've made every effort to provide a robust querying interface, but there are some **temporary limitations** that we think you 
should know about. We aim to remove the limitations over the next few releases which we expect should happen fairly quickly.

Skytable's limitations primarily come from a bunch of concerns:
- **Performance and scalability**: Most of our design decisions are influenced by concerns about performance. For example, it's very hard to efficiently scale multi-column indexes.
- **Reliability**: how reliable is the execution of the task? If it's like walking on eggshells, then we're not going to implement it (for example, unreliable distributed locking)
- **Security**: If it can't be run securely, then it's off our list

## Temporary limitations

- **DML in collections are still limited**: You'll be able to easily `INSERT` data into any collections but the manipulations on them are currently limited.:
  - `SELECT` will return the entire collection and cannot yet return a single element
  - `UPDATE` can append elements to *non-nested* collections but can't do the same for nested collections
  - `DELETE` can't remove individual elements
- **Models cannot be `volatile` yet**. If you've used Skytable before, you'd know that you could previously create `volatile` 
  models which were used as *caching tables* as in they didn't persist data across restarts. The `volatile` feature has been 
  temporarily removed because we're working on integrating it with the new storage engine.

:::tip Nested collections will get an upgrade
We understand that collections are fundamental to the complexity of today's data and hence we're working on this! The only reason our team spends so much time *perfecting* features is because it has match our design philosophy.

> You can have 100 fancy but slow features, or 10 powerful and performant features.

If it scales, we ship it. **We're on it!**
:::

## Soft limitations

Following Skytable's design philosophy that closely encompasses NoSQL systems, the following soft limitations are set:
- **Only one index**: Right now, the only index that you can use is the primary index (primary_key -> row). This is due to  concerns about performance and scale
- **No mass updates**: We consider mass updates, such as setting `counter += 1` to every row in a model with multi-million rows
to be very slow and bad for performance. Hence, we do not allow mass updates at this time.
