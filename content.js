// CentreStage site content — scraped from centrestage.org.au (July 2026)
const M = "https://static.wixstatic.com/media/";
const fill = (id, w, h) => `${M}${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/file.avif`;

// ── Upcoming shows (Tickets / What's On) ─────────────────────
export const SHOWS = [
  { id: "frozen", title: "Frozen", subtitle: "The Broadway Musical", when: "March 2027", venue: "Geelong Arts Centre",
    blurb: "It's time to LET IT GO. CentreStage's largest production yet arrives at the Geelong Arts Centre. Tickets available exclusively via the Geelong Arts Centre.",
    cta: "Book at Geelong Arts Centre", href: "https://geelongartscentre.org.au/whats-on/all-events/frozen-centrestage",
    img: "assets/frozen-keyart.png", featured: true },
  { id: "winnie", title: "Winnie the Pooh Kids", when: "October 2026", venue: "Junior Troupe · Ages 4–8",
    blurb: "A joyful beginning for our youngest performers. Onstage October 2026, performed by the Junior Troupe students.",
    cta: "Tickets via TryBooking", href: "https://www.trybooking.com/DMGCA",
    img: fill("35cad6_e028c5b5122c4b968cc06aafee71cbd9~mv2.png", 900, 675) },
  { id: "matilda", title: "Matilda Jr.", when: "October / November 2026", venue: "Middle Troupe · Ages 9–12",
    blurb: "A brilliant young girl who refuses to accept injustice. Performed by the Middle Troupe students.",
    cta: "Tickets via TryBooking", href: "https://www.trybooking.com/DMGCC",
    img: fill("35cad6_1d484875c31f4ac490fe4aad76b3861d~mv2.png", 900, 675) },
  { id: "hadestown", title: "Hadestown: Teen Edition", when: "November 2026", venue: "Senior Troupe · Ages 12–18",
    blurb: "A journey into the underworld. One of the most ambitious projects undertaken within our training program.",
    cta: "Tickets via TryBooking", href: "https://www.trybooking.com/DMGCJ",
    img: fill("35cad6_9eb8cd6e51734cc99bbb500892500fa6~mv2.png", 900, 675) },
];

// ── Previous productions (year desc) ─────────────────────────
export const PRODUCTIONS = [
  { t: "Frozen Jr.", y: "2023" }, { t: "Priscilla", y: "2023" }, { t: "Shrek Jr.", y: "2023" },
  { t: "Pirates Past Noon Kids.", y: "2023" }, { t: "Piano Bar Pop Up Showcase", y: "2023" },
  { t: "Elite Showcase", y: "2023" }, { t: "Senior Showcase", y: "2023" },
  { t: "Les Miserables", y: "2022" }, { t: "West Side Story (Attempted)", y: "2022" },
  { t: "We Will Rock You (Young at Part)", y: "2022" }, { t: "Annie Jr.", y: "2022" },
  { t: "The Lion King Kids", y: "2022" }, { t: "Elite Showcase", y: "2022" }, { t: "Summer Camp", y: "2022" },
  { t: "Puffs", y: "2021" }, { t: "Legally Blonde Jr.", y: "2021" }, { t: "Little Mermaid Jr.", y: "2021" },
  { t: "Aladdin Kids", y: "2021" }, { t: "Elite Showcase", y: "2021" }, { t: "Summer Camp", y: "2021" },
  { t: "Elf Jr.", y: "2020" }, { t: "The Addams Family (Young at Part)", y: "2020" },
  { t: "Sing Out Loud", y: "2020" }, { t: "Elite Showcase", y: "2020" }, { t: "Junior Showcase", y: "2020" },
  { t: "Musical Theatre Summer Camp", y: "2020" },
  { t: "The Sound of Music", y: "2019" }, { t: "Urinetown: The Musical", y: "2019" },
  { t: "Cinderella", y: "2019" }, { t: "Bending Broadway", y: "2019" }, { t: "Seussical Jr.", y: "2019" },
  { t: "Alice in Wonderland Jr.", y: "2019" }, { t: "High School Musical Jr.", y: "2019" },
  { t: "42nd Street", y: "2018" }, { t: "We Will Rock You", y: "2018" }, { t: "Little Shop of Horrors", y: "2018" },
  { t: "Cats (Young Actor's Edition)", y: "2018" }, { t: "Starlight Express", y: "2018" },
  { t: "Oliver", y: "2017" }, { t: "Chitty Chitty Bang Bang", y: "2017" }, { t: "Bending Broadway", y: "2017" },
  { t: "Nunsense", y: "2016" }, { t: "The Addams Family", y: "2016" }, { t: "Oklahoma!", y: "2016" },
  { t: "Evita!", y: "2015" }, { t: "Forbidden Broadway", y: "2015" },
  { t: "Rent", y: "2014" }, { t: "Guys and Dolls Jr.", y: "2014" },
  { t: "The Wedding Singer", y: "2013" }, { t: "Zombie Prom", y: "2013" },
  { t: "Singin' In The Rain", y: "2012" }, { t: "13! A New Musical", y: "2012" },
  { t: "A Chorus Line", y: "2011" }, { t: "Company Launch", y: "2010" },
];

// ── Shop ─────────────────────────────────────────────────────
const CS = "https://www.centrestage.org.au/product-page/";
export const SHOP = [
  { t: "CentreStage T-Shirt — Full Colour Range", price: "$27.50", tag: "Limited stock",
    img: fill("35cad6_4e05861adb8940279154ebd5cdc7a650~mv2.png", 600, 600), href: CS + "centrestage-t-shirt-youth-and-adults" },
  { t: "Black Hoodie", price: "$50.00",
    img: fill("8a6446_45a4e4c39e12408690faed92c2e95014~mv2.png", 600, 600), href: CS + "black-hoodie" },
  { t: "CentreStage Backpack — Blue or Grey", price: "$45.00",
    img: fill("35cad6_1486191e68304bcfa6f49dfbf63dae72~mv2.jpg", 600, 600), href: CS + "centrestage-back-pack" },
  { t: "CentreStage Dance Bag", price: "$35.00",
    img: fill("35cad6_b976ffc0af43436eabbdfbedb78a28e5~mv2.jpg", 600, 600), href: CS + "centrestage-dance-bag" },
  { t: "CentreStage Bike Shorts", price: "$17.50", href: CS + "centrestage-bike-shorts" },
  { t: "Shein Basic Leotard (High Cut)", price: "$12.00", href: CS + "shein-basic-leotard-high-cut" },
  { t: "iEFiEL Tan Leotard", price: "$22.50", href: CS + "iefiel-tan-leotard" },
  { t: "Red and Black Track Pants", price: "$20.00", was: "$40.00", tag: "On sale", href: CS + "red-and-black-centrestage-track-pants" },
  { t: "Black CentreStage Jackets", price: "$30.00", was: "$35.00", tag: "On sale",
    img: fill("35cad6_30a3a3d20fef49a3bbd7b2b81f037520~mv2.jpg", 600, 600), href: CS + "black-centrestage-jackets" },
  { t: "Name a Seat — 150mm Plaque", price: "$175.00", href: CS + "name-a-seat-150mm-x150mm-plaque" },
  { t: "Name a Seat — 75mm Plaque", price: "$100.00", href: CS + "name-a-seat-75mm-x45mm-plaque" },
];

// ── Wellbeing resources ──────────────────────────────────────
export const HELPLINES = [
  { t: "Emergency", n: "000", note: "Immediate risk" },
  { t: "Support Act Wellbeing Helpline", n: "1800 959 500", note: "24/7" },
  { t: "Beyond Blue", n: "1300 22 4636", note: "24/7 · beyondblue.org.au" },
  { t: "Lifeline", n: "13 11 14", note: "24/7" },
  { t: "Suicide Call Back Service", n: "1300 659 467", note: "24/7" },
  { t: "QLife (LGBTQIA+)", n: "1800 184 527", note: "3pm–midnight" },
  { t: "MensLine", n: "1300 789 978", note: "24/7" },
  { t: "Griefline", n: "1300 845 745", note: "12pm–3am" },
  { t: "DirectLine", n: "1800 888 236", note: "" },
];

