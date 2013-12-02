# lindy-simple

Use templates for simple string replacements.

## Features

* String substitution using the "{{ variableName }}" format.
* Structured context data: "{{ obj.foo.bar }}"

## Usage

```javascript

  var lindy_simple = require('lindy-simple')
    , template_source = 'Howdy, {{ person.firstname }}!'
    , render = lindy_simple(template_source)

  console.log(render({person: {firstname: 'Dave'}})) // == "Howdy, Dave!"
```

## Running the tests

```
  $ git clone https://github.com/adamdicarlo/lindy-simple.git # clone or fork
  $ cd lindy-simple
  $ npm install
  $ npm test
```

## License

MIT
