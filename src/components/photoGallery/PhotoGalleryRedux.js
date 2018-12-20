
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
const CHOOSE_ACTION = 'label-case/PhotoGallery/CHOOSE_ACTION';


export const loadImage = () => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type: LOAD_ACTION,
            imgData
        })

        let {photos: {curtPhoto}} = getState();

        if (!curtPhoto.id) {
            dispatch({type: CHOOSE_ACTION, photo: imgData[0] })
        }
    }, 1000) 
}

export const chooseImage = (photo) => (dispatch, getState) => {
    dispatch({
        type: CHOOSE_ACTION,
        photo
    })
}

export const buttonImage = (type) => (dispatch, getState) => {
    let {photos: {imgData, curtPhoto}} = getState();
    let index = imgData.findIndex(item => item.id === curtPhoto.id);

    switch (type) {
        case 0: 
            if (index === 0) {
                return
            }
            dispatch({
                type: CHOOSE_ACTION,
                photo: imgData[index - 1]
            })
            break;
        case 1:
            if (index === imgData.length - 1) {
                return
            }
            dispatch({
                type: CHOOSE_ACTION,
                photo: imgData[index + 1]
            })
            break;
    }
}



export default function photos (state=initState, action) {
    let {type, imgData, photo} = action;

    switch (type) {
        case LOAD_ACTION:
            return {...state, imgData};
            break;
        case CHOOSE_ACTION:
            return {...state, curtPhoto: Object.assign({}, photo)};
            break;
        default:
            return state;
    }
}