registerSubstance('Cannabis Sativa', {

    /* General */
    img: 'cannabis_sativa.png',
    info: 'Cannabis produces psychoactive effects when consumed. Cannabis sativa has lower levels of THC to CBD.',
    addictionLevel: 1,
    special: false,
    power: 1,
    unlockPoints: 0,
    worksOnMethod: ['eat', 'smoke'],

    /* Substance Properties */
    delirant: false,
    dmt: false,
    dissociative: false,

    /* Stats */
    stats: {
        stimulant: false,
        sedative: true,
        hallucinogic: true,
        delirant: false,
        dissociative: false,
        depressant: false,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.LIGHT,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.NONE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

    /* Drunk */
    drunkEffects = {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.THRESHOLD,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(150%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(5) contrast(150%)',
            5: 'saturate(6) contrast(150%)',
        },
        to: {
            1: 'saturate(1) contrast(150%)',
            2: 'saturate(1) contrast(150%)',
            3: 'saturate(1) contrast(150%)',
            4: 'saturate(1) contrast(150%)',
            5: 'saturate(1) contrast(150%)',
        }
    },
});
