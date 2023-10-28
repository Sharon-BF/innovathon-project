interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div className="gap-8">
        <h1 className="text-3xl font-bold">Factura Generada</h1>
        <p className="mb-4">Estimado cliente,</p>
        <p className="mb-4">Le informamos que hemos generado la factura correspondiente a su compra. A continuación, encontrará los detalles de la factura:</p>

        <h2 className="text-xl font-semibold mb-2">Detalles de la Factura</h2>
        <ul>
            <li><strong>Número de Factura:</strong> 00123</li>
            <li><strong>Fecha de Emisión:</strong> 28 de octubre de 2023</li>
            <li><strong>Total a Pagar:</strong> $500.00</li>
            <li><strong>Descripción de la Compra:</strong> Productos y servicios diversos</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Información de Contacto</h2>
        <address className="mb-4">
            <p><strong>Nombre de la Empresa:</strong> Mi Empresa S.A.</p>
            <p><strong>Dirección:</strong> Calle Ejemplo #123</p>
            <p><strong>Teléfono:</strong> (123) 456-7890</p>
            <p><strong>Correo Electrónico:</strong> info@miempresa.com</p>
        </address>

        <p className="mb-4">Por favor, si tiene alguna pregunta o necesita aclaraciones adicionales, no dude en ponerse en contacto con nuestro equipo de facturación.</p>

        <p>Gracias por su confianza y preferencia.</p>
    </div>
);