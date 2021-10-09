import Head from 'next/head'
import { useState } from 'react';
import styles from '../assets/styles/Home.module.css'
import axios from 'axios';

import Team from '../src/components/Team'
import PageHeader from '../src/components/PageHeader'
import PageFooter from '../src/components/PageFooter';

export default function Home() {

  const [teams, setTeams] = useState([]);
  const readTeams = () => {
    console.debug('Descargando equipos');
    axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga')
      .then(response => {
        if (response.status === 200) {
          const teamsResp = response.data.teams.map(team => {
            return {
              id: team.id,
              name: team.strTeam,
              logo: team.strTeamBadge,
              stadium: team.strStadium
            }
          });
          setTeams(teamsResp);
        }
      })
      .catch(error => {

      })
  }
  return (
    <div>
      <Head>
        <title>Sports Data</title>
        <meta name="description" content="Sports Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <PageHeader title={'New Search'} />

        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            Here goes my app.

            <button className="button is-primary" onClick={readTeams}>
              La Liga
            </button>

            <button className="button is-small is-danger is-rounded">
              Mi Boton.
            </button>
          </div>
        </div>

      </main>

      <div className="container">
        <h2>Teams:</h2>
        <div className="columns is-multiline">
          {teams.map((team, index) => <Team team={team} key={`team-${index}`} />)}
        </div>
      </div>

      <footer className={styles.footer}>
        <PageFooter />
      </footer>
    </div>
  )
}
