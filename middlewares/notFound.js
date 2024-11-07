//creo la costante notFound
const notFound = (req, res, next)=>{
    res.status(404).send('Non è possibile trovare la risorsa')
}

module.exports = notFound;