import BigTitle from "@components/Archi/BigTitle";
import diversity from "@assets/diversity.jpg";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <BigTitle title="LE MONDE ANIMAL COMME VOUS NE L'AVEZ JAMAIS VU !" />
      <div>
        <img src={diversity} alt="nombreux Animaux" />
        <p>
          L'instinct est décrit comme une “tendance innée et puissante, commune
          à tous les êtres vivants ou à tous les individus d'une même espèce”.
          L'instinct conduit à agir rapidement, sans laisser place au choix ou à
          la réflexion.
          <br />
          Sur ce site, vous pourrez découvrir de merveilleux animaux, remplir
          votre propre to-do list et en apprendre davantages sur le monde
          animal.
        </p>
      </div>
    </SHome>
  );
}
