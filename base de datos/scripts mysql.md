
# script 
SELECT p.id AS pedido_id, p.producto, p.precio, p.fecha_pedido, u.nombre, u.correo_electronico, u.edad
FROM pedidos p
JOIN usuarios u ON p.usuario_id = u.id
WHERE u.edad > 18;
