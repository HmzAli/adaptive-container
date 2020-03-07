;(function () {
    const adaptiveCont = {
        adjustHeight: function ($element) {
            const contRect = $element.getBoundingClientRect()
            const contStyle = window.getComputedStyle($element)
            const contPaddingBottom = Number(contStyle.paddingBottom.match(/\d+/)[0])

            Array.from($element.children).forEach($child => {
                const childStyle = window.getComputedStyle($child)
                const childRect = $child.getBoundingClientRect()

                if (childStyle.position === 'absolute') {
                    const targetHeight = childRect.height + (childRect.y - contRect.y) + contPaddingBottom
                    $element.style.height = `${targetHeight}px`
                }
            })
        }
    }

    window.adaptiveCont = adaptiveCont
})()