// ── Blog posts (news) ────────────────────────────────────────
// body: array of paragraphs (full text) or null (excerpt only, to be expanded)
export const POSTS = [
  { slug: "fyansford", cat: "News", date: "Jun 2026", read: "4 min", author: "David Greenwood",
    title: "CentreStage Is Growing: Welcome to Our New Home in Fyansford",
    img: fill("35cad6_530e88dff77c486aba4571f486316800~mv2.png", 1200, 800),
    excerpt: "There are moments in every organisation's journey that feel like a milestone. Today is one of those moments for CentreStage.",
    body: [
      "We are incredibly excited to announce that CentreStage's administration offices and talent agency will be relocating to our new headquarters at Fyansford, expanding upon our existing presence at Rodney Road, Vines Road and Princes Highway. This move represents far more than a new address. It represents growth, opportunity, and the next chapter in the CentreStage story.",
      "Before we go any further, we want to reassure our students and families that our education and rehearsal programs are not changing locations. Classes, rehearsals, productions and educational activities will continue to operate from our established homes at 26 Rodney Road, North Geelong and Vines Road. These locations remain at the heart of our education programs and will continue to serve the hundreds of students who walk through our doors each week.",
      "Managing Director David Greenwood OAM said the move has been years in the making. “This expansion keeps our roots firmly in the north, while allowing us to reach a whole new part of Geelong. North Geelong, Norlane and the northern suburbs helped build CentreStage. This move allows us to continue serving those communities while expanding our reach across the wider region.”",
      "This is not a vision that appeared overnight. Plans were already being developed in 2021 to expand our footprint and prepare for the future. Like many arts organisations, circumstances beyond anyone's control forced those plans to be placed on hold. While the timeline changed, the vision never did.",
      "Today, CentreStage is larger and stronger than ever before. Our education programs continue to expand. Our productions continue to grow in scale and ambition. Our talent agency now represents performers working across theatre, television, film, voiceovers, commercials, cruise lines and live entertainment opportunities throughout Australia and beyond.",
      "To our students, families, volunteers, staff, creatives, alumni, industry partners and community supporters — thank you. Every milestone CentreStage achieves is only possible because of the people who believe in what we do. This move is not the finish line. It is the beginning of an exciting new chapter. Welcome to the next generation of CentreStage."
    ] },
  { slug: "hadestown-1", cat: "Cast Announcement", date: "May 9, 2026", read: "4 min", author: "David Greenwood",
    title: "Four Journeys Into the Underworld: Announcing Our Senior Troupe Casts for Hadestown: Teen Edition",
    img: fill("35cad6_cf854c369527485faaa51ffb241cda5e~mv2.png", 1200, 800),
    excerpt: "Our Senior Troupe students are preparing to descend into the world of Hadestown, and we are proud to officially announce the casts for all four productions of Hadestown: Teen Edition.",
    body: [
      "This is one of the most ambitious and artistically demanding projects ever undertaken within our training program. Across four completely separate productions, students bring their own interpretations, emotional depth and theatrical instincts to one of contemporary musical theatre's most powerful works.",
      "Unlike many youth productions, Hadestown: Teen Edition is a full-length musical requiring sustained performance stamina, advanced storytelling skills and deep emotional commitment. It asks students to work at a pre-professional level across acting, movement, vocals, ensemble awareness and emotional connection.",
      "Inspired by ancient Greek mythology, the musical intertwines the stories of Orpheus and Eurydice with Hades and Persephone in a haunting exploration of love, sacrifice, power, hope and survival, set to a rich folk and jazz-inspired score.",
      "One of the defining features of Hadestown is the extraordinary importance of the ensemble. The Workers create the industrial machinery and relentless movement of the underworld; the Fates function almost as a collective conscience. In many ways, the ensemble carries the production.",
      "Across all four troupes — A, B, C and D — students will be challenged artistically, emotionally and collaboratively. This is not simply about casting a show; it is about developing artists, collaborators and storytellers capable of creating theatre with depth, maturity and purpose. More information, including performance details and ticketing, will be released soon."
    ] },
  { slug: "matilda-jr-cast", cat: "Cast Announcement", date: "May 2, 2026", read: "4 min", author: "David Greenwood",
    title: "Trunchball Announces the Cast for Matilda Jr.",
    img: fill("35cad6_98a4f2fc37624525a653f160d02ba9ae~mv2.png", 1200, 800),
    excerpt: "Our Middle Troupe is stepping into the bold, high-energy world of Matilda Jr., and we are proud to officially announce our casts across multiple productions.",
    body: [
      "Inspired by Matilda, this musical tells the story of a brilliant young girl who refuses to accept injustice. With courage, intelligence and imagination, Matilda stands up to the larger-than-life adults around her — including the formidable Trunchbull — while discovering the power of her own voice.",
      "Matilda Jr. is one of the most ensemble-driven productions in the MTI Jr catalogue. While there are clearly defined principal roles, the show relies heavily on the full company to create its fast-paced, highly physical world. The ensemble is on stage for a significant portion of the show — they are the students of Crunchem Hall, the environment, the movement and the momentum.",
      "Matilda sits at the centre of the story, requiring emotional depth, clarity and stamina. Miss Honey provides warmth and grounding, while Trunchbull demands strong physicality and bold character work. The Wormwood family brings comedic precision, and roles like Bruce, Lavender, Nigel and Hortensia create the student world.",
      "We are incredibly proud of the students who have embraced these roles. Being in the ensemble in Matilda Jr. is not a smaller part — it is a position of responsibility and trust. These performers are the engine of the show, and their commitment will shape the success of each production. More information, including performance details and tickets, will be released soon."
    ] },
  { slug: "100-acre-woods", cat: "Cast Announcement", date: "May 2, 2026", read: "2 min", author: "David Greenwood",
    title: "Our Junior Troupe Are Heading to 100 Acre Woods — Cast Announcement",
    img: fill("35cad6_01d24f701b414bb492d34e810c8696e6~mv2.jpg", 1200, 800),
    excerpt: "Our Junior Troupe are heading to the Hundred Acre Wood. Cast announcement for Winnie the Pooh Kids.",
    body: [
      "Congratulations to our outstanding Junior Troupe on their casting in Winnie the Pooh Kids — a brilliant achievement and a real reflection of the dedication, courage and teamwork these young performers bring into the room every week.",
      "Winnie the Pooh Kids is a joyful musical based on the much-loved stories of Winnie-the-Pooh. Set in the Hundred Acre Wood, it follows Pooh and his friends through a series of adventures centred on friendship, kindness and imagination.",
      "One of the most powerful elements of MTI Kids productions is their intentional structure. These shows are not built around a handful of leads with everyone else in the background — they are designed so every performer actively drives the story forward. Our vibrant group of Bee narrators guide the audience and hold the show together, while the Animal Chorus builds the world and brings energy to every moment.",
      "This structure teaches young performers something essential: theatre is not about waiting for a lead role, it is about contributing meaningfully, collaborating and elevating the entire production. Tickets will be on sale soon. A huge congratulations to every student involved."
    ] },
  { slug: "frozencreativeteam", cat: "News", date: "Apr 27, 2026", read: "5 min", author: "CentreStage Frozen",
    title: "Meet the Creative Team for Frozen — March 2027",
    img: fill("35cad6_73da71cc3aa646b5884eb6b2614e5eb5~mv2.png", 1200, 800),
    excerpt: "Meet the nine creatives bringing Frozen to the Geelong Arts Centre stage in March 2027.",
    body: [
      "CentreStage is proud to introduce the creative team behind our 2027 production of Frozen, playing at The Playhouse, Geelong Arts Centre, from 5 to 20 March 2027.",
      "MARTIN NGUYEN — PRODUCER (he/him). Martin is thrilled and honoured to be stepping into the role of Producer for CentreStage's Frozen, marking his production team debut. Known for his organisation, attention to detail and collaborative approach, Martin is excited to bring these qualities to the production process and help lead a passionate team in bringing this magical story to life. His experience as an educator has further developed his communication, leadership and problem-solving skills. Martin is also a Committee Member of Western Arts Theatre and a passionate supporter of the important work it does in fostering community theatre. When not on stage, he can be found in the classroom as an English teacher. On stage: Ensemble in & JULIET, Lewis in PIPPIN and Musidorus in HEAD OVER HEELS (all CentreStage), and ensemble in THE WEDDING SINGER (Western Arts Theatre).",
      "MICHELE MARCU — DIRECTOR. Michele is incredibly excited to be directing CentreStage's production of Frozen and is proud to share this iconic story and celebrate the magic with Geelong audiences. Michele enjoys combining her love of musical theatre and teaching as the Director of Education for CentreStage's Performing Arts Academy (CPAA), leading a team of teachers and industry professionals and giving students the opportunity to perform in productions such as Hadestown, Matilda, SpongeBob, Frozen, Legally Blonde, The Little Mermaid, Finding Nemo, Mary Poppins, Lion King, The Addams Family, Seussical, High School Musical, Alice in Wonderland and CATS. As director: PIPPIN, THE MUSIC MAN, PUFFS and URINETOWN (CentreStage). On stage: Madame Thénardier in LES MISÉRABLES, the Step Mother in CINDERELLA, Baroness Bomburst in CHITTY CHITTY BANG BANG, Widow Corney in OLIVER!, Mrs Bernstein in LITTLE SHOP OF HORRORS, ensemble in 42ND STREET and Booth Singer in & JULIET (all CentreStage), Liz in WHY WEIGHT? (Theatre 3tripple2), and the premieres of BENDING BROADWAY (CentreStage) and SONG CONTEST (Geelong Lyric Theatre Society).",
      "JESSE SIMPSON — ASSISTANT DIRECTOR. Jesse is a graduate of the Western Australian Academy of Performing Arts, where his credits included Baker in INTO THE WOODS, Victor in CABARET, Nathan Starkey in STRICTLY BALLROOM and Bobby (understudy) / Dance Captain in CRAZY FOR YOU. Professional theatre: Frozen The Musical (Disney Theatrical), Swan Lake and Romeo and Juliet (The Australian Ballet), and The Tragedy of Macbeth (Overflow Theatre Company). Recent stage: William Shakespeare in & JULIET and Harold Hill in THE MUSIC MAN (CentreStage), and Scott Hastings in STRICTLY BALLROOM (Footlight Productions), for which he received the Music Theatre Guild of Victoria's Dancer Award. Jesse is also set to appear as Wolf / Cinderella's Prince in the 2026 production of INTO THE WOODS, presented by Matthew Management at Her Majesty's Theatre Ballarat. Screen: Neighbours, Wentworth, Jack Irish, Glitch and Winners & Losers. A five-time Australian and two-time New Zealand Ballroom Champion, Jesse has represented Australia internationally on multiple occasions. Alongside his performance work he is an acting and vocal coach at The Simpson Collective.",
      "BRITTNEY LING — MUSICAL DIRECTOR. Brittney is a world-travelled musician, teacher, arranger and composer who has been directing ensembles since her teens. She was most recently spotted in the role of Musical Director for the CentreStage production of & JULIET, though most of her many orchestra credits are playing trumpet. She has also been spotted in the pit on tin whistles and flutes, clarinet, sax and piano. Outside of the theatre she teaches brass and music theory to students of all ages, is a part-time gym trainer and aqua aerobics instructor at the City of Greater Geelong, and works on mastering as many musical instruments as possible. She plays video games, regularly picks up a crochet hook, and spends as much time as she can with her two darling dogs, Aria and Grainger.",
      "HANNAH FOSTER REEVES — ASSISTANT MUSICAL DIRECTOR. Hannah is a kind and passionate musician who truly encompasses community theatre. A Geelong based musician and teacher with a Bachelor of Music from the Melbourne Conservatorium of Music, she teaches piano and voice at Lara Secondary College and loves sharing her passion for music with the next generation of performers. Most recently, Hannah has played keys in the band for & JULIET (CentreStage) and was Vocal Director for Hadestown: Teen Edition at Geelong High School. Aside from her music and teaching roles, Hannah also works in community development for The Good Neighbourhood Project.",
      "CHLOE QUINNEY — CHOREOGRAPHER. Chloe is an emerging choreographer with over 15 years of dance experience across jazz, tap and hip-hop. She has taught a wide range of students, from beginner youth classes all the way to open adult levels, working across multiple studios throughout Victoria. In 2025, Chloe made her musical theatre choreographic debut with PIPPIN for CentreStage, marking an exciting step into large-scale production work. Alongside this she has choreographed for showcase performances, as well as exam and competition pieces. Chloe is known for her inclusive and supportive approach, taking the time to work with each individual performer to build confidence and bring out their personal strengths. She is passionate about creating an environment where dancers feel challenged, empowered and ultimately proud of their growth.",
      "RICHELLE WHITE — CHILD SAFETY OFFICER. Richelle has worked with the CentreStage Performing Arts Academy (CPAA) as part of the executive team and as Business Manager for the past nine years. In that time she has become deeply passionate about the mental and physical wellbeing of junior performers. Keeping our young performers safe — from themselves and from others in the community — is very important to her. Richelle looks forward to working with the cast and creatives in bringing Frozen to the stage while keeping our young performers safe.",
      "VIRGINIA CONNELL — COSTUME DESIGNER. Virginia is a Registered Nurse in Geelong who has always had a passion for textiles, garment construction, millinery, embroidery, jewellery making and design. When her daughters started high school, a theatre director discovered Virginia could sew and asked her to assist with their shows. This began her love of costumes and musical theatre, and she was with the Geelong Grammar Drama Department for ten years. In that time Virginia was involved in the costume design, construction and coordination of the Geelong Grammar School productions of SHREK JR, LION KING JR, WIZARD OF OZ, LEGALLY BLONDE, THE ADDAMS FAMILY, BEAUTY AND THE BEAST, CHICAGO, ALADDIN, SENSE AND SENSIBILITY and THE GOVERNMENT INSPECTOR. LES MISÉRABLES (2022) was Virginia's first show with the CentreStage family, followed by & JULIET in 2026.",
      "DAWN MURDOCH — WARDROBE MANAGER. Dawn's love of musical theatre began at the age of ten when she joined the GSODA Junior Players. Her love of Highland and Irish dancing also led to a passion for classical ballet, tap and jazz at the Geelong Ballet Centre, where she eventually taught before starting a family. Dawn performed the roles of Choreographer and Vocal Director for the Junior Players after completing her seven years in the company, and again later when her daughters joined. She has performed with GMCC and Geelong Lyric productions including BRIGADOON, NO NO NANETTE, THE SOUND OF MUSIC and PIPPIN, while continuing to sing at various venues. After retiring, Dawn came back to performing as a booth singer in PIPPIN (CentreStage) in 2025. Dedicated to supporting local theatre, Dawn has worked on production teams and volunteered in roles spanning wardrobe, backstage, set construction, committees, event management, marketing and promotions. She joined the CentreStage family in 2017 in wardrobe to support her daughter Michele and granddaughter Cassiana, who were cast in OLIVER!, and has continued to do so ever since.",
      "Frozen has been designed as a whole-of-community experience — with inclusive casting, a safe and supportive rehearsal environment, clear pathways for young performers, and Relaxed and Accessible Performances so more members of the community can experience live theatre. March 2027 is just the beginning."
    ] },
  { slug: "martin-nguyen-producer", cat: "News", date: "Mar 28, 2026", read: "3 min", author: "CentreStage Frozen",
    title: "Announcement: Martin Nguyen Appointed Producer for Frozen by CentreStage",
    img: fill("35cad6_06b948b938c045debbb1f787c2f54cf5~mv2.jpg", 1200, 800),
    excerpt: "CentreStage is proud to announce the appointment of Martin Nguyen as Producer for Frozen.",
    body: [
      "This appointment represents a deliberate and forward-thinking shift in leadership, with Managing Director David Greenwood OAM stepping away from the producer role to focus on broader strategic direction, organisational growth, and continued investment in artists and community outcomes across the region.",
      "“After many years producing our major works, this felt like the right moment to hand the baton to someone I trust deeply. Martin is not only a dear friend, but an exceptionally accomplished creative and leader,” said David Greenwood OAM. “As an organisation, we have a responsibility to create pathways for others to step into leadership. This is not about stepping back — it's about stepping forward in a different way.”",
      "Martin Nguyen brings extensive experience across performance, production and creative leadership, with a reputation for creating environments where artists feel supported, challenged and empowered. “This production is about more than spectacle. It's about connection, courage, and creating a space where artists feel supported to do their best work,” he said.",
      "Frozen will continue CentreStage's commitment to developing regional talent through high-level productions, creating inclusive and supportive rehearsal environments, delivering professional-standard theatre in Geelong, and strengthening pathways into the broader arts industry."
    ] },
  { slug: "winnie-the-pooh-kids", cat: "News", date: "Nov 23, 2025", read: "2 min", author: "David Greenwood",
    title: "Winnie the Pooh Kids: A Joyful Beginning for Our Junior Performers in 2026",
    img: fill("35cad6_e028c5b5122c4b968cc06aafee71cbd9~mv2.png", 1200, 800),
    excerpt: "CentreStage is delighted to announce that our Junior students, aged 5–8, will bring the heart-warming world of the Hundred Acre Wood to life in 2026 with Disney's Winnie the Pooh Kids — open to all, with no audition required.",
    body: [
      "Designed especially for younger performers, Winnie the Pooh Kids offers a gentle, imaginative, and joyful entry into the world of acting, singing, and movement. The production introduces children to storytelling, character exploration, teamwork, and stage confidence in a nurturing and playful environment.",
      "“Winnie the Pooh Kids is a beautiful, gentle way for our youngest performers to discover what it means to work together, build confidence, and share stories on stage,” says Managing Director David Greenwood. “Our Junior program is open to every child, regardless of background or previous experience. We want young people to feel welcome, safe, and supported as they try something new.”",
      "Production season: 9–11 October 2026, onstage at CentreStage. Families can expect an uplifting and colourful performance filled with warmth, imagination, and the signature sweetness of the Hundred Acre Wood.",
      "Enrolments for the 2026 program are open now at centrestage.org.au/satcpaa. Whether your child is stepping on stage for the first time or returning for another year, Winnie the Pooh Kids offers a joyful, confidence-building experience supported by VIT-registered educators and a community that champions every young performer."
    ] },
  { slug: "matilda-jr-2026", cat: "News", date: "Nov 23, 2025", read: "2 min", author: "David Greenwood",
    title: "Matilda Jr. Takes the Stage in 2026: A Fantastic Opportunity for Young Performers Aged 8–12",
    img: fill("35cad6_1d484875c31f4ac490fe4aad76b3861d~mv2.png", 1200, 800),
    excerpt: "A fantastic opportunity for young performers aged 8–12 to take the stage in 2026.",
    body: [
      "Roald Dahl's Matilda Jr. will take over the stage next October and November as part of our 2026 education program — proudly rated Geelong's Number 1 Musical Theatre Education Program by the Geelong Advertiser. This is an open-entry program with no audition required, welcoming new and returning students.",
      "Matilda Jr. is packed with bold characters, witty storytelling, powerful songs by Tim Minchin, and a strong message about courage, creativity and standing up for what is right. Young performers develop acting, singing and movement skills while working collaboratively on a high-quality production, led by VIT-registered educators.",
      "“Matilda Jr. offers a remarkable platform for young people to step into a world of imagination and possibility,” said Managing Director David Greenwood. “One of the things I'm most proud of is that our education program remains open to every child. With no audition barrier, we're ensuring students from all backgrounds can take part, discover their strengths, and feel a sense of belonging on stage.”",
      "Production season: 23 October – 1 November 2026, onstage at CentreStage. Enrolments are open now at centrestage.org.au/satcpaa — if your child loves storytelling, singing or performing, Matilda Jr. is the perfect entry point."
    ] },
  { slug: "frozen", cat: "News", date: "Oct 30, 2025", read: "2 min", author: "David Greenwood",
    title: "CentreStage Announces Frozen — The Broadway Musical at the Geelong Arts Centre",
    img: fill("35cad6_fb20533f532e4c429270577e9d3ab96b~mv2.png", 1200, 800),
    excerpt: "CentreStage is thrilled to announce our 2027 major musical event — Disney's Frozen: The Broadway Musical, opening at the Geelong Arts Centre from 5 to 21 March 2027.",
    body: [
      "After years of anticipation, the magic of Arendelle will come alive on stage in a breathtaking new production that celebrates courage, love, and the unbreakable bond between sisters. Featuring a full orchestra, dazzling costumes, and spectacular effects, Frozen promises to be one of the most visually stunning and emotionally powerful productions ever staged in Geelong.",
      "Audiences can expect to hear all their favourite songs from the beloved Disney film, including Let It Go, Do You Want to Build a Snowman?, For the First Time in Forever, and Love Is an Open Door — alongside incredible new music written exclusively for the Broadway production by Academy Award winners Kristen Anderson-Lopez and Robert Lopez.",
      "“Frozen captures everything we love about musical theatre — heart, spectacle, and storytelling that brings people together,” says Managing Director David Greenwood OAM. “Our goal is to deliver a production that feels as grand as Broadway, while celebrating the incredible talent and spirit of our local community.”",
      "This follows CentreStage's acclaimed seasons of Come From Away, Priscilla, & Juliet, and Les Misérables. Known for our dedication to professional-quality theatre and accessible community participation, Frozen marks an exciting new chapter in CentreStage's creative journey.",
      "Tickets will be available exclusively through the Geelong Arts Centre. Sign up to our newsletter or follow us on social media to be the first to know when bookings open. Disney's Frozen: The Broadway Musical — 5–21 March 2027, Geelong Arts Centre, presented by CentreStage."
    ] },
  { slug: "hadestown", cat: "News", date: "Oct 25, 2025", read: "2 min", author: "David Greenwood",
    title: "Journey to the Underworld — Hadestown: Teen Edition Coming to CentreStage in 2026!",
    img: fill("35cad6_9eb8cd6e51734cc99bbb500892500fa6~mv2.png", 1200, 800),
    excerpt: "The buzz is electric across the CentreStage Performing Arts Academy as our Senior Troupe students have just discovered their 2026 production — Hadestown: Teen Edition.",
    body: [
      "Following months of anticipation, students found out during class this week that they'll be stepping into Anaïs Mitchell's Tony Award-winning world of gods, lovers, and the power of music. Hadestown takes audiences on a mythical journey to the underworld and back, blending the timeless tale of Orpheus and Eurydice with modern storytelling and a soulful, folk-jazz-inspired score.",
      "This Teen Edition has been specially adapted for young performers, giving them the opportunity to tackle rich characters, complex harmonies, and meaningful themes — all within a supportive and educational environment.",
      "Performance details: Hadestown: Teen Edition, 13–22 November 2026 at CentreStage Theatre, part of the 2026 Education Season. Students wishing to take part will need to enrol in our weekly Senior Theatre Program, where participants rehearse and perform in Hadestown while also appearing in a special showcase at the Geelong Arts Centre later in the year.",
      "Enrolments are now open — and with limited places available, we encourage early registration. Find out more and enrol at centrestage.org.au/satcpaa."
    ] },
  { slug: "juliet-cast", cat: "Cast Announcement", date: "Aug 17, 2025", read: "2 min", author: "David Greenwood",
    title: "CentreStage Announces Full Cast for & Juliet at Geelong Arts Centre",
    img: fill("35cad6_e710a024feb94a5185e4f880d4bf0701~mv2.png", 1200, 800),
    excerpt: "The full cast for & Juliet at the Geelong Arts Centre has been announced.",
    body: [
      "This smash-hit musical reimagines Shakespeare's most famous love story with a bold, modern twist and a soundtrack of global pop anthems from producer Max Martin, asking a simple but radical question: what if Juliet chose her own ending?",
      "“& Juliet isn't just a musical — it's a celebration of resilience, identity, and the power of rewriting your own story,” said Managing Director David Greenwood OAM. “To stage this show here in Geelong, with such an extraordinary cast and creative team, is something very special.”",
      "The principal cast is led by Georgia Barrass as Juliet, Jesse Simpson as Shakespeare, Amy Whitfield as Anne, Oliver Turner as Romeo, Storm Randall as May, Kieran Humphreys as Francois, Nelfio Di Marco as Lance, Jamie Long as Angélique, Cath Hughey-Keast as Lady Capulet and Rimon Abohaidar as Capulet — supported by a large ensemble and booth singers.",
      "“One of the things I'm most proud of is the way CentreStage provides opportunities for performers across all ages and backgrounds. Audiences will see a remarkable blend of emerging talent and experienced professionals sharing the stage together,” Greenwood said. & Juliet runs in March at the Geelong Arts Centre, with tickets on sale now."
    ] },
  { slug: "julietcreativeteam", cat: "News", date: "Jun 18, 2025", read: "3 min", author: "David Greenwood",
    title: "Rewrite Your Story: & Juliet Bursts onto Geelong's Playhouse Stage in March 2026",
    img: fill("35cad6_a8c54da0b7e64dbfa172d985028cfff2~mv2.jpg", 1200, 800),
    excerpt: "& Juliet bursts onto Geelong's Playhouse stage in March 2026.",
    body: [
      "What if Juliet's ending wasn't the end? The Tony Award-winning musical sensation & Juliet will light up the Playhouse Theatre at Geelong Arts Centre from 13 to 28 March 2026, featuring the biggest pop hits of the last three decades by Max Martin and a razor-sharp book by David West Read of Schitt's Creek.",
      "CentreStage has assembled one of its most exciting and diverse creative teams to date. At the helm is director Matthew Henderson, a theatre veteran with more than 25 years' experience on global Disney Theatricals productions including The Lion King, Aladdin and Frozen, following his acclaimed direction of Come From Away.",
      "Choreography is led by Natalya Munro (RENT, Come From Away); musical direction by multi-instrumentalist Britteny Ling; and vocal direction by Sallyanne Cowdell. Behind the scenes, Brett Greenwood and David Greenwood OAM co-produce the season.",
      "In staging & Juliet, CentreStage is proud to honour the show's spirit by affirming and celebrating LGBTQIA+ stories, cultural diversity and inclusive representation across its cast, crew and creative leadership — extending the work through workshops, talkbacks and behind-the-scenes access with local schools, youth groups and First Nations organisations.",
      "The staging promises a visual spectacle: neon lights, electric colour, sharp choreography and live on-stage musicians. & Juliet runs 13–28 March 2026 at the Playhouse Theatre, Geelong Arts Centre. Tickets are on sale now via geelongartscentre.org.au or 1300 251 200, and auditions for performers aged 18 and over will open soon."
    ] },
  { slug: "reconciliation-action-plan", cat: "Health & Wellbeing", date: "Jun 6, 2025", read: "2 min", author: "David Greenwood",
    title: "CentreStage Launches Reconciliation Action Plan for a More Inclusive Creative Future",
    img: fill("11062b_c936fa93605143ba9d9d43af32072c3d~mv2.jpeg", 1200, 800),
    excerpt: "CentreStage is proud to announce the release of its first Reconciliation Action Plan (RAP) — a formal commitment to truth-telling, relationship-building, and creating meaningful opportunities for Aboriginal and Torres Strait Islander Peoples across all areas of our organisation.",
    body: [
      "Based on Wadawurrung Country in Geelong, and led by creatives with First Nations heritage from the Palawa people of Lutruwita (Tasmania), CentreStage has long recognised the role of theatre in celebrating culture, challenging injustice, and giving voice to untold stories.",
      "“Reconciliation is not a side project — it's centre stage,” says Managing Director David Greenwood OAM. “Every spotlight we turn on must illuminate not only talent, but truth. This plan challenges us to listen deeply, act humbly, and honour the stories that have been told on this Country for over 60,000 years.”",
      "Over the next two years, our RAP will drive action across three pillars: Relationships, Respect, and Opportunities. Key commitments include inclusive casting processes that amplify First Nations performers, annual scholarships and mentorship for Aboriginal and Torres Strait Islander youth, cultural awareness training for all staff, board members and volunteers, and partnerships with local First Nations organisations including the Wadawurrung Traditional Owners Aboriginal Corporation and Wathaurong Co-operative.",
      "For CentreStage, reconciliation isn't just about representation — it's about responsibility. Our progress will be monitored, publicly reported, and shaped by feedback from our First Nations stakeholders. Together, we can help ensure that First Nations knowledge, art, and leadership are not only recognised — but celebrated, resourced, and centre stage."
    ] },
  { slug: "child-safety-plan", cat: "Health & Wellbeing", date: "Jun 5, 2025", read: "2 min", author: "David Greenwood",
    title: "Why Safety is at the Centre of CentreStage: Our Updated Child Safety Plan",
    img: fill("35cad6_46078ee263a74dfc874e436f36a9d516~mv2.jpg", 1200, 800),
    excerpt: "CentreStage is more than a theatre company. We work with hundreds of young people each year across our education programs, mainstage productions, and talent agency. For us, child safety is not a box to tick — it's a promise we uphold every day.",
    body: [
      "Our updated Child Safety Plan goes beyond compliance. It aligns with the latest Victorian Child Safe Standards, Wage Inspectorate guidelines, and best-practice principles for working with young people in the performing arts. It is also aligned with our We Are People Plan, reinforcing our core values: We Belong, We Create, We Listen, We Care.",
      "The plan sets out clearer communication channels — approved ways to connect with young people and families, with no direct messages and no unsupervised contact — an emergency response framework for crisis situations, and explicit inclusion and adjustment policies supporting neurodiverse children, students with disability, EAL learners, and young people from culturally diverse backgrounds.",
      "It also covers updated risk assessments for rehearsals, performances and excursions, and training requirements: all staff must complete Child Safety Mandatory Training via the Department of Education and adhere to our internal Code of Conduct. The plan aligns with the Child Employment Act, Worker Screening Act, and Children, Youth and Families Act, and includes a zero-tolerance approach to bullying, discrimination, or any form of harm.",
      "Inclusion, safety, and child voice aren't add-ons at CentreStage — they are at the centre of everything we do. Thank you for continuing to trust CentreStage with your child's creativity, confidence, and wellbeing. This plan is our promise: to keep listening, to keep improving, and to ensure that every child who steps into CentreStage feels safe, seen, and celebrated."
    ] },
  { slug: "spongebob-cast", cat: "Cast Announcement", date: "May 17, 2025", read: "5 min", author: "David Greenwood",
    title: "Dive Into the Fun: CentreStage Announces SpongeBob The Musical: Youth Edition Casts for Senior Troupe (2025)",
    img: fill("35cad6_f3489b104d6b45a7a01252c513d6d639~mv2.jpg", 1200, 800),
    excerpt: "CentreStage announces the SpongeBob The Musical: Youth Edition casts for Senior Troupe (2025).",
    body: [
      "CentreStage is proud to announce the cast for our 2025 Senior Troupe production of SpongeBob The Musical: Youth Edition, with four unique casts across Senior Classes A–D. This year's Senior students, aged 12 to 18, are about to make a big splash on stage.",
      "Set in the vibrant underwater city of Bikini Bottom, the show follows our favourite sea sponge as a nearby volcano threatens to erupt and destroy the town. In the face of fear and doubt, SpongeBob and his friends discover that optimism, teamwork and belief in yourself can save the day — all set to songs by Cyndi Lauper, Panic! At the Disco, Sara Bareilles, David Bowie and more.",
      "Each of our four Senior Troupe classes rehearses and stages its own full production, so every student has the opportunity to shine — whether as a lead, a comedic character, or part of the high-energy ensemble. As a true ensemble musical, SpongeBob celebrates community, courage and creativity.",
      "All Senior Troupe students will also perform in our End-of-Year Musical Theatre Showcase at the Geelong Arts Centre in December 2025, developing their ensemble craft in a professional theatre environment. Congratulations to every performer across Senior Troupes A, B, C and D."
    ] },
  { slug: "arts-wellbeing-collective", cat: "Health & Wellbeing", date: "Wellbeing", read: "3 min", author: "CentreStage",
    title: "A Message From the Arts Wellbeing Collective",
    img: "assets/blog/stage-01.jpg",
    excerpt: "The performing arts ask a great deal of the people who make them. Looking after yourself is not a luxury — it is part of the craft.",
    body: [
      "The performing arts are among the most rewarding pursuits a person can take up, and also among the most demanding. Long rehearsal periods, public performance, auditions, rejection and the sheer emotional labour of telling stories can take a real toll. At CentreStage we believe that caring for the wellbeing of performers is not separate from making good theatre — it is what makes good theatre possible.",
      "The Arts Wellbeing Collective, of which CentreStage is a proud member, exists to promote and support the mental health and wellbeing of everyone who works in the performing arts. Its message is simple: you are a person first and a performer second, and your health matters more than any single show.",
      "That means normalising conversations about stress, anxiety and burnout, and treating them with the same seriousness we would give a physical injury. It means building rehearsal rooms where people feel safe to speak up, ask for help, or simply say they are having a hard week. And it means knowing where to turn when things become too much.",
      "If you or someone you know is struggling, support is always available. The Support Act Wellbeing Helpline (1800 959 500) offers free, confidential counselling to anyone in the arts, 24 hours a day. In an emergency, always call 000. You never have to carry it alone.",
      "Looking after yourself is not a distraction from your art. It is part of it. We are, all of us, only human — and there is real strength in remembering that."
    ] },
  { slug: "art-come-down", cat: "Health & Wellbeing", date: "Wellbeing", read: "4 min", author: "CentreStage",
    title: "Getting Through the Post-Show 'Come Down'",
    img: "assets/blog/stage-03.jpg",
    excerpt: "Closing night is a strange kind of grief. Here is why the post-show slump hits so hard, and how to move through it.",
    body: [
      "Ask any performer about the days after a show closes and you will hear the same thing: a flat, hollow feeling that seems out of proportion to the event. The lights go down, the set comes apart, the group chat goes quiet, and something that filled your every waking hour simply stops. This is the post-show 'come down', and it is one of the least talked-about parts of a life in theatre.",
      "There are real reasons it hits so hard. For weeks or months your body has been running on adrenaline, purpose and routine. You have shared something intense with a group of people who quickly became a second family. Then, almost overnight, all of it is gone. The structure disappears, the shared goal is complete, and the daily hit of performance energy vanishes. Your brain and body notice.",
      "The first thing to know is that what you are feeling is normal, and it is temporary. Naming it helps. This is not evidence that something is wrong with you — it is the natural comedown from a genuine high.",
      "Be gentle with yourself in the days that follow. Sleep. Eat properly. Move your body. Resist the urge to immediately fill the gap with another all-consuming commitment before you have had a moment to rest. The post-show slump passes faster when you let yourself recover rather than pushing straight through it.",
      "Stay connected to your people. The friendships made in a production are real, and they do not have to end with the show. Plan a catch-up, share the photos, keep the group chat alive. Reflecting together on what you made can turn the ending into a celebration rather than a loss.",
      "And when you are ready, look forward. There will be another audition, another season, another story to tell. The come down is real, but so is the next opening night. If the low feeling lingers for more than a couple of weeks, or starts to affect your daily life, reach out — to someone you trust, to your GP, or to the Support Act Wellbeing Helpline on 1800 959 500."
    ] },
  { slug: "pre-show-meditation", cat: "Health & Wellbeing", date: "Wellbeing", read: "3 min", author: "CentreStage",
    title: "A Pre-Show Meditation for Performance Energy",
    img: "assets/blog/stage-04.jpg",
    excerpt: "Five minutes of stillness before you step into the wings can do more for your performance than an hour of frantic warming up.",
    body: [
      "Nerves before a performance are not the enemy. That flutter in your chest is energy, and energy is exactly what you need on stage. The trick is not to get rid of it, but to gather it — to walk into the wings focused, grounded and ready rather than scattered and tense. A short meditation before curtain can do precisely that.",
      "Find a quiet corner backstage, or step outside if you can. Sit or stand comfortably, with your feet flat on the floor and your shoulders soft. You do not need anything special — just five minutes and your own breath.",
      "Begin by breathing in slowly through your nose for a count of four, holding gently for four, and releasing through your mouth for six. The long exhale is what calms the nervous system. Repeat this five or six times, letting each breath slow a little more.",
      "Now bring your attention to your body, from the ground up. Feel your feet on the floor, the weight of your legs, the length of your spine, the crown of your head. Imagine your nerves not as something to fight but as bright energy pooling in your centre, ready to be spent generously the moment you step on stage.",
      "Finally, picture the first thirty seconds of your performance going exactly as you have rehearsed it — your first entrance, your first line, your first breath in front of the audience. Let it feel easy and familiar. Then open your eyes, roll your shoulders back, and go.",
      "Make this your ritual. Done before every show, it becomes a reliable switch that moves you from waiting to performing. The energy was always going to be there. This is how you put it to work."
    ] },
  { slug: "dance-injuries", cat: "Health & Wellbeing", date: "Wellbeing", read: "5 min", author: "CentreStage",
    title: "7 Common Dance Injuries (and How to Prevent Them)",
    img: "assets/blog/stage-11.jpg",
    excerpt: "Dance is athletic, repetitive and demanding. Understanding the most common injuries is the first step to avoiding them.",
    body: [
      "Dancing is one of the most physically demanding things a performer can do, combining strength, flexibility, balance and stamina, often for hours at a time. With that comes the risk of injury. The good news is that most dance injuries are preventable with the right preparation, technique and habits. Here are seven of the most common, and how to protect yourself.",
      "1. Ankle sprains. The single most common dance injury, usually from landing awkwardly or rolling the foot. Prevention starts with strong, mobile ankles — build them with controlled rises, balance work and proper landings that roll through the whole foot.",
      "2. Achilles tendinitis. Overuse of the tendon at the back of the heel, common in dancers who spend a lot of time on the balls of their feet. Warm up thoroughly, increase intensity gradually, and never push through sharp heel pain.",
      "3. Knee injuries. Improper alignment — knees rolling inwards over the toes — is a frequent culprit. Focus on tracking your knees over your feet in every plié and landing, and build the surrounding muscles for support.",
      "4. Hip flexor strain. From repetitive high kicks and extensions. Keep the hips mobile and strong, and warm them up specifically before any big movement work.",
      "5. Stress fractures. Small cracks in the bones of the foot or shin from repeated impact, often when training load increases too quickly. Build up gradually, rest properly, and fuel your body well.",
      "6. Lower back pain. Often from poor core strength or over-arching. A strong, engaged core protects the spine through every lift, bend and extension.",
      "7. Muscle strains and tears. Usually the result of dancing cold. The simplest prevention of all: never skip your warm-up, and cool down afterwards.",
      "Across all of these, the same principles apply. Warm up before and cool down after every session. Increase difficulty gradually. Wear appropriate footwear on suitable flooring. Stay hydrated and rest when you need to. And most importantly, listen to your body — a niggle reported early is far easier to manage than an injury pushed through. If pain persists, see a physiotherapist or doctor. Your body is your instrument; look after it."
    ] },
  { slug: "singing-voice-healthy", cat: "Health & Wellbeing", date: "Wellbeing", read: "4 min", author: "CentreStage",
    title: "7 Tips to Keep Your Singing Voice Healthy",
    img: "assets/blog/stage-02.jpg",
    excerpt: "Your voice is a living instrument. These simple habits will help it stay strong, flexible and reliable for years to come.",
    body: [
      "Singers are athletes of the voice, and like any athlete they need to look after the instrument they rely on. A healthy voice is not just about talent or training — it is about daily habits that protect the delicate mechanism that produces sound. Here are seven ways to keep your voice in good shape.",
      "1. Warm up every time. Never launch into full-voice singing cold. A few minutes of gentle humming, lip trills and sirens prepares the vocal folds and prevents strain. Warm down afterwards too, especially after a demanding rehearsal or show.",
      "2. Hydrate, hydrate, hydrate. Vocal folds work best when they are well lubricated, and that comes from drinking water consistently throughout the day — not just before you sing. Aim to sip regularly rather than gulp all at once.",
      "3. Rest your voice. The voice recovers with rest just like any muscle. After heavy use, give it quiet time. Avoid shouting, and be especially careful at loud parties or events where you strain to be heard.",
      "4. Support with your breath. Good technique means powering your sound from the breath and the body, not squeezing at the throat. Proper support protects the voice and gives you far more control.",
      "5. Avoid what dries you out. Excessive caffeine, alcohol and smoking all dehydrate and irritate the voice. Be mindful of them, particularly around performances.",
      "6. Do not sing through pain. Vocal pain, persistent hoarseness or a voice that tires quickly are warning signs. Rest, and if symptoms continue for more than a week or two, see a doctor or a voice specialist.",
      "7. Look after the rest of you. Sleep, general health and stress all affect the voice. When you are run down, your voice is too. Caring for your whole self is caring for your sound.",
      "Build these habits early and they become second nature. Treat your voice with respect and it will serve you well through a lifetime of singing."
    ] },
  { slug: "grief-and-loss", cat: "Health & Wellbeing", date: "Wellbeing", read: "4 min", author: "CentreStage",
    title: "How Do I Deal With Grief and Loss?",
    img: "assets/blog/stage-09.jpg",
    excerpt: "Grief touches every life, including creative ones. There is no timetable and no right way — only your way, supported by others.",
    body: [
      "Grief is one of the most universal human experiences, and one of the loneliest. Whether it follows the loss of a loved one, the end of a relationship, or any of the countless smaller losses a life contains, grief can arrive suddenly or settle in slowly, and it rarely behaves the way we expect it to. If you are grieving, the first and most important thing to know is this: what you feel is valid, and you are not doing it wrong.",
      "There is no correct order to grief, and no timetable. You may feel sadness, anger, numbness, guilt, relief, exhaustion — sometimes all in a single day. These feelings are not signs of weakness or failure. They are the natural response to loss, and they come and go in waves rather than in a tidy line.",
      "Be patient and gentle with yourself. Grief is tiring. Allow yourself rest, and lower your expectations of what you can manage for a while. Basic care — eating, sleeping, moving, stepping outside — matters more than usual, even when it feels like too much.",
      "You do not have to carry it alone. Talking helps, whether with friends, family, or a professional. Many people find that a creative outlet — writing, music, performance — gives shape to feelings that are hard to put into words. Our community can be a source of real support; lean on it.",
      "If grief becomes overwhelming, or if you find yourself unable to function, or having thoughts of harming yourself, please reach out for help immediately. Griefline (1300 845 745) offers specialist grief support, Lifeline (13 11 14) is available 24 hours a day, and in an emergency you should always call 000.",
      "Grief changes over time. It does not disappear, but it softens, and it makes room for life to return alongside it. Be kind to yourself while you wait for that to happen — and let the people who care about you help you through."
    ] },
  { slug: "how-to-audition", cat: "Advice", date: "Craft", read: "5 min", author: "CentreStage",
    title: "How to Prepare for Your First Musical Theatre Audition",
    img: "assets/blog/stage-05.jpg",
    excerpt: "Your first audition can be nerve-wracking. With a little preparation, it can also be one of the most exciting rooms you ever walk into.",
    body: [
      "Auditioning is a skill in its own right, separate from performing, and like any skill it gets easier with preparation and practice. If you are facing your first musical theatre audition, the nerves you feel are completely normal — and entirely manageable. Here is how to walk in ready.",
      "Start by reading the brief carefully. Know what the panel is asking for: how many songs, how long, whether there is a dance call, what to wear, what to bring. Preparing exactly what is asked shows professionalism before you have sung a note.",
      "Choose material that suits you and that you genuinely enjoy. A song you love, sung honestly and within your range, will always beat an ambitious choice you cannot quite manage. Know it inside out, so nerves cannot shake it loose.",
      "Prepare your body as well as your material. Warm up your voice, arrive early, and give yourself time to settle. Bring your sheet music clearly marked for the accompanist, and have a spare copy.",
      "In the room, remember the panel wants you to be good — they are hoping you are the answer to their problem. Introduce yourself warmly, take a breath, and perform for them rather than at them. If you make a mistake, keep going; recovery says more about you than perfection.",
      "Whatever the outcome, treat every audition as practice. The more rooms you walk into, the more they feel like home. And at CentreStage, many of our programs and junior productions need no audition at all — so there is always a way onto the stage."
    ] },
  { slug: "stage-fright", cat: "Advice", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Turning Stage Fright Into Stage Presence",
    img: "assets/blog/stage-12.jpg",
    excerpt: "The racing heart before an entrance is not a flaw to be fixed. It is fuel — if you know how to use it.",
    body: [
      "Almost every performer, from the youngest student to the most seasoned professional, feels some version of stage fright. The pounding heart, the dry mouth, the fluttering stomach — these are not signs that you are not ready. They are signs that you care, and that your body is preparing you for something that matters.",
      "The goal is not to eliminate those feelings but to redirect them. The physical sensations of fear and excitement are almost identical; what differs is how we label them. Telling yourself 'I am excited' rather than 'I am terrified' is not a trick — it is an accurate reading of the same energy.",
      "Preparation is the foundation of confidence. When you know your material deeply, your body can perform it even while your mind is nervous. Rehearse until the work lives in your muscles, not just your memory.",
      "Breathe. Slow, deep breathing calms the nervous system and steadies the voice. A few long exhales in the wings can transform how you feel in seconds.",
      "Finally, shift your focus outward. Stage fright feeds on self-consciousness — on watching yourself. The moment you turn your attention to your scene partner, your story and your audience, there is no room left for fear. Presence is simply attention placed fully on the moment. Give it away generously, and the fright becomes something far more useful: aliveness."
    ] },
  { slug: "warm-up-vocal", cat: "Craft", date: "Craft", read: "3 min", author: "CentreStage",
    title: "A Singer's Warm-Up: Five Minutes That Change Everything",
    img: "assets/blog/stage-22.jpg",
    excerpt: "You would never sprint without stretching. Your voice deserves the same respect before it works.",
    body: [
      "A good vocal warm-up is one of the simplest and most overlooked tools a singer has. Five focused minutes before you sing can improve your tone, extend your range, protect your voice from strain and settle your nerves all at once. Here is a warm-up you can do anywhere.",
      "Begin with breath. Stand tall, relax your shoulders, and take a few slow, deep breaths into your belly. Feel the breath low in your body — this is the engine of everything that follows.",
      "Move to gentle humming. Hum through a comfortable range, feeling the buzz on your lips and the front of your face. Humming eases the voice into action without any strain.",
      "Add lip trills and sirens. Blow through loosely closed lips while gliding from low to high and back, letting your voice swoop like a siren. This connects your range smoothly and frees up tension.",
      "Then open into vowels. Sing simple five-note scales on 'ee', 'ah' and 'oo', keeping everything relaxed and easy, gradually widening your range as you feel ready.",
      "Never force high notes cold, and stop if anything hurts. Done consistently before every rehearsal and show, this five-minute ritual will change how your voice feels and lasts. And do not forget to warm down afterwards — a few gentle hums to release the voice after hard work."
    ] },
  { slug: "why-ensemble", cat: "Behind the Scenes", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Why the Ensemble Is the Heart of Every Show",
    img: "assets/blog/stage-08.jpg",
    excerpt: "The lead takes the bow, but the ensemble builds the world. There is no such thing as a small part.",
    body: [
      "Ask an experienced director what makes a production sing, and few will point first to the leads. They will talk about the ensemble — the group of performers who build the world of the show around its principal characters. At CentreStage we hold a firm belief: being in the ensemble is not a smaller part, it is a position of responsibility and trust.",
      "The ensemble creates the atmosphere an audience believes in. A crowd scene, a village, a chorus of voices — these are what make a stage feel full of life. Without a committed ensemble, even the finest lead performance plays out in an empty room.",
      "Ensemble work also teaches the deepest skills in theatre. Listening, reacting, moving as one, supporting the story without pulling focus — these are the marks of a mature performer. Many of the strongest leads you will ever see learned their craft in the ensemble first.",
      "There is discipline in it, too. Ensemble performers often play multiple roles, execute complex staging and harmonies, and maintain energy and character even when the audience's eyes are elsewhere. That reliability is the backbone of a production.",
      "So when a young performer is cast in the ensemble, we ask them to wear it with pride. They are not waiting for a bigger role. They are doing one of the most important jobs on the stage — and learning to be the kind of artist every company wants in the room."
    ] },
  { slug: "first-class-nerves", cat: "Advice", date: "Community", read: "3 min", author: "CentreStage",
    title: "Starting Classes: What to Expect in Your First Term",
    img: "assets/blog/stage-07.jpg",
    excerpt: "Walking into a new class for the first time takes courage. Here is what that first term really looks like.",
    body: [
      "Starting something new is exciting and a little daunting all at once, especially when it involves standing up in front of other people. If you or your child is about to begin classes at CentreStage, here is a sense of what the first term holds — and why the nerves fade faster than you might think.",
      "In the early weeks, the focus is on comfort and connection. Good teachers know that no real learning happens until a student feels safe, so the first sessions are about games, introductions and gentle activities that build trust and friendships. You do not need any experience to belong.",
      "From there, students begin exploring the three pillars of musical theatre — acting, singing and movement — at a level suited to their age and stage. Skills are built gradually, through play as much as instruction, and every student is met where they are.",
      "You will notice confidence growing almost before skills do. Performing asks young people to take small, supported risks, and each one they survive makes the next one easier. Many parents tell us the biggest change they see in the first term is not on the stage but in daily life.",
      "By the end of the term, most students have made new friends, learned real skills, and often performed in some small way for one another. More than anything, they have discovered that the room they were nervous to enter has become a place they cannot wait to return to."
    ] },

  { slug: "learning-lines", cat: "Advice", date: "Craft", read: "4 min", author: "CentreStage",
    title: "How to Learn Your Lines (and Actually Remember Them)",
    img: "assets/blog/stage-23.jpg",
    excerpt: "Memorising a script feels impossible until you know how. These techniques turn words on a page into second nature.",
    body: [
      "Learning lines is one of the first practical challenges every actor faces, and one that can feel overwhelming when you are staring at pages of text. The secret is that memorisation is a skill, not a talent — and there are reliable techniques that make it far easier.",
      "Start early and work in small chunks. Cramming the night before rehearsal rarely sticks. Break your script into short sections and learn a little each day; repetition over time beats intensity every time.",
      "Understand before you memorise. Lines learned as meaningless words are fragile; lines learned as thoughts your character actually has are far stronger. Know what you want in the scene, and why you say each line, and the words start to feel inevitable.",
      "Learn with your cues. In performance you respond to other people, so practise your lines as answers to the lines that come before them. Cover your page and speak your responses to your scene partner's cues until they come without thought.",
      "Get the lines into your body. Say them out loud, walk while you rehearse, add the movement from the staging. Physical action anchors memory in a way that silent reading never will.",
      "Finally, test yourself and be patient. Everyone learns at a different pace. Rehearse with a friend, run lines in the car, and trust that with steady work the script will move from the page into your bones — where, on opening night, it will simply be there."
    ] },
  { slug: "dance-basics", cat: "Craft", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Dance for Actors: Why Every Performer Should Move",
    img: "assets/blog/stage-20.jpg",
    excerpt: "You do not have to be a dancer to benefit from dance. Movement is a language every performer should speak.",
    body: [
      "Some performers arrive at musical theatre certain of one thing: they are not dancers. And yet dance, in its broadest sense, is one of the most valuable things any performer can study — not because every actor needs to execute a triple pirouette, but because movement is fundamental to how we tell stories with our bodies.",
      "Dance builds body awareness. It teaches you where your limbs are, how you carry weight, how to move with intention and control. That awareness transforms everything an actor does, from a simple cross of the stage to the physical life of a character.",
      "It builds fitness and stamina too. Musical theatre is athletic, and the performer who can sing a demanding number while moving is the performer directors trust. Dance training develops exactly that capacity.",
      "Movement also unlocks expression. So much of what an audience reads happens in the body — posture, gesture, rhythm, stillness. Dancers learn to use all of it deliberately, and that vocabulary makes for richer, more truthful acting.",
      "Perhaps best of all, group dance builds ensemble. Learning choreography together, moving as one, relies on the listening and generosity that make great theatre. At CentreStage our dance classes welcome every level, from first-timers to experienced movers, in a supportive and inclusive room. You do not need to be a dancer to start. You only need to be willing to move."
    ] },
  { slug: "audition-song-choice", cat: "Advice", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Choosing the Right Audition Song",
    img: "assets/blog/stage-24.jpg",
    excerpt: "The song you pick tells the panel who you are before you sing a note. Choose wisely.",
    body: [
      "For many performers, the hardest part of an audition is not the singing — it is deciding what to sing. The right song can show a panel exactly what you offer; the wrong one can work against even a fine voice. Here is how to choose well.",
      "First, sing within yourself. Pick material that sits comfortably in your range and shows your voice at its best, rather than a song that stretches you to your limits. A panel wants to hear you sound easy and in control, not straining for notes.",
      "Match the style to the show. If you are auditioning for a contemporary musical, an operatic aria may send the wrong signal, and vice versa. Read the brief and choose material in the world of the production where you can.",
      "Choose a song that lets you act. A great audition is a piece of storytelling, not a vocal display. Pick something with a clear emotional journey you can play, so the panel sees an actor who sings, not just a singer.",
      "Make it your own, honestly. Avoid the most overdone numbers if you can, but never sacrifice a song you connect with for the sake of being different. Authenticity always reads.",
      "Finally, know it completely. Whatever you choose, learn it so thoroughly that nerves cannot dislodge it. Confidence in your material frees you to be present, and presence is what a panel remembers long after the last note."
    ] },
  { slug: "backstage-etiquette", cat: "Behind the Scenes", date: "Community", read: "4 min", author: "CentreStage",
    title: "Backstage Etiquette: The Unwritten Rules of the Wings",
    img: "assets/blog/stage-18.avif",
    excerpt: "The audience never sees backstage, but how you behave there defines the whole company. Learn the code.",
    body: [
      "Every theatre has a culture backstage — a set of unwritten rules that keep a production running safely and smoothly, and that mark you out as a professional the company wants back. For newcomers, learning this etiquette is as important as learning your lines.",
      "Be early. 'On time' in the theatre means early. Arriving with plenty of time to prepare, warm up and settle shows respect for everyone depending on you.",
      "Keep the wings quiet and clear. Backstage is a working space, often in the dark and full of moving scenery. Whisper, watch where you stand, and never block a crossover or a quick-change area. The show's safety depends on it.",
      "Respect the crew. Stage managers, technicians and dressers are the people who make the magic happen. Follow their instructions without argument, thank them, and never touch equipment or props that are not yours.",
      "Look after your things and the space. Keep your costume and props in their place, ready for the next entrance. Clean up after yourself. A tidy backstage is a safe backstage.",
      "Support your fellow performers. Backstage is where nerves run high and encouragement matters most. A quiet 'break a leg', a steady presence, a helping hand with a costume — these are the marks of a good company member. Behave well in the wings and you become someone people love to work with, which in the theatre is worth as much as talent."
    ] },
  { slug: "building-a-character", cat: "Craft", date: "Craft", read: "5 min", author: "CentreStage",
    title: "Building a Character From the Page Up",
    img: "assets/blog/stage-15.jpg",
    excerpt: "A great performance begins long before rehearsal. It begins with curiosity about the person you are about to become.",
    body: [
      "Turning words on a page into a living, breathing character is the heart of the actor's craft. It can seem mysterious, but it is built from a series of practical, curious steps that any performer can learn. Here is a way in.",
      "Start with the text. Read the whole play, not just your scenes, and gather the facts: who your character is, where they come from, what others say about them, what they say about themselves. Everything you need is seeded in the script.",
      "Ask what your character wants. Every character is driven by desire — in the whole play and in every single scene. Find those wants, and you find the engine of your performance. Acting is not showing feelings; it is pursuing objectives.",
      "Consider the obstacles. Drama lives in the gap between what a character wants and what stands in their way. Knowing what blocks your character tells you where the tension and the truth of each scene lie.",
      "Then bring in the body and voice. How does this person move, stand, speak, breathe? Small physical choices — a posture, a rhythm, a habit — can unlock a character faster than pages of analysis.",
      "Finally, play, and stay open. A character deepens through rehearsal, through what your scene partners give you, through discoveries you could never plan. Hold your preparation lightly enough to be surprised. The most alive performances come from actors who have done the work and then stay genuinely present to the moment."
    ] },
  { slug: "parents-guide", cat: "Advice", date: "Community", read: "4 min", author: "CentreStage",
    title: "A Parent's Guide to Supporting a Young Performer",
    img: "assets/blog/stage-26.jpg",
    excerpt: "You do not need a theatre background to be the best support your child could have. You only need to show up.",
    body: [
      "When a child falls in love with performing, parents often wonder how best to support them — especially if the stage is unfamiliar territory. The good news is that the most valuable support has nothing to do with theatrical knowledge and everything to do with encouragement.",
      "Show up and show interest. Ask about class, come to the performances, and celebrate the effort as much as the outcome. Feeling that a parent values what they do gives a young performer enormous confidence.",
      "Support the process, not just the result. Learning lines, practising songs, attending every rehearsal — these take real commitment. Helping your child stay organised and reliable teaches them professionalism that serves them far beyond the stage.",
      "Let them experience the ups and downs. Not every audition ends in the hoped-for role, and that disappointment, while hard to watch, is a powerful teacher of resilience. Be a soft place to land rather than trying to remove every setback.",
      "Look after their wellbeing. Balance is important. Make sure there is time for rest, schoolwork, friends and sleep, especially during intense production periods, and keep an eye on how they are coping.",
      "Above all, let it be theirs. The joy your child finds in performing is their own. Your belief in them — steady, warm and unconditional — is the foundation everything else is built on. At CentreStage we consider parents part of our community, and we are always here to talk if you have questions along the way."
    ] },
  { slug: "tech-week", cat: "Behind the Scenes", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Surviving (and Loving) Tech Week",
    img: "assets/blog/stage-17.jpg",
    excerpt: "The most demanding week of any production is also where the magic finally comes together. Here is how to thrive in it.",
    body: [
      "Ask any theatre-maker about tech week — the intense final stretch before opening when lights, sound, sets and costumes all come together — and you will get a knowing smile. It is long, demanding and occasionally chaotic. It is also where a show truly becomes itself. Here is how to survive it and even come to love it.",
      "Understand what tech week is for. This is when the technical elements meet the performance for the first time. Progress can feel slow, with lots of stopping and starting, because the focus has shifted from your performance to the hundreds of cues that surround it. Patience is the key virtue.",
      "Look after your body. Long hours take a toll. Sleep as much as you can, eat properly, stay hydrated, and warm up even when you are tired. Your voice and body need extra care during the busiest week of all.",
      "Bring your patience and your professionalism. There will be waiting. Use it well — stay quiet, stay ready, and be exactly where you need to be when you are called. The crew are working incredibly hard; matching their focus makes everyone's week easier.",
      "Stay positive and support each other. Energy is contagious, for better and worse. A company that keeps its humour and looks after one another through tech week walks into opening night as a team.",
      "And then, notice the magic. Somewhere in tech week the lights hit the set, the costumes appear, the music swells, and the thing you have been building for months finally stands before you complete. There is no feeling in theatre quite like it. Endure the hard hours, and that moment is your reward."
    ] },
  { slug: "resilience-rejection", cat: "Advice", date: "Community", read: "4 min", author: "CentreStage",
    title: "Handling Rejection: The Skill No One Teaches You",
    img: "assets/blog/stage-16.jpg",
    excerpt: "Every performer faces more nos than yeses. Learning to meet them well is what makes a lasting career possible.",
    body: [
      "Rejection is woven into a life in the performing arts. Auditions outnumber castings, and even the most successful performers hear 'no' far more often than 'yes'. Learning to handle rejection is not a sign that you have failed — it is one of the most important skills a performer can develop, and no one is born knowing it.",
      "First, remember that a 'no' is rarely about your worth. Casting decisions turn on countless factors beyond your control — height, age, look, the particular blend a director is assembling, someone who simply fit a specific gap. A rejection is information about one role on one day, not a verdict on your talent.",
      "Let yourself feel the disappointment, then let it move on. Pretending it does not sting is not resilience; feeling it honestly and then choosing to keep going is. Give yourself a moment, and then turn your eyes forward.",
      "Look for the lesson without inventing faults. Sometimes there is something to learn; often there is not. Take what is genuinely useful and leave the rest, rather than tearing your performance apart looking for reasons.",
      "Keep working and keep auditioning. The performers who succeed are rarely the ones who were never rejected — they are the ones who kept walking into the room. Every audition builds your craft, whatever the outcome.",
      "And lean on your people. A community that understands the sting of rejection is a powerful thing. At CentreStage we build exactly that kind of community, because careers are long, the road has plenty of nos in it, and no one should have to walk it alone."
    ] },
  { slug: "teamwork-theatre", cat: "Community", date: "Community", read: "3 min", author: "CentreStage",
    title: "What Theatre Teaches About Teamwork",
    img: "assets/blog/stage-19.png",
    excerpt: "A show is one of the most complex team efforts there is. The skills it builds last a lifetime.",
    body: [
      "A theatre production is one of the great feats of teamwork. Dozens or even hundreds of people — performers, musicians, crew, creatives, front of house — pull together toward a single goal that none of them could achieve alone. It is no wonder that the lessons theatre teaches about working with others reach far beyond the stage.",
      "Theatre teaches interdependence. On stage, you rely completely on the people around you — for your cue, your harmony, your catch in a lift. You learn quickly that your success and theirs are the same thing, and that lifting others lifts the whole show.",
      "It teaches communication and trust. Companies build a shared language and a habit of listening, because a production only works when everyone is genuinely paying attention to everyone else. That trust, earned through rehearsal, is what lets people take creative risks together.",
      "It teaches accountability. When you miss an entrance, everyone feels it. Theatre instils a powerful sense of responsibility to the group — being reliable, prepared and present because others are counting on you.",
      "And it teaches shared celebration. The bow at the end belongs to everyone, and the joy of having made something together is one of the strongest bonds there is. Young people who learn teamwork this way carry it into school, work and life, long after the set has come down."
    ] },
  { slug: "confidence-kids", cat: "Community", date: "Community", read: "4 min", author: "CentreStage",
    title: "How Performing Builds Confidence in Young People",
    img: "assets/blog/stage-21.jpg",
    excerpt: "Ask parents what changed most, and they rarely mention the singing. They mention the child who stands a little taller.",
    body: [
      "At CentreStage we have the privilege of watching young people grow, and if there is one change parents mention more than any other, it is confidence. A child who once hid behind a parent's leg stands centre stage and speaks clearly to a room full of strangers. How does performing do that?",
      "It works through small, supported risks. Every time a young person tries something in front of others — a line, a song, a movement — and comes through it safely, they learn that they can. Confidence is built one brave moment at a time, and a good class offers dozens of them.",
      "It gives young people a voice, literally and figuratively. Performing teaches children to project, to be heard, to take up space and to trust that what they have to offer is worth an audience's attention. Those are life skills disguised as theatre skills.",
      "It builds belonging. Confidence grows fastest in a place where a child feels accepted. The friendships and the sense of being part of a company give young people a secure base from which to take creative risks.",
      "It teaches recovery. On stage, things go wrong, and children learn that a mistake is not the end of the world — you keep going, and the sky does not fall. That resilience quietly rewires how they approach challenges everywhere.",
      "The remarkable thing is how far this reaches beyond performance. Teachers and parents see it in classroom presentations, in new social situations, in the willingness to try. The stage is where it starts, but the confidence a young performer builds is theirs to keep for life."
    ] },
  { slug: "props-costumes-care", cat: "Behind the Scenes", date: "Craft", read: "3 min", author: "CentreStage",
    title: "Caring for Costumes and Props Like a Pro",
    img: "assets/blog/stage-14.jpg",
    excerpt: "Costumes and props are precious, shared and often irreplaceable. Treating them well is a mark of a true professional.",
    body: [
      "In a production, the costumes on your back and the props in your hands are often expensive, hand-made or hired, and almost always shared. How you treat them says a great deal about you as a company member, and looking after them well is part of the discipline of theatre.",
      "Know where everything lives. Every costume piece and prop has a place — a rail, a hook, a props table marked out so nothing goes missing. Return each item to its home the moment you are done, so it is ready for the next entrance and the next performer.",
      "Handle costumes with care. Do not eat or drink in costume unless you absolutely must, keep your hands clean, and report any damage straight away rather than hoping no one notices. Small repairs caught early save a costume; ignored, they become disasters on stage.",
      "Respect props as tools, not toys. Use them only as directed, never play with them backstage, and check before each show that yours are set and working. A missing or broken prop can derail a scene.",
      "Think of the people who come after you. Much of what you wear and carry will be worn and carried by others, in this production and in shows for years to come. At CentreStage, costumes and sets from past productions are hired out to schools and companies across the region. Treating them with care is how a whole community of theatre-makers keeps making magic."
    ] },
  { slug: "sight-reading-music", cat: "Craft", date: "Craft", read: "4 min", author: "CentreStage",
    title: "Sight-Reading Music: A Beginner's Path",
    img: "assets/blog/stage-13.jpg",
    excerpt: "Reading music can feel like a secret code. With steady practice, it becomes a language you think in.",
    body: [
      "The ability to look at a piece of music and sing or play it — sight-reading — is one of the most useful skills a musician or singer can develop. It can feel intimidating at first, like deciphering a code, but it is entirely learnable, and even a little skill makes rehearsals faster and less stressful. Here is a path in.",
      "Learn the basics of the language first. Understand the staff, note names, and how pitch moves up and down the page. You do not need years of theory to begin — just enough to recognise what you are looking at.",
      "Feel the rhythm before the pitch. Rhythm is often the harder part to read, so practise it separately. Clap or tap the rhythm of a line before you try to add the notes. Counting out loud builds a reliable internal pulse.",
      "Read intervals, not just individual notes. Rather than naming every note, train your eye and ear to recognise the distance between them — a step, a skip, a leap. Music moves in shapes, and reading shapes is far faster than reading letters.",
      "Practise a little, often. Sight-reading improves through frequent short sessions with new material. Sing or play through something unfamiliar every day, keeping going even when you stumble, because reading fluently means keeping the pulse rather than stopping to fix every note.",
      "Be patient and keep at it. Like reading words, reading music becomes automatic with time. Every rehearsal is a chance to practise, and the day it clicks — when the dots on the page simply become sound in your head — is a genuine milestone worth working toward."
    ] },
  { slug: "microphone-technique", cat: "Craft", date: "Craft", read: "3 min", author: "CentreStage",
    title: "Microphone Technique for the Musical Stage",
    img: "assets/blog/stage-25.jpg",
    excerpt: "A radio mic changes everything about how you sing and move. Good technique keeps you sounding your best.",
    body: [
      "In modern musical theatre, most performers wear radio microphones, and how you work with them makes a real difference to how you sound. A mic is a tool, and like any tool it rewards good technique. Here is what every performer should know.",
      "Trust the amplification. With a body mic, the sound system does the work of making you loud, so you do not need to push or force your voice to fill the room. Sing with your best, healthiest technique and let the mic carry it — over-singing into a mic sounds worse, not better.",
      "Mind your consistency. Because a body mic sits in a fixed place, turning your head sharply or looking down can change your sound. Keep your vocal delivery steady and be aware of where the mic is picking you up.",
      "Watch the loud moments. Very loud or sudden notes can distort or 'peak' through a mic. Skilled performers learn to shape their dynamics knowing the system is carrying them, trusting quieter singing to still be heard.",
      "Protect the equipment. Mics are delicate and expensive. Avoid touching the mic or its wire once fitted, keep it dry, be careful during quick changes, and never adjust it yourself — always ask your sound team.",
      "Above all, work with your operators. The people at the sound desk are mixing you live, balancing your voice against the band and the rest of the cast. Consistency from you makes their job possible, and together you create a sound that reaches every seat in the house."
    ] },
  { slug: "pathway-to-stage", cat: "Community", date: "Community", read: "4 min", author: "CentreStage",
    title: "From Class to Cast: Pathways at CentreStage",
    img: "assets/blog/stage-06.webp",
    excerpt: "There is no single way onto our stage. Whatever your age or experience, there is a next step waiting for you.",
    body: [
      "One of the questions we are asked most often is simply: how do I get involved? The answer at CentreStage is that there is no single path — there are many, designed so that whatever your age, experience or ambition, there is a way in and a way forward.",
      "For many, it begins in the classroom. Our Performing Arts Academy welcomes students from ages 4 to 18, grouped into Junior, Middle and Senior troupes, building skills in acting, singing and dance across the year. No experience is needed to start, and many of our weekly programs and junior productions require no audition at all.",
      "From class, students progress through productions of increasing scale, from gentle first shows for our youngest performers to ambitious, artistically demanding work for our seniors, often performed in professional venues like the Geelong Arts Centre.",
      "For adults and more experienced performers, our mainstage productions offer the chance to audition for large-scale musicals, while our talent agency represents performers working professionally across stage, screen and beyond.",
      "And performing is only one path. We offer roles for musicians in our orchestras, opportunities in creative and production teams, and volunteering, work experience and internships for people who want to build the shows from behind the scenes.",
      "Wherever you begin, one thing leads to another. A nervous first class can become a lead role; a backstage volunteer can become a stage manager; a student can become a mentor. The pathway is yours to shape — and the first step is always simply to get in touch."
    ] },
  { slug: "making-friends-theatre", cat: "Community", date: "Community", read: "3 min", author: "CentreStage",
    title: "Finding Your People: Community Through Theatre",
    img: "assets/blog/stage-10.avif",
    excerpt: "Ask alumni what they remember, and it is rarely a single performance. It is the people they found along the way.",
    body: [
      "Long after the applause fades and the details of a particular show grow hazy, one thing stays vivid for almost everyone who has been part of a production: the friendships. Theatre has a rare power to bring people together, and for many, the community they find is the most lasting gift of all.",
      "There is something about making something together that forges fast, deep bonds. The shared nerves, the late rehearsals, the triumphs and disasters, the private jokes that no one outside the company will ever understand — these create connections that ordinary life rarely offers.",
      "Theatre also welcomes people who have sometimes struggled to find their place elsewhere. On stage and off, difference is celebrated rather than smoothed away, and many performers describe walking into a rehearsal room and feeling, for the first time, that they had found their people.",
      "For young people especially, this belonging matters enormously. To be accepted, valued and needed by a group working toward a shared goal is a powerful thing at any age, and a formative one when you are still working out who you are.",
      "At CentreStage, community is not a by-product of what we do — it is the point. We build inclusive rooms where every person has a place, because we believe the friendships made here are as important as the shows we stage. Come for the theatre, and you may well find that the people are what you stay for."
    ] },
];

