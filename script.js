// â”€â”€ DonnÃ©es de la playlist â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Pour ajouter un morceau : ajoute un objet { artist, title, url } ici.
// ytSearch(...) gÃ©nÃ¨re un lien de recherche YouTube (utilisÃ© quand l'ID
// exact de la vidÃ©o officielle n'a pas pu Ãªtre vÃ©rifiÃ© Ã  100%).
function ytSearch(query) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
}

const TRACKS = [
  // â€” VIOLENT VIRA â€”
  { artist: "VIOLENT VIRA", title: "Burn Me With A Bible", url: "https://www.youtube.com/watch?v=gsCoGGEJsK0&list=PLKr9EMzFcgtM&index=1" },
  { artist: "VIOLENT VIRA", title: "I'll Save Myself This Time", url: ytSearch("VIOLENT VIRA I'll Save Myself This Time") },
  { artist: "VIOLENT VIRA", title: "You're Not Gone, You're Just Dead!", url: ytSearch("VIOLENT VIRA You're Not Gone You're Just Dead") },
  { artist: "VIOLENT VIRA", title: "I Don't Care", url: ytSearch("VIOLENT VIRA I Don't Care official") },
  { artist: "VIOLENT VIRA", title: "Blood On The Sheets...", url: ytSearch("VIOLENT VIRA blood on the sheets") },
  { artist: "VIOLENT VIRA", title: "Lolita", url: ytSearch("VIOLENT VIRA Lolita") },
  { artist: "VIOLENT VIRA", title: "S.E.X. Narcissist", url: ytSearch("VIOLENT VIRA S.E.X. Narcissist official visualizer") },
  { artist: "VIOLENT VIRA", title: "Saccharine", url: ytSearch("VIOLENT VIRA Saccharine official video") },
  { artist: "VIOLENT VIRA", title: "Tarantula Girl", url: ytSearch("VIOLENT VIRA Tarantula Girl") },
  { artist: "VIOLENT VIRA", title: "Common Decency", url: ytSearch("VIOLENT VIRA Common Decency official visualizer") },
  { artist: "VIOLENT VIRA", title: "False Reaction", url: ytSearch("VIOLENT VIRA False Reaction official music video") },
  { artist: "VIOLENT VIRA", title: "God Complex", url: ytSearch("VIOLENT VIRA God Complex") },
  { artist: "VIOLENT VIRA", title: "Missing Posters", url: ytSearch("VIOLENT VIRA Missing Posters official visualizer") },

  // â€” Ally Nicholas â€”
  { artist: "Ally Nicholas", title: "Killing", url: ytSearch("Ally Nicholas Killing") },
  { artist: "Ally Nicholas", title: "Bored", url: ytSearch("Ally Nicholas Bored official music video") },
  { artist: "Ally Nicholas", title: "Bullets", url: ytSearch("Ally Nicholas Bullets") },
  { artist: "Ally Nicholas", title: "Seventeen", url: ytSearch("Ally Nicholas Seventeen official music video") },
  { artist: "Ally Nicholas", title: "Fall Into", url: ytSearch("Ally Nicholas Fall Into") },
  { artist: "Ally Nicholas", title: "Whisper", url: ytSearch("Ally Nicholas Whisper official music video") },
  { artist: "Ally Nicholas", title: "Right", url: ytSearch("Ally Nicholas Right official audio") },

  // â€” Amira Elfeky â€”
  { artist: "Amira Elfeky", title: "Will You Love Me When I'm Dead", url: ytSearch("Amira Elfeky Will You Love Me When I'm Dead official audio") },
  { artist: "Amira Elfeky", title: "Crossed The Line", url: ytSearch("Amira Elfeky Crossed The Line visualizer") },
  { artist: "Amira Elfeky", title: "Take Me Under", url: ytSearch("Amira Elfeky Take Me Under visualizer") },

  // â€” Skillet â€”
  { artist: "Skillet", title: "Monster", url: ytSearch("Skillet Monster official video") },
  { artist: "Skillet", title: "Whispers In The Dark", url: ytSearch("Skillet Whispers In The Dark official") },

  // â€” DragonForce â€”
  { artist: "DragonForce", title: "Fury Of The Storm (Live)", url: ytSearch("DragonForce Fury Of The Storm live") },
  { artist: "DragonForce", title: "Through the Fire and Flames", url: ytSearch("DragonForce Through the Fire and Flames official video") },
  { artist: "DragonForce", title: "Symphony of the Night", url: ytSearch("DragonForce Symphony of the Night official") },

  // â€” SABATON â€”
  { artist: "SABATON", title: "Rorke's Drift", url: ytSearch("SABATON Rorke's Drift official lyric video") },
  { artist: "SABATON", title: "Night Witches", url: "https://www.youtube.com/watch?v=C7NSUFDHFgg" },
  { artist: "SABATON", title: "Stormtroopers", url: ytSearch("SABATON Stormtroopers official lyric video") },

  // â€” Cepheid â€”
  { artist: "Cepheid", title: "DÃ©esse (feat. Nonon)", url: ytSearch("Cepheid DÃ©esse feat Nonon") },
  { artist: "Cepheid", title: "Gaia (feat. Nonon & Sithu Aye)", url: ytSearch("Cepheid Gaia feat Nonon Sithu Aye") },
  { artist: "Cepheid", title: "Messenger in Flames (feat. Un3h)", url: ytSearch("Cepheid Messenger in Flames feat Un3h") },
  { artist: "Cepheid", title: "Chronos (feat. Un3h)", url: ytSearch("Cepheid Chronos feat Un3h original") },

  // â€” ATAVISTIA â€”
  { artist: "ATAVISTIA", title: "Beyond the Meadows of Fire (Re-recorded)", url: ytSearch("ATAVISTIA Beyond the Meadows of Fire re-recorded") },
  { artist: "ATAVISTIA", title: "Cosmic Warfare", url: ytSearch("ATAVISTIA Cosmic Warfare official music video") },
  { artist: "ATAVISTIA", title: "Through The Hollow Raven's Eyes", url: ytSearch("ATAVISTIA Through The Hollow Raven's Eyes lyric video") },

  // â€” Unlucky Morpheus â€”
  { artist: "Unlucky Morpheus", title: "Wer ist Faust?", url: ytSearch("Unlucky Morpheus Wer ist Faust") },
  { artist: "Unlucky Morpheus", title: "Black Pentagram", url: ytSearch("Unlucky Morpheus Black Pentagram") },
  { artist: "Unlucky Morpheus", title: "Angreifer", url: ytSearch("Unlucky Morpheus Angreifer") },
  { artist: "Unlucky Morpheus", title: "Knight of Sword", url: ytSearch("Unlucky Morpheus Knight of Sword official MV") },
  { artist: "Unlucky Morpheus", title: "La voix du sang", url: ytSearch("Unlucky Morpheus La voix du sang") },
  { artist: "Unlucky Morpheus", title: "Phantom Blood", url: ytSearch("Unlucky Morpheus Phantom Blood") },

  // â€” Foreground Eclipse â€”
  { artist: "Foreground Eclipse", title: "Noble", url: ytSearch("Foreground Eclipse Noble Higurashi") },
  { artist: "Foreground Eclipse", title: "Last Liar Standing", url: ytSearch("Foreground Eclipse Last Liar Standing") },
  { artist: "Foreground Eclipse", title: "Truths, Ironies, The Secret Lyrics", url: ytSearch("Foreground Eclipse Truths Ironies The Secret Lyrics") },

  // â€” Release Hallucination â€”
  { artist: "Release Hallucination", title: "Dystopia", url: ytSearch("Release Hallucination Dystopia") },
  { artist: "Release Hallucination", title: "Ariadne", url: ytSearch("Release Hallucination Ariadne") },
  { artist: "Release Hallucination", title: "Chronostasis", url: ytSearch("Release Hallucination Chronostasis") },
  { artist: "Release Hallucination", title: "A Passing Point", url: ytSearch("Release Hallucination A Passing Point") },
  { artist: "Release Hallucination", title: "Cure", url: ytSearch("Release Hallucination Cure") },
  { artist: "Release Hallucination", title: "Deus Ex Machina", url: ytSearch("Release Hallucination Deus Ex Machina") },
  { artist: "Release Hallucination", title: "Vanitas", url: ytSearch("Release Hallucination Vanitas official lyric video") },
  { artist: "Release Hallucination", title: "Asteria", url: ytSearch("Release Hallucination Asteria official lyric video") },
  { artist: "Release Hallucination", title: "Fate", url: ytSearch("Release Hallucination Fate") },
  { artist: "Release Hallucination", title: "I.F.", url: ytSearch("Release Hallucination I.F.") },
  { artist: "Release Hallucination", title: "Lovers in Abyss", url: ytSearch("Release Hallucination Lovers in Abyss") },
  { artist: "Release Hallucination", title: "Keep the Memories Brilliant", url: ytSearch("Release Hallucination Keep the Memories Brilliant") },
  { artist: "Release Hallucination", title: "Melancholia", url: ytSearch("Release Hallucination Melancholia") },
  { artist: "Release Hallucination", title: "Sisters", url: ytSearch("Release Hallucination Sisters official lyric video") },
  { artist: "Release Hallucination", title: "Memento Mori", url: ytSearch("Release Hallucination Memento Mori") },
  { artist: "Release Hallucination", title: "Alone in the Chaos", url: ytSearch("Release Hallucination Alone in the Chaos") },
  { artist: "Release Hallucination", title: "The Children for Justice", url: ytSearch("Release Hallucination The Children for Justice") },

  // â€” Imperial Circus Dead Decadence â€”
  { artist: "Imperial Circus Dead Decadence", title: "å¸çŽ‹BRING+çž³EYES=æ­» DEATH+çŽ‹INVITE", url: ytSearch("Imperial Circus Dead Decadence å¸çŽ‹BRING çž³EYES æ­» DEATH çŽ‹INVITE") },
  { artist: "Imperial Circus Dead Decadence", title: "åŒ£", url: ytSearch("Imperial Circus Dead Decadence åŒ£") },

  // â€” Bad Omens â€”
  { artist: "Bad Omens", title: "The Death of Peace of Mind", url: "https://www.youtube.com/watch?v=ouW_RCAI0sg" },

  // â€” UNDEAD CORPORATION â€”
  { artist: "UNDEAD CORPORATION", title: "Embraced by the Flame (English ver.)", url: ytSearch("UNDEAD CORPORATION Embraced by the Flame English ver") },
  { artist: "UNDEAD CORPORATION", title: "The Empress", url: ytSearch("UNDEAD CORPORATION The Empress Touhou") },
  { artist: "UNDEAD CORPORATION", title: "MEGALOMANIA", url: ytSearch("UNDEAD CORPORATION MEGALOMANIA Black Symphonic Metal") },

  // â€” Serenity â€”
  { artist: "Serenity", title: "United", url: "https://www.youtube.com/watch?v=lGB6axzZpRQ" },
  { artist: "Serenity", title: "Lionheart", url: "https://www.youtube.com/watch?v=_2kVhQpfD60" },

  // â€” Myrath â€”
  { artist: "Myrath", title: "Endure the Silence", url: "https://www.youtube.com/watch?v=9m4JLwiCtQ4" },

  // â€” Visions of Atlantis â€”
  { artist: "Visions of Atlantis", title: "Melancholy Angel", url: "https://www.youtube.com/watch?v=9RH8rVt4Z8k" },
  { artist: "Visions of Atlantis", title: "Legion Of The Seas", url: ytSearch("Visions of Atlantis Legion Of The Seas official video Napalm Records") },
  { artist: "Visions of Atlantis", title: "A Journey To Remember", url: ytSearch("Visions of Atlantis A Journey To Remember official video Napalm Records") },
  { artist: "Visions of Atlantis", title: "The Deep & The Dark", url: ytSearch("Visions of Atlantis The Deep The Dark official video Napalm Records") },

  // â€” XANDRIA â€”
  { artist: "XANDRIA", title: "Nightfall", url: ytSearch("XANDRIA Nightfall official video Napalm Records") },
  { artist: "XANDRIA", title: "Call Of Destiny", url: ytSearch("XANDRIA Call Of Destiny official video Napalm Records") }
];
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const sortBtn = document.getElementById('sortBtn');
const sortLabel = document.getElementById('sortLabel');
const emptyState = document.getElementById('emptyState');
const countLine = document.getElementById('countLine');

