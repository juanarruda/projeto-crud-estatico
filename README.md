# ProjetoCrudEstatico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Configuracao de ambiente

O codigo foi projetado no intellij, em conjunto com o `projeto-crud-estatico`. Para rodar o programa, basta utilizar `ng start` que irá inicializar no caminho http://localhost:4200/, feito com Angular CLI: `13.3.2` , Node:`16.14.2`, Package Manager: npm `8.6.0`.


## Desafio
O desafio foi utilizar o angular para construir um frontend capaz de realizar um CRUD de clientes com login
em uma semana, junto com o java sem utilizar frameworks.

## Resultados
Não utilizar frameworks pra criar o servidor causou alguns problemas que atrasaram a construção do frontend, além disso,
a modal de formularios também causaram problemas que atrasaram o desenvolvimento.

##O que foi feito
Atualmente, o projeto consegue listar o formulário de cliente e fazer a listagem de todos os clientes na tabela,
as services com o insert e delete foram feitas, mas devido ao backend, não está funcionando. Além disso, não foi possível criar o login de usuario, apenas a tela foi criada, mas não realiza nenhuma função.
