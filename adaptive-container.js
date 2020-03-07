;(function () {
    function adaptiveCont($element) {
        const contRect = $element.getBoundingClientRect()
        const contStyle = window.getComputedStyle($element)
        const contPaddingBottom = Number(contStyle.paddingBottom.match(/\d+/)[0])
        let maxChildBottom = 0;

        Array.from($element.children).forEach($child => {
            if ($child.hasChildNodes()) {
                adaptiveCont($child)
            }
            const childRect = $child.getBoundingClientRect()
            if (childRect.bottom < maxChildBottom) {
                return;
            }
            maxChildBottom = childRect.bottom
            const childStyle = window.getComputedStyle($child)

            if (childStyle.position === 'absolute') {
                const targetHeight = childRect.height + (childRect.y - contRect.y) + contPaddingBottom
                $element.style.height = `${targetHeight}px`
            }
        })
    }

    window.adaptiveCont = adaptiveCont
})()