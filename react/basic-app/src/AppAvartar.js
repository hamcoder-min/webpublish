import './css/Avatar.css';
import { AvatarImage } from './component/AvatarImage.jsx'
import { AvatarImageList } from './component/AvatarImageList.jsx';
import { Avatar } from './component/Avatar.jsx';

export default function App() {
  const list = [
    {"img": "/images/people1.webp", "style": "avatar-img"},
    {"img": "/images/people2.webp", "style": "avatar-img-circle"},
    {"img": "/images/people3.webp", "style": "avatar-img"}
  ];

  return (
    <>
      <Avatar img="/images/people3.webp" name="Ann"/>
      <Avatar img="/images/people2.webp" name="John"/>
      <hr/>
      <AvatarImage img="/images/people1.webp" style="avatar-img-circle"/>
      <AvatarImage img="/images/people2.webp" style="avatar-img"/>
      <AvatarImage img="/images/people3.webp" style="avatar-img-circle"/>
      <hr/>
      <AvatarImageList imgList={list} />
    </>
  );
}