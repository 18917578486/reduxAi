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
        let {imgData, curtPhoto, chooseImage, buttonImage} = this.props;

        console.log(chooseImage)
        console.log(curtPhoto)

        return (
            <Container textAlign="center" className={S.container}>
                <Button basic icon="chevron left" size="massive" className={S.button} onClick={e => {buttonImage(0)}}/>
                <List horizontal className={S.listWrap}>
                    {
                        imgData.map(photo => (
                            <Img 
                                {...{
                                    key: photo.id,
                                    photo: photo,
                                    isActive: curtPhoto.id === photo.id,
                                    onClick: () => {chooseImage(photo)}
                                }}
                            />
                        ))  
                    }
                </List>
                <Button basic icon="chevron right" size="massive" className={S.button} onClick={e => {buttonImage(1)}}/>
            </Container>
        )
    }
}

export default connect(
    state => {
        let {photos: {imgData, curtPhoto}} = state;
        return {
            imgData,
            curtPhoto
        }
    },
    dispatch => bindActionCreators({...actions}, dispatch)
)(PhotoGallery)