export const IMG = {
  heroTheatre: fill("35cad6_29eb8dbd9ee34f07b1cb29cd9bc81de9~mv2_d_2048_1365_s_2.jpg", 2000, 1333),
  frozenArt: fill("35cad6_73da71cc3aa646b5884eb6b2614e5eb5~mv2.png", 1600, 900),
  aboutGroup: fill("35cad6_dd683cd9ea004041b4a57aac77f4b5a7~mv2.jpg", 1200, 900),
  aboutStage: fill("35cad6_792ff69df28f4a63b3cbaafa561b7276~mv2.jpg", 1400, 1000),
  education: fill("35cad6_a767e0cb242746359b846997445396e8~mv2.jpg", 1200, 800),
  wellbeing: fill("734aa9588b494a28ab82ea14cd21e6af.jpg", 1200, 800),
};


// ── Education ────────────────────────────────────────────────
export const EDU_TROUPES = [
  { n: "Junior Troupe", age: "Ages 4–8", show: "Winnie the Pooh Kids · 2026", d: "A gentle first step into performance — storytelling, play, teamwork and stage confidence in a nurturing environment. No audition required.", color: "#2E6FB7" },
  { n: "Middle Troupe", age: "Ages 9–12", show: "Matilda Jr. · 2026", d: "Building real technique across acting, voice and dance, and the discipline of a full-scale production.", color: "#2E8B6B" },
  { n: "Senior Troupe", age: "Ages 12–18", show: "Hadestown: Teen Edition · 2026", d: "Ambitious, artistically demanding repertoire, plus a showcase performance at the Geelong Arts Centre.", color: "#8A4FA3" },
];
export const EDU_INCLUDED = [
  "Weekly classes across four terms, aligned with Victorian school terms",
  "Acting, singing and movement taught by industry professionals",
  "Theatre etiquette plus practical skills like costume and makeup",
  "The chance to perform in up to two large-scale musicals each year",
  "A personal performance portfolio and a network of theatre friends",
  "Clear pathways into mainstage productions and the talent agency",
];
export const EDU_FACTS = [
  { n: "Four terms", d: "Tuition aligned with Victorian school terms across the year." },
  { n: "200+ students", d: "CPAA has grown every year since launching in response to community demand." },
  { n: "Registered staff", d: "VIT-accredited teachers and professionals, under DET & DHHS-approved guidelines." },
  { n: "Two productions", d: "Students attend up to two large-scale CentreStage musicals a year." },
];
export const PRIVATE_LESSONS = [
  { t: "Private Singing", d: "One-to-one vocal tuition across pop, rock, jazz and classical, tailored to each student and every stage of their voice.", href: "/singing", color: "#E8472B" },
  { t: "Private Piano", d: "Individual piano lessons for beginners through to advanced players, at a pace that suits the student.", href: "/singing", color: "#2E6FB7" },
  { t: "Group Dance", d: "From hip hop to ballet, for all skill levels in a supportive, inclusive and energetic environment.", href: "/dance", color: "#C9902D" },
];
export const FAQ_EDU = [
  { q: "What ages do you teach?", a: "Our Performing Arts Academy welcomes young people aged 4 to 18, grouped into Junior, Middle and Senior troupes so every student is challenged at the right level." },
  { q: "Do students need to audition?", a: "No. Our weekly programs and Junior productions such as Winnie the Pooh Kids are open to all new and returning students, with no audition required." },
  { q: "Are your teachers qualified?", a: "Yes. Classes are led by registered staff, including VIT-accredited teachers and working industry professionals, under DET and DHHS-approved guidelines." },
  { q: "How do you keep children safe?", a: "We operate under the Victorian Child Safe Standards. All staff complete Child Safety Mandatory Training and hold Working with Children Checks, and we maintain a published Child Safety Plan." },
  { q: "When and where are classes held?", a: "Weekly classes run across four terms at our North Geelong and Vines Road studios. Enrolments for the 2026 program are open now, and places are limited." },
];

