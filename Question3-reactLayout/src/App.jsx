import styles from './index.module.scss'

function App() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <section className={styles.top}>
        <div className={styles.hero_side_column}>
          <div className={styles.hero}>
            <h1>Hero</h1>
          </div>
          <div className={styles.sidebar}>
            <h1>Sidebar</h1>
          </div>
        </div>
        <div className={styles.content_column}>
          <div className={styles.main}>
            <h1>Main Content</h1>
          </div>
          <div className={styles.extra}>
            <h1>Extra Content</h1>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.images}>
          <h1>Related Images</h1>
        </div>
        <div className={styles.posts}>
          <h1>Related Posts</h1>
        </div>
      </section>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
