import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <img src="/image/404bg.png" alt="404 Not Found" style={styles.image} />
      <h1 style={styles.text}>페이지를 찾을 수 없습니다.</h1>
      <Link to="/" style={styles.link}>메인 페이지로 돌아가기</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  image: {
    maxWidth: '80%',
    height: 'auto',
  },
  text: {
    fontSize: '24px',
    margin: '20px 0',
  },
  link: {
    fontSize: '18px',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default NotFound;