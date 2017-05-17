$(function () {
    let maxFontSize = -Infinity;
    let $maxFontSizeEl = null;

    let minFontSize = Infinity;
    let $minFontSizeEl = null;

    $('body *').each((i, el) => {
        const curFontSize = parseInt($(el).css('fontSize'));

        if (curFontSize > maxFontSize) {
            maxFontSize = curFontSize;
            $maxFontSizeEl = $(el);
        }

        if (curFontSize < minFontSize) {
            minFontSize = curFontSize;
            $minFontSizeEl = $(el);
        }
    });

    const avgValue = (maxFontSize + minFontSize) / 2;

    $maxFontSizeEl.css('fontSize', avgValue);
    $minFontSizeEl.css('fontSize', avgValue);
});