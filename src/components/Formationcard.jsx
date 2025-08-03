function Formationcard({ title, institution, image }) {
  return (
    <div className="formation-card" aria-label={`${title} at ${institution}`}>
      <img src={image} alt={`${title} certificate`} className="formation-image" />
      <h3 className="formation-title">{title}</h3>
      <p className="formation-institution">{institution}</p>
    </div>
  );
}

export default Formationcard;
