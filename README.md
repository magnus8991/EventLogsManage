# EventLogsManage

//Descripción y ejecución del proyecto EventLogsManage.WebApi

El proyecto Backend o de API de la solución se ejecuta en local como acostumbra a ejecutarse un proyecto realizado en C# con el framework .NET (en este caso la versión 8), y el proyecto a ejecutar tiene por nombre EventLogsManage, que se encuentra alojado en la subcarpeta "EventLogsManageApi".
En dicha solución Backend se contemplan diversos patrones y arquitecturas como: Arquitectura Hexagonal y DDD, Patron mediador, puertos y adaptadores, Patron controlador, patron especificación, entre otros.

Adicional a lo anterior, es necesario resaltar que para poder crear la  base de datos en local se requiere la ejecución de las migraciones previamente creadas. De manera personal, el método que utilizo para realizarlo es el siguiente:

1. En VisualStudio nos vamos al menú Ver --> Otras Ventanas --> Consola del administrador de paquetes.
2. Abierta la consola, nos ubicamos o seleccionamos como proyecto predeterminado el proyecto de Persistencia, y procedemos a ejecutar el siguiente comando: $env:DatabaseConnectionString="Server=localhost;Uid=root;Pwd=11014221dM.;Database=Registration;allowPublicKeyRetrieval=true" (este comando se encarga de configurar la variable de entorno de la cadena de conexión para poder ejecutar las migraciones con éxito).
3. Luego ejecutamos el comando que ejecuta las migraciones: dotnet ef database update --verbose --project .\EventLogsManageInfrastructure\EventLogsManage.Persistence\ --startup-project .\EventLogsManageApi\EventLogsManage\
4. Por último, verificamos que en nuestro entorno local todo se haya creado correctamente.

Las rutas de los endpoints solicitados son las siguientes:

1. <<localURL>>/api/v1/EventLog --> registro de eventos. Ejemplo postman: ![image](https://github.com/user-attachments/assets/2cebbac1-148a-41b2-b6e2-9524c09d776e)
2. <<localURL>>/api/v1/EventLog/list --> consulta paginada de eventos. Ejemplo postman: ![image](https://github.com/user-attachments/assets/27a8aece-4a0e-4cc4-9dbd-a1c02fd18be5)



//Descripción y ejecución del proyecto EventLogsManage.WebApp

El proyecto Frontend o del sitio web de la solución se ejecuta en local como acostumbra a ejecutarse un proyecto realizado en typescript con el framework Angular (en este caso la versión 19), y el proyecto a ejecutar lo encontramos dentro de la carpeta src, pero se ejecuta desde el directorio raíz (EventLogsManage.WebApp) con el comando: ng serve.
EL proyecto contempla características como: Modularidad, enrutamiento de páginas, componentes, modelos, interfaces, servicios por inyección de dependencia, y repositorios que conectan con la API.
