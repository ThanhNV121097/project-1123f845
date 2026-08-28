"use client";

import { FormEvent, useState } from 'react';
import { helloWorldMock } from '../lib/mock/build-hello-world-page';
import styles from './HelloWorldHero.module.css';

export default function HelloWorldHero() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState(helloWorldMock.defaultGreeting);
  const hint = helloWorldMock.hint;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    setGreeting(trimmed ? `Hello, ${trimmed}!` : helloWorldMock.defaultGreeting);
  };

  return (
    <main className={styles.shell}>
      <section className={styles.hero} aria-labelledby="greeting-title">
        <div className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          <span>Simple greeting page</span>
        </div>
        <h1 id="greeting-title" className={styles.title}>{greeting}</h1>
        <p className={styles.subline}>{helloWorldMock.subline}</p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.label} htmlFor="name">{helloWorldMock.label}</label>
          <input
            id="name"
            name="name"
            className={styles.input}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada Lovelace"
            autoComplete="name"
          />
          <button className={styles.button} type="submit">{helloWorldMock.buttonLabel}</button>
          <p className={styles.hint}>{hint}</p>
        </form>
      </section>
    </main>
  );
}
