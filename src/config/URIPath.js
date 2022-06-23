
const GetProvincias = 'http://168.194.207.98:8081/api_provincia/get_provincias.php';
const GetProvincias_nombre = 'http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre=';
const GetProvincia_id = 'http://168.194.207.98:8081/api_provincia/get_provincia.php?id=';
const crearProvincia = 'http://168.194.207.98:8081/api_provincia/post_provincia.php';
const editarProvincia = 'http://168.194.207.98:8081/api_provincia/put_provincia.php';
const eliminarProvincia = 'http://168.194.207.98:8081/api_provincia/delete_provincia.php?id=';
const pathMain = 'http://localhost:8080/#/posts';
module.exports = {
    GetProvincias,
    GetProvincias_nombre,
    GetProvincia_id,
    crearProvincia,
    editarProvincia,
    eliminarProvincia,
    pathMain
}