// ── Trust / reputation ───────────────────────────────────────
export const STATS = [
  { n: "70+", l: "Productions staged since 2010" },
  { n: "400+", l: "Young performers every year" },
  { n: "15+", l: "Years on Geelong stages since 2010" },
  { n: "2×", l: "Healthy Workplace Award winner" },
];
export const VALUES = [
  { k: "We Belong", d: "An inclusive community where every person — regardless of background, ability or experience — has a place on our stage.", color: "#2E6FB7" },
  { k: "We Create", d: "Ambitious, professional-quality theatre that fosters new talent and develops existing skills.", color: "#E8472B" },
  { k: "We Listen", d: "We consult our community and government forums, use benchmarks and surveys, and act on the feedback.", color: "#2E8B6B" },
  { k: "We Care", d: "A comprehensive commitment to the health, wellbeing and safety of our people, students and families.", color: "#C9902D" },
];
export const ACCREDITATIONS = [
  "Victorian Child Safe Standards", "VIT-registered educators", "DET & DHHS-approved guidelines",
  "Beyond Blue partner", "Arts Wellbeing Collective", "First Nations RAP", "MEAA member · Agency",
];
export const MILESTONES = [
  { y: "2010", t: "CentreStage is founded in Geelong. The company launches with A Chorus Line." },
  { y: "2012", t: "Singin' In The Rain lights up the stage; CentreStage hosts the MTGV Awards." },
  { y: "2018", t: "We Will Rock You and 42nd Street play to acclaim across the region." },
  { y: "2019", t: "The Sound of Music opens; the CPAA academy grows past 200 students." },
  { y: "2022", t: "Les Misérables returns to the mainstage in a landmark production." },
  { y: "2025", t: "First Reconciliation Action Plan and an updated Child Safety Plan are published." },
  { y: "2026", t: "New Fyansford headquarters; & Juliet opens at the Geelong Arts Centre." },
  { y: "2027", t: "Disney's Frozen: The Broadway Musical arrives at the Geelong Arts Centre." },
];
export const PARTNERS = [  { t: "Wadawurrung Traditional Owners", d: "Guiding our Reconciliation Action Plan on the Country we perform on." },
  { t: "Wathaurong Co-operative", d: "A partner in our First Nations commitments and community programs." },
  { t: "Beyond Blue", d: "A mental-health partner supporting the wellbeing of our people." },
  { t: "Arts Wellbeing Collective", d: "Best-practice wellbeing resources for performers and creatives." },
  { t: "Local schools & clubs", d: "Access programs bringing students and community groups into the theatre." },
];
export const FAQ_GENERAL = [
  { q: "Where is CentreStage based?", a: "We are proudly based in Geelong, Victoria. Our administration and agency are moving to Fyansford, while classes, rehearsals and productions continue at North Geelong and Vines Road." },
  { q: "How do I buy tickets?", a: "Most productions are ticketed through TryBooking, and our 2027 season of Frozen is booked exclusively through the Geelong Arts Centre. See What's On for links to every show." },
  { q: "Is CentreStage inclusive?", a: "Yes. We are owned and managed by a person with disability and the LGBTQIA+ community, our team includes First Nations members, and we run access programs that bring community groups into the theatre." },
  { q: "How can I get involved?", a: "We offer paid roles, orchestra positions, volunteering, work experience and internships for people of all experience levels. Contact us to register your interest." },
];

