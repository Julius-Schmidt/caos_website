import Navbar from '../components/Navbar'

export default function Impressum() {
  return (
    <>
    
    <section
      id="impressum"
      className="px-[10vw] py-12 bg-white text-gray-800"
    >  
    <Navbar />
      <div className="max-w-3xl mx-auto space-y-8 mt-24" >
        {/* Page title */}
        <h1 className="text-3xl font-semibold">Imprint</h1>

        {/* Address block */}
        <div className="space-y-2">
          <p className="font-bold">
            CAOS Network UG (haftungsbeschränkt)<br />
            Wandletstraße 9<br />
            80805 München
          </p>
          <p>
            <span className="font-semibold">E-Mail:</span>{' '}
            <a
              href="mailto:business@the-caos.club"
              className="text-blue-600 hover:underline"
            >
              business@the-caos.club
            </a>
            <br />
            <span className="font-semibold">Telefon:</span> +49 163 6614307
            <br />
            <span className="font-semibold">Website:</span>{' '}
            <a
              href="https://www.the-caos.club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.the-caos.club
            </a>
          </p>
        </div>

        {/* Management */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Vertreten durch ihre Geschäftsführer</h2>
          <p>Julius Schmidt, Marius Michel</p>
        </div>

        {/* Editorial responsibility */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Verantwortlich für redaktionelle Inhalte</h2>
          <p>Julius Schmidt</p>
        </div>

        {/* DSA contact point */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Zentrale Kontaktstelle gem. Digital Services Act / Single point of contact pursuant to Digital Services Act
          </h2>
          <p>
            CAOS UG (haftungsbeschränkt)<br />
            <span className="font-semibold">E-Mail:</span>{' '}
            <a
              href="mailto:business@the-caos.club"
              className="text-blue-600 hover:underline"
            >
              business@the-caos.club
            </a>
            <br />
            Sprachen/Languages: Deutsch, English
          </p>
        </div>

        {/* Registry info */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Registernummer</h2>
          <p>HRB 301075</p>

          <h2 className="text-xl font-semibold">Registergericht</h2>
          <p>Handelsregister B des Amtsgerichts München</p>
        </div>

        {/* Dispute resolution */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Verbraucher-Streitschlichtung</h2>
          <p>
            Die EU-Kommission hat eine Internetplattform zur Online-Beilegung
            von Streitigkeiten betreffend vertraglicher Verpflichtungen aus
            Online-Verträgen geschaffen (OS-Plattform). Sie können die
            OS-Plattform unter dem folgenden Link erreichen:{' '}
            <a
              href="http://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit und nicht verpflichtet an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        {/* Liability for links */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p>
            Externe Links unserer Internetseite führen zu Inhalten fremder
            Anbieter. Für diese Inhalte ist allein der jeweilige Anbieter
            verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden
            diese Links umgehend entfernt.
          </p>
        </div>

        {/* Copyright */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Urheberrechtshinweis</h2>
          <p>
            Die durch uns erstellten Inhalte und Werke auf dieser Website
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser
            Seite nicht von uns selbst erstellt wurden, werden Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, wird um einen
            entsprechenden Hinweis gebeten. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>

        {/* Active users info */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Informationen zu aktiven monatlichen Nutzern
          </h2>
          <p>
            Wir sind verpflichtet gemäß Artikel 24 Abs. 2 und Abs. 3 Digital
            Services Act mindestens alle sechs Monate die durchschnittliche
            monatliche Zahl der aktiven Nutzer unserer Plattform in der
            Europäischen Union zu ermitteln. Dies dient dazu, zu bestimmen, ob
            wir eine „sehr große Online-Plattform“ (Very Large Online Plattform
            – VLOP) sind. Wir haben die durchschnittlichen monatlichen aktiven
            Nutzer unserer Online-Plattform in der EU gemäß des
            Erwägungsgrundes 77 des Digital Services Acts berechnet und hierbei
            festgestellt, dass die durchschnittliche Anzahl der monatlich aktiven
            Nutzer unserer Plattform in der EU unter der VLOP-Schwelle lag.
          </p>
        </div>
      </div>
    </section>
    <hr className="w-[80%] mx-auto" />

    </>
  )
}
