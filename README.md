# space:event-sourcing-debug

debugOnly view helpers for [space:event-sourcing](https://github.com/meteor-space/event-sourcing) applications.

Debug events and commands that are sent through your server-side system.

## Installation
`meteor add space:event-sourcing-debug`

## Features

### Display all commits
Add `{{> space_eventSourcing_debug_commits_list}}` to a Blaze template in your app.

Add `Space.eventSourcingDebug` module to your client and server app instances:

```
requiredModules: [
    'Space.eventSourcingDebug'
  ]
```
## License
Licensed under the MIT license.
