window.onload = (ev) => {
    // @ts-ignore
    if (!window.mLoaded) {
    // @ts-ignore    
        window.mLoaded = true
        //mainEnt()
        // @ts-ignore
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            svg: {
                fontCache: 'global'
            }
        }
    }
}

function mainEnt() {
    const elements = document.getElementsByClassName('post-card')
    setTimeout(
        () => {
            let _deleted = false
            for (const element of Array.from(elements)) {
                const pHeader = element.getElementsByClassName('post-header')[0]
                const pAuthorInfo = pHeader.getElementsByClassName('author-info')[0]
                const pAuthorName = pAuthorInfo.children[0]
                if (pAuthorName && (pAuthorName.innerHTML.includes('网友-28'))) {
                    element.remove()
                    _deleted = true  // due to html file is built on server, when this file is loaded, all bbq posts already exist
                }
            }
        }, 20
    )

    // parse Markdown
    const postContainer = document.getElementsByClassName('posts-container')[0]
    const postcards = postContainer?.getElementsByClassName('post-card')
    if (postContainer && postcards) {
        for (const postcard of postcards) {
            for (const p of postcard.querySelectorAll('p')) {
                p.innerHTML = marked.parse(p.innerHTML, { async: false })
            }
        }
    }

    /*
    // modify the post content area placeholder to let users know markdown is supported
    if (window.location.href.includes('http://glbbq.online/post.php')) {
        const contentArea = document.getElementById('content')
        contentArea?.setAttribute('placeholder', '在这里写下你的表白内容, 支持 Markdown...')
    }
    */
}

mainEnt()
