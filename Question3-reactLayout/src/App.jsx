import styles from './index.module.scss'

function App() {
  return (
    <div className={styles.content}>
      <header className={`${styles.header} ${styles.flex_justify_content}`}>
        <h1>Header</h1>
      </header>
      <section className={styles.top}>
        <div className={styles.hero_side_column}>
          <div className={`${styles.hero} ${styles.flex_justify_content}`}>
            <h1>Hero</h1>
          </div>
          <div className={`${styles.sidebar} ${styles.flex_justify_content}`}>
            <h1>Sidebar</h1>
          </div>
        </div>
        <div className={styles.content_column}>
          <div className={`${styles.main} ${styles.flex_justify_content}`}>
            <h1>Main Content</h1>
          </div>
          <div className={`${styles.extra} ${styles.flex_justify_content}`}>
            <h1>Extra Content</h1>
          </div>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={`${styles.images} ${styles.flex_justify_content}`}>
          <h1>Related Images</h1>
        </div>
        <div className={`${styles.posts} ${styles.flex_justify_content}`}>
          <h1>Related Posts</h1>
        </div>
      </section>
      <footer className={`${styles.footer} ${styles.flex_justify_content}`}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
