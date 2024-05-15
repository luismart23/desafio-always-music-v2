# Estudiantes DB

## Requisitos
- Versión de Node.js 20.11 / 21.2

## Instalaciones previas

```sh
npm install
```

Levantar servidor
```sh
npm run start
```

## Frontend
Para visualizar el sitio web visite: `"http://localhost:3000/"`

## Tablas creadas en:

database/queries.sql
```sql
DROP TABLE IF EXISTS ESTUDIANTES;

CREATE TABLE ESTUDIANTES (
    ID VARCHAR(22) PRIMARY KEY,
    NOMBRE VARCHAR(100),
    CURSO VARCHAR(50),
    NIVEL INT NOT NULL
);

SELECT * FROM ESTUDIANTES;

-- seeders
INSERT INTO ESTUDIANTES (ID, NOMBRE, CURSO, NIVEL) VALUES 
[
{
"id": "o9K7WT5awGgsetGdOeExs",
"nombre": "Pamela",
"curso": "Violín",
"nivel": 3
},
{
"id": "SLble5XRvGZKf8sEWKLX4",
"nombre": "Pedro",
"curso": "Guitarra",
"nivel": 5
},
{
"id": "3beJEAt4ArodBTRW82T-a",
"nombre": "Camila",
"curso": "Canto",
"nivel": 5
},
{
"id": "6alZyakNjfOmrxNqJ45mX",
"nombre": "Javiera",
"curso": "Piano",
"nivel": 4
},
{
"id": "-tqUo2XI32umLGskQRBzQ",
"nombre": "Juan",
"curso": "Bajo",
"nivel": 5
}
]
```