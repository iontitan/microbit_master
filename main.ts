input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
})
basic.showString("MASTER STARTING")
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showString("MASTER ONLINE")
basic.forever(function () {
    radio.setGroup(1)
})
