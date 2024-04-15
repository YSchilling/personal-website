<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

let contact = `<c pynff="zo-4">
                Lbevpx Fpuvyyvat<oe>
                Xyrvar Tnffr 20<oe>
                61130 Avqqrenh<oe>
            </c>
            <c pynff="zo-8">
                <o>Xbagnxg:</o><oe>
                Gryrsba: <n uers="gry:+491725872786" pynff="haqreyvar ubire:ab-haqreyvar">+49 172 5872786</n><oe>
                R-Znvy: <n uers='znvygb:pbagnpg@lbevpxfpuvyyvat.pbz' pynff="haqreyvar ubire:ab-haqreyvar">pbagnpg@lbevpxfpuvyyvat.pbz</n>
            </c>`;

const isHidingContacts = ref(true);
</script>

<script>
function decode(string) {
  //rotki13 encoded letters
  return string.replace(/[a-zA-Z]/g, function (char) {
    return String.fromCharCode(
      (char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13)
        ? char
        : char - 26
    );
  });
}
</script>

<template>
  <section id="mainsection" class="grid grid-cols-12">
    <Header
      class="col-start-9 col-span-3 lg:col-start-9 lg:col-span-2 justify-self-end my-24 lg:mt-24"
    />
    <h1 class="text-4xl md:text-5xl xl:text-6xl col-start-3 col-span-8 mb-8">
      <b>Impressum</b>
    </h1>
    <div class="col-start-3 col-span-8">
      <p class="mb-4">Angaben gemäß § 5 TMG</p>
      <button
        class="mb-4 text-highlight underline hover:no-underline"
        v-if="isHidingContacts"
        @click="isHidingContacts = false"
      >
        Show Contacts
      </button>
      <div v-else v-html="decode(contact)"></div>
      <h2 class="text-xl mb-4"><b>Haftungsausschluss: </b></h2>
      <p class="mb-4">
        <b class="mb-2">Haftung für Inhalte</b><br />
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <p class="mb-4">
        <b class="mb-2">Haftung für Links</b><br />
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <p class="mb-4">
        <b class="mb-2">Urheberrecht</b><br />
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
      <p class="mb-8">
        <b class="mb-2">Datenschutz</b><br />
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
        der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und
        Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </p>
      <p class="mb-8">
        Website Impressum erstellt durch
        <a href="https://www.impressum-generator.de" class="underlin"
          >impressum-generator.de</a
        >
        von der
        <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow"
          >Kanzlei Hasselbach</a
        >
      </p>
    </div>
  </section>
  <Footer />
</template>
