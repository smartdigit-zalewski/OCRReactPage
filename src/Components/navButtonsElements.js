export const navButtonsElements = [
    {
        id: 1,
        buttonName: 'ocr polska',
        hasChildren: true,
        childrenButtons: [
            {
                id: 1.1,
                buttonName: 'o nas'
            },
            {
                id: 1.2,
                buttonName: 'historia'
            },
            {
                id: 1.3,
                buttonName: 'zasady'
            },
            {
                id: 1.4,
                buttonName: 'team ocr polska'
            },
            {
                id: 1.5,
                buttonName: 'grupy treningowe'
            },
            {
                id: 1.6,
                buttonName: 'organizatorzy'
            }
        ]

    },
    {
        id: 2,
        buttonName: 'kalendarz zawodów',
        hasChildren: false,

    },
    {
        id:3,
        buttonName: 'ranking',
        hasChildren: false
    },
    {
        id:4,
        buttonName: 'turnieje',
        hasChildren: true,
        childrenButtons: [
            {
                id:4.1,
                buttonName: 'liga ocr'
            },
            {
                id:4.2,
                buttonName: 'mistrzostwa polski'
            }
        ]
    },
    {
        id:5,
        buttonName: 'aktualności',
        hasChildren: false
    },
    {
        id:6,
        buttonName: 'sklep',
        hasChildren: false
    },
    {
        id:7,
        buttonName: 'kontakt',
        hasChildren: false
    },
    {
        id:8,
        buttonName: "konto",
        hasChildren: false
    }


]
