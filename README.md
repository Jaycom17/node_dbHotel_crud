# node_dbHotel_crud
API encargada de la gestion de los datos de un hotel (hotel, huespedes, habitaciones, hospedajes).
## recursos
Esta API hace uso de express para la creacion del servidor y los endpoints, teniendo endpoint encargados de los CRUDs de la base de datos, pudiendo realizar las acciones: POST, GET, PUT y DELETE para cada una de las tablas
de la base de datos.
## Base de datos
La base de datos para este pryecto fue realizada en MySql, teniendo las tablas encargadas de almacenar los datos, tambien algunos procediminetos almacenados que ayudan a mejorar el trabajo con las tablas,
tambien contiene una serie de Triggers encargados de mantener la coherencia en los datos despues de una acction de DELETE, UPDATE o INSERT.