// ── Media & press ────────────────────────────────────────────
export const MEDIA = [
  { outlet: "Geelong Times", date: "June 2026", tag: "Community", accent: "#2E8B6B",
    title: "The show goes on for a worthy cause",
    blurb: "CentreStage's night of line dancing raised more than $30,000 for Cancer Council Victoria — part of over $1 million raised for the charity across 20 years of productions and community events.",
    href: "https://timesnewsgroup.com.au/geelongtimes/news/the-show-goes-on-for-a-worthy-cause/" },
  { outlet: "Geelong Waterfront Film", date: "Feb 2026", tag: "Industry", accent: "#2E6FB7",
    title: "Industry pioneers, modern visionaries: a masterclass in tech and talent",
    blurb: "Managing Director David Greenwood OAM featured on the REEL Film Festival panel as a Geelong leader in the performing arts, recognised for 15 years building pathways for young people and emerging artists.",
    href: "https://www.geelongwaterfrontfilm.com.au/industry-pioneers-modern-visionaries-a-masterclass-in-tech-and-talent-12-march-geelong/" },
  { outlet: "Geelong Independent", date: "Jan 2024", tag: "Recognition", accent: "#C9902D",
    title: "10 honoured with OAMs",
    blurb: "CentreStage founder David Greenwood was awarded the Medal of the Order of Australia for services to the performing arts and to business.",
    href: "https://geelongindy.com.au/news/26-01-2024/10-honoured-with-oams/" },
  { outlet: "Geelong Times", date: "Nov 2023", tag: "On Stage", accent: "#E8472B",
    title: "Priscilla lands local theatre company CentreStage",
    blurb: "Nominated for seven Music Theatre Guild of Victoria Awards including Production of the Year. More than 10,000 people saw the show, securing the second all-time box office record at the Geelong Arts Centre.",
    href: "https://timesnewsgroup.com.au/geelongtimes/news/priscilla-lands-local-theatre-company-centrestage/" },
  { outlet: "Surf Coast Times", date: "May 2023", tag: "Business", accent: "#2E6FB7",
    title: "CentreStage lauds awards for recent growth",
    blurb: "One of Geelong's most decorated businesses — Hall of Fame inductee (2021), CSR Award winner (2022), twice winner of the Health & Wellbeing Promoting Workplace Award, and Small Business of the Year (2020).",
    href: "https://timesnewsgroup.com.au/surfcoasttimes/gbea/centrestage-lauds-awards-for-recent-growth/" },
  { outlet: "Geelong Times", date: "June 2022", tag: "On Stage", accent: "#E8472B",
    title: "Les Misérables a success in Geelong",
    blurb: "Close to sold out every night at Costa Hall, with more than a thousand people attending each performance across the eight-day season — proof, said David Greenwood, that Geelong is ready for big theatre.",
    href: "https://timesnewsgroup.com.au/geelongtimes/news/les-miserables-a-success-in-geelong/" },
  { outlet: "Geelong Independent", date: "May 2022", tag: "Business", accent: "#2E6FB7",
    title: "2022 Geelong Business Excellence Awards launched",
    blurb: "Following its Hall of Fame induction, CentreStage's David Greenwood was invited to serve as a judge for the region's flagship business awards.",
    href: "https://geelongindy.com.au/news/06-05-2022/2022-geelong-business-excellence-awards-launched/" },
  { outlet: "Geelong Independent", date: "Jan 2022", tag: "Wellbeing", accent: "#2E8B6B",
    title: "Community wellbeing upfront at CentreStage",
    blurb: "A third consecutive Business Excellence Award for health and wellbeing, after CentreStage created a dedicated mental-wellbeing hub free for students and families.",
    href: "https://geelongindy.com.au/in-business/16-01-2022/community-wellbeing-upfront-at-centrestage/" },
  { outlet: "Geelong Independent", date: "Aug 2020", tag: "Community", accent: "#2E8B6B",
    title: "Staying positive in pandemic",
    blurb: "CentreStage teachers and performers created a health and wellbeing video project to support mental health through the COVID-19 lockdowns, reaching thousands across the community.",
    href: "https://geelongindy.com.au/news/28-08-2020/staying-positive-in-pandemic/" },
  { outlet: "Geelong Advertiser", date: "Feature", tag: "On Stage", accent: "#E8472B",
    title: "Geelong performers prepare for The Sound of Music at GPAC",
    blurb: "A feature on the young CentreStage cast preparing to bring one of the world's best-loved musicals to the Geelong Arts Centre stage.",
    href: "https://www.geelongadvertiser.com.au/entertainment/geelong-performers-prepare-for-upcoming-season-of-the-sound-of-music-at-gpac/news-story/e1be6cac01f08875eb36c2f1a57ca467" },
  { outlet: "Geelong Advertiser", date: "Feature", tag: "Growth", accent: "#C9902D",
    title: "Geelong amateur theatre company CentreStage dreams of new 500-seat home",
    blurb: "A feature on CentreStage's ambition to build a permanent, purpose-built performance home for the region's growing theatre community.",
    href: "https://www.geelongadvertiser.com.au/business/geelong-business/geelong-amateur-theatre-company-centrestage-dreams-of-new-500seat-home/news-story/4567402531f614bf75f76951c629a3c0" },
  { outlet: "Geelong Advertiser", date: "Feature", tag: "Community", accent: "#2E8B6B",
    title: "Our pick of the weekend's best in Geelong and surrounds",
    blurb: "CentreStage featured among the Geelong Advertiser's picks of the best things to see and do across the region.",
    href: "https://www.geelongadvertiser.com.au/entertainment/our-pick-of-the-weekends-best-in-geelong-and-surrounds/news-story/f8cfb5815f9d7e5d42544aa34e29df07" },
  { outlet: "Theatre People", date: "Feature", tag: "On Stage", accent: "#E8472B",
    title: "CentreStage brings Priscilla, Queen of the Desert to Geelong for the first time",
    blurb: "A feature on CentreStage staging the dazzling, big-hearted musical Priscilla, Queen of the Desert in Geelong for the very first time.",
    href: "https://ec2-3-25-10-151.ap-southeast-2.compute.amazonaws.com/centrestage-brings-priscilla-queen-of-the-desert-the-musical-to-geelong-for-the-first-time/" },
  { outlet: "Simon Parris: Man in Chair", date: "June 2014", tag: "Review", accent: "#7A4FB5",
    title: "CentreStage Geelong: Rent review",
    blurb: "Respected national theatre critic Simon Parris reviews CentreStage's staging of Rent — a landmark production for the company's growing reputation for ambitious, contemporary musical theatre.",
    href: "https://simonparrismaninchair.com/2014/06/28/centerstage-geelong-rent-review/" },
  { outlet: "Impulse Gamer", date: "Review", tag: "Review", accent: "#7A4FB5",
    title: "Come From Away review — Geelong Performing Arts Centre",
    blurb: "A review of CentreStage's production of the multi-award-winning musical Come From Away at the Geelong Arts Centre.",
    href: "https://www.impulsegamer.com/come-from-away-review-geelong-performing-arts-centre/" },
];

