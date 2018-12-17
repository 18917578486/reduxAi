import {Container, Button, List} from 'semantic-ui-react';
import S from './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Img from './Img';

import * as actions from './PhotoGalleryRedux'

class PhotoGallery extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.loadImage();
    }

    render () {
        let {imgData} = this.props;

        console.log(imgData)

        return (
            <Container textAlign="center" className={S.container}>
                <Button basic icon="chevron left" size="massive" className={S.button} />
                <List horizontal className={S.listWrap}>
                    {
                        imgData.map(photo => (
                            <Img 
                                {...{
                                    key: photo.id,
                                    photo: photo
                                }}
                            />
                        ))  
                    }
                </List>
                <Button basic icon="chevron right" size="massive" className={S.button} />
            </Container>
        )
    }
}

export default connect(
    state => {
        let {photos: {imgData}} = state;
        return {
            imgData
        }
    },
    dispatch => bindActionCreators({...actions}, dispatch)
)(PhotoGallery)