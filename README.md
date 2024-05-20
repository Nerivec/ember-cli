Ember ZLI
=================

Interact with EmberZNet-based adapters using zigbee-herdsman 'ember' driver

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ember-zli.svg)](https://npmjs.org/package/ember-zli)
[![Downloads/week](https://img.shields.io/npm/dw/ember-zli.svg)](https://npmjs.org/package/ember-zli)

> [!WARNING] 
> Work in progress

### Interactive Menus

#### Stack

- Get stack info
- Get stack config (firmware defaults)
- Get network info
- Scan network
- Backup network
- Restore network
- Leave network
- Backup tokens (NVM3)
- Restore tokens (NVM3)
- Reset tokens (NVM3)
- Get security info
- Repairs

#### Bootloader

- Get info
- Update firmware
- Clear NVM3
- Exit bootloader

# ToC

<!-- toc -->
* [ToC](#toc)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ember-zli
$ ember-zli COMMAND
running command...
$ ember-zli (--version)
ember-zli/1.0.0 win32-x64 node-v20.10.0
$ ember-zli --help [COMMAND]
USAGE
  $ ember-zli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ember-zli bootloader`](#ember-zli-bootloader)
* [`ember-zli help [COMMAND]`](#ember-zli-help-command)
* [`ember-zli stack`](#ember-zli-stack)
* [`ember-zli version`](#ember-zli-version)

## `ember-zli bootloader`

Interact with the Gecko bootloader in the adapter via serial.

```
USAGE
  $ ember-zli bootloader [-a] [-f <value>]

FLAGS
  -a, --ask           Ask conf questions, even if conf file present (override file with new answers).
  -f, --file=<value>  Path to a firmware file. If not provided, will be set via interactive prompt when entering relevant menu.

DESCRIPTION
  Interact with the Gecko bootloader in the adapter via serial.

EXAMPLES
  $ ember-zli bootloader
```

_See code: [src/commands/bootloader/index.ts](https://github.com/Nerivec/ember-zli/blob/v1.0.0/src/commands/bootloader/index.ts)_

## `ember-zli help [COMMAND]`

Display help for ember-zli.

```
USAGE
  $ ember-zli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ember-zli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `ember-zli stack`

Interact with the EmberZNet stack in the adapter.

```
USAGE
  $ ember-zli stack [-a]

FLAGS
  -a, --ask  Ask conf questions, even if conf file present (override file with new answers).

DESCRIPTION
  Interact with the EmberZNet stack in the adapter.

EXAMPLES
  $ ember-zli stack
```

_See code: [src/commands/stack/index.ts](https://github.com/Nerivec/ember-zli/blob/v1.0.0/src/commands/stack/index.ts)_

## `ember-zli version`

```
USAGE
  $ ember-zli version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v2.1.2/src/commands/version.ts)_
<!-- commandsstop -->
