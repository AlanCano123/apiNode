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
];
// Ruta para buscar las deudas de la cuenta de pago
router.post('/buscar-deudas', (req, res) => {
    const { PaymentAccount, BeginRowNum, FetchRowNum } = req.body;

    // Buscar la cuenta de pago
    const account = paymentAccounts.find(account => account.responsablePago === PaymentAccount);

    if (!account) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    // Verificar si la cuenta tiene deudas
    if (!account.deudas || account.deudas.length === 0) {
        return res.status(404).json({ error: 'La cuenta de pago no tiene deudas' });
    }

    // Ordenar las deudas por fecha
    const sortedDeudas = account.deudas.sort((a, b) => new Date(a.FechaEmision) - new Date(b.FechaEmision));

    // Calcular el índice de inicio para esta solicitud
    const startIdx = BeginRowNum;
    
    // Obtener las deudas solicitadas
    const deudas = sortedDeudas.slice(startIdx, startIdx + FetchRowNum);

    res.json({
        deudas,
        totalRowNum: sortedDeudas.length,
        BeginRowNum,
        FetchRowNum
    });
});


module.exports = router;