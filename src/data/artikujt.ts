export type Artikull = {
  id: string;
  titull: string;
  pershkrim: string;
  cmimi: number; // në euro
  kohezgjatja: number; // në minuta
};

export const artikujt: Artikull[] = [
  {
    id: "a1",
    titull: "Pastrim i klimës",
    pershkrim:
      "Pastrim i plotë i njësisë së brendshme dhe filtrave, me dezinfektim kundër baktereve dhe erërave.",
    cmimi: 35,
    kohezgjatja: 60,
  },
  {
    id: "a2",
    titull: "Montim i klimës së re",
    pershkrim:
      "Montim i njësisë së brendshme dhe të jashtme, lidhja e tubave dhe testimi i funksionimit.",
    cmimi: 120,
    kohezgjatja: 180,
  },
  {
    id: "a3",
    titull: "Mbushje me gaz",
    pershkrim:
      "Kontroll i presionit dhe mbushje me gaz R32 ose R410A sipas nevojës së pajisjes.",
    cmimi: 60,
    kohezgjatja: 45,
  },
  {
    id: "a4",
    titull: "Diagnostikim defekti",
    pershkrim:
      "Gjetja e shkakut kur klima nuk ftoh, nuk ngroh, rrjedh ujë ose shfaq kod gabimi.",
    cmimi: 25,
    kohezgjatja: 30,
  },
  {
    id: "a5",
    titull: "Servis vjetor",
    pershkrim:
      "Kontroll i përgjithshëm para verës: pastrim, kontroll i gazit, i kondensatorit dhe i lidhjeve elektrike.",
    cmimi: 50,
    kohezgjatja: 90,
  },
  {
    id: "a6",
    titull: "Çmontim dhe zhvendosje",
    pershkrim:
      "Çmontim i sigurt i klimës pa humbje gazi dhe montim në lokacionin e ri.",
    cmimi: 100,
    kohezgjatja: 150,
  },
];
