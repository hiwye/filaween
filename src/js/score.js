module.exports = {
    quality: function(filament){
        return  filament.quality.threedbenchy +
                filament.quality.overhangs +
                filament.quality.details +
                filament.quality.bridges
    },
    pullStrength: function(filament){
        return Math.round(
            (
                Math.min(32*1.2, filament.strength.pull.strength*1.5) +
                Math.min(32*1.2, filament.strength.pull.adhesion*2)
            ) /0.6 * 2
        ) / 2
    },
    weightedStrength: function(filament){
        return Math.round(
            (
                Math.min(32, filament.strength.bend.strength*2.5) +
                Math.min(32, filament.strength.bend.adhesion*5) +
                Math.min(32, filament.strength.pull.strength*1.5) +
                Math.min(32, filament.strength.pull.adhesion*2)
            ) * 2
        ) / 2
    }
};