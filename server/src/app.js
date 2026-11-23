const express = require('express');
const app = express();
app.use(express.json());
let sonId = 4;

const odalar = [
    { id: 1, ad: 'T100', kapasite: 15, kat: 1 },
    { id: 2, ad: 'T101', kapasite: 15, kat: 1 },
    { id: 3, ad: 'T200', kapasite: 40, kat: 2 },
    { id: 4, ad: 'T201', kapasite: 40, kat: 2 },
];

app.get('/', (req, res) => {
    res.send('sunucu ayakta');
});

app.get('/odalar', (req, res) => {
    res.status(200).json(odalar);
});

app.get('/odalar/:id', (req, res) => {
    const id = Number(req.params.id);

    const oda = odalar.find(o => o.id === id);

    if(!oda) {
        return res.status(404).json({ mesaj: "Oda bulunamadı" });
    }

    res.status(200).json(oda);
});

app.post('/odalar', (req, res) => {
    const { ad, kapasite, kat } = req.body;

    if(!ad || kapasite === undefined || kat === undefined ) {
        return res.status(400).json({ mesaj: 'Eksik veya hatalı veri' });
    }

    if (!Number.isInteger(kapasite) || !Number.isInteger(kat) || kapasite < 1) {
        return res.status(400).json({ mesaj: 'Kapasite ve kat tam sayı olmalı' });
    }

    sonId += 1;

    const yeniOda = {
        id: sonId,
        ad: ad,
        kapasite: kapasite,
        kat: kat,
    };

    odalar.push(yeniOda);

    res.status(201).json(yeniOda);
});

app.listen(4500, () => {
    return console.log("sunucu ayakta");
});