// data/faq.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "¿Cómo controla el sistema la pérdida de botellones vacíos?",
    answer: "AquaRuta lleva un registro exacto del saldo de envases por cliente. Cuando el chofer realiza una entrega, el sistema le obliga a registrar cuántos botellones llenos dejó y cuántos vacíos retiró, actualizando el inventario del camión y la deuda de envases del cliente en tiempo real.",
  },
  {
    question: "¿La aplicación para los repartidores funciona sin internet en la ruta?",
    answer: "Actualmente, AquaRuta requiere conexión a internet para registrar y sincronizar la información en tiempo real. Sin embargo, ya estamos trabajando en un modo offline, que permitirá a los repartidores continuar registrando ventas y operaciones incluso sin señal. Esta funcionalidad estará disponible en una próxima actualización",
  },
  {
    question: "¿Cómo se gestiona el cierre de caja al final del día?",
    answer: "Al terminar la ruta, el sistema genera un reporte automático de lo que el chofer debió recaudar basado en las ventas (efectivo, transferencia o crédito). El administrador solo debe validar el dinero físico entregado contra el reporte del sistema para detectar cualquier descuadre de inmediato.",
  },
  {
    question: "¿Qué pasa si se termina mi prueba gratuita de 14 días?",
    answer: "No te preocupes, no te cobraremos nada automáticamente ya que no necesitas ingresar ninguna tarjeta de crédito para iniciar la prueba. Si decides continuar usando AquaRuta para controlar tu distribuidora, podrás elegir el plan que prefieras y realizar tu pago de manera local.",
  },
  {
    question: "¿Ofrecen soporte técnico y capacitación para mis empleados?",
    answer: "Por supuesto. Contamos con soporte técnico local en español para Ecuador. Además, la aplicación de ruta para los choferes está diseñada para ser extremadamente sencilla, de modo que cualquier repartidor aprende a usarla en menos de 15 minutos.",
  },
];