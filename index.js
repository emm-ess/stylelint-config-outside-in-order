const positioning = require('./groups/1_positioning-layout')
const boxModel = require('./groups/2_boxModel')
const visual = require('./groups/3_visual')
const typography = require('./groups/4_typography')
const animation = require('./groups/5_animation')
const misc = require('./groups/6_misc')

const outsideInOrder = [
    ...positioning,
    ...boxModel,
    ...visual,
    ...typography,
    ...animation,
    ...misc,
]

module.exports = {
    plugins: 'stylelint-order',
    rules: {
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'order/properties-order': outsideInOrder,
        'order/properties-alphabetical-order': null,
    },
}
