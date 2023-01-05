let index = 0
for (let index = 0; index <= 2; index++) {
    music.playTone(494, music.beat(BeatFraction.Quarter))
}
basic.showNumber(3 - index)
music.playTone(131, music.beat(BeatFraction.Double))
music.playTone(196, music.beat(BeatFraction.Double))
music.playTone(392, music.beat(BeatFraction.Double))
for (let index2 = 0; index2 < 2; index2++) {
    music.playTone(988, music.beat(BeatFraction.Double))
}
basic.showString("GO")
