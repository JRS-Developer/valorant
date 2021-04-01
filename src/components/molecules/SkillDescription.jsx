const SkillDescription = ({category, skill, descrip}) => (
    <div className="skill-description">
        <h4 className="skill-title">{category}</h4>
        <span className="skill-text">
            <strong>{skill}</strong>
        </span>
        <p className="skill-p">
            {descrip}
        </p>
    </div>
);

export default SkillDescription;
