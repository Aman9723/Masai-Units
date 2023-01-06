## CSS Selector

-   Simple
-   Combinator
-   Attribute
-   Pseudo-class
-   Pseudo-elements

## Simple

-   Element - p, h1
-   Id - #box
-   Class - div.box or .box
-   Universal - \*
-   Group - h1, h2, p

## Combinators

-   Descendent - div.box p (all p tags inside div)
-   Child - div.box > p (direct p tags inside div)
-   Adjacent sibling - div.box + p (p tag just adjacent of div)
-   General sibling - div.box ~ p (all p tag siblings of div)

## Attribute

input[type='text']

## Pseudo-class - can define a special state to any html element

h1:hover
div.box p:first-child

## Pseudo-elements - defines a space for an html element and then applies style on it

p::first-letter

SICTU - inlineStyle -> id -> class -> tag -> universal
