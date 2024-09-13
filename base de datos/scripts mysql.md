
# script 
SELECT Pedidos.id, Usuarios.nombre, Pedidos.producto, Pedidos.precio, Pedidos.fecha_pedido
FROM Pedidos
JOIN Usuarios ON Pedidos.usuario_id = Usuarios.id
WHERE Usuarios.edad > 18;
