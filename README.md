Készíts egy webes alkalmazást az alábbi leírás alapján!

A weboldal feladata, hogy az újévi jókívánságokat összegyűjtse, és megjelenítse.

Az oldalhoz tartozó adatbázisnak egy táblája legyen, amely a kívánságokat tárolja:
id
kívánó neve (lehet null)
tartalom
a kívánság pontos ideje
Az adatszerkezet mellett készíts egy seeder-t is, amely min. 15 kívánsággal feltölti (a kívánság lehet lorem ipsum szöveg is).

Készítsd el az 5 standard API végpontot, amellyel az alkalmazás adatait kezelni lehet. A szükséges validációkat végezd el:
A kívánó neve szöveges, opcionális
A tartalom szöveg, min 10 betű
A kívánság idejét automatikusan határozza meg a rendszer, ne a felhasználó adja meg.
Csatolt az API teszteket is a repóhoz!

Emellett készítsd el az alkalmazás főoldalát (a / végpontot), amely szerver oldali rendereléssel (EJS) kilistázza a kívánságokat, és táblázatosan megjeleníti. Az alapvető formázásra figyelj (pl. bootstrap).

Beadás módja: git repó, min. részfeladatonkénti commit-okkal. zip melléklet, ill. egyetlen commit-ként beadott feladat nem megfelelő.
A beadás után, az első tanítási héten a munkát pedig meg kell védeni – bemutatni az alkalmazást futás közben, ismertetni a felépítését ill. megválaszolni a felmerülő kérdéseket.
