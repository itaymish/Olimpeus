controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
    nos += -1
    otherSprite.startEffect(effects.fire, 100)
    if (nos == 0) {
        game.over(true, effects.confetti)
    }
    music.siren.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    shield = sprites.create(img`
f f f f 
f d b f 
f d b f 
f d d f 
. f f . 
`, SpriteKind.Food)
    shield.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    shield.setFlag(SpriteFlag.StayInScreen, true)
    info.changeLifeBy(1)
    hero.startEffect(effects.hearts, 100)
    if (info.life() > 5) {
        info.changeLifeBy(-1)
    }
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
    nos += -1
    otherSprite.startEffect(effects.disintegrate)
    music.magicWand.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
. . c c c c . . 
. c 2 2 2 2 c . 
c 2 2 4 4 2 2 c 
c 2 4 4 4 4 2 c 
c 2 4 4 4 4 2 c 
c 2 2 4 4 2 2 c 
. c 2 2 2 2 c . 
. . c c c c . . 
`, hero, 100, 0)
    bullet.startEffect(effects.ashes)
    bullet = sprites.createProjectileFromSprite(img`
. . c c c c . . 
. c 2 2 2 2 c . 
c 2 2 4 4 2 2 c 
c 2 4 4 4 4 2 c 
c 2 4 4 4 4 2 c 
c 2 2 4 4 2 2 c 
. c 2 2 2 2 c . 
. . c c c c . . 
`, hero, -100, 0)
    bullet.startEffect(effects.ashes)
    bullet = sprites.createProjectileFromSprite(img`
. . c c c c . . 
. c 2 2 2 2 c . 
c 2 2 4 4 2 2 c 
c 2 4 4 4 4 2 c 
c 2 4 4 4 4 2 c 
c 2 2 4 4 2 2 c 
. c 2 2 2 2 c . 
. . c c c c . . 
`, hero, 0, 100)
    bullet.startEffect(effects.ashes)
    bullet = sprites.createProjectileFromSprite(img`
