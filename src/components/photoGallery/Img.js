import {Image, List} from 'semantic-ui-react';
import S from './style.scss';

export default function Img ({photo}) {
    return (
        <List.Item className={S.imgWrap}>
            <Image src={photo.src} size="tiny" className={S.img} />
        </List.Item>
    )
}
