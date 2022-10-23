def on_button_pressed_a():
    radio.send_number(123)
    basic.show_string("SENT")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_string("ABC")
    basic.show_string("SENT")
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("STARTING")
basic.pause(100)
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")
basic.pause(100)
basic.show_leds("""
    . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
""")
basic.pause(100)
basic.show_leds("""
    # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
basic.show_string("ONLINE")

def on_forever():
    radio.set_group(1)
basic.forever(on_forever)