. . c c c c . . 
. c 2 2 2 2 c . 
c 2 2 4 4 2 2 c 
c 2 4 4 4 4 2 c 
c 2 4 4 4 4 2 c 
c 2 2 4 4 2 2 c 
. c 2 2 2 2 c . 
. . c c c c . . 
`, hero, 0, -100)
    bullet.startEffect(effects.ashes)
    music.pewPew.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
})
info.onLifeZero(function () {
    game.over(false, effects.confetti)
})
let level = 0
let choice = 0
let ghost: Sprite = null
let bullet: Sprite = null
let nos = 0
let shield: Sprite = null
let hero: Sprite = null
scene.setBackgroundImage(img`
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d b b b b b f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d b b b b b f f f f f e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d b b b b b f f f f f e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d b b b b b f f f f f e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d b b b b b f f f f f e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f d d d d d d d d d d d d f f f f f e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f f d d d d d d d d d d d f f f f f e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f f d d d d d d d d d d f f f f f f e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f f d d d d d d d d d d f f f f f f e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f f f d d d d d d d d d f f f f f f e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e f f f f f f f d d d d d d f f f f f f f f e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f e e e e 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f e e e 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f f f f f f f f f f f f f f e e e e e e 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e f f f f f f f f f f e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f f f f f f f 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 f f f f f f f f f f f f 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 f f f f f f f f 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f 7 f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 f f f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f 7 f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f e e e e e e e e e e e e e 4 4 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f e e e e e e e e e e e e e 4 4 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f 4 4 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f e e e e e e e e e f f f f f f f f f f f f f f f f 4 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 4 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f f e e e e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f e f f f f f f f f e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e f f f f f f f e e e e f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 4 4 4 4 f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e f f f f f f e e e e f f f f f f e f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 4 4 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f 4 4 4 f f f f f 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e f f f f f e e e e f f f f f f e e f f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f 4 4 4 7 7 7 7 7 7 7 f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 f f f f f f 7 f f f f f f f f f f 4 4 4 f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f f f f f 4 4 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 4 4 4 4 f f f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e f f f f f f f e e 4 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e e e f f f f f e e e 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f e e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
`)
pause(2000)
scene.setBackgroundImage(img`
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f 7 f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f 7 7 f f f f f f f f 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 f f f f f f f f f d d d d d d d d d d d d d d d d f f f f f f f f f 7 7 f f f f f f f f 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 f f f f f f f f f f d d d d d d d d d d d d d d f f f f f f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 f f f f f f f f f f f f d d d d d d d d d f f f f f f f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f f f d d f f f f f f f f f f f f f f f f 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 f f f f f f f f f f f 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f e e e e e e e e e e e e e 4 4 f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f e e e e e e e e e e e e e 4 4 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f 4 4 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f e e e e e e e e e f f f f f f f f f f f f f f f f 4 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 4 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f f e e e e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f e f f f f f f f f e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e f f f f f f f e e e e f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 4 4 4 4 f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e f f f f f f e e e e f f f f f f e f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 4 4 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f 4 4 4 f f f f f 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e f f f f f e e e e f f f f f f e e f f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f 4 4 4 7 7 7 7 7 7 7 f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 f f f f f f 7 f f f f f f f f f f 4 4 4 f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f f f f f 4 4 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 4 4 4 4 f f f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e f f f f f f f e e 4 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e e e f f f f f e e e 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f e e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
`)
pause(500)
scene.setBackgroundImage(img`
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d 1 1 1 1 1 d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 d d d d d d d d d d b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 d 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d 1 1 1 1 1 1 d d d d d d 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d 1 1 1 1 1 1 d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d d d d d d d 1 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 7 7 7 7 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f f 7 7 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 7 f f f f f f f 7 7 7 7 7 7 7 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f 7 7 f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f 7 f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e 4 f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f 7 f f f f f f f 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f 7 7 f f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 f f f f f f f f f f f f f f f f f f f f f d d f f f f f d d d d d d d d f f f f f f f f f f f f f f f f f 7 7 f f f f f 7 7 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f e e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f e e e e e e e e e e f f f f f 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f e e e e e e e e e f f f f f f f f f f f f f f f f 4 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e f f f f f f f e e e e e e e e f f f f f f f f f f f f f f f 4 4 4 4 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f f f f f f f f f f e e e e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 7 7 7 7 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 7 7 7 7 7 7 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e f f f f f f f f f e f f f f f f f f e e e e f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e f f f f f f f e e e e f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 4 4 4 4 f f f f f 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e f f f f f f e e e e f f f f f f e f f f f f f f f f f 4 4 4 4 4 4 4 f f f f f 4 4 4 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f 4 4 4 f f f f f 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e f f f f f e e e e f f f f f f e e f f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f 4 4 4 7 7 7 7 7 7 7 f f f f f f f 7 7 f f f f f f 7 7 7 7 7 7 f f f f f f 7 f f f f f f f f f f 4 4 4 f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e f f f f f f f f 4 4 4 4 4 4 4 f f f f f f f f f f f 4 4 7 7 7 7 f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f f f 4 4 4 4 f f f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e f f f f f f f e e 4 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 7 7 7 7 7 f f f f f f 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e f f f f f e e e e e e e e e e e e e e e e e f f f f f e e e e e e f f f f f e e e 4 4 4 4 f f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 4 f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f 4 e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 f f f f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f f 4 4 4 4 4 f f f f f f 4 4 4 4 4 4 4 f f f f f f e e f f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f 4 4 4 4 4 f f f f f 4 4 4 4 4 4 f f f f f f f f e e f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f 4 4 f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f f f f f e e e e e e f f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
1 1 1 1 1 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e f f f f f f f f f f e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 1 1 1 1 1 
`)
pause(500)
scene.setBackgroundImage(img`
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 
d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 
d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 
d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 
d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e 
`)
game.setDialogCursor(img`
. . e 4 4 4 4 d d d 4 4 4 4 e . . 
. e e 4 4 4 4 4 4 4 4 4 4 4 e e . 
e e e 4 4 7 7 7 f 7 7 7 4 4 e e e 
4 4 4 7 7 7 7 7 7 7 7 7 7 7 4 4 4 
4 4 4 7 7 7 7 7 7 7 7 7 7 7 4 4 4 
4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
d 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 d 
d 4 f 7 7 7 7 7 7 7 7 7 7 7 f 4 d 
d 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 d 
4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 
4 4 4 7 7 7 7 7 7 7 7 7 7 7 4 4 4 
4 4 4 7 7 7 7 7 7 7 7 7 7 7 4 4 4 
e e e 4 4 7 7 7 f 7 7 7 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 4 4 4 e e . 
. . e 4 4 4 4 d d d 4 4 4 4 e . . 
`)
game.splash("Olimpeus", "Press A")
if (game.ask("Do you know how to play?", "A-NO B-YES") && controller.A.isPressed()) {
    game.showLongText("You are the \"hero\". Press A to shoot. Watch out for the ghosts that attack you. Any hit of the ball will kill the ghost and get you a point. Every touch of ghost will make you heart. Get to the highest level, kill all the ghosts and win! Oh right, I forgot something ... During the game, shields will appear in different places, each of which brings you heart. You kill all the ghosts, you win. You have no hearts, you lose. At first you have 0 points and 5 hearts. Well, that's all. Good luck!", DialogLayout.Full)
} else {
    game.showLongText("Ok, so let's start!", DialogLayout.Full)
}
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
hero.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(hero)
info.setScore(0)
info.setLife(5)
shield = sprites.create(img`
f f f f 
f d b f 
f d b f 
f d d f 
. f f . 
`, SpriteKind.Food)
shield.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
shield.setFlag(SpriteFlag.StayInScreen, true)
game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
game.onUpdateInterval(1001, function () {
    ghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    choice = Math.randomRange(1, 4)
    ghost.follow(hero, 10)
    if (choice == 1) {
        ghost.setPosition(160, Math.randomRange(0, 120))
        ghost.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 d f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
. . . . . . f d 1 1 1 d d d d d d f . . . . . . 
. . . . . . f d 1 d f b d d d d b f . . . . . . 
. . . . . . f b d d f c d b b b c f . . . . . . 
. . . . . . . f 1 1 1 1 1 b b c f . . . . . . . 
. . . . . . . f 1 b 1 f f f f f . . . . . . . . 
. . . . . . . f b f c 1 1 1 b f . . . . . . . . 
. . . . . . . . f f 1 b 1 b f f . . . . . . . . 
. . . . . . . . . f b f b f f f . f . . . . . . 
. . . . . . . . . . f f f f f f f f . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    } else if (choice == 2) {
        ghost.setPosition(Math.randomRange(0, 160), 0)
        ghost.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    } else if (choice == 3) {
        ghost.setPosition(0, Math.randomRange(0, 120))
        ghost.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d b f d 1 d f . . . . . . 
. . . . . . f c b b b d c f d d b f . . . . . . 
. . . . . . . f c b b 1 1 1 1 1 f . . . . . . . 
. . . . . . . . f f f f f 1 b 1 f . . . . . . . 
. . . . . . . . f b 1 1 1 c f b f . . . . . . . 
. . . . . . . . f f b 1 b 1 f f . . . . . . . . 
. . . . . . f . f f f b f b f . . . . . . . . . 
. . . . . . f f f f f f f f . . . . . . . . . . 
. . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    } else {
        ghost.setPosition(Math.randomRange(0, 160), 120)
        ghost.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d d d d d d d d b f . . . . . . 
. . . . . . f c d 1 1 1 1 1 1 d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . . f c d b 1 b d f . . . . . . . . 
. . . . . . . . f c b f b f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
    ghost.say("MUAAHAA!", 1000)
    nos += 1
    music.jumpDown.play()
})
forever(function () {
    effects.confetti.startScreenEffect(100)
    music.playMelody("F E A D C B G C5 ", 240)
})
game.onUpdateInterval(15000, function () {
    level += 1
    ghost.follow(hero, 0)
    game.splash("Level " + level + ".", "You've played for " + game.runtime() + " ms.")
    if (controller.A.isPressed()) {
        ghost.follow(hero, 10)
    }
})
