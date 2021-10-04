export default function Team(props) {
    const { team, key } = props;
    return (
        <div className="column is-one-quarter-desktop is-half-tablet" key={key}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={team.logo} alt={team.name} width={100} height={100} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{team.name}</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div className="content">
                        Stadium: {team.stadium}
                        <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                </div>
            </div>
        </div>
    );

}