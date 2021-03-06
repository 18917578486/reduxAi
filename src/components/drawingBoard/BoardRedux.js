const DRAW_IMAGE = 'DRAW_IMAGE/label-case/Board';
const ADD_TEMP_LAYER = 'ADD_TEMP_LAYER/label-case/Board';
const ADD_SPOT = 'ADD_SPOT/label-case/Board';

let initState = {
    drewImage: null,
    layersData: {

    }
}

export const drawImage = (photo) => (dispatch, getState) => {
    let imgObj = new window.Image();

    imgObj.onload = ()=>{
        dispatch({
            type: DRAW_IMAGE,
            drewImage: imgObj
        });
    }

    imgObj.src = url;
};

export const addTempLayer = () => (dispatch, getState) => {
    dispatch({
        type: ADD_TEMP_LAYER,
        curtPhotoID: getState().photos.curtPhoto.id
    });
}

export const addSpot = (x, y) => (dispatch, getState) => {

    let curtPhotoID = getState().photos.curtPhoto.id;
    let {curtLayerID} = getState().board.layersData[curtPhotoID];

    dispatch({
        type: ADD_SPOT,
        curtPhotoID,
        pointX: x,
        pointY: y,
        curtLayerID
    });

}

export default function board (state=initState, action) {
    let {
        type,
        drewImage,
        curtPhotoID,
        curtLayerID,
        pointX,
        pointY,
    } = action;

    let {layersData} = state;

    let layerGroup = layersData[curtPhotoID];

    if(!layerGroup) layerGroup = {};

    let {layers} = layerGroup;

    if(!layers) layers = [];

    switch (type) {
        case DRAW_IMAGE:
            return {...state, drewImage}
            break;
        case ADD_TEMP_LAYER:

            let tempLayerID = Math.random();

            return {...state, layersData: {
                ...layersData,
                [curtPhotoID]: {
                    layers: [...layers, {
                        id: tempLayerID,
                        points: [],
                        lineColor: Konva.Util.getRandomColor()
                    }],
                    curtLayerID: tempLayerID
                }
            }}
            break;
        case ADD_SPOT:

            layers = layers.map(layer=>{

                if( layer.id === curtLayerID ){
                    layer.points = [...layer.points, {x: pointX, y: pointY}];
                }

                return layer;

            });

            return {...state, layersData: {
                ...layersData,
                [curtPhotoID]: {...layerGroup, layers  }
            }}
            break;
        default:
            return state;
    }
}