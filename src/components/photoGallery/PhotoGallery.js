import {Container, Button, List} from 'semantic-ui-react';
import S from './style.scss';

export default class PhotoGallery extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Container textAlign="center" className={S.container}>
                <Button basic icon="chevron left" size="massive" className={S.button} />
                <List horizontal className={S.listWrap}>

                </List>
                <Button basic icon="chevron right" size="massive" className={S.button} />
            </Container>
        )
    }
}