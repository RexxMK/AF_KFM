import BogkortHent from "../components/BogkortHent";
import KategoriUnderside from "../components/KategoriUnderside";
import VenstreBokse from "../components/VenstreBokse";
import Bogkort from "../components/bogkort";

export default function MustRead() {
  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <VenstreBokse />
          <div className="katUnderside">
            <KategoriUnderside
              headingText={"Must Read"}
              katText={"Månedens Must Read hos KFM"}
              antalText={"Viser 18 produkter"}
            />
            <BogkortHent />
          </div>
        </div>
      </div>
    </>
  );
}
