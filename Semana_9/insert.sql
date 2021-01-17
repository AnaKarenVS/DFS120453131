db.Libros.insertMany([
{
    _id: 1, 
    ISBN: "465-2-35-1345-1",
 nombreLibro: "El arte de la guerra", 
 autor: "Shu li", 
 cantidad: 56, 
 editoriales:
    [
     "Xhi wu hon", "Kamite"
    ], 
edicion: 8
}, 
{
    _id: 2, 
    ISBN: "8475-23-4567-1",
 nombreLibro: "Ana Karenina", 
 autor: "Lisa", 
 cantidad: 56, 
 editoriales:
    [
     "Xhi wu hon", "Kamite"
    ], 
edicion: 8
},
{
_id: 3, 
ISBN: "564-67-31-234-6",
 nombreLibro: "Entrevista con el vampiro", 
 autor: "Anne Rice", 
 cantidad: 6, 
 editoriales:
    [
     "Norma"
    ], 
edicion: 8
},
{
    _id: 4, 
    ISBN: "34-65-3545-1",
 nombreLibro: "Segunda Guerra Mundial", 
 autor: "Jhon Smith", 
 cantidad: 54, 
 editoriales:
    [
        "EUA"
    ], 
edicion: 2
},
{
    _id: 5,
     ISBN: "65-653-1245-8-98",
 nombreLibro: "Papiroflexia", 
 autor: "Cositas", 
 cantidad: 6, 
 editoriales:
    [
      "Recortitos"
    ], 
edicion: 4
}])