# gendocu en Python.

# Con este script generas Contratos típicos colombianos a partir de entradas (input) del usuario.

# Importamos las librerías que usaremos

from datetime import datetime



# Declaramos variables nativas. ¿cómo hacer esto automático?

fecha = datetime.now()

nombre_arrendatario = 'Carlos Murgas'
id_arrendatario = '12345'
domicilio_arrendatario = 'Barrancosa, La Guaja'
email_arrendatario = 'email@dominio.com'

nombre_arrendador = 'Kesa Bor'
id_arrendador = '54321'
domicilio_arrendador = 'Fonseco, La Guajira'
email_arrendador = 'email2@dominio2.es'

direccion_inmueble = 'Calle 1 # 4-67 de Guamachalito, Fonseco'
duracion_contrato = '7 meses'
canon_arriendo = '$300000 pesos'

fecha_firma = ''

print(f'Contrato de Arrendamiento.\nSiendo el día {fecha}, las PARTES: {nombre_arrendatario}, identificado con la cédula No.{id_arrendatario}, domiciliado en {domicilio_arrendatario}, en adelante "Arrendatario", Y {nombre_arrendador}, identificado con la cédula No.{id_arrendador}, domiciliado en {domicilio_arrendador}, en adelante "Arrendador, acuerdan libre y expresamente celebrar el presente Contrato de Arrendamiento, con arreglo a las siguientes:\nClausulas:\nPrimera. Del Arriendo. El objeto del contrato es el arrendamiento del inmueble residencial ubicado en la {direccion_inmueble}. El Arrendador entrega a el Arrendatario el inmueble para su habitación, uso y goce, a cambio de recibir un pago mensual que para el efecto del contrato se denominará Canon.\nSegunda. Del Canon de Arrendamiento. El Arrendatario pagará mensualmente al Arrendador la suma en dinero de {canon_arriendo}, los 5 primeros dias de cada mes vencido.\nTercera. De la Duración. El contrato tendrá una duracion de {duracion_contrato}, que se renovará automaticamente por el mismo término si ninguna de las partes manifiesta su intención de darlo por terminado al menos 10 días antes de la fecha de terminacion.\nCuarta. De los Derechos y Obligaciones. Las Partes tendrán los Derechos y las Obligaciones que establece la Ley de Colombia para los contratos de arrendamiento de vivienda urbana.\nQuinta. Del Mérito Ejecutivo. El presente contrato presta mérito ejecutivo y contiene obligaciones claras, expresas y exigibles judicial yextrajudicialmente.\nSexta. De las Notificaciones. El Arrendatario recibe notificaciones en el email {email_arrendatario} y el Arrendador recibe notificaciones en el email {email_arrendador}.\\nEl Contrato se firma y perfecciona siendo el día {fecha}.\nArrendatario\n{nombre_arrendatario}\nCc.{id_arrendatario}\nArrendador\n{nombre_arrendador}\nCc.{id_arrendador}')
