input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.South)
    basic.showNumber(1000)
})
music.playMelody("C C F F G G C C ", 85)
basic.showLeds(`
    . # # # .
    . # . # .
    . . # . .
    # . . # .
    . . . . .
    `)
