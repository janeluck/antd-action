/**
 * Created by janeluck on 1/2/17.
 */
function width(el){
    const styles = el.ownerDocument.defaultView.getComputedStyle(el, null)
    const width = parseFloat(styles.width.indexOf('px') !== '-1' ? styles.width : 0)
    const boxSizing = styles.boxSizing || 'content-box'
    if (boxSizing == 'border-box'){
        return width
    }

    const borderLeftWidth = parseFloat(styles.borderLeftWidth)
    const borderRightWidth = parseFloat(styles.borderRightWidth)
    const paddingLeft = parseFloat(styles.paddingLeft)
    const paddingRight = parseFloat(styles.paddingRight)

    return width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight



}


