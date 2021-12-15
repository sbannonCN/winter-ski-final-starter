scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    scene.cameraShake(3, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.startEffect(effects.ashes, 1000)
    music.thump.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
    scene.cameraShake(3, 500)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e 2 2 2 2 f . . . . . 
    . . . f e 2 2 3 3 2 2 f . . . . 
    . . . f e 2 2 2 2 3 2 f . . . . 
    . . . f e 2 2 2 2 2 e f . . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . . f 5 6 6 6 6 6 5 f . . . . 
    . . . 9 f 6 9 5 6 9 f 9 . . . . 
    . . . f 2 5 5 e 5 5 2 f . . . . 
    . . . f 2 e 2 2 2 e 2 f . . . . 
    . . . c f e 2 2 2 2 f c . . . . 
    . . . 9 f e 2 2 2 2 f 9 . . . . 
    . . . 9 9 f f f f f 9 9 . . . . 
    . . . . 9 c c 9 c c 9 . . . . . 
    . . . . . f f 9 f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.vy = 70
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C5 B A G A B A G ", 120)
    music.setVolume(20)
    music.setTempo(120)
    music.changeTempoBy(20)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
})
