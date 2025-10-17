input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    ответ += -1
    music.playTone(220, music.beat(BeatFraction.Eighth))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (загадано < ответ) {
        попытки += 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (загадано == ответ) {
        for (let index = 0; index < 1; index++) {
            basic.showIcon(IconNames.Yes, 300)
            basic.showString("restart")
            попытки = 0
            ответ = 0
            загадано = randint(1, 9)
            попытки = 0
        }
    } else {
        попытки += 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    ответ += 1
    music.playTone(587, music.beat(BeatFraction.Eighth))
})
let ответ = 0
let загадано = 0
let попытки = 0
music.setVolume(18)
for (let index = 0; index < 1; index++) {
    попытки = 0
    загадано = randint(1, 9)
    ответ = 0
}
basic.forever(function () {
    basic.showNumber(ответ)
    if (ответ < 1) {
        ответ = 1
    } else if (ответ > 9) {
        ответ = 9
    }
    if (попытки > 3) {
        basic.showIcon(IconNames.No)
        попытки = 0
        ответ = 0
        загадано = randint(1, 9)
    }
    if (попытки == 1) {
        basic.setLedColors(0x00ff00, 0x000000, 0x000000)
    } else if (попытки == 2) {
        basic.setLedColors(0xffff00, 0xffff00, 0x000000)
    } else if (попытки == 3) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    } else {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
