//importo l'array dal file db.js nella cartella db
const posts = require('../db/db.js');

//aggiungo fs
const fs = require('fs');

//commento index e la ricreo restituendo un JSON con la lista dei post
/*const index = (req, res)=>{

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
}*/

//ricreo il nuovo index
const index = (req, res)=>{
    res.json({
        data: posts,
        count: posts.length
    })
}

//creo show
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

//creo store
const store = (req, res)=>{

    console.log(req.body);
    

    //creo il nuovo post
    const post = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    
    //pusho il nuovo post nell'array
    posts.push(post);

    fs.writeFileSync('./db/db.js', `const posts = ${JSON.stringify(posts, null, 4)};\n\nmodule.exports = posts;`);

    //fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)

    //ritorno l'array di post aggiornato
    res.status(201).json({
        status: 201,
        data: posts,
        count: posts.length
      })
}

//esporto index e show
module.exports = { 
    index,
    show,
    store
}