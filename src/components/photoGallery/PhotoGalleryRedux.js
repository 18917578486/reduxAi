
let initState = {
    imgData: [],
    curtPhoto: {
        id: '',
        src: ''
    }
}

let imgData = [
    {id: 1, src: require('img/1.jpg')},
    {id: 2, src: require('img/2.jpg')},
    {id: 3, src: require('img/3.jpg')},
    {id: 4, src: require('img/4.jpg')},
    {id: 5, src: require('img/5.jpg')}
]

const LOAD_ACTION = 'label-case/PhotoGallery/LOAD_IMAGE';

export const loadImage = () => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: LOAD_ACTION,
            imgData
        })
    }, 2000) 
}

export default function photos (state=initState, action) {
    let {type, imgData} = action;

    switch (type) {
        case LOAD_ACTION:
            return {...state, imgData};
            break;
        default:
            return state;
    }
}