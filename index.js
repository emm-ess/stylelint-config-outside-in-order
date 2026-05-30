import positioning from './groups/1-positioning-layout.js'
import boxModel from './groups/2-box-model.js'
import visual from './groups/3-visual.js'
import typography from './groups/4-typography.js'
import animation from './groups/5-animation.js'
import misc from './groups/6-misc.js'

const outsideInOrder = [
    ...positioning,
    ...boxModel,
    ...visual,
    ...typography,
    ...animation,
    ...misc,
]

export default {
    plugins: 'stylelint-order',
    rules: {
        'property-no-unknown': [true, {
            ignoreProperties: ['composes'],
        }],
        'order/properties-order': outsideInOrder,
        'order/properties-alphabetical-order': null,
    },
}
