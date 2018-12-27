
import {Stage, Layer, Rect, Image} from 'react-konva';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {getDrewImageBodyInfo} from 'util/KonvaUtil';

import * as actions from './BoardRedux';

import S from './style.scss';

import PaintingLayer from './Layer';

class Board extends Component{
    constructor(props){
        super(props);

        this.stageWidth = 760;
        this.stageHeight = 500;

    }

    getPointerPosition(){
        return this.refs.stage.getStage().getPointerPosition();
    }

    componentWillReceiveProps(nProp){
    }

    componentDidMount(){

    }

    render(){

        let {stageWidth, stageHeight} = this;

        let {drewImage, addSpot, layersData, curtPhotoID} = this.props;

        let layerGroup = layersData[curtPhotoID];

        if(!layerGroup) return null;

        let {layers} = layerGroup;

        layers = layers.map(layer=>{

            let {id, points, lineColor} = layer;

            return (
                <PaintingLayer
                    {...{
                        key: id,
                        layerID: id,
                        points,
                        lineColor
                    }}
                />
            )
        });

        let imageBodyInfo = null;

        if( drewImage ) {
            let {width: imgWidth, height: imgHeight} = drewImage;

            imageBodyInfo = getDrewImageBodyInfo(imgWidth, imgHeight, stageWidth, stageHeight);

        }

        return (
            <div className={S.fl} >
                <Stage
                    width={stageWidth}
                    height={stageHeight}

                    ref="stage"

                    onMouseDown={ev=>{
                        let {x,y} = this.getPointerPosition();

                        addSpot(x, y);
                    }}
                >
                    <Layer>
                        {
                            drewImage ? (
                                <Image
                                    {...{
                                        width: imageBodyInfo.w,
                                        height: imageBodyInfo.h,
                                        x: imageBodyInfo.x,
                                        y: imageBodyInfo.y,
                                        image: drewImage
                                    }}
                                />
                            ) : null
                        }

                    </Layer>
                    {layers}
                </Stage>
            </div>
        );
    }
}

export default connect(
    state => {
        let {drewImage, layersData} = state.board;
        let {curtPhoto:{id}} = state.photos;
        return {
            drewImage,
            layersData,
            curtPhotoID: id
        }
    },
    dispatch => (bindActionCreators({...actions}, dispatch))
)(Board);
