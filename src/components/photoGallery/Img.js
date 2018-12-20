import {Image, List} from 'semantic-ui-react';
import S from './style.scss';

export default function Img ({photo, isActive, onClick}) {
    console.log(S)
    return (
        <List.Item className={`${S.imgWrap} ${isActive ? S.active : ''}`} onClick={onClick}>
            <Image src={photo.src} size="tiny" className={`${S.img}`} />
        </List.Item>
    )
}
