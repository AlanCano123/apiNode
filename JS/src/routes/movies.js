const { Router } = require('express');
const router = Router();
const paymentAccounts = [
    {
        "responsablePago": "1994941113330050",
        "deudas": [
            {
                "NumeroLegal": "A-123-12345678",
                "FechaEmision": "2014-01-01"
            },
            {
                "NumeroLegal": "A-321-12545678",
                "FechaEmision": "2013-01-01"
            },
            {
                "NumeroLegal": "A-213-12543678",
                "FechaEmision": "2020-01-01"
            },
            {
                "NumeroLegal": "A-432-21345678",
                "FechaEmision": "2014-01-01"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03"
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04"
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05"
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07"
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08"
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09"
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10"
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11"
            }
        ]
    },
    {
        "responsablePago": "1994941119940050",
        "detalles": [
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03"
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04"
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05"
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06"
            },
            
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07"
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08"
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09"
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10"
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11"
            }
        ]
    }
];// Objeto para mantener el registro de BeginRowNum por cada PaymentAccount
const beginRowNumRegistry = {};

// Ruta para buscar las deudas de la cuenta de pago
router.post('/buscar-deudas', (req, res) => {
    const { PaymentAccount, FechaDesde, FechaHasta, FetchRowNum } = req.body;
    
    // Obtener el BeginRowNum de la sesión del usuario o inicializarlo en 0
    const BeginRowNum = beginRowNumRegistry[PaymentAccount] || 0;

    // Buscar la cuenta de pago
    const account = paymentAccounts.find(account => account.responsablePago === PaymentAccount);

    if (!account) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    // Verificar si la cuenta tiene deudas
    if (!account.deudas || account.deudas.length === 0) {
        return res.status(404).json({ error: 'La cuenta de pago no tiene deudas' });
    }

    // Obtener las deudas si existen
    const deudas = account.deudas.slice(BeginRowNum, BeginRowNum + FetchRowNum);

    // Calcular el total de deudas
    const totalDeudas = account.deudas.length;

    // Actualizar BeginRowNum para la próxima solicitud
    const nextBeginRowNum = BeginRowNum + deudas.length;

    // Registrar el BeginRowNum para la próxima solicitud
    beginRowNumRegistry[PaymentAccount] = nextBeginRowNum;

    res.json({
        deudas,
        totalDeudas,
        nextBeginRowNum
    });
});

module.exports = router;