export const ACCOLADES = [
  { y: "2024", t: "Medal of the Order of Australia", d: "Awarded to Managing Director David Greenwood OAM for services to the performing arts and to business." },
  { y: "2025", t: "Youth Entrepreneur of the Year", d: "Geelong Chamber of Commerce Business Excellence Awards." },
  { y: "2023", t: "Seven MTGV Nominations", d: "Recognised by the Music Theatre Guild of Victoria for Priscilla, including Production of the Year." },
  { y: "2022", t: "Corporate Social Responsibility Award", d: "Geelong Business Excellence Awards." },
  { y: "2021", t: "Business Excellence Hall of Fame", d: "Inducted after a minimum of three award wins — a rare honour for a Geelong business." },
  { y: "2020", t: "Small Business of the Year", d: "Geelong Business Excellence Awards, sponsored by Bendigo Bank." },
  { y: "2019 & 2021", t: "Health & Wellbeing Promoting Workplace", d: "Twice winner at the Geelong Business Excellence Awards, sponsored by Barwon Health." },
  { y: "2019", t: "Edith Harrhy Award", d: "Victorian Music Theatre Guild." },
];

export const VIDEOS = [
  { kind: "youtube", id: "wNO1lqu9GEs", label: "CentreStage on screen" },
  { kind: "youtube", id: "QY6SI4XQwAk", label: "CentreStage on screen" },
  { kind: "youtube", id: "fnJWAu9frks", label: "CentreStage on screen" },
  { kind: "youtube", id: "u4kRWVkZ3C4", label: "CentreStage on screen" },
  { kind: "facebook", label: "Geelong Times · Award win",
    blurb: "Geelong Times congratulates CentreStage's David Greenwood on his 2025 Business Excellence Award win.",
    href: "https://www.facebook.com/GeelongTimes/videos/-congratulations-to-david-greenwood-from-centrestage-pty-ltd-for-winning-the-202/662078570101828/" },
  { kind: "facebook", label: "CentreStage · Season launch",
    blurb: "Georgia Barrass takes the stage at the Geelong Arts Centre season launch showcase.",
    href: "https://www.facebook.com/centrestageaus/videos/georgia-barrass-is-taking-the-stage-at-the-geelong-arts-centre-season-launch-sho/827361783474425/" },
  { kind: "facebook", label: "CentreStage · Pippin",
    blurb: "Oliver Turner performs as Pippin for CentreStage.",
    href: "https://www.facebook.com/centrestageaus/videos/oliver-turner-as-pippin-for-centrestage/1249857576657336/" },
  { kind: "instagram", label: "CentreStage · Instagram",
    blurb: "A moment from the CentreStage stage, shared on Instagram.",
    href: "https://www.instagram.com/p/DWSf685FVQM/" },
  { kind: "instagram", label: "CentreStage · Reel",
    blurb: "Behind the scenes with CentreStage, shared on Instagram.",
    href: "https://www.instagram.com/reel/DG6o4PBh8sk/" },
];

