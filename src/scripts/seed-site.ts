import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@/payload.config'

async function seed({ payload, req }: { payload: any; req: any }) {

  const homeContent = [
    {
      blockType: 'heroBlock',
      tag: 'Hipnoterapia Kliniczna & Mindwork',
      heading: 'Uspokój myśli.\nOdzyskaj siebie.',
      subtitle:
        'Pomagam ludziom uwolnić się od lęku, fobii i starych schematów — przy użyciu dowodowej hipnoterapii działającej na poziomie, gdzie zmiana naprawdę się dzieje.',
      primaryButton: { label: 'Umów darmową konsultację', url: '/contact' },
      secondaryButton: { label: 'O mnie', url: '/about' },
    },
    {
      blockType: 'introSection',
      sectionTag: 'Czym jest Hipnoterapia',
      heading: 'Delikatna zmiana perspektywy',
      headingEmphasis: 'perspektywy',
      paragraph1:
        'Hipnoterapia to współpraca oparta na dowodach, terapia używająca głęboko zrelaksowanego stanu skoncentrowanej uwagi, aby uzyskać dostęp do części umysłu, gdzie przechowywane są nawyki, przekonania i odpowiedzi emocjonalne.',
      paragraph2:
        'To nie jest sen. To nie jest utrata kontroli. To naturalny, prowadzony stan — podobny do poczucia foku, gdy czytasz ciekawą książkę — w którym delikatnie pracujemy z Twoim podświadomym, aby stworzyć trwałą zmianę.',
      paragraph3:
        'Sesje są ciepłe, konwersacyjne i całkowicie dostosowane do Ciebie. Większość klientów odczuwa zauważalne zmiany już po kilku wizytach.',
      linkLabel: 'Dowiedz się więcej o mojej metodzie',
      linkUrl: '/about',
      stats: [
        { number: '12+', label: 'Lat Doświadczenia' },
        { number: '800+', label: 'Pomagam Ludziom' },
        { number: '96%', label: 'Lepiej po 3 Sesjach' },
        { number: '100%', label: 'Całkowita Poufność' },
      ],
    },
    {
      blockType: 'servicesSection',
      sectionTag: 'Obszary, w których Pomagam',
      heading: 'Co przynosi ludzie do mojej praktyki',
      headingEmphasis: 'do mojej praktyki',
      description:
        'Każda sesja jest inna. To najczęstsze obszary, w których hipnoterapia tworzy zauważalne, trwałe zmiany.',
      services: [
        {
          title: 'Lęk i Stres',
          description: 'Naucz się uspokoić nadaktywny umysł i wyjść ze stanu ciągłego martwienia.',
          icon: 'anxiety',
        },
        {
          title: 'Fobie i Strachy',
          description: 'Delikatnie rozpuszcz korzenie nieświadomych lęków — od latania po wystąpienia publiczne.',
          icon: 'phobia',
        },
        {
          title: 'Sen i Bezsenność',
          description: 'Przywróć naturalną relację ze snem i obudzaj się naprawdę wypoczęty.',
          icon: 'sleep',
        },
        {
          title: 'Pewność Siebie',
          description: 'Buduj autentyczną, odczuwaną pewność siebie, która przenosi się na rozmowy kwalifikacyjne, relacje i życie.',
          icon: 'confidence',
        },
        {
          title: 'Nawyki i Uzależnienia',
          description: 'Palenie, emocjonalne jedzenie, mruczenie — przepisz nawyki, które już nie służą.',
          icon: 'habits',
        },
        {
          title: 'Trauma i PTSD',
          description: 'Bezpieczne, delikatne podejście do przetwarzania trudnych doświadczeń i odzyskiwania spokoju.',
          icon: 'trauma',
        },
      ],
    },
    {
      blockType: 'processSection',
      sectionTag: 'Proces',
      heading: 'Proste. Prowadzone. Transformujące.',
      headingEmphasis: 'Transformujące.',
      steps: [
        {
          number: 'I',
          title: 'Darmowa Konsultacja',
          description:
            'Zaczynamy od otwartej, bezkrytycznej rozmowy. Dokładnie posłucham, zrozumiem Twoje cele i wyjaśnię, czego możesz się spodziewać.',
        },
        {
          number: 'II',
          title: 'Spersonalizowane Sesje',
          description:
            'Każda sesja jest dostosowana do Ciebie. Pracujemy w tempie, które czujesz jako właściwe, łącząc hipnoteriapię z praktycznymi narzędziami dla trwałej zmiany.',
        },
        {
          number: 'III',
          title: 'Trwała Zmiana',
          description:
            'Większość klientów odczuwa znaczące zmiany w ciągu 3-5 sesji. Zostaniesz z technikami, które pomogą utrwalić Twój postęp każdego dnia.',
        },
      ],
    },
    {
      blockType: 'testimonialBlock',
      quote:
        '"Przyszłam do Sarah, przekonana, że nic nie zmieni ataki lękowe, które miałam od siedmiu lat. Po czterech sesjach naprawdę poczułam się jak inna osoba. Nie "naprawiona" — a wolna.',
      authorName: 'Miriam T.',
      authorDetail: 'Lęk i Panika, London',
      stars: 5,
      ctaLabel: 'Czytaj wszystkie opinie →',
      ctaUrl: '/reviews',
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Zrób pierwszy krok',
      heading: 'Gotów czujesz się inaczej?',
      headingEmphasis: 'inaczej?',
      description:
        'Pierwsza rozmowa jest całkowicie darmowa i bez presji. Porozmawiajmy i sprawdźmy, czy będziemy dobrą para.',
      buttonLabel: 'Umów darmową konsultację',
      buttonUrl: '/contact',
    },
  ]

  const aboutContent = [
    {
      blockType: 'pageHeader',
      tag: 'O mnie',
      heading: 'Osoba stojąca za\npraktyką',
      headingEmphasis: 'praktyką',
      lead:
        'Jestem Sarah — kliniczna hipnoterapeutka z ponad dwunastu lat doświadczenia w pomaganiu ludziom przejść od tego, gdzie są, do tego, gdzie chcą być.',
    },
    {
      blockType: 'storySection',
      name: 'Sarah Ellwood',
      title: 'Kliniczna Hipnoterapeutka · London',
      subtitle: 'GHR Zarejestrowana · Członek NCH',
      introQuote:
        '"Przyszłam do hipnoterapii nie jako terapeutka, ale jako klientka — ktoś, kto wszystko spróbowała i nie znalazła tego, czego szukała.',
      paragraphs: [
        {
          text: 'Po latach pracy w korporacji przy dużym nacisku, lęk cicho stał się tłem mojego życia. Terapia pomogła mi to zrozumieć. Hipnoterapia pomogła mi to zmienić. Ta różnica — między zrozumieniem a przemianą — napędza wszystko, co robię teraz.',
        },
        {
          text: 'Szkolenia ukończyłam w London College of Clinical Hypnosis i od tego czasu ukończyłam zaawansowane programy w obszarze praktyki terapeutycznej, kognitywnej hipnoterapii i terapii skoncentrowanej na rozwiązaniach. Przez dwanaście lat pracowałam z ponad 800 klientami — od nastolatków po emerytów, od profesjonalistów po rodziców — każdy z własną historią.',
        },
        {
          text: 'Moja metoda łączy dowodową hipnoteriapię z elementami NLP, uważnością i terapii opartą na częściach. Ale więcej niż jakąkolwiek technikę, to co kształtuje moją pracę jest wiara, że już masz wszystko, czego potrzebujesz. Moja robota polega po prostu na pomaganiu Ci do tego dobrać się.',
        },
        {
          text: 'Sesje odbywają się w mojej spokojnej, prywatnej praktyce w centrum Londynu, a także online dla tych, którzy wolą to. Oferuję darmową, 30-minutową konsultację przed rozpoczęciem — bez zobowiązań, po prostu rozmowę.',
        },
      ],
      pullQuote:
        '"Zrozumienie, dlaczego czujesz się na określony sposób, jest cenne. Bycie wolnym od tego czegoś jest czegoś więcej.',
    },
    {
      blockType: 'credentialsSection',
      sectionTag: 'Kwalifikacje i Szkolenia',
      heading: 'Zakorzenione w dowodach i doświadczeniu',
      headingEmphasis: 'dowodach i doświadczeniu',
      credentials: [
        {
          year: '2012',
          title: 'Dyplom w Hipnoterapii Klinicznej',
          description:
            'London College of Clinical Hypnosis — LCCH. Pełne szkolenie kliniczne obejmujące terapeutyczną hipnozę, psychoterapię i doradztwo.',
        },
        {
          year: '2014',
          title: 'Zaawansowana Hipnoterapia Kognitywna',
          description:
            'Quest Institute, London. Szkolenie podyplomowe łączące modele poznawczo-behawioralne z technikami hipnotycznymi.',
        },
        {
          year: '2016',
          title: 'Certyfikat Praktyki Terapeutycznej',
          description:
            'Specjalistyczne szkolenie w pracy z complex trauma, PTSD i negatywnymi doświadczeniami z dzieciństwa.',
        },
        {
          year: '2018',
          title: 'Terapia Skoncentrowana na Rozwiązaniach',
          description:
            'BRIEF, London. Kwalifikacja w SFBT, umożliwiająca szybką, celem skierowaną pracę obok hipnoterapii.',
        },
        {
          year: 'Ongoing',
          title: 'GHR Zarejestrowana & Członek NCH',
          description:
            'Pełna rejestracja w General Hypnotherapy Register i National Council for Hypnotherapy. Zobowiązana do ich kodeksów etyki i praktyki.',
        },
        {
          year: 'Ongoing',
          title: 'Ciągłe Doskonalanie Zawodowe',
          description:
            'Minimum 30 godzin rocznie pod nadzorem CPD, utrzymując praktykę aktualną z najnowszymi badaniami i podejść.',
        },
      ],
    },
    {
      blockType: 'valuesSection',
      sectionTag: 'Moja Metoda',
      heading: 'Na co możesz zawsze liczyć ode mnie',
      headingEmphasis: 'liczyć ode mnie',
      intro:
        'Każdy klient jest inny, a każda sesja jest kształtowana wokół Ciebie. Ale te zasady przebiegają przez wszystko, co robię, za każdym razem.',
      values: [
        {
          number: '01',
          title: 'Całkowita Poufność',
          description:
            'To, co dzielisz ze mną, pozostaje między nami. Moja praktyka jest regulowana przez surowe kody poufności, i pracuję w w pełni prywatnym otoczeniu. Możesz mówić swobodnie.',
        },
        {
          number: '02',
          title: 'Bez Osądzania, Kiedykolwiek',
          description:
            'Ludzie przychodzą do mnie z wstydem o tym, z czym się biją. Ten wstyd nie ma miejsca w mojej praktyce. Zostaniesz pozdrowiony z ciepłem i autentyczną ciekawością.',
        },
        {
          number: '03',
          title: 'Szczerze, Realistyczne Oczekiwania',
          description:
            'Nigdy nie obiecam wyleczenia ani nie stawiam niemożliwych twierdzeń. Będę szczery z Tobą co do tego, na co hipnoteria może realnie pozwolić i ilu sesji możesz potrzebować.',
        },
        {
          number: '04',
          title: 'Zawsze Kontrolujesz',
          description:
            'Hipnoteria to proces współpracy. Nie możesz zostać skłonowany do czegoś przeciwko swoim wartościom lub woli. Wszystko dzieje się z Twoją pełną wiedzą i zgodą.',
        },
        {
          number: '05',
          title: 'Praktyka oparta na Dowodach',
          description:
            'Moje metody są zakorzenione w badaniach. Pozostaję na bieżąco poprzez ciągłe szkolenie i superwizję, używając tylko podejść popartych dowodami.',
        },
        {
          number: '06',
          title: 'Spojrzenie na Całego Człowieka',
          description:
            'Nie leczę objawów izolowanie. Jestem zainteresowana w Tobie — Twoim życiem, kontekstem, twoimi mocnymi stronami — i to kształtuje każdą sesję, którą mamy razem.',
        },
      ],
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Zrób pierwszy krok',
      heading: 'Gotów rozpocząć rozmowę?',
      headingEmphasis: 'rozmowę?',
      description:
        'Pierwsza sesja jest darmowa. Bez zobowiązań, bez presji — po prostu szansa, aby się poznać i sprawdzić, czy będziemy dobrą parą.',
      buttonLabel: 'Umów darmową konsultację',
      buttonUrl: '/contact',
      secondaryButton: { label: 'Czytaj Opinie Klientów', url: '/reviews' },
    },
  ]

  const contactContent = [
    {
      blockType: 'pageHeader',
      tag: 'Kontakt',
      heading: 'Rozpocznijmy\nrozmowę',
      headingEmphasis: 'rozmowę',
      lead:
        'Pierwszy krok jest zawsze najtrudniejszy. Wypełnij formularz i skontaktuję się w ciągu jednego dnia roboczego, aby umówić Twoją darmową, 30-minutową konsultację.',
    },
    {
      blockType: 'contactBlock',
      sectionHeading: 'Co się stanie dalej',
      sectionHeadingEmphasis: 'dalej',
      introText:
        'Po wysłaniu wiadomości skontaktuję się w ciągu jednego dnia roboczego, aby umówić darmowe, 30-minutowe spotkanie wstępne. Nie ma zobowiązań ani scenariuszy — tylko autentyczna rozmowa.',
      formHeading: 'Umów swoją darmową konsultację',
      formSubheading: 'Wszystkie dane są traktowane poważnie i poufne. Odpowiem w ciągu jednego dnia roboczego.',
      noticeText:
        'Wysyłając ten formularz zgadzasz się na kontakt ze strony Sarah Ellwood Hipnotherapy. Twoje informacje nigdy nie są udostępniane osobom trzecim i są przetwarzane zgodnie z RODO. Wszystkie komunikacje są całkowicie poufne.',
      contactDetails: {
        address: '12 Harley Street, Marylebone\nLondon, W1G 9PG',
        addressExtra: 'Łatwy dostęp z Oxford Circus & Regent\'s Park',
        phone: '+44 (0)20 7123 4567',
        phoneHours: 'Pon–Pt, 9:00–18:00',
        email: 'hello@sarahellwood.co.uk',
        emailExtra: 'Odpowiedź w ciągu jednego dnia roboczego',
        onlineInfo: 'Dostępne przez Zoom lub Teams',
        onlineExtra: 'Równie skuteczne, po prostu wygodniejsze',
        sessionDuration: '60 minut (standardowo)',
        sessionExtra: 'Darmowa konsultacja 30 min · 90 min dłuższa dostępna',
      },
    },
    {
      blockType: 'faqBlock',
      sectionTag: 'Zanim Umówisz się',
      heading: 'Często zadawane pytania',
      headingEmphasis: 'zadawane pytania',
      faqs: [
        {
          question: 'Czy będę miał kontrolę podczas hipnozy?',
          answer:
            'Tak, całkowicie. Hipnoteria to proces współpracy. Jesteś świadomy wszystkiego, co się dzieje, możesz mówić, poruszać się lub kończyć sesję w dowolnym momencie. Nie możesz zostać skłonowany do czegoś przeciwko swojej woli.',
        },
        {
          question: 'Ile sesji będę potrzebować?',
          answer:
            'To zależy. Konkretne fobie i problemy oparte na nawykach często ustępują po 1-3 sesjach. Lęk, pewność siebie i złożone problemy zazwyczaj wymagają 4-8 sesji. Dam Ci szczerą ocenę podczas darmowej konsultacji.',
        },
        {
          question: 'Jak się naprawdę czuje hipnoza?',
          answer:
            'Większość ludzi opisuje to jako głębokie zrelaksowanie, ale pełną świadomość — podobnie jak gdy czytasz ciekawą książkę lub zaraz przed zasnęciem. Usłyszysz wszystko, co powiem, i zapamiętniesz większość sesji.',
        },
        {
          question: 'Czy mogę być hipnotyzowany, jeśli jestem sceptycznym?',
          answer:
            'Absolutnie. Sceptycyzm nie uniemożliwia hipnoteriapii działanie. To, co ma znaczenie, to chęć spróbowania i pragnienie zmiany — nie musisz wierzyć w to, aby było skuteczne.',
        },
        {
          question: 'Ile kosztuje sesja?',
          answer:
            'Sesje kosztują £120 za 60 minut. Sesja przedłużona do 90 minut kosztuje £165. Pierwsza konsultacja (30 minut) jest zawsze darmowa. Oferuję kilka miejsc w niższej cenie — poproś, jeśli koszt jest dla Ciebie problemem.',
        },
        {
          question: 'Czy oferujecie sesje online?',
          answer:
            'Tak. Sesje online są dostępne przez Zoom lub Teams i równie skuteczne. Wielu moich klientów wolą wygodę, a niektórzy nigdy nie przybyli do mojej praktyki.',
        },
        {
          question: 'Czy wszystko, co mówię, jest poufne?',
          answer:
            'Tak. Wszystko, co dzielimy się w sesjach, jest ściśle poufne i regulowane kodeksami etyki GHR i NCH. Jedynymi wyjątkami — jak u wszystkich terapeutów — są sytuacje, gdy istnieje poważne ryzyko krzywdy.',
        },
        {
          question: 'Co jeśli próbowałem już terapii i nie pomogło?',
          answer:
            'Wiele moich klientów przychodzi, mając już doświadczenie z innymi metodami. Hipnoteria działa inaczej — celuje w poziom podświadomości, gdzie przechowywane są schematy, zamiast tylko je analizować. Często działa skutecznie właśnie tam, gdzie inne metody nie pomogły.',
        },
      ],
    },
  ]

  const reviewsContent = [
    {
      blockType: 'pageHeader',
      tag: 'Opinie Klientów',
      heading: 'Prawdziwi ludzie,\nprawdziwa zmiana',
      headingEmphasis: 'prawdziwa zmiana',
      lead:
        'Każda opinia pochodzi od prawdziwego klienta. Dzielę je nie, aby zrobić wrażenie, ale dlatego, że wiem, jak trudno jest zrobić ten pierwszy krok — i czasem, usłyszenie czyjejś historii pomaga.',
    },
    {
      blockType: 'reviewsBlock',
      averageRating: '4.9',
      totalReviews: '127',
      recommendPercent: '96%',
      avgSessions: '3.8',
      reviews: [
        {
          quote:
            '"Przyszłam do Sarah, przekonana, że nic nie usunie ataki lękowe, które miałam od siedmiu lat. Po czterech sesjach naprawdę poczułam się jak inna osoba. Nie "naprawiona" — a wolna.',
          authorName: 'Miriam T.',
          authorLocation: 'London',
          tag: 'Lęk i Panika',
          category: 'anxiety',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
          featured: true,
        },
        {
          quote:
            '"Zarezerwowałam wakacje po raz pierwszy po ósmiu latach po dwóch sesjach. Nie tylko wytrzymałam lot — ale naprawdę zasmakowałam patrząc przez okno.',
          authorName: 'James R.',
          authorLocation: 'Surrey',
          tag: 'Fobia Lotów',
          category: 'phobia',
          stars: 5,
          platform: 'Zweryfikowany Klient · Trustpilot',
        },
        {
          quote:
            '"Trzy lata wstawania o 3am codziennie. Sarah pomogła mi zrozumieć, co stoi za tym, i w ciągu dwóch tygodni zaczęłam spać całą noc. Wciąż nie mogę uwierzyć.',
          authorName: 'Helen W.',
          authorLocation: 'Kent',
          tag: 'Bezsenność',
          category: 'sleep',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
        },
        {
          quote:
            '"20 lat palenia — minął po jednej sesji. Myślałam, że będzie to walka. Po prostu nie było. Sarah ma dar.',
          authorName: 'David K.',
          authorLocation: 'Essex',
          tag: 'Rzucenie Palenia',
          category: 'habits',
          stars: 5,
          platform: 'Zweryfikowany Klient · Trustpilot',
        },
        {
          quote:
            '"Dawniej drżałam przed wystąpieniami publicznymi. W ostatni miesiąc dałem przemówienie do 400 osób i czułam spokój, równowagę, nawet ekscytację. Sarah przemieniła to, na co myślałem, że jest trwałe.',
          authorName: 'Priya S.',
          authorLocation: 'London',
          tag: 'Wystąpienia Publiczne',
          category: 'confidence',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
        },
        {
          quote:
            '"Pracowałam z kilkoma terapeutami przez lata i robiłam postępy, ale zawsze były powolne i bolesne. Podejście Sarah było inne — delikatne, współpracujące i szybsze niż wszystko, co próbowałam. Czuję, że jestem sobą.',
          authorName: 'Anonymous',
          authorLocation: 'Online Client',
          tag: 'Trauma',
          category: 'trauma',
          stars: 5,
          platform: 'Zweryfikowany Klient · Direct Feedback',
        },
        {
          quote:
            '"Lęk zdrowotny kontrolował moje życie — ciągłe wyszukiwania w Google, wizyty u lekarzy bez powodu, katastrofizowanie każdego bólu głowy. Ta spirala całkowicie się zatrzymała. Jestem zdumiona, jak się teraz czuję.',
          authorName: 'Tom B.',
          authorLocation: 'Bristol',
          tag: 'Lęk Zdrowotny',
          category: 'anxiety',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
        },
        {
          quote:
            '"Nie wierzyłam, że to zadziała. Powiedziałam Sarah to na pierwszej sesji. Po prostu uśmiechnęła się i rzekła "to w porządku, nie musisz". Sześć tygodni później przestałam przeprowadzać się za istnieniem.',
          authorName: 'Rachel O.',
          authorLocation: 'Manchester',
          tag: 'Pewność Siebie',
          category: 'confidence',
          stars: 5,
          platform: 'Zweryfikowany Klient · Trustpilot',
        },
        {
          quote:
            '"Jem emocjonalnie przez stres od piętnastu lat. Sarah pomogła mi zrozumieć, co stoi za tym, nie tylko tłumić. Czuję kontrolę po raz pierwszy. Bez diet, bez wytrwałości — po prostu spokój z jedzeniem.',
          authorName: 'Sonia M.',
          authorLocation: 'London',
          tag: 'Jedzenie Emocjonalne',
          category: 'habits',
          stars: 5,
          platform: 'Zweryfikowany Klient · Direct Feedback',
        },
        {
          quote:
            '"Unikałem zabiegów medycznych przez lata z powodu fobii igieł. W zeszłym tygodni miałam badanie krwi prawie bez myślenia. Gdybym powiedziała, że szósta temu miło śmiałbym.',
          authorName: 'Chris F.',
          authorLocation: 'Hertfordshire',
          tag: 'Fobia Igieł',
          category: 'phobia',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
        },
        {
          quote:
            '"Nagrania, które Sarah dawała mi słuchać w nocy, były przełomem sam na co dzień. Łącząc je ze sesjami, przeszłam od średnio 4 godzin snu do solidnych 7. Całe moje życie się poprawiło.',
          authorName: 'Natasha P.',
          authorLocation: 'Online Client',
          tag: 'Bezsenność i Lęk',
          category: 'sleep',
          stars: 5,
          platform: 'Zweryfikowany Klient · Trustpilot',
        },
        {
          quote:
            '"Odmawiałam wydarzeń społecznych, zmagałam się z podstawowymi zakupami, bałem się rozmów telefonicznych. Sarah pomogła mi odzyskać życie krok po kroku. Jej manierka sama w sobie jest polowaniem — niemożliwie spokojna i uspokajająca.',
          authorName: 'Lena H.',
          authorLocation: 'Cambridge',
          tag: 'Lęk Społeczny',
          category: 'anxiety',
          stars: 5,
          platform: 'Zweryfikowany Klient · Google Reviews',
        },
      ],
    },
    {
      blockType: 'ctaBand',
      sectionTag: 'Gotowy, aby zacząć?',
      heading: 'Twoja historia może być następną',
      headingEmphasis: 'Twoja',
      description:
        'Pierwsza konsultacja jest darmowa, relaksująca i całkowicie bez presji.',
      buttonLabel: 'Umów darmową konsultację',
      buttonUrl: '/contact',
    },
  ]

  const pages = [
    { title: 'Home', slug: 'home', hero: { type: 'none' }, layout: homeContent },
    { title: 'About Me', slug: 'about', hero: { type: 'none' }, layout: aboutContent },
    { title: 'Contact', slug: 'contact', hero: { type: 'none' }, layout: contactContent },
    { title: 'Reviews', slug: 'reviews', hero: { type: 'none' }, layout: reviewsContent },
  ]

  for (const pageData of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: pageData.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          title: pageData.title,
          layout: pageData.layout,
          hero: pageData.hero,
          _status: 'published',
        },
        context: { disableRevalidate: true },
      })
      console.log(`Updated: ${pageData.title}`)
    } else {
      await payload.create({
        collection: 'pages',
        data: { ...pageData, _status: 'published' },
        context: { disableRevalidate: true },
      })
      console.log(`Created: ${pageData.title}`)
    }
  }

  console.log('Seeding complete!')
}

export { seed }
