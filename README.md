# TinyMCE

Allow rich text editing with the TinyMCE editor. Follows the common Pulsar form layout.

## Example usage

```twig
{{
    tinymce.editor({
        'label': 'My editor'
    })
}}
```

## Options

Option | Type   | Description
------ | ------ | --------------------------------------------------------------
class  | string | CSS classes, space separated
id     | string | A unique identifier, if required
data-* | string | Data attributes, eg: `'data-foo': 'bar'`

## Local environment

1. `composer install`
1. `npm install`
1. `docker-compose up`

[http://localhost:8000](http://localhost:8000)
