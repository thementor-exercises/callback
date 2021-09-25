
# Wstęp do callbacków

Użyj wbudowanego obiektu XMLHttpRequest który służy do wysyłania requestów z przeglądarki do serwera. Po odpaleniu aplikacji "npm start" w konsoli wyprintowane są saładki z pliku salads.json.

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

Dodana została funkcja timer której należy użyć do wykonania zadań. Pierwsze zadanie polega na użyciu XMLHttpRequest i funkcji timer do stworzenia tabeli która ma mieć tyle wierszy ile jest sałatek w odpowiedzi request. Natomiast wiersze tabeli mają być dynamicznie dodawane za pomocą funkcji timer co 100ms. Oznacza to wyprintowanie wszystkich sałatek w formie tabeli każdy wiersz co 100ms aż do momentu w którym wszystkie sałatki będą już w tabeli: Tabela ma wyglądać następująco:

No | Name
1  | <salad-name>
2  | <salad-name>
.
.
.
100| <salad-name>

Drugie zadanie polega na ściągnieciu zdjęcia za pomocą obiektu XMLHttpRequest i dodanie go w formie zdjęcia w przeglądarce w <body> 10 razy również korzystając z funkcji timer. Tym razem niech zdjęcia dodają się co 1000ms.
