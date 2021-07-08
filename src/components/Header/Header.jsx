import style from './Header.module.css';

const Header = props => {

  return (
    <div className={style.Header}>
      <h1>{props.title || '[No Text]'}</h1>
    </div>
  );
}

const yourMom = {
  name: 'Karen',
  age: 43,
  annoyance: 100
};

export default Header;
export { yourMom };