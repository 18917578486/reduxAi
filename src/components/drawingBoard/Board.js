

import S from './style.scss';
import {Stage, Layer, Rect, Image} from 'react-konva';

export default class Board extends Component{
    constructor(props){
        super(props);
        this.show = false;
    }

    componentDidMount () {
        // let image = new window.Image();
        // image.src = require('img/1.jpg');

        // image.onload = () => {
        //     console.log(123)
        //     this.setState({img: image})
        // }

        // console.log(image)
        // console.log(this.state)
    }

    render(){
        console.log(this.show)
        return (
            <div className={S.fl} >
                <Stage
                    width={760}
                    height={500}
                >
                    <Layer>
                        <Rect
                            {...{
                                width: 100,
                                height: 50,
                                x: 50,
                                y: 50,
                                fill: 'red'
                            }}
                        />
                    </Layer>

                </Stage>
            </div>
        );
    }
}
