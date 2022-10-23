radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
    basic.showString("SENT")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ABC")
    basic.showString("SENT")
})
basic.showString("STARTING")
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
basic.showString("ONLINE")
basic.forever(function () {
    radio.setGroup(1)
})
