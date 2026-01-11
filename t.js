window.onload = (ev) => {
    // @ts-ignore
    if (!window.mLoaded) {
    // @ts-ignore    
        window.mLoaded = true
        //mainEnt()
        // @ts-ignore
        window.MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']]
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

        scriptMarked.onload = () => {
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
}

function mainEnt() {
    const elements = document.getElementsByClassName('post-card')
    setTimeout(
        () => {
            let atDelete = []
            for (const element of Array.from(elements)) {
                const pContent = element.getElementsByClassName('post-content')[0]
                if (pContent.innerHTML) {
                        const lines = pContent.innerHTML
                        .replace(/<br\s*\/?>/gi, '\n')
                        .replace(/<\/p>|<p[^>]*>/gi, '\n')
                        .replace(/<\/div>|<div[^>]*>/gi, '\n')
                        .split('\n');
                    for (const line of lines) {
                        if (line.trim().includes('@DELETE')) {
                            const regex = /#(\d+)/g
                            const matches = line.matchAll(regex)
                            
                            for (const match of matches) {
                                const postNum = '#' + match[1]
                                atDelete.push(postNum)
                            }
                        }
                    }
                }
            }
            
            for (const element of Array.from(elements)) {
                const pHeader = element.getElementsByClassName('post-header')[0]
                const pNumber = element.getElementsByClassName('post-number')[0]
                if (!pHeader || !pNumber) continue
            
                const pAuthorInfo = pHeader.getElementsByClassName('author-info')[0]
                const pAuthorName = pAuthorInfo?.children[0];
                
                if ((pAuthorName &&
                    pAuthorName.textContent?.includes('网友-28')) ||
                    atDelete.includes(pNumber.textContent || '')
                ) {
                    element.remove()
                }
            }
        }, 20
    )
}

mainEnt()
