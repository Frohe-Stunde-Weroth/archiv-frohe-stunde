import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Internationale Wettbewerbe',
    img: 'img/frohe_stunde_international.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Wir waren Teilnehmer an mehreren internationalen Chorwettbewerben in Tschechien, Spanien, Italien, Österreich und Deutschland.
      </>
    ),
  },
  {
    title: 'Eigene Konzerte',
    img: 'img/frohe_stunde_konzerte.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unter dem Motto "Die FROHE STUNDE lädt ein" veranstalten wir alle 2 Jahre ein eigenes Konzert mit namhaften Gästen im Bürgerhaus Weroth.
      </>
    ),
  },
  {
    title: 'Chronik',
    img: 'img/frohe_stunde_chronik.jpg',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Auch die Vergangenheit ist uns wichtig. Daher pflegen wir ein umfangreiches Archiv und haben eine digitale Chronik aufgebaut, um das vergangene nicht zu vergessen.
      </>
    ),
  },
];

function Feature({title, img, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt="Italian Trulli" style={{'border-radius': '16px', 'margin-top': '24px', 'margin-bottom': '24px', 'box-shadow': '0 0 12px'}}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
