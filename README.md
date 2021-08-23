# Shipping proyect
___
+ ## Inicializar proyecto
    - En un cliente de SQL ejecutar el archivo shipping.sql que se encuentra en la carpeta raiz del proyecto.
    - En la carpeta raiz ejecutar ___npm install___ para instalar todas las dependencias.
    - Hacer una copia del archivo ___.envexample___, renombrarlo a ___.env___ y completar con variables de entorno correspondientes.
---
+ ## Documentacion
    - __URL base:__
        - localhost:3000/v1
+ ### __Recursos:__ 
    + #### status
        Ejemplo de request:
        ```
        localhost:3000/v1/status/2
        ```
        - Parametros:
            -  __/status/:id__ -- Obtener un recurso de envio especifico

        Ejemplo de respuesta:
        ```
        {
            "parametros": {
                "id": "2"
            },
            "datos_envio": {
                "customer": "Carlos",
                "descrip": "Entrega a Carlos",
                "status": "Entregado",
                "aprox_distance": 0.022
            }
        }
        ```
    + #### create
        Por medio de un REST client enviar una peticion por el metodo POST

        Ejemplo de request:
        ```
        localhost:3000/v1/create
        ```
        Campos a enviar dentro del request:
        | Campo | Tipo de dato | Ejemplo | 
        | ------------- | ------------- | ------------- |
        | customer | String | Carlos |
        | descript | String | Envio a Carlos |
        | status | String | Pendiente |
        | origin_lat | Number | -32.94682 | 
        | origin_long | Number | -60.63932 | 
        | current_lat | Number | -32.94682 | 
        | current_long | Number | -60.63932 | 
        | end_lat | Number | -31.4135 | 
        | end_long | Number | -64.18105 | 

        Ejemplo de respuesta:
        ```
        {
            "message": "Registro creado con exito"
        }
        ```
    + #### update
        Por medio de un REST client enviar una peticion por el metodo PUT

        Ejemplo de request:
        ```
        localhost:3000/v1/update/2
        ```
        - Parametros:
            -  __/update/:id__ -- identificador del recurso a modificar

        Campos a enviar dentro del request:
        | Campo | Tipo de dato | Ejemplo | 
        | ------------- | ------------- | ------------- |
        | status | String | Pendiente |
        | current_lat | Number | -32.94682 | 
        | current_long | Number | -60.63932 | 

        Ejemplo de respuesta:
        ```
        {
            "message": "Registro modificado con exito"
        }
        ```