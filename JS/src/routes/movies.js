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
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "A-321-12545678",
                "FechaEmision": "2013-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 2,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "A-213-12543678",
                "FechaEmision": "2020-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 3,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "A-432-21345678",
                "FechaEmision": "2014-01-01",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 4,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 5,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 6,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 7,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 8,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 9,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 10,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 11,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 12,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 13,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 14,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 15,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 16,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 17,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 18,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 19,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 20,
                "tipoComprobante": "FAC"
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
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 1,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 2,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2015-02-02",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 3,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-789-12345678",
                "FechaEmision": "2016-03-03",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 4,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-123-45678901",
                "FechaEmision": "2017-04-04",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 5,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-234-56789012",
                "FechaEmision": "2018-05-05",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 6,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-345-67890123",
                "FechaEmision": "2019-06-06",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 7,
                "tipoComprobante": "FAC"
            },
            
            {
                "NumeroLegal": "B-456-78901234",
                "FechaEmision": "2020-07-07",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 8,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-567-89012345",
                "FechaEmision": "2021-08-08",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 9,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-678-90123456",
                "FechaEmision": "2022-09-09",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 10,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-789-01234567",
                "FechaEmision": "2023-10-10",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 11,
                "tipoComprobante": "FAC"
            },
            {
                "NumeroLegal": "B-890-12345678",
                "FechaEmision": "2024-11-11",
                "FechaVencimiento": "2023-01-02",
                "Moneda": "pesos",
                "ImporteEmision": 100,
                "SaldoPendiente": 10,
                "DiasDeGracia": 3,
                "MarcaReclamo": "SI",
                "MotivoReclamo": "motivoDel Reclamo",
                "IdComprobante": 12,
                "tipoComprobante": "FAC"
            }
        ]
    }
];


const paymentsAccounts=[
    {
        "paymentAccount": "1994941113330050",
        "procesoDeMoraActivo": "procesoUno",
        "pasoMora":["paso1","paso2","paso3"] ,
        "marcaDeimos": "marcaUno",
        "marcaNoFactorable":"marcafacturableUNO",
        "diasDeGracia": 2,
        "adhesionAutopago": "NO",
        "cicloFacturación":3,
        "suscripcionesActivas":"NO"
            
    },
    {
        "paymentAccount": "1994941119940050",
        "procesoDeMoraActivo": "proceso",
        "pasoMora":["paso1","paso2","paso3"] ,
        "marcaDeimos": "marca",
        "marcaNoFactorable":"marcafacturable",
        "diasDeGracia": 1,
        "adhesionAutopago": "SI",
        "cicloFacturación":1,
        "suscripcionesActivas":"SI"
            
    },
]
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
        paginado:{TotalRowNum: account.comprobantes.length,
        BeginRowNum: beginRowNum,
        FetchRowNum: adjustedFetchRowNum}
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
        paginado:{TotalRowNum: totalRowNum,
        BeginRowNum: beginRowNum,
        FetchRowNum: fetchRowNum}
    });
});

router.post('/buscar_payment', (req, res) => {
    const { paymentAccount, fechaDesde, fechaHasta } = req.body;

    // Buscar la cuenta de pago en el array paymentsAccounts
    const cuenta = paymentsAccounts.find(account => account.paymentAccount === paymentAccount);

    if (!cuenta) {
        return res.status(404).json({ error: 'Cuenta de pago no encontrada' });
    }

    
    res.json(cuenta);
});

module.exports = router;