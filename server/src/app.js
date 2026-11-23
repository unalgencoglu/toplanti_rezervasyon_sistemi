const express = require('express');
const app = express();

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

app.listen(4500, () => {
    return console.log("sunucu ayakta");
});