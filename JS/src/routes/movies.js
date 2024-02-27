const { Router } = require('express');
const router = Router();
const paymentAccounts = [
    {
        PaymentAccount: {
            AccountCode: "AC123",
        },
        TipoComprobante: [
            {
                "NumeroLegal": "N124",
                "FechaVencimiento": "2024-03-15",
                "FechaEmision": "2024-03-01",
                "Moneda": "EUR",
                "ImporteEmision": 150,
                "SaldoPendiente": 0,
                "DiasDeGracia": 5,
                "MarcaReclamo": true,
                "MotivoReclamo": "Devolución",
                "IdComprobante": "C124"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-10",
                "FechaEmision": "2024-03-30",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-11",
                "FechaEmision": "2024-03-31",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-12",
                "FechaEmision": "2024-04-01",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-13",
                "FechaEmision": "2024-04-02",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-14",
                "FechaEmision": "2024-04-03",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-15",
                "FechaEmision": "2024-04-04",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-16",
                "FechaEmision": "2024-04-05",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-17",
                "FechaEmision": "2024-04-06",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N125",
                "FechaVencimiento": "2024-04-18",
                "FechaEmision": "2024-04-07",
                "Moneda": "USD",
                "ImporteEmision": 200,
                "SaldoPendiente": 100,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C125"
            },
            {
                "NumeroLegal": "N126",
                "FechaVencimiento": "2024-04-12",
                "FechaEmision": "2024-03-31",
                "Moneda": "EUR",
                "ImporteEmision": 175,
                "SaldoPendiente": 50,
                "DiasDeGracia": 5,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C126"
            },
            {
                "NumeroLegal": "N127",
                "FechaVencimiento": "2024-04-14",
                "FechaEmision": "2024-04-01",
                "Moneda": "USD",
                "ImporteEmision": 190,
                "SaldoPendiente": 90,
                "DiasDeGracia": 6,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C127"
            },
            {
                "NumeroLegal": "N128",
                "FechaVencimiento": "2024-04-16",
                "FechaEmision": "2024-04-02",
                "Moneda": "EUR",
                "ImporteEmision": 205,
                "SaldoPendiente": 80,
                "DiasDeGracia": 7,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C128"
            },
            {
                "NumeroLegal": "N129",
                "FechaVencimiento": "2024-04-18",
                "FechaEmision": "2024-04-03",
                "Moneda": "USD",
                "ImporteEmision": 220,
                "SaldoPendiente": 70,
                "DiasDeGracia": 8,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C129"
            },
            {
                "NumeroLegal": "N130",
                "FechaVencimiento": "2024-04-20",
                "FechaEmision": "2024-04-04",
                "Moneda": "EUR",
                "ImporteEmision": 235,
                "SaldoPendiente": 60,
                "DiasDeGracia": 9,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C130"
            },
            {
                "NumeroLegal": "N131",
                "FechaVencimiento": "2024-04-22",
                "FechaEmision": "2024-04-05",
                "Moneda": "USD",
                "ImporteEmision": 250,
                "SaldoPendiente": 50,
                "DiasDeGracia": 10,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C131"
            },
            {
                "NumeroLegal": "N132",
                "FechaVencimiento": "2024-04-24",
                "FechaEmision": "2024-04-06",
                "Moneda": "EUR",
                "ImporteEmision": 265,
                "SaldoPendiente": 40,
                "DiasDeGracia": 11,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C132"
            },
            {
                "NumeroLegal": "N133",
                "FechaVencimiento": "2024-04-26",
                "FechaEmision": "2024-04-07",
                "Moneda": "USD",
                "ImporteEmision": 280,
                "SaldoPendiente": 30,
                "DiasDeGracia": 12,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C133"
            },
            {
                "NumeroLegal": "N134",
                "FechaVencimiento": "2024-04-28",
                "FechaEmision": "2024-04-08",
                "Moneda": "EUR",
                "ImporteEmision": 295,
                "SaldoPendiente": 20,
                "DiasDeGracia": 13,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C134"
            },
            {
                "NumeroLegal": "N135",
                "FechaVencimiento": "2024-04-30",
                "FechaEmision": "2024-04-09",
                "Moneda": "USD",
                "ImporteEmision": 310,
                "SaldoPendiente": 10,
                "DiasDeGracia": 14,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C135"
            },
            {
                "NumeroLegal": "N136",
                "FechaVencimiento": "2024-05-02",
                "FechaEmision": "2024-04-10",
                "Moneda": "EUR",
                "ImporteEmision": 325,
                "SaldoPendiente": 300,
                "DiasDeGracia": 15,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C136"
            },
            {
                "NumeroLegal": "N137",
                "FechaVencimiento": "2024-05-04",
                "FechaEmision": "2024-04-11",
                "Moneda": "USD",
                "ImporteEmision": 340,
                "SaldoPendiente": 290,
                "DiasDeGracia": 16,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C137"
            },
            {
                "NumeroLegal": "N138",
                "FechaVencimiento": "2024-05-06",
                "FechaEmision": "2024-04-12",
                "Moneda": "EUR",
                "ImporteEmision": 355,
                "SaldoPendiente": 280,
                "DiasDeGracia": 17,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C138"
            },
            {
                "NumeroLegal": "N139",
                "FechaVencimiento": "2024-05-08",
                "FechaEmision": "2024-04-13",
                "Moneda": "USD",
                "ImporteEmision": 370,
                "SaldoPendiente": 270,
                "DiasDeGracia": 18,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C139"
            },
            {
                "NumeroLegal": "N140",
                "FechaVencimiento": "2024-05-10",
                "FechaEmision": "2024-04-14",
                "Moneda": "EUR",
                "ImporteEmision": 385,
                "SaldoPendiente": 260,
                "DiasDeGracia": 19,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C140"
            },
            {
                "NumeroLegal": "N141",
                "FechaVencimiento": "2024-05-12",
                "FechaEmision": "2024-04-15",
                "Moneda": "USD",
                "ImporteEmision": 400,
                "SaldoPendiente": 250,
                "DiasDeGracia": 20,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C141"
            },
            {
                "NumeroLegal": "N142",
                "FechaVencimiento": "2024-05-14",
                "FechaEmision": "2024-04-16",
                "Moneda": "EUR",
                "ImporteEmision": 415,
                "SaldoPendiente": 240,
                "DiasDeGracia": 21,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C142"
            },
            {
                "NumeroLegal": "N143",
                "FechaVencimiento": "2024-05-16",
                "FechaEmision": "2024-04-17",
                "Moneda": "USD",
                "ImporteEmision": 430,
                "SaldoPendiente": 230,
                "DiasDeGracia": 22,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C143"
            },
            {
                "NumeroLegal": "N144",
                "FechaVencimiento": "2024-05-18",
                "FechaEmision": "2024-04-18",
                "Moneda": "EUR",
                "ImporteEmision": 445,
                "SaldoPendiente": 220,
                "DiasDeGracia": 23,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C144"
            },
            {
                "NumeroLegal": "N145",
                "FechaVencimiento": "2024-05-20",
                "FechaEmision": "2024-04-19",
                "Moneda": "USD",
                "ImporteEmision": 460,
                "SaldoPendiente": 210,
                "DiasDeGracia": 24,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C145"
            },
            {
                "NumeroLegal": "N146",
                "FechaVencimiento": "2024-05-22",
                "FechaEmision": "2024-04-20",
                "Moneda": "EUR",
                "ImporteEmision": 475,
                "SaldoPendiente": 200,
                "DiasDeGracia": 25,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C146"
            },
            {
                "NumeroLegal": "N147",
                "FechaVencimiento": "2024-05-24",
                "FechaEmision": "2024-04-21",
                "Moneda": "USD",
                "ImporteEmision": 490,
                "SaldoPendiente": 190,
                "DiasDeGracia": 26,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C147"
            },
            {
                "NumeroLegal": "N148",
                "FechaVencimiento": "2024-05-26",
                "FechaEmision": "2024-04-22",
                "Moneda": "EUR",
                "ImporteEmision": 505,
                "SaldoPendiente": 180,
                "DiasDeGracia": 27,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C148"
            },
            {
                "NumeroLegal": "N150",
                "FechaVencimiento": "2024-05-30",
                "FechaEmision": "2024-04-24",
                "Moneda": "EUR",
                "ImporteEmision": 535,
                "SaldoPendiente": 160,
                "DiasDeGracia": 28,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C150"
            },
            {
                "NumeroLegal": "N151",
                "FechaVencimiento": "2024-06-01",
                "FechaEmision": "2024-04-25",
                "Moneda": "USD",
                "ImporteEmision": 550,
                "SaldoPendiente": 150,
                "DiasDeGracia": 29,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C151"
            },
            {
                "NumeroLegal": "N152",
                "FechaVencimiento": "2024-06-03",
                "FechaEmision": "2024-04-26",
                "Moneda": "EUR",
                "ImporteEmision": 565,
                "SaldoPendiente": 140,
                "DiasDeGracia": 30,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C152"
            },
            {
                "NumeroLegal": "N153",
                "FechaVencimiento": "2024-06-05",
                "FechaEmision": "2024-04-27",
                "Moneda": "USD",
                "ImporteEmision": 580,
                "SaldoPendiente": 130,
                "DiasDeGracia": 31,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C153"
            },
            {
                "NumeroLegal": "N154",
                "FechaVencimiento": "2024-06-07",
                "FechaEmision": "2024-04-28",
                "Moneda": "EUR",
                "ImporteEmision": 595,
                "SaldoPendiente": 120,
                "DiasDeGracia": 32,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C154"
            },
            {
                "NumeroLegal": "N155",
                "FechaVencimiento": "2024-06-09",
                "FechaEmision": "2024-04-29",
                "Moneda": "USD",
                "ImporteEmision": 610,
                "SaldoPendiente": 110,
                "DiasDeGracia": 33,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C155"
            },
            {
                "NumeroLegal": "N156",
                "FechaVencimiento": "2024-06-11",
                "FechaEmision": "2024-04-30",
                "Moneda": "EUR",
                "ImporteEmision": 625,
                "SaldoPendiente": 100,
                "DiasDeGracia": 34,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C156"
            },
            {
                "NumeroLegal": "N157",
                "FechaVencimiento": "2024-06-13",
                "FechaEmision": "2024-05-01",
                "Moneda": "USD",
                "ImporteEmision": 640,
                "SaldoPendiente": 90,
                "DiasDeGracia": 35,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C157"
            },
            {
                "NumeroLegal": "N158",
                "FechaVencimiento": "2024-06-15",
                "FechaEmision": "2024-05-02",
                "Moneda": "EUR",
                "ImporteEmision": 655,
                "SaldoPendiente": 80,
                "DiasDeGracia": 36,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C158"
            },
            {
                "NumeroLegal": "N159",
                "FechaVencimiento": "2024-06-17",
                "FechaEmision": "2024-05-03",
                "Moneda": "USD",
                "ImporteEmision": 670,
                "SaldoPendiente": 70,
                "DiasDeGracia": 37,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C159"
            },
            {
                "NumeroLegal": "N160",
                "FechaVencimiento": "2024-06-19",
                "FechaEmision": "2024-05-04",
                "Moneda": "EUR",
                "ImporteEmision": 685,
                "SaldoPendiente": 60,
                "DiasDeGracia": 38,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C160"
            },
            {
                "NumeroLegal": "N161",
                "FechaVencimiento": "2024-06-21",
                "FechaEmision": "2024-05-05",
                "Moneda": "USD",
                "ImporteEmision": 700,
                "SaldoPendiente": 50,
                "DiasDeGracia": 39,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C161"
            },
            {
                "NumeroLegal": "N162",
                "FechaVencimiento": "2024-06-23",
                "FechaEmision": "2024-05-06",
                "Moneda": "EUR",
                "ImporteEmision": 715,
                "SaldoPendiente": 40,
                "DiasDeGracia": 40,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C162"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                "NumeroLegal": "N164",
                "FechaVencimiento": "2024-06-27",
                "FechaEmision": "2024-05-08",
                "Moneda": "EUR",
                "ImporteEmision": 745,
                "SaldoPendiente": 20,
                "DiasDeGracia": 41,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C164"
            },
            {
                "NumeroLegal": "N165",
                "FechaVencimiento": "2024-06-29",
                "FechaEmision": "2024-05-09",
                "Moneda": "USD",
                "ImporteEmision": 760,
                "SaldoPendiente": 10,
                "DiasDeGracia": 42,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C165"
            },
            {
                "NumeroLegal": "N166",
                "FechaVencimiento": "2024-07-01",
                "FechaEmision": "2024-05-10",
                "Moneda": "EUR",
                "ImporteEmision": 775,
                "SaldoPendiente": 5,
                "DiasDeGracia": 43,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C166"
            },
            {
                "NumeroLegal": "N167",
                "FechaVencimiento": "2024-07-03",
                "FechaEmision": "2024-05-11",
                "Moneda": "USD",
                "ImporteEmision": 790,
                "SaldoPendiente": 0,
                "DiasDeGracia": 44,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C167"
            },
            {
                "NumeroLegal": "N168",
                "FechaVencimiento": "2024-07-05",
                "FechaEmision": "2024-05-12",
                "Moneda": "EUR",
                "ImporteEmision": 805,
                "SaldoPendiente": 0,
                "DiasDeGracia": 45,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C168"
            },
            {
                "NumeroLegal": "N169",
                "FechaVencimiento": "2024-07-07",
                "FechaEmision": "2024-05-13",
                "Moneda": "USD",
                "ImporteEmision": 820,
                "SaldoPendiente": 0,
                "DiasDeGracia": 46,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C169"
            },
            {
                "NumeroLegal": "N170",
                "FechaVencimiento": "2024-07-09",
                "FechaEmision": "2024-05-14",
                "Moneda": "EUR",
                "ImporteEmision": 835,
                "SaldoPendiente": 0,
                "DiasDeGracia": 47,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C170"
            },
            {
                "NumeroLegal": "N171",
                "FechaVencimiento": "2024-07-11",
                "FechaEmision": "2024-05-15",
                "Moneda": "USD",
                "ImporteEmision": 850,
                "SaldoPendiente": 0,
                "DiasDeGracia": 48,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C171"
            },
            {
                "NumeroLegal": "N172",
                "FechaVencimiento": "2024-07-13",
                "FechaEmision": "2024-05-16",
                "Moneda": "EUR",
                "ImporteEmision": 865,
                "SaldoPendiente": 0,
                "DiasDeGracia": 49,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C172"
            },
            {
                "NumeroLegal": "N173",
                "FechaVencimiento": "2024-07-15",
                "FechaEmision": "2024-05-17",
                "Moneda": "USD",
                "ImporteEmision": 880,
                "SaldoPendiente": 0,
                "DiasDeGracia": 50,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C173"
            },
            {
                "NumeroLegal": "N174",
                "FechaVencimiento": "2024-07-17",
                "FechaEmision": "2024-05-18",
                "Moneda": "EUR",
                "ImporteEmision": 895,
                "SaldoPendiente": 0,
                "DiasDeGracia": 51,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C174"
            },
            {
                "NumeroLegal": "N175",
                "FechaVencimiento": "2024-07-19",
                "FechaEmision": "2024-05-19",
                "Moneda": "USD",
                "ImporteEmision": 910,
                "SaldoPendiente": 0,
                "DiasDeGracia": 52,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C175"
            },
            {
                "NumeroLegal": "N176",
                "FechaVencimiento": "2024-07-21",
                "FechaEmision": "2024-05-20",
                "Moneda": "EUR",
                "ImporteEmision": 925,
                "SaldoPendiente": 0,
                "DiasDeGracia": 53,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C176"
            }
        ]
    },
    {
        PaymentAccount: {
            AccountCode: "AC124",
        },
        TipoComprobante: [
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                NumeroLegal: "N125",
                FechaVencimiento: "2024-04-10",
                FechaEmision: "2024-03-30",
                Moneda: "USD",
                ImporteEmision: 200,
                SaldoPendiente: 100,
                DiasDeGracia: 7,
                MarcaReclamo: false,
                MotivoReclamo: null,
                IdComprobante: "C125"
            },
            {
                "NumeroLegal": "N164",
                "FechaVencimiento": "2024-06-27",
                "FechaEmision": "2024-05-08",
                "Moneda": "EUR",
                "ImporteEmision": 745,
                "SaldoPendiente": 20,
                "DiasDeGracia": 41,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C164"
            },
            {
                "NumeroLegal": "N165",
                "FechaVencimiento": "2024-06-29",
                "FechaEmision": "2024-05-09",
                "Moneda": "USD",
                "ImporteEmision": 760,
                "SaldoPendiente": 10,
                "DiasDeGracia": 42,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C165"
            },
            {
                "NumeroLegal": "N166",
                "FechaVencimiento": "2024-07-01",
                "FechaEmision": "2024-05-10",
                "Moneda": "EUR",
                "ImporteEmision": 775,
                "SaldoPendiente": 5,
                "DiasDeGracia": 43,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C166"
            },
            {
                "NumeroLegal": "N167",
                "FechaVencimiento": "2024-07-03",
                "FechaEmision": "2024-05-11",
                "Moneda": "USD",
                "ImporteEmision": 790,
                "SaldoPendiente": 0,
                "DiasDeGracia": 44,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C167"
            },
            {
                "NumeroLegal": "N168",
                "FechaVencimiento": "2024-07-05",
                "FechaEmision": "2024-05-12",
                "Moneda": "EUR",
                "ImporteEmision": 805,
                "SaldoPendiente": 0,
                "DiasDeGracia": 45,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C168"
            },
            {
                "NumeroLegal": "N169",
                "FechaVencimiento": "2024-07-07",
                "FechaEmision": "2024-05-13",
                "Moneda": "USD",
                "ImporteEmision": 820,
                "SaldoPendiente": 0,
                "DiasDeGracia": 46,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C169"
            },
            {
                "NumeroLegal": "N170",
                "FechaVencimiento": "2024-07-09",
                "FechaEmision": "2024-05-14",
                "Moneda": "EUR",
                "ImporteEmision": 835,
                "SaldoPendiente": 0,
                "DiasDeGracia": 47,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C170"
            },
            {
                "NumeroLegal": "N171",
                "FechaVencimiento": "2024-07-11",
                "FechaEmision": "2024-05-15",
                "Moneda": "USD",
                "ImporteEmision": 850,
                "SaldoPendiente": 0,
                "DiasDeGracia": 48,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C171"
            },
            {
                "NumeroLegal": "N172",
                "FechaVencimiento": "2024-07-13",
                "FechaEmision": "2024-05-16",
                "Moneda": "EUR",
                "ImporteEmision": 865,
                "SaldoPendiente": 0,
                "DiasDeGracia": 49,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C172"
            },
            {
                "NumeroLegal": "N173",
                "FechaVencimiento": "2024-07-15",
                "FechaEmision": "2024-05-17",
                "Moneda": "USD",
                "ImporteEmision": 880,
                "SaldoPendiente": 0,
                "DiasDeGracia": 50,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C173"
            },
            {
                "NumeroLegal": "N174",
                "FechaVencimiento": "2024-07-17",
                "FechaEmision": "2024-05-18",
                "Moneda": "EUR",
                "ImporteEmision": 895,
                "SaldoPendiente": 0,
                "DiasDeGracia": 51,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C174"
            },
            {
                "NumeroLegal": "N175",
                "FechaVencimiento": "2024-07-19",
                "FechaEmision": "2024-05-19",
                "Moneda": "USD",
                "ImporteEmision": 910,
                "SaldoPendiente": 0,
                "DiasDeGracia": 52,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C175"
            },
            {
                "NumeroLegal": "N176",
                "FechaVencimiento": "2024-07-21",
                "FechaEmision": "2024-05-20",
                "Moneda": "EUR",
                "ImporteEmision": 925,
                "SaldoPendiente": 0,
                "DiasDeGracia": 53,
                "MarcaReclamo": false,
                "MotivoReclamo": null,
                "IdComprobante": "C176"
            }
        ]
    }
];

