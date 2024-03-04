const { Router } = require('express');
const router = Router();
const paymentAccounts = [
    {
        "responsablePago": "1994941113330050",
        "comprobantes": [
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
                "IdComprobante": 1,
                "tipoComprobante": null
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
                "IdComprobante": 2,
                "tipoComprobante": null
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
                "IdComprobante": 3,
                "tipoComprobante": null
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
                "IdComprobante": 4,
                "tipoComprobante": null
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
                "IdComprobante": 5,
                "tipoComprobante": null
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
                "IdComprobante": 6,
                "tipoComprobante": null
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
                "IdComprobante": 7,
                "tipoComprobante": null
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
                "IdComprobante": 8,
                "tipoComprobante": null
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
                "IdComprobante": 9,
                "tipoComprobante": null
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
                "IdComprobante": 10,
                "tipoComprobante": null
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
                "IdComprobante": 11,
                "tipoComprobante": null
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
                "IdComprobante": 12,
                "tipoComprobante": null
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
                "IdComprobante": 13,
                "tipoComprobante": null
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
                "IdComprobante": 14,
                "tipoComprobante": null
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
                "IdComprobante": 15,
                "tipoComprobante": null
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
                "IdComprobante": 16,
                "tipoComprobante": null
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
                "IdComprobante": 17,
                "tipoComprobante": null
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
                "IdComprobante": 18,
                "tipoComprobante": null
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
                "IdComprobante": 19,
                "tipoComprobante": null
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
                "IdComprobante": 20,
                "tipoComprobante": null
            }
        ]
    },
    {
        "responsablePago": "1994941119940050",
        "comprobantes": [
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
                "IdComprobante": 1,
                "tipoComprobante": null
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
                "IdComprobante": 2,
                "tipoComprobante": null
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
                "IdComprobante": 3,
                "tipoComprobante": null
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
                "IdComprobante": 4,
                "tipoComprobante": null
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
                "IdComprobante": 5,
                "tipoComprobante": null
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
                "IdComprobante": 6,
                "tipoComprobante": null
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
                "IdComprobante": 7,
                "tipoComprobante": null
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
                "IdComprobante": 8,
                "tipoComprobante": null
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
                "IdComprobante": 9,
                "tipoComprobante": null
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
                "IdComprobante": 10,
                "tipoComprobante": null
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
                "IdComprobante": 11,
                "tipoComprobante": null
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
                "IdComprobante": 12,
                "tipoComprobante": null
            }
        ]
    }
];
// Ruta para buscar las comprobantes de la cuenta de pago
router.post('/buscar-comprobantes', (req, res) => {
    const { paymentAccount, datosPaginado } = req.body;
    const { beginRowNum, fetchRowNum } = datosPaginado;

    // Buscar la cuenta de pago
    const account = paymentAccounts.find(account => account.responsablePago === paymentAccount);

    if (!account) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    // Verificar si la cuenta tiene comprobantes
    if (!account.comprobantes || account.comprobantes.length === 0) {
        return res.status(404).json({ error: 'La cuenta de pago no tiene comprobantes' });
    }

    // Ordenar las comprobantes por fecha
    const sortedComprobantes = account.comprobantes.sort((a, b) => new Date(a.FechaEmision) - new Date(b.FechaEmision));

    // Calcular el índice de inicio para esta solicitud
    const startIdx = beginRowNum;

    // Ajustar fetchRowNum para evitar exceder el límite de comprobantes disponibles
    const adjustedFetchRowNum = Math.min(fetchRowNum, account.comprobantes.length - startIdx);

    // Obtener las comprobantes solicitadas
    const comprobantes = sortedComprobantes.slice(startIdx, startIdx + adjustedFetchRowNum);

    res.json({
        paymentAccount: account.responsablePago,
        comprobantes,
        TotalRowNum: account.comprobantes.length,
        BeginRowNum: beginRowNum,
        FetchRowNum: adjustedFetchRowNum
    });
});


// Ruta para buscar las comprobantes de la cuenta de pago por fecha
router.post('/buscar-comprobantes-fechas', (req, res) => {
    const { paymentAccount, datosPaginado, fechaDesde, fechaHasta } = req.body;
    const { beginRowNum, fetchRowNum } = datosPaginado;

    // Buscar la cuenta de pago
    const account = paymentAccounts.find(account => account.responsablePago === paymentAccount);

    if (!account) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    // Verificar si la cuenta tiene comprobantes
    if (!account.comprobantes || account.comprobantes.length === 0) {
        return res.status(404).json({ error: 'La cuenta de pago no tiene comprobantes' });
    }

    // Obtener la cantidad total de comprobantes de la cuenta de pago
    const totalRowNum = account.comprobantes.length;

    // Filtrar las comprobantes por fecha si se proporcionan fechaDesde y/o fechaHasta
    let filteredComprobantes = account.comprobantes;

    if (fechaDesde) {
        filteredComprobantes = filteredComprobantes.filter(comprobante => new Date(comprobante.FechaEmision) >= new Date(fechaDesde));
    }

    if (fechaHasta) {
        filteredComprobantes = filteredComprobantes.filter(comprobante => new Date(comprobante.FechaEmision) <= new Date(fechaHasta));
    }

    // Ordenar las comprobantes por fecha
    filteredComprobantes.sort((a, b) => new Date(a.FechaEmision) - new Date(b.FechaEmision));

    // Calcular el índice de inicio para esta solicitud
    const startIdx = beginRowNum;
    
    // Obtener las comprobantes solicitadas
    const comprobantes = filteredComprobantes.slice(startIdx, startIdx + fetchRowNum);

    res.json({
        paymentAccount: account.responsablePago,
        comprobantes,
        TotalRowNum: totalRowNum,
        BeginRowNum: beginRowNum,
        FetchRowNum: fetchRowNum
    });
});



module.exports = router;