let sortDir = null; // null = ordre d'origine, 'asc', 'desc'

const ytIcon = '<svg viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5c-1 .2-1.8 1-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8c.2 1 1 1.8 2 2 1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5c1-.2 1.8-1 2-2 .4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/></svg>';

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  let list = TRACKS.map((t, i) => ({ ...t, originalIndex: i }));

  if (query) {
    list = list.filter(t =>
      t.artist.toLowerCase().includes(query) ||
      t.title.toLowerCase().includes(query)
    );
  }

  if (sortDir === 'asc') {
    list.sort((a, b) => a.artist.localeCompare(b.artist) || a.title.localeCompare(b.title));
  } else if (sortDir === 'desc') {
    list.sort((a, b) => b.artist.localeCompare(a.artist) || b.title.localeCompare(a.title));
  }

  countLine.textContent = list.length === TRACKS.length
    ? `${TRACKS.length} morceaux`
    : `${list.length} / ${TRACKS.length} morceaux`;

  if (list.length === 0) {
    tableBody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  tableBody.innerHTML = list.map((t, i) => `
    <tr>
      <td class="col-num">${i + 1}</td>
      <td class="col-artist">${escapeHtml(t.artist)}</td>
      <td class="col-title">${escapeHtml(t.title)}</td>
      <td class="col-action">
        <a class="yt-link" href="${t.url}" target="_blank" rel="noopener noreferrer">
          ${ytIcon}<span>YouTube</span>
        </a>
      </td>
    </tr>
  `).join('');
}

searchInput.addEventListener('input', render);

sortBtn.addEventListener('click', () => {
  if (sortDir === null || sortDir === 'desc') {
    sortDir = 'asc';
    sortLabel.textContent = 'Trier Z â†’ A';
    sortBtn.dataset.dir = 'asc';
  } else {
    sortDir = 'desc';
    sortLabel.textContent = 'Trier A â†’ Z';
    sortBtn.dataset.dir = 'desc';
  }
  render();
});

render();
