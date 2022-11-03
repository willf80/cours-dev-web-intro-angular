# Introduction à Angular

Développement d'application SPA (Single Page Application).
Une librairie basée éssentiellement les composants.

## Prérequis

Pour développer en Angular il faut avoir une connaissance des langages suivants : 

- HTML
- CSS
- TypeScript / JavaScript

## Installations des outils

Installation du nodejs : https://nodejs.org/en/download/

```bash
node -v # affiche la version de node installée
```

Version de NPM

```bash
npm -v # affiche la version de npm installée 
```

Aller sur le site suivant : https://angular.io/guide/setup-local

```bash
npm install -g @angular/cli
```

Après installation exécuter la commande ci-dessous pour vérifier les versions de packages installées

```bash
ng version
```

## Créer notre première application Angular : Une simple calculatrice

```bash
ng new calculatrice
```

## Créer un nouveau composant

```bash
ng generate component mon-componsant
```

## Passer les données d'un composant parent vers un composant enfant

Il existe 3 types de binding en Angular : 
- Property Binding
- Event Binding
- Two-Way Binding

Pour passer des données à un composant, il lui créer une propriété avect le décorateur `@Input()`

```ts
public class MyComponent {
  @Input() public titre = '';
}
```
## Les directives

  ### Les conditions

```ts
*ngIf="x === y"
```

  ### Les boucles

  ```ts
*ngFor="let ... of ..."
```

## Les évènements

## Les formulaires

## Les Services 


