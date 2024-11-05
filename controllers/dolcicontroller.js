//importo l'array dal file db.js nella cartella db
const posts = require('../db/db.js')

const index = (req, res)=>{

    //cero una ul
    let ul = `<ul>`;
    posts.forEach(post=>{

        //inserisco gli li nell'ul
        ul += `
            <li>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <img src="/img/${post.image}" alt="${post.title}">
                <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
            </li>
        `;
        
    })

    ul += `</ul>`;

    res.status(200).send(ul)
}

const show = (req, res)=>{

    //uso il ciclo find per trovare e visualizzare il post in base al suo slug
    const post = posts.find(post => post.slug === req.params.slug)

    //restituisci un messaggio di errore se non trova il post
    if (!post) {
        return res.status(404).json({
            error: `404! Not found`
        })
    }
    //se lo trova, restituisci uno status 200
    return res.status(200).json({
        data: post
    })
    
}

//esporto index e show
module.exports = { 
    index,
    show 
}