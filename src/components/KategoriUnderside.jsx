// RK
export default function KategoriUnderside({ headingText, katText, antalText }) {
  return (
    <div>
      <div className="katHeading">
        <h1>{headingText}</h1>
        <hr />
        <p>{katText}</p>

        <div className="katSort">
          <p>{antalText}</p>
          {/* Her skal sorteringsknappen være */}
        </div>
      </div>
    </div>
  );
}
