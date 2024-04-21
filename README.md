# Levarne nulmeting
Dit is mijn implementatie van de TODO list opdracht van de Levarne nulmeting.

### Persoonlijke notities
Het klikken van de knop roept globalStore.getTodo(key) waar key de meegegeven parameter uit de input eronder getrokken wordt (te zien door de v-model attribute van de <input> tag). Dit roept de backend API en pusht het, als todo.id niet al bestaande is, naar de todos array.   
Reactive arrays in vue zijn wat funky, door een reactive([]) aan te maken en de lengte op 0 te zetten forceer je een ander object te werken als een array (ik snap het niet, gestolen van SO). De linter geeft errors, maar het werkt wel gewoon dus ????   
Met const bool = ref(false) kan je een 'reactive' boolean opzetten wat <html> tags met de v-if attribute conditioneel kan laten renderen, oprecht best cool. 
