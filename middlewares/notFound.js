//creo la costante notFound
const notFound = (req, res, next)=>{
    res.status(404).send('Non è possibile trovare la risorsa');
};

//gestisco l'errore 500
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: 'error message'

    });
});

module.exports = notFound