window.onload = (ev) => {
    // @ts-ignore
    if (!window.mLoaded) {
    // @ts-ignore    
        window.mLoaded = true
        //mainEnt()
        // @ts-ignore
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$']]
            }
        }
        const scriptMathjax = document.createElement('script')
        scriptMathjax.src = 'http://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
        scriptMathjax.async = true
        document.head.appendChild(scriptMathjax)

        scriptMathjax.onload = () => {
            // @ts-ignore
            if (window.MathJax) {
                // @ts-ignore
                window.MathJax.typesetPromise?.()
            }
        }

        const scriptMarked = document.createElement('script')
        scriptMarked.src = 'http://cdn.jsdelivr.net/npm/marked/marked.min.js'
        scriptMarked.async = true
        document.head.appendChild(scriptMarked)

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
}

mainEnt()
