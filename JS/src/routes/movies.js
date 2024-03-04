const { Router } = require('express');
const router = Router();
const paymentAccounts = [
    {
        "responsablePago": "1994941113330050",
        "deudas": [
            {
                "NumeroLegal": "A-123-12345678",
                "FechaEmision": "2014-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "A-321-12545678",
                "FechaEmision": "2013-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "A-213-12543678",
                "FechaEmision": "2020-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "A-432-21345678",
                "FechaEmision": "2014-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            }
        ]
    },
    {
        "responsablePago": "1994941119940050",
        "detalles": [
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "marcaGenerica",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1
            }
        ]
    }
];
// Ruta para buscar las deudas de la cuenta de pago
router.post('/buscar-deudas', (req, res) => {
    const { PaymentAccount, BeginRowNum, FetchRowNum,FechaDesde, FechaHasta } = req.body;

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
        TotalRowNum: sortedDeudas.length,
        BeginRowNum,
        FetchRowNum
    });
});

// Ruta para buscar las deudas de la cuenta de pago por fecha
router.post('/buscar-deudas-fechas', (req, res) => {
    const { PaymentAccount, BeginRowNum, FetchRowNum, FechaDesde, FechaHasta } = req.body;

    // Buscar la cuenta de pago
    const account = paymentAccounts.find(account => account.responsablePago === PaymentAccount);

    if (!account) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    // Verificar si la cuenta tiene deudas
    if (!account.deudas || account.deudas.length === 0) {
        return res.status(404).json({ error: 'La cuenta de pago no tiene deudas' });
    }

    // Filtrar las deudas por fecha si se proporcionan FechaDesde y/o FechaHasta
    let filteredDeudas = account.deudas;

    if (FechaDesde) {
        filteredDeudas = filteredDeudas.filter(deuda => new Date(deuda.FechaEmision) >= new Date(FechaDesde));
    }

    if (FechaHasta) {
        filteredDeudas = filteredDeudas.filter(deuda => new Date(deuda.FechaEmision) <= new Date(FechaHasta));
    }

    // Ordenar las deudas por fecha
    filteredDeudas.sort((a, b) => new Date(a.FechaEmision) - new Date(b.FechaEmision));

    // Calcular el índice de inicio para esta solicitud
    const startIdx = BeginRowNum;
    
    // Obtener las deudas solicitadas
    const deudas = filteredDeudas.slice(startIdx, startIdx + FetchRowNum);

    res.json({
        deudas,
        TotalRowNum: filteredDeudas.length,
        BeginRowNum,
        FetchRowNum
    });
});


module.exports = router;