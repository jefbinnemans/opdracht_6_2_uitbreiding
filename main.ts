input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showNumber(score)
})
// Steen
input.onGesture(Gesture.Shake, function () {
    aantal_spelletjes += 1
    blad_steen_schaar_papier = randint(0, 3)
    if (blad_steen_schaar_papier == 0) {
        basic.showLeds(`
            # # . . .
            # # # . #
            . . . # .
            # # # . #
            # # . . .
            `)
    } else if (blad_steen_schaar_papier == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . # . .
            `)
    } else if (blad_steen_schaar_papier == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
    basic.showNumber(aantal_spelletjes)
    basic.showNumber(score / aantal_spelletjes * 100)
})
let blad_steen_schaar_papier = 0
let score = 0
let aantal_spelletjes = 0
aantal_spelletjes = 0
score = 0
