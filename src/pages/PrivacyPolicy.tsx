import Navbar from '../components/Navbar'

export default function PrivacyPolicy() {
  return (
    <>         
    <section
      id="privacy"
      className="px-[10vw] py-12 bg-white text-gray-800"
    >
     <Navbar />
      <div className="max-w-3xl mx-auto space-y-8 mt-24">
        {/* Page title */}
        <h1 className="text-3xl font-semibold">Datenschutzerklärung</h1>

        {/* 1. Allgemeines */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1. Allgemeines</h2>

          <h3 className="text-lg font-medium">1.1 Was sind personenbezogene Daten</h3>
          <p>
            Personenbezogene Daten sind Angaben, die die Identität des Nutzers offenlegen oder offenlegen können. Wir halten uns an den Grundsatz der Datenvermeidung. Es wird soweit wie möglich auf die Erhebung von personenbezogenen Daten verzichtet.
          </p>

          <h3 className="text-lg font-medium">1.2 Umgang mit personenbezogenen Daten</h3>
          <p>
            Personenbezogene Daten dienen ausschließlich der Vertragsbegründung, inhaltlichen Ausgestaltung, Durchführung oder Abwicklung des Vertragsverhältnisses (Art. 6 I S. 1 b DSGVO).
          </p>
          <p>
            Darüber hinaus werden personenbezogene Daten nur verarbeitet, soweit wir hierzu Ihre Einwilligung erhalten haben (Art. 6 I S. 1 a DSGVO) bzw. es sich um Daten handelt, deren Verarbeitung für unsere berechtigten Interessen erforderlich ist und soweit die Abwägung ergibt, dass keine überwiegenden Interessen, Grundrechte oder Grundfreiheiten Ihrerseits entgegenstehen (Art. 6 I S. 1 f DSGVO).
          </p>
          <p>
            Wir können zur Verarbeitung Ihrer personenbezogenen Daten Auftragsverarbeiter verwenden, mit welchen wir soweit erforderlich einen Vertrag zur Auftragsverarbeitung geschlossen haben, werden die personenbezogenen Daten darüber hinaus aber grundsätzlich nicht an Dritte weitergeben.
          </p>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt in der EU sowie in den von der EU als sicher bzw. angemessen eingestuften Ländern. Sollte die Verarbeitung von personenbezogenen Daten in den USA erfolgen, wird darauf geachtet, dass die von uns genutzten Dienste unter dem „Data Privacy Framework“ zertifiziert sind.
          </p>
        </div>

        {/* 1.3 Nutzungsdaten */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1.3 Nutzungsdaten</h2>
          <p>
            Wenn Sie unsere mobile Anwendung installieren, werden bestimmte notwendige Daten an den von Ihnen genutzten Store gesendet. Dazu gehören Ihr Benutzername, der Zeitpunkt des Herunterladens, Ihre Zahlungsdaten und die eindeutige Kennung Ihres Gerätes. Sie haben zudem die Option, unsere App in dem jeweiligen Store zu bewerten. Wir haben keinen Einfluss auf diese Datensammlung und -verarbeitung und übernehmen dafür keine Verantwortung. Weitere Informationen dazu finden Sie in der Datenschutzrichtlinie des jeweils genutzten Stores.
          </p>
          <p>
            Zudem werden bei der Nutzung der App allgemeine technische Informationen erhoben. Dies sind die verwendete IP-Adresse, Uhrzeit sowie die Dauer der Nutzung und der Gerätetyp. Diese Nutzungsdaten werden technisch bedingt in einem Logfile registriert und können zum Zwecke der Statistikauswertung benutzt und gespeichert werden. Eine Verknüpfung dieser Nutzungsdaten mit Ihren weiteren personenbezogenen Daten findet nicht statt.
          </p>
        </div>

        {/* 1.4 Zugriffsberechtigungen */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1.4 Zugriffsberechtigungen</h2>
          <p>Die App erfordert darüber hinaus folgende Berechtigungen:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Internetzugriff:</strong> Dieser wird benötigt, um Ihre Eingaben auf unseren Servern zu speichern.</li>
            <li><strong>Kamerazugriff:</strong> Dieser wird benötigt, damit Sie ein Profilfoto von sich aufnehmen und speichern können.</li>
            <li><strong>Push-Notifikationen:</strong> Diese werden benötigt, um Ihnen zielgerichtete Push-Nachrichten mit weiteren Informationen senden zu können.</li>
            <li><strong>Gerätespeicher:</strong> Dieser wird benötigt, wenn z.B. die Option des Hochladens Fotos in Anspruch genommen wird.</li>
            <li><strong>E-Mail-Benachrichtigungen:</strong> Dieser wird benötigt, um Ihnen zielgerichtete E-Mails mit weiteren Informationen senden zu können.</li>
            <li><strong>SMS-Benachrichtigungen:</strong> Ermöglichen den Versand relevanter Informationen per SMS an die von Ihnen angegebene Mobilfunknummer.</li>
          </ul>
          <p>
            Diese Berechtigungen werden in Ihrem mobilen Endgerät explizit abgefragt (Art. 6 I S. 1 a DSGVO). Eine erteilte Berechtigung kann in den Einstellungen des Gerätes i.d.R. jederzeit rückgängig gemacht werden. Wenn Sie Berechtigungen nicht erteilen, schränkt dies potenziell die Nutzungsmöglichkeiten der App ein. In der Regel ist die App aber dennoch nutzbar.
          </p>
          <p>
            Zusätzlich zu den zuvor genannten Daten werden bei Ihrer Nutzung unserer mobilen App technische Hilfsmittel für verschiedene Funktionen verwendet, die auf Ihrem Endgerät gespeichert werden können. Welche dies sind, teilen wir Ihnen vor der ersten Nutzung der App mittels unseres Consent Management Tools mit.
          </p>
        </div>

        {/* 1.5 Registrierungsdaten */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1.5 Registrierungsdaten</h2>
          <p>
            Für die umfassende Nutzung der Funktionen unserer Webseite ist eine Registrierung erforderlich. Die Registrierungsdaten werden durch Ihre entsprechenden Eingaben erhoben und für den konkret angegebenen Zweck gemäß Ihrer Einwilligung verwendet (Art. 6 I S. 1 a DSGVO).
          </p>
        </div>

        {/* 1.6 Dauer der Speicherung */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">1.6 Dauer der Speicherung</h2>
          <p>
            Wir speichern Ihre personenbezogenen Daten nach der Beendigung des Zwecks, für welchen die Daten erhoben wurden, nur solange, wie dies auf Grund der gesetzlichen (insbesondere steuerrechtlichen) Vorschriften erforderlich ist.
          </p>
          <p>Es gelten zum Beispiel die folgenden Aufbewahrungsfristen:</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border px-2 py-1">Art der Daten</th>
                <th className="border px-2 py-1">Aufbewahrungsfrist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Steuerliche Daten</td>
                <td className="border px-2 py-1">10 Jahre</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">
                  Handels- oder Geschäftsbriefe (auch E-Mails und Faxe) und sonstige Unterlagen, soweit diese für die Besteuerung von Bedeutung sind.
                </td>
                <td className="border px-2 py-1">
                  6 Jahre mit dem Schluss des Kalenderjahrs, in dem die letzte Eintragung in das Buch gemacht, das Inventar, die Eröffnungsbilanz, der Jahresabschluss oder der Lagebericht aufgestellt, der Handels- oder Geschäftsbrief empfangen oder abgesandt worden oder der Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen worden ist oder die sonstigen Unterlagen entstanden sind.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Transaktions- und Registrierungsdaten</td>
                <td className="border px-2 py-1">
                  10 Jahre mit dem Schluss des Kalenderjahres, in dem die letzte Eintragung in das Buch gemacht, das Inventar, die Eröffnungsbilanz, der Jahresabschluss oder der Lagebericht aufgestellt, der Handels- oder Geschäftsbrief empfangen oder abgesandt worden oder der Buchungsbeleg entstanden ist, ferner die Aufzeichnung vorgenommen worden ist oder die sonstigen Unterlagen entstanden sind.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Datenschutzrechtliche Einwilligungen zur Datenverarbeitung</td>
                <td className="border px-2 py-1">
                  Für die Dauer der Möglichkeit der Geltendmachung von Rechten durch den/die Betroffene/n.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">(Elektronische) Korrespondenz, welche keine steuerrechtliche Relevanz besitzt</td>
                <td className="border px-2 py-1">
                  So lange, wie dies zur Aufgabenerfüllung erforderlich ist, es sei denn, die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Nutzungsdaten gem. Ziffer 1.3 dieser Datenschutzerklärung</td>
                <td className="border px-2 py-1">max. 30 Tage</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Ihre Rechte */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">2. Ihre Rechte</h2>

          <h3 className="text-lg font-medium">2.1 Auskunft</h3>
          <p>
            Sie können von uns eine Auskunft darüber verlangen, ob wir personenbezogene Daten von Ihnen verarbeiten und soweit dies der Fall ist haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO genannten weiteren Informationen.
          </p>

          <h3 className="text-lg font-medium">2.2 Recht auf Berichtigung</h3>
          <p>
            Sie haben das Recht auf Berichtigung der Sie betreffenden unrichtigen personenbezogenen Daten und können gemäß Art. 16 DSGVO die Vervollständigung unvollständiger personenbezogener Daten verlangen.
          </p>

          <h3 className="text-lg font-medium">2.3 Recht auf Löschung</h3>
          <p>
            Sie haben das Recht von uns zu verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden. Wir sind verpflichtet diese unverzüglich zu löschen, insbesondere sofern einer der folgenden Gründe zutrifft:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ihre personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
            <li>Sie widerrufen ihre Einwilligung, auf die sich die Verarbeitung Ihrer Daten stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
            <li>Ihre Daten wurden unrechtmäßig verarbeitet.</li>
          </ul>
          <p>
            Das Recht auf Löschung besteht nicht, soweit Ihre personenbezogenen Daten zur Geltendmachung, Ausübung oder Verteidigung unserer Rechtsansprüche erforderlich sind.
          </p>

          <h3 className="text-lg font-medium">2.4 Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht von uns die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, wenn
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sie die Richtigkeit der Daten bestreiten und wir daher die Richtigkeit überprüfen,</li>
            <li>die Verarbeitung unrechtmäßig ist und Sie die Löschung ablehnen und stattdessen die Einschränkung der Nutzung verlangen,</li>
            <li>wir die Daten nicht länger benötigen, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen,</li>
            <li>Sie Widerspruch gegen die Verarbeitung Ihrer Daten eingelegt haben, und noch nicht feststeht, ob unsere berechtigten Gründe gegenüber Ihren Gründen überwiegen.</li>
          </ul>

          <h3 className="text-lg font-medium">2.5 Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln, sofern die Verarbeitung auf einer Einwilligung oder einem Vertrag beruht und die Verarbeitung bei uns mithilfe automatisierter Verfahren erfolgt.
          </p>

          <h3 className="text-lg font-medium">2.6 Widerrufs- und Widerspruchsrecht</h3>
          <p>
            Soweit die Verarbeitung Ihrer personenbezogenen Daten auf einer Einwilligung (Art. 6 I S. 1 a DSGVO) beruht, haben Sie das Recht, diese Einwilligung jederzeit zu widerrufen. Hierdurch wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
          </p>
          <p>
            Soweit die Verarbeitung Ihrer personenbezogenen Daten auf Art. 6 I S. 1 e DSGVO oder Art. 6 I S. 1 f DSGVO beruht, haben Sie gem. Art. 21 DSGVO das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen. Wir verarbeiten Ihre personenbezogenen Daten sodann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>

          <h3 className="text-lg font-medium">2.7 Allgemeines und Beschwerderecht</h3>
          <p>
            Die Ausübung Ihrer vorstehenden Rechte ist für Sie grundsätzlich kostenlos. Sie haben das Recht sich bei Beschwerden direkt an die für uns zuständige Aufsichtsbehörde, den Landesdatenschutzbeauftragen, zu wenden.
          </p>
        </div>

        {/* 3. Datensicherheit */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">3. Datensicherheit</h2>

          <h3 className="text-lg font-medium">3.1 Datensicherheit</h3>
          <p>
            Sämtliche Daten in unserer App werden durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung und Verbreitung gesichert. Wir übernehmen jedoch keine Haftung für die Zerstörung und Beschädigung von Daten.
          </p>

          <h3 className="text-lg font-medium">3.2 Software Development Kits</h3>
          <p>
            Anders als Websites verwenden mobile Apps keine Cookies. Sie benutzen stattdessen Software Development Kits (SDK), wie z. B. Google’s Firebase SDK.
          </p>
          <p>
            SDKs funktionieren wie Cookies und Zählpixel von Drittanbietern, werden aber in der mobilen App-Umgebung eingesetzt, in welcher Cookies und Zählpixel nicht so effektiv funktionieren können. Anstelle von Cookies und Zählpixeln können wir Codeteile (das SDK), die von unseren Online-Partnern (wie z. B. Analyseanbietern) bereitgestellt werden, in unsere mobile Apps einbinden, damit diese Online-Partner die Nutzung und Leistung unserer mobilen Apps und Dienste überwachen und analysieren können.
          </p>
          <p>
            Diese SDKs sammeln sodann Daten, die auf ähnliche Weise wie Cookies kategorisiert werden können, z. B. technisch notwendig, funktionell, Statistik, Marketing.
          </p>
          <p>
            Wir stellen sicher, dass SDKs nur eingesetzt werden, sofern dies für die App technisch erforderlich ist und somit die Abwägung ergibt, dass keine überwiegenden Interessen Ihrerseits entgegenstehen (Art. 6 I S. 1 f DSGVO) bzw. eine ausdrückliche Einwilligung Ihrerseits vorliegt.
          </p>
          <p>
            Nach Ihrer ausdrücklichen Einwilligung verwenden SDKs um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere App zu analysieren. Die Informationen zu Ihrer Verwendung unserer App können wir mit Ihrer Einwilligung an unsere Partner für soziale Medien, Werbung und Analysen weitergeben. Unsere Partner können möglicherweise diese Informationen mit weiteren Daten zusammenführen, die die Partner bereits von Ihnen besitzen.
          </p>
        </div>

        {/* 4. Newsletter */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">4. Newsletter</h2>
          <p>
            Wenn Sie sich zu unserem Newsletter anmelden, verwenden wir die hierfür erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelmäßig unseren E-Mail-Newsletter aufgrund Ihrer Einwilligung gemäß Art. 6 I S. 1 a DSGVO zuzusenden.
          </p>
          <p>
            Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch eine Nachricht an uns über die im Impressum angegebenen Kontaktmöglichkeiten oder über den dafür vorgesehenen Link im Newsletter erfolgen. Nach Abmeldung löschen wir Ihre E-Mail-Adresse, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
          </p>
        </div>

        {/* 5. Kommentare */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">5. Kommentare</h2>
          <p>
            Soweit Sie innerhalb unserer App die Kommentarfunktion nutzen, werden neben diesen Kommentaren auch der Zeitpunkt der Erstellung, Ihr gewähltes Pseudonym und vorübergehend auch Ihre IP-Adresse gespeichert. Dies geschieht, damit wir bei widerrechtlichen Inhalten unsere Rechte wahren können.
          </p>
        </div>

        {/* 6. SMS-Kommunikation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">6. SMS-Kommunikation</h2>
          <p>
            Wir verwenden Ihre Mobilfunknummer ausschließlich, um Ihnen wichtige Informationen per SMS zu übermitteln, die für die Nutzung unserer Dienste erforderlich sind. Dies umfasst beispielsweise Sicherheitscodes für die Zwei-Faktor-Authentifizierung oder andere systemrelevante Benachrichtigungen. Die Verarbeitung Ihrer Mobilfunknummer erfolgt auf Grundlage von Art. 6 I S. 1 b DSGVO, da sie zur Erfüllung des Vertrages notwendig ist.
          </p>
          <p>Ein Versand von Werbe-SMS findet nicht statt.</p>
        </div>

        {/* 7. Präsenz auf Social-Media-Plattformen */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">7. Präsenz auf Social-Media-Plattformen</h2>
          <p>
            Wir nutzen nachfolgende Social-Media-Plattformen zur Unternehmensdarstellung und Kommunikation (auf die nachfolgend verlinkten Datenschutzerklärungen und Opt-Out-Möglichkeiten wird ausdrücklich Bezug genommen).
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Instagram</strong> (Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, D04 X2K5, Irland)<br/>
              Datenschutzerklärung und Opt-Out: <a href="https://instagram.com/about/legal/privacy/" className="text-blue-600 hover:underline">https://instagram.com/about/legal/privacy/</a>
            </li>
            <li>
              <strong>TikTok</strong> (TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland)<br/>
              Datenschutzerklärung: <a href="https://www.tiktok.com/legal/privacy-policy?lang=de" className="text-blue-600 hover:underline">https://www.tiktok.com/legal/privacy-policy?lang=de</a>
            </li>
            <li>
              <strong>LinkedIn</strong> (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland)<br/>
              Datenschutzerklärung: <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline">https://www.linkedin.com/legal/privacy-policy</a><br/>
              Opt-Out: <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-blue-600 hover:underline">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>
            </li>
          </ul>
          <p>
            Diese Social-Media-Plattformen können ggf. personenbezogene Daten außerhalb der EU verarbeiten, wir verweisen insoweit auf die vorstehenden Datenschutzerklärungen der Social-Media-Plattformen. Die jeweiligen Social-Media-Plattformen können ggf. aus Ihrem Nutzungsverhalten und den sich hieraus ergebenden Interessen und Aktionen Ihrerseits Nutzungsprofile erstellen und Cookies auf Ihrem Rechner speichern, in denen Ihr Nutzungsverhalten gespeichert ist. Wenn Sie auf der jeweiligen Social-Media-Plattform einen Account besitzen und eingeloggt sind, kann Ihr Nutzungsverhalten sogar geräteunabhängig gespeichert werden. Ihr Nutzungsprofil kann verwendet werden, um z. B. Werbeanzeigen zu platzieren, die mutmaßlich Ihren Interessen entsprechen.
          </p>
          <p>
            Wir verarbeiten die personenbezogenen Daten ausschließlich zur Kommunikation mit Ihnen über die von Ihnen gewählte Social-Media-Plattform sowie zur Optimierung unserer Onlinepräsenz und achten darauf, dass hier keine Interessen Ihrerseits betroffen sind, welche dieses berechtigte Interesse unsererseits überwiegen (Art. 6 I S. 1 f DSGVO). Soweit Sie bereits dem jeweiligen Betreiber der Social-Media-Plattform eine wirksame Einwilligung zur entsprechenden Datenverarbeitung gegeben haben, erfolgt die Verarbeitung Ihrer personenbezogenen Daten auch auf Basis dieser Einwilligung (Art. 6 I S. 1 a DSGVO).
          </p>
        </div>

        {/* 8. Dienste von Drittanbietern */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">8. Dienste von Drittanbietern</h2>

          <h3 className="text-lg font-medium">8.1 Nutzung von AWS als Hosting-Dienstleister</h3>
          <p>
            Wir setzen für den Betrieb unserer App die Cloud-Infrastruktur Amazon Web Services (AWS) ein. Dienstanbieter ist die Amazon Web Services, Inc., 410 Terry Avenue North, Seattle, WA 98109, USA. Für datenschutzrechtliche Anfragen steht die europäische Niederlassung Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg, als Ansprechpartner zur Verfügung.
          </p>
          <p>
            Die Nutzung von AWS dient dem technisch sicheren Betrieb unserer App und der Speicherung aller damit verbundenen Daten. Die (personenbezogenen) Daten, die im Rahmen der App erfasst werden, werden an die Server des zuvor genannten Drittanbieters übermittelt und dort gespeichert, wobei es sich u. a. um
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>IP-Adressen,</li>
            <li>Kontaktdaten,</li>
            <li>Zeitstempel von Anfragen,</li>
            <li>Zeitzonendifferenz zur Greenwich Mean Time,</li>
            <li>Geräteinformationen,</li>
            <li>Inhalt der Anforderung,</li>
            <li>Metadaten zur Netzwerkkommunikation,</li>
            <li>übertragene Datenmenge</li>
            <li>und sonstige Daten, die über eine App generiert werden, handeln kann.</li>
          </ul>
          <p>
            Die Datenverarbeitung basiert auf Art. 6 I S. 1 f DSGVO (berechtigtes Interesse). Unser überwiegendes Interesse liegt in der technischen Betriebssicherheit der App, die ohne professionelle Cloud-Infrastruktur nicht gewährleistet werden könnte. Insoweit sind keine Interessen Ihrerseits erkennbar, die gegenüber unserem berechtigten Interesse schwerer wiegen.
          </p>
          <p>
            Die vollständige Datenschutzerklärung von AWS finden Sie unter:{' '}
            <a
              href="https://aws.amazon.com/de/compliance/germany-data-protection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://aws.amazon.com/de/compliance/germany-data-protection/
            </a>
          </p>

          <h3 className="text-lg font-medium">8.2 Nutzung von Bird</h3>
          <p>
            Wir nutzen für unsere Website die Cloud-Kommunikationsplattform Bird, um eine sichere Authentifizierung mittels Ihrer Mobilfunknummer zu ermöglichen. Dienstanbieterin ist die Bird Technology GmbH, c/o WeWork, Warschauer Platz 11–13, 10245 Berlin, Deutschland. Die Diensteanbieterin ist eine Tochtergesellschaft der Bird Technologies Inc., mit Hauptsitz in den USA. Bird verarbeitet Ihre Daten insofern teilweise auch in den USA.
          </p>
          <p>
            Im Rahmen der Telefonverifikation wird Ihre Mobilfunknummer an die Server von Bird übermittelt, um Ihnen einen Authentifizierungscode per SMS zuzusenden. Diese Verifizierungsmethode dient dem Schutz Ihres Kontos und der Sicherstellung, dass nur berechtigte Personen Zugriff auf Ihr Nutzerkonto erhalten. Die Verarbeitung umfasst Ihre Mobilfunknummer sowie Metadaten zur Übermittlung der Nachrichten (Zeitpunkt, Status der Zustellung).
          </p>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrages bzw. zur Durchführung vorvertraglicher Maßnahmen). Die Authentifizierung mittels Mobilfunknummer stellt eine notwendige Maßnahme zur sicheren Durchführung unserer Dienstleistungen dar.
          </p>
          <p>
            Detaillierte Informationen zur Datenverarbeitung durch Bird finden Sie in der Datenschutzerklärung des Anbieters unter:{' '}
            <a
              href="https://sendbird.com/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://sendbird.com/privacy-notice
            </a>
          </p>
          <p>
            Weitere Informationen zur EU-US Data Privacy Framework Compliance von Bird sind verfügbar unter:{' '}
            <a
              href="https://sendbird.com/dpf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://sendbird.com/dpf
            </a>
          </p>
        </div>

        {/* 9. Automatisierte Inhaltsanalyse */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">9. Automatisierte Inhaltsanalyse</h2>
          <p>
            Zur Gewährleistung der Plattformsicherheit und Rechtskonformität setzen wir u. a. KI-gestützte Systeme zur automatisierten Untersuchung von Nutzerbeiträgen ein. Diese analysieren Textinhalte, Bildmerkmale und Verhaltensmuster pseudonymisiert, um folgende Zwecke zu erfüllen:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Erkennung illegaler Inhalte</li>
            <li>Prävention von Spam- und Betrugsaktivitäten</li>
            <li>Durchsetzung unserer Community-Richtlinien</li>
            <li>Optimierung der Moderationsprozesse</li>
          </ul>
          <p>
            Die Verarbeitung erfolgt aufgrund unseres berechtigten Interesses an der Gewährleistung der Integrität und der Sicherheit unserer Plattform (Art. 6 I S. 1 f DSGVO). Hier sind keine Interessen der Nutzer erkennbar, welche gegenüber unseren berechtigten Interessen überwiegen.
          </p>
        </div>

        {/* 10. Kontaktaufnahme */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">10. Kontaktaufnahme</h2>
          <p>
            Zur Kontaktaufnahme bezüglich des Datenschutzes können Sie sich gern an uns unter Verwendung der nachfolgenden Kontaktmöglichkeiten wenden. Verantwortlicher im Sinne der DSGVO:
          </p>
          <p className="font-bold">
            CAOS Network UG (haftungsbeschränkt)<br/>
            Wandletstraße 9<br/>
            80805 München
          </p>
          <p>
            <strong>E-Mail:</strong>{' '}
            <a href="mailto:business@the-caos.club" className="text-blue-600 hover:underline">
              business@the-caos.club
            </a>
            <br/>
            <strong>Telefon:</strong> +49 163 6614307
          </p>
        </div>
      </div>
    </section>        
    <hr className="w-[80%] mx-auto" />
    </>
  )
}
