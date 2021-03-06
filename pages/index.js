import Head from 'next/head'
import { useState } from 'react';
import styles from '../assets/styles/Home.module.css'
import axios from 'axios';

import Team from '../src/components/Team'
import PageHeader from '../src/components/PageHeader'
import PageFooter from '../src/components/PageFooter';

import Global from '../assets/Global.js'

export default function Home() {

  const laLiga = Global.laLiga;
  const premierLeague = Global.premierLeague;

  const [teams, setTeams] = useState([]);

  const readTeams = (event) => {
    console.debug('Downliading teams');
    var league = '';
    if(event.target.name === 'laLiga'){
      league = laLiga;
    } else if (event.target.name === 'premierLeague'){
      league = premierLeague;
    }
    axios.get(league)
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
        <PageHeader title={'Teams'} />
        <div className="columns pb-6">
          <div className="column is-half is-offset-one-quarter">
            <button className="button is-primary is-rounded mr-2" name="laLiga" onClick={readTeams}>
              La Liga
            </button>
            <button className="button is-danger is-rounded" name="premierLeague" onClick={readTeams}>
              Premier League
            </button>
          </div>
        </div>
      </main>
      <div className="container">
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
