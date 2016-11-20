const paths = {
    '/users': {
        get: {
            tags: ['User'],
            summary: 'Get users',
            operationId: 'userUsers',
            produces: ['application/json'],
            parameters: [
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'array',
                        items: {'$ref': '#/definitions/User'}
                    }
                }
            }
        },
        post: {
            tags: ['User'],
            summary: 'Create users',
            operationId: 'postUsers',
            produces: ['application/json'],
            parameters: [{$ref: '#/parameters/User'}],
            responses: {
                201: {
                    description: 'Created',
                    schema: {"$ref": "#/definitions/User"}
                },
                400: {description: 'BadRequest'}
            }
        }
    }
}

const parameters = {
    User: {
        name: 'user',
        in: 'body',
        required: true,
        schema: {
            type: 'object',
            properties: {
                name: {type: 'string', default: 'chris'}
            }
        }
    }
}

const definitions = {
    User: {
        type: 'object',
        properties: {
            id: {type: 'number'},
            name: {type: 'string'},
            createdAt: {type: 'string', format: 'dateTime'},
            updatedAt: {type: 'string', format: 'dateTime'}
        }
    }
};


module.exports  = {
  "swagger": "2.0",
  "info": {
    "title": "apiserver",
    "description": "apiserver API Documents",
    "termsOfService": "",
    "contact": {
      "name": "Chris, WePlanet"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.0"
  },
  "host": "",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  paths: paths,
  parameters: parameters,
  definitions: definitions
};