//http://localhost:3000/clients/comprobantes?beginRowNum=0&fetchRowNum=4
router.get('/clients/comprobantes', (req, res) => {
    const beginRowNum = parseInt(req.query.beginRowNum);
    const fetchRowNum = parseInt(req.query.fetchRowNum);

    if (!Number.isNaN(beginRowNum) && beginRowNum >= 0 && beginRowNum < paymentAccounts.length &&
        !Number.isNaN(fetchRowNum) && fetchRowNum > 0) {

        const cliente = paymentAccounts[beginRowNum];

        // Verificar si el cliente y las deudas están definidas
        if (cliente && cliente.TipoComprobante && cliente.TipoComprobante.length > 0) {
            const totalDeudas = cliente.TipoComprobante.length;

            // Ordenar las deudas por fecha de emisión
            const deudasOrdenadas = cliente.TipoComprobante.sort((a, b) => {
                return new Date(a.FechaEmision) - new Date(b.FechaEmision);
            });

            // Si se solicitan más deudas de las que tiene el cliente, devolver todas las deudas
            if (fetchRowNum >= totalDeudas) {
                res.json(deudasOrdenadas);
            } else {
                // Devolver la cantidad de deudas solicitadas
                res.json(deudasOrdenadas.slice(0, fetchRowNum));
            }
        } else {
            res.status(404).json({ error: 'El cliente o sus deudas no están definidas.' });
        }
    } else {
        res.status(400).json({ error: 'Los parámetros proporcionados no son válidos.' });
    }
});

//http://localhost:3000/clients/fechas?desde=2023-01-01&hasta=2024-12-01
router.get('/clients/fechas', (req, res) => {
    const desde = new Date(req.query.desde);
    const hasta = new Date(req.query.hasta);
    
    if (isNaN(desde.getTime()) || isNaN(hasta.getTime()) || desde >= hasta) {
        return res.status(400).json({ error: 'Las fechas proporcionadas no son válidas.' });
    }
    
    const filteredDebts = paymentAccounts.reduce((acc, cliente) => {
        if (cliente && cliente.TipoComprobante && cliente.TipoComprobante.length > 0) {
            const filteredTipoComprobante = cliente.TipoComprobante.filter((deuda) => {
                const fechaEmision = new Date(deuda.FechaEmision);
                return fechaEmision >= desde && fechaEmision <= hasta;
            });
            if (filteredTipoComprobante.length > 0) {
                acc.push({ cliente: cliente.Nombre, TipoComprobante: filteredTipoComprobante });
            }
        }
        return acc;
    }, []);

    if (filteredDebts.length === 0) {
        return res.status(404).json({ error: 'No se encontraron deudas para las fechas proporcionadas.' });
    }

    res.json(filteredDebts);
});


module.exports = router;
