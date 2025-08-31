import React from 'react'

const AgentHeroHoverPage = () => {
   const teamData = [
  { role: "Account executive", name: "SOPHIE AUGER", image: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" },
  { role: "Business Lead", name: "CARL GODBOUT", image: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg" },
  { role: "Copywriter", name: "CAMILLE BRIÈRE", image: "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg" },
  { role: "Account Manager", name: "CLAIRE ROBERT", image: "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg" },
  { role: "Account Supervisor", name: "ARNAUD DOYON", image: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg" },
  { role: "Art Director", name: "MÉLANIE LAVIOLLETTE", image: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg" },
  { role: "Director of Strategy", name: "MICHÈLE RIENDEAU", image: "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg" },
  { role: "Account Director", name: "MEGGIE LAVOIE", image: "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg" },
  { role: "Art Director", name: "ALEX SAUVAGEAU", image: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg" },
  { role: "Account Manager", name: "PHILIPPE PERREAULT", image: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg" },
  { role: "Strategist", name: "BÉATRICE ROUSSIN", image: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg" },
  { role: "Account Manager", name: "LOU GRAVEL-JEAN", image: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" },
  { role: "Planificateur stratégique principal", name: "OLIVIER ROEYAERTS", image: "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg" },
  { role: "Account Coordinator", name: "LAWRENCE MEUNIER", image: "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg" },
  { role: "Account Director", name: "ISABELLE BEAUCHEMIN", image: "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg" },
  { role: "Graphic Designer", name: "OLIVIER DUCLOS", image: "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg" },
  { role: "Associate Creative Director", name: "JOËL LETARTE", image: "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg" },
  { role: "Creative Director", name: "CHANTAL GOBEIL", image: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg" },
  { role: "Conseillère production et opération", name: "MYLÈNE ST-ARNEAULT", image: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg" },
  { role: "Associate Creative Director", name: "SÉBASTIEN ROY", image: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg" }
];


    return (
        <div>
            {teamData.map((elem, index) => (
                <div key={index} className='AgentHeroHoverPage'>
                    <h5>{elem.role}</h5>
                    <h1>{elem.name}</h1>
                    <img src={elem.image} alt={elem.name} />
                </div>
            ))}
        </div>
    )
}

export default AgentHeroHoverPage