export const PRESS_STATS = [
  { n: "$1M+", l: "Raised for Cancer Council Victoria over 20 years" },
  { n: "10,000+", l: "Witnessed Les Misérables at Costa Hall" },
  { n: "Hall of Fame", l: "Geelong Business Excellence Awards recipient" },
  { n: "2×", l: "Health & Wellbeing Promoting Workplace Award winner" },
];



// ── Health: policies & attachments ───────────────────────────
const _pb = "https://www.centrestage.org.au/_files/ugd/35cad6_";
export const POLICIES = [
  { t: "We Are People Plan", kind: "PDF", href: _pb + "6cc8b5faad5549c6827b2e30c15f1096.pdf" },
  { t: "Child Safety Plan", kind: "PDF", href: "CentreStage-Policies.html#child-safety" },
  { t: "First Nations RAP", kind: "PDF", href: "CentreStage-Policies.html#first-nations-rap" },
  { t: "Disability Plan", kind: "PDF", href: "CentreStage-Policies.html#disability-access" },
  { t: "Anaphylaxis Guide", kind: "PDF", href: "CentreStage-Policies.html#anaphylaxis" },
  { t: "Health & Wellbeing Pledge", kind: "PDF", href: "CentreStage-Policies.html#wellbeing-pledge" },
  { t: "Cultural Framework Policy", kind: "PDF", href: _pb + "c00e533357184223987c70347b0f1eee.pdf" },
  { t: "Incident Report Form", kind: "Form", href: "CentreStage-Policies.html#incident-reporting" },
];


