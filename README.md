PCM Administrador y API

Deploy en Heroku
1. rm -rf dist/
2. grunt build
3. cd dist/
4. git init
5. heroku git:remote -a pcmtopair
6. grunt buildcontrol:heroku
7. heroku open

https://github.com/angular-fullstack/generator-angular-fullstack
https://angular-fullstack.github.io/generators/heroku/

Configuración credenciales s3 en heroku:
heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy

Iniciar BD Local
1. Instalar MongoDB
2. mkdir ../database
2. cd ../bin && mongod.exe --dbpath ../database

PCM Administrador y API

Administrador de equipos y actividades Topair.

Antes de hacer deploy en Nodechef:
1. Verificar Gruntfile: config y karma debe estar comentados, y env.json debe copiarse junto a package.json
2. Compilar código con 'grunt build', destino 'dist'

Deploy con Nodechef:
1. Instalar cliente Nodechef: descargar tar.gz y descomprimir en root
2. Agregar carpeta a path de sistema
3. Iniciar un bash en la carpeta '../TOPAIR_administrador/dist'
4. Iniciar deployador con 'nodechef.bat', escribir credenciales sesión, las mismas que dashboard nodechef
5. Deployar con comando 'deploy -i topairadministrador -e env.json'
6. Verificar en 'https://topairadministrador-2851.nodechef.com/'

# pcmadministrador

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.0.0-rc5.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
