import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Учись бесплано',
    Svg: require('@site/static/img/learn-svgrepo-com.svg').default,
    description: (
      <>
        Все обучающие материалы бесплатны и доступны в полном объеме
      </>
    ),
  },
  {
    title: 'Сила сообщества',
    Svg: require('@site/static/img/community-svgrepo-com.svg').default,
    description: (
      <>
        Заходи в наше сообщество в Telegram, чтобы задать вопрос или пообщаться.
      </>
    ),
  },
  {
    title: 'Добавляй и редактируй',
    Svg: require('@site/static/img/add-card-svgrepo-com.svg').default,
    description: (
      <>
        Есть что добавить или нашел неточность? Создавай PullRequest на GitHub.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