// ── Health: policy library (brand-authored) ──────────────────
export const POLICY_LIBRARY = [
  { t: "Code of Conduct", d: "The behaviours we expect of every staff member, volunteer, performer and family.", href: "CentreStage-Policies.html#code-of-conduct" },
  { t: "Working with Children Policy", d: "Screening, supervision and mandatory training for everyone who works with young people.", href: "CentreStage-Policies.html#working-with-children" },
  { t: "Anti-Bullying & Harassment Policy", d: "A zero-tolerance approach to bullying, discrimination or harm of any kind.", href: "CentreStage-Policies.html#anti-bullying" },
  { t: "Diversity & Inclusion Policy", d: "How we make our stages, classes and workplace welcoming to all people.", href: "CentreStage-Policies.html#diversity-inclusion" },
  { t: "LGBTQIA+ Inclusion Policy", d: "Our commitment to a safe, affirming space for LGBTQIA+ artists and students.", href: "CentreStage-Policies.html#lgbtqia-inclusion" },
  { t: "Disability Access & Adjustment Policy", d: "Reasonable adjustments so every performer can take part fully.", href: "CentreStage-Policies.html#disability-access" },
  { t: "Complaints & Grievance Procedure", d: "Clear, fair steps for raising and resolving concerns.", href: "CentreStage-Policies.html#complaints" },
  { t: "Privacy & Data Protection Policy", d: "How we collect, store and protect the information you share with us.", href: "CentreStage-Policies.html#privacy" },
  { t: "Social Media & Communication Policy", d: "Approved, transparent ways we connect with young people and families.", href: "CentreStage-Policies.html#social-media" },
  { t: "Photography & Image Consent Policy", d: "How performance images are captured, used and consented to.", href: "CentreStage-Policies.html#photography-consent" },
  { t: "Emergency Management Plan", d: "Practical steps for crisis situations, evacuations and medical events.", href: "CentreStage-Policies.html#emergency-management" },
  { t: "First Aid & Injury Response Policy", d: "Trained first-aiders and a clear response for injuries at every venue.", href: "CentreStage-Policies.html#first-aid" },
  { t: "Rehearsal & Performance Safety Policy", d: "Risk assessments and safe practice on stage, backstage and in the pit.", href: "CentreStage-Policies.html#rehearsal-safety" },
  { t: "Costume, Set & Props Safety Policy", d: "Safe construction, handling and storage of production elements.", href: "CentreStage-Policies.html#props-safety" },
  { t: "Excursion & Off-Site Activity Policy", d: "Supervision and duty-of-care for performances and events away from base.", href: "CentreStage-Policies.html#excursion" },
  { t: "Volunteer Handbook", d: "Everything our volunteers need to feel supported, valued and safe.", href: "CentreStage-Policies.html#volunteer-handbook" },
  { t: "Mental Health First Aid Policy", d: "Recognising and responding to mental-health needs across our community.", href: "CentreStage-Policies.html#mental-health-first-aid" },
  { t: "Injury Prevention & Warm-Up Guidelines", d: "Best-practice warm-ups and load management for dancers and singers.", href: "CentreStage-Policies.html#injury-prevention" },
  { t: "Sun Smart & Hydration Policy", d: "Keeping performers safe during outdoor and summer programming.", href: "CentreStage-Policies.html#sun-smart" },
  { t: "Vocal & Hearing Health Guidelines", d: "Protecting the voices and hearing of performers and musicians.", href: "CentreStage-Policies.html#vocal-hearing" },
];
