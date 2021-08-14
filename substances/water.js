registerSubstance('Water', {

    /* General */
    img: 'water.png',
    info: 'Water is vital for all known forms of life, even though it provides no calories or organic nutrients. It can help you to control you addiction.',
    addictionLevel: 0,
    special: false,
    power: 0,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['drink'],

    /* Substance Properties */
    delirant: false,
    dmt: false,
    dissociative: false,

    /* Stats */
    stats: {
        stimulant: false,
        sedative: false,
        hallucinogic: false,
        delirant: false,
        dissociative: false,
        depressant: false,
    },

    /* Effect Properties */
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.NONE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

    /* Drunk */
    drunkEffects = {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* CSS Effects */
    cssEffects: {
        from: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },
});